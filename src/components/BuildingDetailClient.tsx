"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
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
      <div className="relative border-b border-zinc-800/80 bg-gradient-to-b from-zinc-900/80 via-zinc-950 to-zinc-950 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-6 font-medium">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              {bd.breadcrumbHome}
            </Link>
            <span className="text-zinc-600">/</span>
            <Link href="/#catalog" className="hover:text-amber-400 transition-colors">
              {bd.breadcrumbCatalog}
            </Link>
            <span className="text-zinc-600">/</span>
            <Link
              href={`/districts/${building.districtSlug}/`}
              className="hover:text-amber-400 transition-colors"
            >
              {building.district}
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-200 font-semibold">{building.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-amber-400/15 text-amber-300 border border-amber-400/35">
                  {building.heightMeters} m ({building.heightFeet} ft)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-800/90 text-zinc-300 border border-zinc-700/60">
                  {building.floors} {bd.storeys}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-800/90 text-zinc-300 border border-zinc-700/60">
                  {bd.built} {building.yearBuilt}
                </span>
                {building.legacyId && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-zinc-900 border border-zinc-700 text-amber-400">
                    {bd.archiveId}: {building.legacyId}
                  </span>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-100 tracking-tight leading-tight">
                {building.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 pt-1">
                <div>
                  <span className="text-zinc-500">{bd.architectLabel}: </span>
                  <span className="text-zinc-200 font-semibold">{building.architect}</span> ({building.architectFirm})
                </div>
                <div className="text-zinc-600">•</div>
                <div>
                  <span className="text-zinc-500">{bd.developerLabel}: </span>
                  <span className="text-zinc-200 font-semibold">{building.developer}</span>
                </div>
                <div className="text-zinc-600">•</div>
                <div>
                  <span className="text-zinc-500">{bd.districtLabel}: </span>
                  <Link href={`/districts/${building.districtSlug}/`} className="text-amber-400 hover:underline font-medium">
                    {building.district}
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Investment Metric Pill */}
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-amber-500/30 shadow-soft-tint flex items-center gap-6 backdrop-blur-md">
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                  {bd.estRentalYield}
                </div>
                <div className="text-2xl font-extrabold text-emerald-400 font-mono mt-0.5">
                  {building.investmentYield}
                </div>
              </div>
              <div className="border-l border-zinc-800 pl-6">
                <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                  {bd.unitsFrom}
                </div>
                <div className="text-lg font-bold text-amber-300 font-mono mt-0.5">
                  {building.startingPriceAed}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Real Architectural Photography Showcase with Tinted Shadow */}
        <div className="relative w-full h-80 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden border border-zinc-800/80 shadow-strong-tint mb-12 bg-zinc-950">
          <Image
            src={building.image}
            alt={building.name}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 z-10">
            <div className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-wider text-amber-300 bg-zinc-950/85 px-3 py-1 rounded-full border border-amber-400/30 backdrop-blur-md">
                {building.district} • {building.type}
              </span>
              <h2 className="text-zinc-100 text-2xl sm:text-3xl font-extrabold drop-shadow-lg">
                {building.name}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold font-mono bg-zinc-950/85 text-emerald-400 border border-emerald-500/40 backdrop-blur-md">
                {building.investmentYield}
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-400 text-zinc-950 shadow-md">
                {building.startingPriceAed}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left 2 Columns: Architectural Specs & History */}
          <div className="lg:col-span-2 space-y-12">
            {/* Architectural Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-100 border-b border-zinc-800/80 pb-3 tracking-tight">
                {bd.historyTitle}
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed max-w-prose">
                {building.description}
              </p>
              {building.historicalNote && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm leading-relaxed">
                  <strong>{bd.historyNote}: </strong>
                  {building.historicalNote}
                </div>
              )}
            </section>

            {/* Engineering Highlights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-100 border-b border-zinc-800/80 pb-3 tracking-tight">
                {bd.highlightsTitle}
              </h2>
              <ul className="space-y-3">
                {building.architecturalHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
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
              <h2 className="text-2xl font-bold text-zinc-100 border-b border-zinc-800/80 pb-3 tracking-tight">
                {bd.ttxTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 shadow-soft-tint">
                  <div className="text-xs text-zinc-400 font-medium">{bd.officialHeight}</div>
                  <div className="text-base font-bold text-zinc-100 font-mono mt-1">
                    {building.heightMeters} m / {building.heightFeet} ft
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 shadow-soft-tint">
                  <div className="text-xs text-zinc-400 font-medium">{bd.totalFloors}</div>
                  <div className="text-base font-bold text-zinc-100 font-mono mt-1">
                    {building.floors} {bd.aboveGroundLevels}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 shadow-soft-tint">
                  <div className="text-xs text-zinc-400 font-medium">{bd.yearCompleted}</div>
                  <div className="text-base font-bold text-zinc-100 font-mono mt-1">
                    {building.yearBuilt}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 shadow-soft-tint">
                  <div className="text-xs text-zinc-400 font-medium">{bd.buildingType}</div>
                  <div className="text-base font-bold text-zinc-100 mt-1">
                    {building.type}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 sm:col-span-2 shadow-soft-tint">
                  <div className="text-xs text-zinc-400 font-medium">{bd.structuralSystem}</div>
                  <div className="text-base font-semibold text-zinc-200 mt-1 leading-relaxed">
                    {building.structuralSystem || "Reinforced concrete structural core with high-performance perimeter columns"}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Lead Capture & Investment Widget (Right-aligned numeric data per Playbook) */}
          <div className="space-y-6">
            <div id="inquire" className="sticky top-24 p-6 rounded-3xl border border-amber-500/40 bg-zinc-900/90 shadow-medium-tint backdrop-blur-xl space-y-6">
              <div className="space-y-1.5">
                <div className="inline-block px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-amber-400 text-zinc-950">
                  {bd.verifiedAllocation}
                </div>
                <h3 className="text-xl font-bold text-zinc-100">
                  {bd.investIn} {building.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {bd.investSubtitle}
                </p>
              </div>

              <div className="space-y-3 py-3 border-y border-zinc-800 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">{bd.entryPriceAed}</span>
                  <span className="font-mono font-bold text-zinc-100 text-right">{building.startingPriceAed}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">{bd.entryPriceUsd}</span>
                  <span className="font-mono font-bold text-zinc-100 text-right">{building.startingPriceUsd}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">{bd.projectedYield}</span>
                  <span className="font-mono font-bold text-emerald-400 text-right">{building.investmentYield}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">{bd.goldenVisaEligible}</span>
                  <span className="font-semibold text-amber-400 text-right">{bd.goldenVisaEligibleValue}</span>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <a
                href={`https://wa.me/971500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm shadow-md shadow-emerald-500/20 active:scale-98 transition-all"
              >
                <span>💬</span>
                <span>{bd.inquireWhatsApp}</span>
              </a>

              <a
                href="#inquire"
                className="w-full block text-center px-4 py-2.5 rounded-xl border border-zinc-700/80 hover:bg-zinc-800 text-xs text-zinc-300 font-semibold transition-colors"
              >
                {bd.requestFloorplans}
              </a>

              <div className="text-xs text-zinc-500 text-center leading-normal">
                {bd.reraNotice}
              </div>
            </div>
          </div>
        </div>

        {/* Related District Towers */}
        {relatedBuildings.length > 0 && (
          <div className="mt-20 pt-12 border-t border-zinc-800/80">
            <h2 className="text-xl font-bold text-zinc-100 mb-6 tracking-tight">
              {bd.moreTowersIn} {building.district}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBuildings.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/buildings/${rel.slug}/`}
                  className="rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/40 transition-all overflow-hidden group flex flex-col justify-between shadow-soft-tint hover:shadow-medium-tint"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-zinc-950">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="text-xs text-amber-300 font-mono font-bold px-2.5 py-1 rounded-full bg-zinc-950/85 border border-amber-400/30 backdrop-blur-md shadow-sm">
                        {rel.heightMeters}m • {rel.floors} {bd.storeys}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                        {rel.description}
                      </p>
                    </div>
                    <div className="pt-2 text-xs font-bold text-amber-400 flex items-center justify-between">
                      <span>{t.buildingCard.viewDetails}</span>
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
