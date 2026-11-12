"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { DEVELOPERS, getLocalizedDeveloper } from "@/data/developers";
import { BUILDINGS } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import { useCurrency } from "@/context/CurrencyContext";
import { DEVELOPERS_PAGE_I18N } from "@/data/localizedDevelopersPage";

export default function DevelopersClient() {
  const { lang } = useLang();
  const { formatPriceString } = useCurrency();
  const tD = DEVELOPERS_PAGE_I18N[lang] || DEVELOPERS_PAGE_I18N.en;

  const homeUrl = "/";
  const devBaseUrl = "/developers";

  const localizedDevelopers = useMemo(() => {
    return DEVELOPERS.map((d) => getLocalizedDeveloper(d, lang));
  }, [lang]);

  return (
    <div className="min-h-screen bg-transparent text-[#0F172A] pb-24">
      {/* Hero Banner */}
      <div className="border-b border-[#E2E8F0] bg-[#F1F5F9]/60 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex items-center gap-2 text-xs text-[#78716C] font-semibold">
            <Link href={homeUrl} className="hover:text-[#8C6A48] transition-colors">
              {tD.breadcrumbHome}
            </Link>
            <span className="text-[#DDD7CA]">/</span>
            <span className="text-[#1C1917] font-bold">
              {tD.breadcrumbDevelopers}
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
              {tD.badgeDldEscrow}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
              {tD.badgeTop10}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            {tD.pageTitle}
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
            {tD.pageSubtitle}
          </p>
        </div>
      </div>

      {/* Developers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localizedDevelopers.map((dev) => {
            const devBuildings = BUILDINGS.filter((b) =>
              b.developer.toLowerCase().includes(dev.shortName.toLowerCase())
            );

            return (
              <div
                key={dev.id}
                className="rounded-3xl bg-[#FAF8F5] border-2 border-[#E5DFD3] hover:border-[#8C6A48] transition-all p-7 flex flex-col justify-between shadow-soft-tint group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                        {dev.tier}
                      </span>
                      <h2 className="text-2xl font-bold text-[#1C1917] group-hover:text-[#8C6A48] transition-colors mt-0.5">
                        <Link href={`${devBaseUrl}/${dev.slug}/`}>
                          {dev.name}
                        </Link>
                      </h2>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-white border border-[#DDD7CA] text-[#2D6A4F] shrink-0">
                      ROI: {dev.averageNetRoi}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-3">
                    {dev.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-white border border-[#DDD7CA]">
                      <span className="text-[#78716C] block text-[10px]">
                        {tD.deliveryRateLabel}
                      </span>
                      <strong className="text-[#1C1917] font-bold text-xs">{dev.onTimeDeliveryRate}</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-[#DDD7CA]">
                      <span className="text-[#78716C] block text-[10px]">
                        {tD.foundedLabel}
                      </span>
                      <strong className="text-[#1C1917] font-bold text-xs">{dev.foundingYear}</strong>
                    </div>
                  </div>

                  {devBuildings.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[11px] font-semibold text-[#78716C] block mb-1.5">
                        {tD.keyTowersLabel(devBuildings.length)}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {devBuildings.slice(0, 3).map((b) => (
                          <Link
                            key={b.id}
                            href={`/buildings/${b.slug}/`}
                            className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-[#DDD7CA] hover:border-[#8C6A48] text-[#1C1917] hover:text-[#8C6A48] transition-colors"
                          >
                            {b.name}
                          </Link>
                        ))}
                        {devBuildings.length > 3 && (
                          <span className="text-[10px] text-[#78716C] self-center">
                            {tD.moreLabel(devBuildings.length - 3)}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5DFD3] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#78716C]">
                    {tD.fromPricePrefix}{formatPriceString(dev.startingPriceAed)}
                  </span>
                  <Link
                    href={`${devBaseUrl}/${dev.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8C6A48] group-hover:text-[#6D5135] transition-colors"
                  >
                    <span>{tD.fullDossierBtn}</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
