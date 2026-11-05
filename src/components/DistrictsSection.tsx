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
    <section id="districts" className="py-20 md:py-28 border-b border-[rgba(255,255,255,0.06)] bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#131B26] text-[#D4AF37] border border-[rgba(212,175,55,0.3)] mb-3.5 shadow-luxury-card">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="font-mono tracking-wider">{t.nav.districts} • {t.districts.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-tight font-editorial">
              {t.districts.title}
            </h2>
          </div>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-lg leading-relaxed">
            {t.districts.subtitle}
          </p>
        </div>

        {/* Districts Grid (4 columns, equal height, luxury dark cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {localizedDistricts.map((district) => (
            <Link
              key={district.id}
              href={`/districts/${district.slug}/`}
              className="group rounded-3xl border border-[rgba(255,255,255,0.07)] bg-[#131B26] overflow-hidden flex flex-col h-full hover:border-[#D4AF37]/50 transition-all duration-300 shadow-luxury-card hover:shadow-luxury-card-hover card-sheen"
            >
              {/* Photography Header with Floating Badges */}
              <div className="relative h-56 w-full overflow-hidden bg-[#0B0F17]">
                <Image
                  src={district.image}
                  alt={district.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, #131B26 10%, rgba(19, 27, 38, 0.45) 50%, rgba(11, 15, 23, 0.2) 90%)",
                  }}
                />
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                  <span className="text-xs font-bold font-mono px-3 py-1.5 rounded-full bg-[#0B0F17]/85 text-[#D4AF37] border border-[rgba(212,175,55,0.3)] backdrop-blur-md shadow-sm">
                    ROI: {district.averageRoi}
                  </span>
                  <span className="text-xs text-[#F8FAFC] font-mono font-bold px-3 py-1.5 rounded-full bg-[#0B0F17]/85 border border-[rgba(255,255,255,0.2)] backdrop-blur-md shadow-sm">
                    {district.iconicTowersCount}+ {t.districts.towersCount}
                  </span>
                </div>
              </div>

              {/* District Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] font-editorial group-hover:text-[#D4AF37] transition-colors tracking-tight">
                    {district.name}
                  </h3>
                  <div className="text-xs sm:text-sm text-[#D4AF37] mt-1 font-semibold font-mono">
                    {district.developer}
                  </div>
                  <p className="text-sm text-[#94A3B8] leading-relaxed line-clamp-3 mt-3 max-w-[60ch]">
                    {district.overview}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[rgba(255,255,255,0.06)]">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    {t.districts.keyLandmarks}
                  </div>
                  <div className="text-xs text-[#CBD5E1] truncate font-medium">
                    {district.keyLandmarks.slice(0, 3).join(" • ")}
                  </div>
                </div>

                {/* Bottom Pinned Link */}
                <div className="mt-auto pt-3.5 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-sm font-bold text-[#D4AF37] group-hover:text-[#E5C378] transition-colors uppercase tracking-wider font-mono">
                  <span>{t.districts.exploreDistrict}</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
