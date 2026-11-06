"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import { isOwnerExcluded, setOwnerExclusion } from "@/lib/ownerExclusion";

const RAW_GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim();
const RAW_GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim();

// Support both GTM container (GTM-XXXXXX) and direct GA4 stream (G-XXXXXX)
const GTM_ID = RAW_GTM_ID || (RAW_GA_ID?.startsWith("GTM-") ? RAW_GA_ID : undefined);
const GA_ID = RAW_GA_ID?.startsWith("G-") ? RAW_GA_ID : undefined;

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID?.trim();

export default function GoogleAnalytics() {
  const [excluded, setExcluded] = useState(false);
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
        setExcluded(true);
        setNotification("🛡️ Ghost Mode: Ваш браузер скрыт от аналитики. VPN не влияет.");
        setTimeout(() => setNotification(null), 5000);
      } else if (params.get("ignore_me") === "false" || params.get("track_me") === "true") {
        setOwnerExclusion(false);
        setExcluded(false);
        setNotification("👁️ Отслеживание включено для тестирования.");
        setTimeout(() => setNotification(null), 4000);
      } else {
        const isCurrentlyExcluded = isOwnerExcluded();
        setExcluded(isCurrentlyExcluded);
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
    }
  }, [excluded]);

  // If user is the site owner/admin, suppress tracking tags completely
  if (excluded) {
    return (
      <>
        {notification && (
          <div className="fixed bottom-4 left-4 z-50 px-4 py-2.5 rounded-xl bg-amber-500 text-zinc-950 text-xs font-bold shadow-2xl animate-fade-in border border-amber-300 flex items-center gap-2">
            <span>🛡️</span>
            <span>{notification}</span>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {notification && (
        <div className="fixed bottom-4 left-4 z-50 px-4 py-2.5 rounded-xl bg-zinc-800 text-zinc-100 text-xs font-semibold shadow-2xl border border-zinc-700">
          {notification}
        </div>
      )}

      {/* Google Tag (GTM Container) */}
      {GTM_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          />
          <Script
            id="google-tag"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              `,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      )}

      {/* Google Analytics 4 (Direct GA4 stream) */}
      {GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true
                });
              `,
            }}
          />
        </>
      )}

      {/* Microsoft Clarity (only loads if NEXT_PUBLIC_CLARITY_ID is provided by owner) */}
      {CLARITY_ID && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `,
          }}
        />
      )}
    </>
  );
}
