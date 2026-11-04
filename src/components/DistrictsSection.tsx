"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { DISTRICTS } from "@/data/districts";
import { useLang } from "@/context/LangContext";
import { getLocalizedDistrict } from "@/data/localizedContent";

export default function DistrictsSection() {
  const { t, lang } = useLang();

  const localizedDistricts = useMemo(() => {
    return DISTRICTS.map((d) => getLocalizedDistrict(d, lang));
  }, [lang]);

  return (
    <section id="districts" className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/30 mb-2">
              {t.nav.districts} • {t.districts.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.districts.title}
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md">
            {t.districts.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {localizedDistricts.map((district) => (
            <Link
              key={district.id}
              href={`/districts/${district.slug}/`}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 flex flex-col justify-between hover:border-amber-500/40 hover:bg-zinc-900/90 transition-all hover:shadow-xl hover:shadow-amber-500/5 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    ROI: {district.averageRoi}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {district.iconicTowersCount}+ {t.districts.towersCount}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {district.name}
                  </h3>
                  <div className="text-xs text-zinc-500 mt-0.5">
                    {district.developer}
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                  {district.overview}
                </p>

                <div className="pt-2 border-t border-zinc-800/80">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">
                    {t.districts.keyLandmarks}
                  </div>
                  <div className="text-xs text-zinc-400 truncate">
                    {district.keyLandmarks.slice(0, 3).join(" • ")}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                <span>{t.districts.exploreDistrict}</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
