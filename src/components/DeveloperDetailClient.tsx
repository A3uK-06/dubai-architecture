"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Developer, getLocalizedDeveloper } from "@/data/developers";
import { Building } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import { getLocalizedBuilding } from "@/data/localizedContent";
import { DEVELOPERS_PAGE_I18N } from "@/data/localizedDevelopersPage";

interface DeveloperDetailClientProps {
  initialDeveloper: Developer;
  buildings: Building[];
}

export default function DeveloperDetailClient({
  initialDeveloper,
  buildings,
}: DeveloperDetailClientProps) {
  const { lang } = useLang();
  const tD = DEVELOPERS_PAGE_I18N[lang] || DEVELOPERS_PAGE_I18N.en;

  const homeUrl = "/";
  const devListUrl = "/developers/";

  const developer = useMemo(() => {
    return getLocalizedDeveloper(initialDeveloper, lang);
  }, [initialDeveloper, lang]);

  const relatedBuildings = useMemo(() => {
    return buildings
      .filter((b) => b.developer.toLowerCase().includes(developer.shortName.toLowerCase()))
      .map((b) => getLocalizedBuilding(b, lang));
  }, [buildings, developer.shortName, lang]);

  return (
    <article className="min-h-screen bg-transparent text-[#0F172A] pb-24">
      {/* Header Banner */}
      <div className="border-b border-[#E2E8F0] bg-[#F1F5F9]/60 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex items-center gap-2 text-xs text-[#78716C] font-semibold">
            <Link href={homeUrl} className="hover:text-[#8C6A48] transition-colors">
              {tD.breadcrumbHome}
            </Link>
            <span className="text-[#DDD7CA]">/</span>
            <Link href={devListUrl} className="hover:text-[#8C6A48] transition-colors">
              {tD.breadcrumbDevelopers}
            </Link>
            <span className="text-[#DDD7CA]">/</span>
            <span className="text-[#1C1917] font-bold">{developer.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
              {developer.tier}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
              {tD.escrowRatingLabel} {developer.dldEscrowRating}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            {developer.name}
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
            {developer.description}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left 2 Cols: Due Diligence & Buildings */}
          <div className="lg:col-span-2 space-y-12">
            {/* 1. Track Record Grid */}
            <section className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
              <h2 className="text-xl font-bold text-[#1C1917]">
                {tD.dueDiligenceTitle}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA]">
                  <span className="text-[#78716C] block text-[11px]">
                    {tD.onTimeDelivery}
                  </span>
                  <strong className="text-base font-bold text-[#2D6A4F] mt-1 block">
                    {developer.onTimeDeliveryRate}
                  </strong>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA]">
                  <span className="text-[#78716C] block text-[11px]">
                    {tD.averageNetRoi}
                  </span>
                  <strong className="text-base font-bold text-[#8C6A48] mt-1 block">
                    {developer.averageNetRoi}
                  </strong>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA]">
                  <span className="text-[#78716C] block text-[11px]">
                    {tD.foundedLabel}
                  </span>
                  <strong className="text-base font-bold text-[#1C1917] mt-1 block">
                    {developer.foundingYear}
                  </strong>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA]">
                  <span className="text-[#78716C] block text-[11px]">
                    {tD.headquarters}
                  </span>
                  <strong className="text-xs font-bold text-[#1C1917] mt-1 block truncate" title={developer.headquarters}>
                    {developer.headquarters}
                  </strong>
                </div>
              </div>
            </section>

            {/* 2. Developer Key Highlights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1C1917] border-b border-[#E5DFD3] pb-3">
                {tD.keyDistinctionsTitle}
              </h2>
              <ul className="space-y-3">
                {developer.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#57534E] leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-[#8C6A48]/15 text-[#8C6A48] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Catalog Projects by this Developer */}
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-3">
                <h2 className="text-2xl font-bold text-[#1C1917]">
                  {tD.buildingsInArchiveTitle(relatedBuildings.length)}
                </h2>
                <span className="text-xs font-mono text-[#8C6A48]">
                  {tD.verifiedDldFreehold}
                </span>
              </div>

              {relatedBuildings.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedBuildings.map((building) => (
                    <Link
                      key={building.id}
                      href={`/buildings/${building.slug}/`}
                      className="rounded-2xl bg-white border border-[#E5DFD3] hover:border-[#8C6A48] transition-all overflow-hidden group shadow-soft-tint flex flex-col justify-between"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-[#0F172A]">
                        <Image
                          src={building.image}
                          alt={building.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="text-xs text-white font-mono font-bold px-2.5 py-1 rounded-full bg-black/75 border border-white/20 backdrop-blur-md">
                            {building.heightMeters}m • {building.floors} {tD.floorsSuffix}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono text-[#8C6A48] uppercase">
                            {building.district}
                          </span>
                          <span className="text-xs font-bold text-[#2D6A4F] font-mono">
                            ROI {building.investmentYield}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#8C6A48] transition-colors">
                          {building.name}
                        </h3>
                        <p className="text-xs text-[#57534E] line-clamp-2">
                          {building.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#78716C] italic">
                  {tD.noBuildingsAuditedYet(developer.name)}
                </p>
              )}
            </section>
          </div>

          {/* Right Sidebar: Developer Contacts & Allocation Concierge */}
          <div className="space-y-6">
            <div className="sticky top-28 rounded-3xl bg-white border-2 border-[#E5DFD3] p-6 shadow-soft-tint space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                  {tD.sidebarBadge}
                </span>
                <h3 className="text-lg font-bold text-[#1C1917]">
                  {tD.sidebarInquireTitle(developer.shortName)}
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  {tD.sidebarInquireDesc}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs font-mono border-t border-[#EFECE4]">
                <div className="flex justify-between py-1">
                  <span className="text-[#78716C]">{tD.escrowSecurityLabel}</span>
                  <span className="font-bold text-[#1C1917]">{tD.dldRegulatedValue}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#78716C]">{tD.startingThresholdLabel}</span>
                  <span className="font-bold text-[#8C6A48]">{developer.startingPriceAed}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#78716C]">{tD.buyerMarkupLabel}</span>
                  <span className="font-bold text-[#2D6A4F]">{tD.officialPriceValue}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/971500000000?text=${encodeURIComponent(
                  tD.getWhatsAppMessage(developer.name)
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2D6A4F] hover:bg-[#1E4D38] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>💬</span>
                <span>{tD.whatsappConciergeBtn}</span>
              </a>

              <a
                href={developer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center px-4 py-2.5 rounded-xl border border-[#DDD7CA] hover:bg-[#FAF8F5] text-xs font-semibold text-[#57534E] hover:text-[#8C6A48] transition-colors"
              >
                {tD.visitOfficialSiteBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
