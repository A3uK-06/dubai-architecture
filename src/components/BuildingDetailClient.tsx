"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { Building, BUILDINGS } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import { getLocalizedBuilding } from "@/data/localizedContent";
import SchemaOrg from "@/components/SchemaOrg";

interface BuildingDetailClientProps {
  initialBuilding: Building;
}

export default function BuildingDetailClient({
  initialBuilding,
}: BuildingDetailClientProps) {
  const { t, lang } = useLang();

  const building = useMemo(() => {
    return getLocalizedBuilding(initialBuilding, lang);
  }, [initialBuilding, lang]);

  const relatedBuildings = useMemo(() => {
    return BUILDINGS.filter(
      (b) => b.districtSlug === building.districtSlug && b.id !== building.id
    )
      .slice(0, 3)
      .map((b) => getLocalizedBuilding(b, lang));
  }, [building, lang]);

  const bd = t.buildingDetail;

  const whatsappMessage = encodeURIComponent(
    `Hello, I am inquiring through Dubai-Architecture.info regarding available luxury units in ${building.name}.`
  );

  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      <SchemaOrg type="building" building={building} />

      {/* Hero Header */}
      <div className="relative border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 via-zinc-950 to-zinc-950 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-6 font-medium">
            <Link href="/" className="hover:text-amber-400">
              {bd.breadcrumbHome}
            </Link>
            <span>/</span>
            <Link href="/#catalog" className="hover:text-amber-400">
              {bd.breadcrumbCatalog}
            </Link>
            <span>/</span>
            <Link
              href={`/districts/${building.districtSlug}/`}
              className="hover:text-amber-400"
            >
              {building.district}
            </Link>
            <span>/</span>
            <span className="text-zinc-300">{building.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  {building.heightMeters} m ({building.heightFeet} ft)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-800 text-zinc-300">
                  {building.floors} {bd.storeys}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-800 text-zinc-300">
                  {bd.built} {building.yearBuilt}
                </span>
                {building.legacyId && (
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-zinc-900 border border-zinc-700 text-amber-400">
                    {bd.archiveId}: {building.legacyId}
                  </span>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                {building.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                <div>
                  <span className="text-zinc-500">{bd.architectLabel}: </span>
                  <span className="text-zinc-200 font-semibold">{building.architect}</span> ({building.architectFirm})
                </div>
                <div>•</div>
                <div>
                  <span className="text-zinc-500">{bd.developerLabel}: </span>
                  <span className="text-zinc-200 font-semibold">{building.developer}</span>
                </div>
                <div>•</div>
                <div>
                  <span className="text-zinc-500">{bd.districtLabel}: </span>
                  <Link href={`/districts/${building.districtSlug}/`} className="text-amber-400 hover:underline">
                    {building.district}
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Investment Pill */}
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-amber-500/30 flex items-center gap-6">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400">
                  {bd.estRentalYield}
                </div>
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                  {building.investmentYield}
                </div>
              </div>
              <div className="border-l border-zinc-800 pl-6">
                <div className="text-[11px] uppercase tracking-wider text-zinc-400">
                  {bd.unitsFrom}
                </div>
                <div className="text-lg font-bold text-amber-400 font-mono">
                  {building.startingPriceAed}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left 2 Columns: Architectural Specs & History */}
          <div className="lg:col-span-2 space-y-12">
            {/* Architectural Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-zinc-800 pb-3">
                {bd.historyTitle}
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed">
                {building.description}
              </p>
              {building.historicalNote && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm">
                  <strong>{bd.historyNote}: </strong>
                  {building.historicalNote}
                </div>
              )}
            </section>

            {/* Engineering Highlights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-zinc-800 pb-3">
                {bd.highlightsTitle}
              </h2>
              <ul className="space-y-3">
                {building.architecturalHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Structural Specification Matrix */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-zinc-800 pb-3">
                {bd.ttxTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs text-zinc-500">{bd.officialHeight}</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {building.heightMeters} m / {building.heightFeet} ft
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs text-zinc-500">{bd.totalFloors}</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {building.floors} {bd.aboveGroundLevels}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs text-zinc-500">{bd.yearCompleted}</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {building.yearBuilt}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs text-zinc-500">{bd.buildingType}</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {building.type}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 sm:col-span-2">
                  <div className="text-xs text-zinc-500">{bd.structuralSystem}</div>
                  <div className="text-base font-semibold text-zinc-200 mt-0.5">
                    {building.structuralSystem || "Reinforced concrete structural core with high-performance perimeter columns"}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Lead Capture & Investment Widget */}
          <div className="space-y-6">
            <div id="inquire" className="sticky top-24 p-6 rounded-3xl border border-amber-500/40 bg-zinc-900/90 shadow-2xl backdrop-blur-xl space-y-6">
              <div className="space-y-1">
                <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-zinc-950">
                  {bd.verifiedAllocation}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {bd.investIn} {building.name}
                </h3>
                <p className="text-xs text-zinc-400">
                  {bd.investSubtitle}
                </p>
              </div>

              <div className="space-y-3 py-2 border-y border-zinc-800 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-400">{bd.entryPriceAed}</span>
                  <span className="font-mono font-bold text-zinc-200">{building.startingPriceAed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">{bd.entryPriceUsd}</span>
                  <span className="font-mono font-bold text-zinc-200">{building.startingPriceUsd}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">{bd.projectedYield}</span>
                  <span className="font-mono font-bold text-emerald-400">{building.investmentYield}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">{bd.goldenVisaEligible}</span>
                  <span className="font-semibold text-amber-400">{bd.goldenVisaEligibleValue}</span>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <a
                href={`https://wa.me/971500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all"
              >
                <span>💬</span>
                <span>{bd.inquireWhatsApp}</span>
              </a>

              <a
                href="#inquire"
                className="w-full block text-center px-4 py-2.5 rounded-xl border border-zinc-700 hover:bg-zinc-800 text-xs text-zinc-300 font-medium transition-colors"
              >
                {bd.requestFloorplans}
              </a>

              <div className="text-[11px] text-zinc-500 text-center leading-tight">
                {bd.reraNotice}
              </div>
            </div>
          </div>
        </div>

        {/* Related District Towers */}
        {relatedBuildings.length > 0 && (
          <div className="mt-20 pt-12 border-t border-zinc-800">
            <h2 className="text-xl font-bold text-white mb-6">
              {bd.moreTowersIn} {building.district}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBuildings.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/buildings/${rel.slug}/`}
                  className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/40 transition-all group"
                >
                  <div className="text-xs text-amber-400 font-mono mb-1">
                    {rel.heightMeters}m • {rel.floors} {bd.storeys}
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                    {rel.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
