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
    <section id="districts" className="py-16 md:py-24 border-b border-[#E2E8F0] bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#F1F5F9] text-[#0F172A] border border-[#CBD5E1] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
              <span>{t.nav.districts} • {t.districts.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight font-heading">
              {t.districts.title}
            </h2>
          </div>
          <p className="text-[#475569] text-base sm:text-lg max-w-lg leading-relaxed">
            {t.districts.subtitle}
          </p>
        </div>

        {/* Districts Grid (4 columns, equal height) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {localizedDistricts.map((district) => (
            <Link
              key={district.id}
              href={`/districts/${district.slug}/`}
              className="group rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden flex flex-col h-full hover:border-[#0F172A]/40 transition-all duration-300 shadow-float-card hover:shadow-float-card-hover"
            >
              {/* Photography Header with Floating Badges */}
              <div className="relative h-56 w-full overflow-hidden bg-[#F1F5F9]">
                <Image
                  src={district.image}
                  alt={district.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/20 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                  <span className="text-xs sm:text-sm font-bold font-mono px-3 py-1.5 rounded-full bg-[#0F172A]/85 text-white border border-white/20 backdrop-blur-md shadow-sm">
                    ROI: {district.averageRoi}
                  </span>
                  <span className="text-xs sm:text-sm text-white font-mono font-bold px-3 py-1.5 rounded-full bg-[#0F172A]/85 border border-white/20 backdrop-blur-md shadow-sm">
                    {district.iconicTowersCount}+ {t.districts.towersCount}
                  </span>
                </div>
              </div>

              {/* District Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading group-hover:text-[#8C6A48] transition-colors tracking-tight">
                    {district.name}
                  </h3>
                  <div className="text-xs sm:text-sm text-[#64748B] mt-1 font-semibold">
                    {district.developer}
                  </div>
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed line-clamp-3 mt-3 max-w-[65ch]">
                    {district.overview}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#F1F5F9]">
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                    {t.districts.keyLandmarks}
                  </div>
                  <div className="text-xs sm:text-sm text-[#475569] truncate font-medium">
                    {district.keyLandmarks.slice(0, 3).join(" • ")}
                  </div>
                </div>

                {/* Bottom Pinned Link */}
                <div className="mt-auto pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#8C6A48] transition-colors">
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