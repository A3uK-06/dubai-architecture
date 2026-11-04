"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
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
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{t.nav.districts} • {t.districts.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight leading-tight">
              {t.districts.title}
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
            {t.districts.subtitle}
          </p>
        </div>

        {/* Districts Grid (4 columns, equal height) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {localizedDistricts.map((district) => (
            <Link
              key={district.id}
              href={`/districts/${district.slug}/`}
              className="group rounded-2xl border border-zinc-800/90 bg-zinc-900/60 overflow-hidden flex flex-col h-full hover:border-amber-500/40 hover:bg-zinc-900/90 transition-all duration-300 shadow-soft-tint hover:shadow-medium-tint"
            >
              {/* Real District Photography Header */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
                <Image
                  src={district.image}
                  alt={district.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                  <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-full bg-zinc-950/90 text-amber-300 border border-amber-400/40 backdrop-blur-md shadow-sm">
                    ROI: {district.averageRoi}
                  </span>
                  <span className="text-xs text-zinc-300 font-mono px-2.5 py-1 rounded-full bg-zinc-950/90 border border-zinc-800 backdrop-blur-md shadow-sm">
                    {district.iconicTowersCount}+ {t.districts.towersCount}
                  </span>
                </div>
              </div>

              {/* District Content & Auto-layout */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-amber-300 transition-colors tracking-tight">
                    {district.name}
                  </h3>
                  <div className="text-xs text-zinc-400 mt-1 font-medium">
                    {district.developer}
                  </div>
                  <p className="text-xs text-zinc-300/90 leading-relaxed line-clamp-3 mt-3">
                    {district.overview}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1.5">
                    {t.districts.keyLandmarks}
                  </div>
                  <div className="text-xs text-zinc-400 truncate">
                    {district.keyLandmarks.slice(0, 3).join(" • ")}
                  </div>
                </div>

                {/* Bottom Pinned Link */}
                <div className="mt-auto pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <span>{t.districts.exploreDistrict}</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
