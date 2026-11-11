"use client";

import React from "react";
import Link from "next/link";
import { Building } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import { getArchitectWebsite, getCtbuhUrl, getDldRegistryUrl } from "@/lib/authorityLinks";
import { getDeveloperForBuilding } from "@/data/developers";
import { AI_QUICK_FACTS_I18N } from "@/data/localizedAiFacts";

interface AiQuickFactsAndCitationsProps {
  building: Building;
}

export default function AiQuickFactsAndCitations({
  building,
}: AiQuickFactsAndCitationsProps) {
  const { lang } = useLang();
  const tFacts = AI_QUICK_FACTS_I18N[lang] || AI_QUICK_FACTS_I18N.en;

  const architectUrl = getArchitectWebsite(building.architect);
  const ctbuhUrl = getCtbuhUrl(building.name);
  const dldUrl = getDldRegistryUrl();

  return (
    <div className="space-y-6 mb-10">
      {/* 1. AI Overview & Quick Facts Box (GEO Optimized) */}
      <section
        aria-label="Executive Architectural & Cadastral Summary"
        className="rounded-3xl bg-[#FAF8F5] border-2 border-[#DDD7CA] p-6 sm:p-7 shadow-soft-tint space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5DFD3] pb-3.5">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8C6A48] animate-pulse" />
            <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              {tFacts.factsheetBadge}
            </h3>
          </div>
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white border border-[#DDD7CA] text-[#78716C]">
            EST. 2006 • ID: {building.legacyId || building.id}
          </span>
        </div>

        {/* Dense factual grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-white border border-[#DDD7CA]/80">
            <span className="text-[#78716C] block font-medium">
              {tFacts.structuralHeight}
            </span>
            <strong className="text-sm font-bold text-[#1C1917] font-mono mt-0.5 block">
              {building.heightMeters} m ({building.heightFeet} ft)
            </strong>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#DDD7CA]/80">
            <span className="text-[#78716C] block font-medium">
              {tFacts.floorsLabel}
            </span>
            <strong className="text-sm font-bold text-[#1C1917] font-mono mt-0.5 block">
              {building.floors} {tFacts.floorsSuffix}
            </strong>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#DDD7CA]/80">
            <span className="text-[#78716C] block font-medium">
              {tFacts.yearBuilt}
            </span>
            <strong className="text-sm font-bold text-[#1C1917] font-mono mt-0.5 block">
              {building.yearBuilt}
            </strong>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#DDD7CA]/80">
            <span className="text-[#78716C] block font-medium">
              {tFacts.projectedYield}
            </span>
            <strong className="text-sm font-bold text-[#2D6A4F] font-mono mt-0.5 block">
              {building.investmentYield}
            </strong>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#DDD7CA]/80">
            <span className="text-[#78716C] block font-medium">
              {tFacts.masterArchitect}
            </span>
            <strong className="text-xs font-bold text-[#1C1917] mt-0.5 block truncate" title={building.architect}>
              {building.architect}
            </strong>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#DDD7CA]/80">
            <span className="text-[#78716C] block font-medium">
              {tFacts.masterDeveloper}
            </span>
            {(() => {
              const dev = getDeveloperForBuilding(building.developer);
              return dev ? (
                <Link
                  href={`/developers/${dev.slug}/`}
                  className="text-xs font-bold text-[#8C6A48] hover:text-[#6D5135] underline mt-0.5 block truncate"
                  title={building.developer}
                >
                  {building.developer} ↗
                </Link>
              ) : (
                <strong className="text-xs font-bold text-[#1C1917] mt-0.5 block truncate" title={building.developer}>
                  {building.developer}
                </strong>
              );
            })()}
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#DDD7CA]/80">
            <span className="text-[#78716C] block font-medium">
              {tFacts.cadastralTenure}
            </span>
            <strong className="text-xs font-bold text-[#8C6A48] mt-0.5 block">
              {tFacts.cadastralValue}
            </strong>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#DDD7CA]/80">
            <span className="text-[#78716C] block font-medium">
              {tFacts.urbanDistrict}
            </span>
            <strong className="text-xs font-bold text-[#1C1917] mt-0.5 block truncate">
              {building.district}
            </strong>
          </div>
        </div>

        {/* Natural Language GEO Paragraph (Engineered for AI Summary Extractors) */}
        <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed bg-white/70 p-3.5 rounded-xl border border-[#DDD7CA]/60 font-sans">
          <strong>{tFacts.summaryLabel}</strong> {tFacts.getExecutiveSummary(building)}
        </p>
      </section>

      {/* 2. Institutional Citations & Knowledge Graph External Links */}
      <section
        aria-label="Official Architectural & Cadastral Registry References"
        className="rounded-2xl bg-white border border-[#E5DFD3] p-5 shadow-xs space-y-3"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#78716C] flex items-center gap-1.5">
            <span>🌐</span>
            <span>{tFacts.registriesTitle}</span>
          </span>
          <Link
            href="/methodology/"
            className="text-xs font-semibold text-[#8C6A48] hover:text-[#6D5135] underline"
          >
            {tFacts.verificationLink}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <a
            href={ctbuhUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] hover:border-[#8C6A48] transition-colors group flex flex-col justify-between"
          >
            <div>
              <div className="font-bold text-[#1C1917] group-hover:text-[#8C6A48] flex items-center justify-between">
                <span>CTBUH Skyscraper Center</span>
                <span>↗</span>
              </div>
              <p className="text-[#78716C] text-[11px] mt-1">
                {tFacts.ctbuhDesc}
              </p>
            </div>
          </a>

          <a
            href={dldUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] hover:border-[#8C6A48] transition-colors group flex flex-col justify-between"
          >
            <div>
              <div className="font-bold text-[#1C1917] group-hover:text-[#8C6A48] flex items-center justify-between">
                <span>Dubai Land Department</span>
                <span>↗</span>
              </div>
              <p className="text-[#78716C] text-[11px] mt-1">
                {tFacts.dldDesc}
              </p>
            </div>
          </a>

          <a
            href={architectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] hover:border-[#8C6A48] transition-colors group flex flex-col justify-between"
          >
            <div>
              <div className="font-bold text-[#1C1917] group-hover:text-[#8C6A48] flex items-center justify-between">
                <span>{building.architect} Studio</span>
                <span>↗</span>
              </div>
              <p className="text-[#78716C] text-[11px] mt-1">
                {tFacts.architectDesc}
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
