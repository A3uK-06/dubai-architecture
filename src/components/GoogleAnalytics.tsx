"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const IGNORE_STORAGE_KEY = "ignore_analytics";

export default function GoogleAnalytics() {
  const [isExcluded, setIsExcluded] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const params = new URLSearchParams(window.location.search);

      // Handle owner exclusion flag from query parameter
      if (params.get("ignore_me") === "true" || params.get("admin") === "true") {
        localStorage.setItem(IGNORE_STORAGE_KEY, "true");
        setIsExcluded(true);
        setNotification("Owner Mode Active: Analytics and screen recordings are DISABLED for your browser.");
        setTimeout(() => setNotification(null), 5000);
        return;
      }

      // Handle re-enabling tracking if requested
      if (params.get("ignore_me") === "false" || params.get("track_me") === "true") {
        localStorage.removeItem(IGNORE_STORAGE_KEY);
        setIsExcluded(false);
        setNotification("Analytics tracking RE-ENABLED for this session.");
        setTimeout(() => setNotification(null), 4000);
        return;
      }

      // Read current state from localStorage
      const currentlyIgnored = localStorage.getItem(IGNORE_STORAGE_KEY) === "true";
      setIsExcluded(currentlyIgnored);
    } catch (err) {
      console.warn("Analytics exclusion check error:", err);
    }
  }, []);

  // If user is the site owner/admin, suppress tracking entirely
  if (isExcluded) {
    return (
      <>
        {notification && (
          <div className="fixed bottom-4 left-4 z-50 px-4 py-2 rounded-xl bg-amber-500 text-zinc-950 text-xs font-bold shadow-2xl animate-fade-in border border-amber-300">
            🛡️ {notification}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {notification && (
        <div className="fixed bottom-4 left-4 z-50 px-4 py-2 rounded-xl bg-zinc-800 text-zinc-100 text-xs font-semibold shadow-2xl border border-zinc-700">
          ℹ️ {notification}
        </div>
      )}

      {/* Google Analytics 4 (only loads if NEXT_PUBLIC_GA_ID is provided by owner) */}
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
