"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BUILDINGS } from "@/data/buildings";

export default function NotFoundClient() {
  const [redirectingTo, setRedirectingTo] = useState<string | null>(null);
  const [redirectName, setRedirectName] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const path = window.location.pathname.toLowerCase();

    // Check against legacy patterns or building names
    for (const building of BUILDINGS) {
      if (
        (building.legacyId && path.includes(building.legacyId.toLowerCase())) ||
        path.includes(building.slug) ||
        path.includes(building.id)
      ) {
        setRedirectingTo(`/buildings/${building.slug}/`);
        setRedirectName(building.name);
        window.location.replace(`/buildings/${building.slug}/`);
        return;
      }
    }

    // Additional historical keyword matches
    if (path.includes("khalifa") || path.includes("burj-dubai")) {
      setRedirectingTo("/buildings/burj-khalifa/");
      setRedirectName("Burj Khalifa");
      window.location.replace("/buildings/burj-khalifa/");
      return;
    }
    if (path.includes("emirates")) {
      setRedirectingTo("/buildings/emirates-towers/");
      setRedirectName("Emirates Towers");
      window.location.replace("/buildings/emirates-towers/");
      return;
    }
    if (path.includes("arab") || path.includes("jumeirah-hotel")) {
      setRedirectingTo("/buildings/burj-al-arab/");
      setRedirectName("Burj Al Arab");
      window.location.replace("/buildings/burj-al-arab/");
      return;
    }

    // Start auto countdown to homepage/catalog
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.replace("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-zinc-950 text-zinc-100">
      <div className="max-w-xl w-full text-center space-y-6 p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl shadow-2xl">
        {redirectingTo ? (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center animate-spin">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">
              Historical Architectural URL Detected
            </h1>
            <p className="text-zinc-400 text-sm">
              Redirecting you to the updated architectural profile for{" "}
              <span className="text-amber-400 font-semibold">{redirectName}</span>...
            </p>
            <Link
              href={redirectingTo}
              className="inline-block mt-2 text-sm text-amber-400 hover:underline font-mono"
            >
              Click here if you are not redirected automatically
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              Historical Archive Notice
            </div>
            <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              404
            </div>
            <h1 className="text-2xl font-bold text-white">
              Architectural Landmark Not Found
            </h1>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto">
              The skyscraper profile or historical page you requested may have evolved or been relocated in our updated encyclopedia.
            </p>

            {/* Quick links to top towers */}
            <div className="pt-2 text-left bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/80">
              <div className="text-xs uppercase font-semibold tracking-wider text-zinc-400 mb-2">
                Popular Historical Towers:
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {BUILDINGS.slice(0, 4).map((b) => (
                  <Link
                    key={b.id}
                    href={`/buildings/${b.slug}/`}
                    className="p-2 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-amber-400 transition-colors flex items-center justify-between"
                  >
                    <span className="truncate">{b.name}</span>
                    <span className="text-zinc-500 text-[10px] ml-1">{b.heightMeters}m</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20"
              >
                Return to Encyclopedia Home
              </Link>
            </div>

            <div className="text-xs text-zinc-500">
              Redirecting to catalog in{" "}
              <span className="text-amber-400 font-mono font-bold">{countdown}</span>s...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
