"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import Script from "next/script";
import { isOwnerExcluded, setOwnerExclusion } from "@/lib/ownerExclusion";

const RAW_GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim();
const RAW_GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim();

// Support both GTM container (GTM-XXXXXX) and direct GA4 stream (G-XXXXXX)
const GTM_ID = RAW_GTM_ID || (RAW_GA_ID?.startsWith("GTM-") ? RAW_GA_ID : undefined);
const GA_ID = RAW_GA_ID?.startsWith("G-") ? RAW_GA_ID : undefined;

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID?.trim();

function subscribeAnalytics(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("dubai-ghost-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("dubai-ghost-change", callback);
  };
}

export default function GoogleAnalytics() {
  const excluded = useSyncExternalStore(
    subscribeAnalytics,
    () => isOwnerExcluded(),
    () => false
  );
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const params = new URLSearchParams(window.location.search);

      // Check if entering via owner exclusion flags
      if (
        params.get("ignore_me") === "true" ||
        params.get("admin") === "true" ||
        params.get("ghost") === "true" ||
        params.get("ignore_stats") === "true"
      ) {
        setOwnerExclusion(true);
        window.dispatchEvent(new Event("dubai-ghost-change"));
        setTimeout(() => setNotification("🛡️ Ghost Mode: Ваш браузер скрыт от аналитики. VPN не влияет."), 0);
        setTimeout(() => setNotification(null), 5000);
      } else if (params.get("ignore_me") === "false" || params.get("track_me") === "true") {
        setOwnerExclusion(false);
        window.dispatchEvent(new Event("dubai-ghost-change"));
        setTimeout(() => setNotification("👁️ Отслеживание включено для тестирования."), 0);
        setTimeout(() => setNotification(null), 4000);
      }
    } catch (err) {
      console.warn("Analytics exclusion error:", err);
    }
  }, []);

  // When owner is excluded, apply Google's official engine-level killswitch
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (excluded) {
      if (GA_ID) {
        (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = true;
      }
      if (GTM_ID) {
        (window as unknown as Record<string, boolean>)[`ga-disable-${GTM_ID}`] = true;
      }
      console.info("🛡️ [Dubai Architecture] Ghost mode active: Analytics disabled.");
    }
  }, [excluded]);

  // If excluded, render nothing — complete blackout
  if (excluded) {
    return (
      <>
        {notification && (
          <div className="fixed bottom-4 right-4 z-50 p-4 rounded-xl bg-amber-500 text-zinc-950 text-xs font-bold shadow-2xl border border-amber-600 animate-bounce">
            {notification}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {notification && (
        <div className="fixed bottom-4 right-4 z-50 p-4 rounded-xl bg-amber-500 text-zinc-950 text-xs font-bold shadow-2xl border border-amber-600 animate-bounce">
          {notification}
        </div>
      )}

      {/* 1. Google Tag Manager (GTM) */}
      {GTM_ID && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'dataLayer','${GTM_ID}');`,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="gtm-noscript"
            />
          </noscript>
        </>
      )}

      {/* 2. Direct GA4 (Fallback if direct G-ID is used without GTM) */}
      {!GTM_ID && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {/* 3. Microsoft Clarity */}
      {CLARITY_ID && (
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");`,
          }}
        />
      )}
    </>
  );
}
