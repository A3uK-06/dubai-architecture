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
    <section id="districts" className="py-16 md:py-24 border-b border-[#E5DFD3] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#EFECE4] text-[#8C6A48] border border-[#DDD7CA] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6A48]" />
              <span>{t.nav.districts} • {t.districts.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight leading-tight">
              {t.districts.title}
            </h2>
          </div>
          <p className="text-[#57534E] text-sm max-w-md leading-relaxed">
            {t.districts.subtitle}
          </p>
        </div>

        {/* Districts Grid (4 columns, equal height) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {localizedDistricts.map((district) => (
            <Link
              key={district.id}
              href={`/districts/${district.slug}/`}
              className="group rounded-2xl border border-[#E5DFD3] bg-white overflow-hidden flex flex-col h-full hover:border-[#8C6A48] transition-all duration-300 shadow-soft-tint hover:shadow-medium-tint"
            >
              {/* Photography Header */}
              <div className="relative h-48 w-full overflow-hidden bg-[#EFECE4] border-b border-[#E5DFD3]">
                <Image
                  src={district.image}
                  alt={district.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                  <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-full bg-black/75 text-white border border-white/20 backdrop-blur-md shadow-sm">
                    ROI: {district.averageRoi}
                  </span>
                  <span className="text-xs text-white font-mono px-2.5 py-1 rounded-full bg-black/75 border border-white/20 backdrop-blur-md shadow-sm">
                    {district.iconicTowersCount}+ {t.districts.towersCount}
                  </span>
                </div>
              </div>

              {/* District Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#8C6A48] transition-colors tracking-tight">
                    {district.name}
                  </h3>
                  <div className="text-xs text-[#78716C] mt-1 font-semibold">
                    {district.developer}
                  </div>
                  <p className="text-xs text-[#57534E] leading-relaxed line-clamp-3 mt-3">
                    {district.overview}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EFECE4]">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#78716C] mb-1.5">
                    {t.districts.keyLandmarks}
                  </div>
                  <div className="text-xs text-[#57534E] truncate font-medium">
                    {district.keyLandmarks.slice(0, 3).join(" • ")}
                  </div>
                </div>

                {/* Bottom Pinned Link */}
                <div className="mt-auto pt-3 border-t border-[#EFECE4] flex items-center justify-between text-xs font-bold text-[#8C6A48] group-hover:text-[#6D5135]">
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
