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
    lang === "ru"
      ? `Здравствуйте! Я обращаюсь через Dubai-Architecture.info по поводу доступных резиденций в ${building.name}.`
      : `Hello, I am inquiring through Dubai-Architecture.info regarding available luxury units in ${building.name}.`
  );

  return (
    <article className="min-h-screen bg-[#F8F9FA] text-[#0F172A] pb-24 transition-colors">
      <SchemaOrg type="building" building={building} />

      {/* Hero Header */}
      <div className="relative border-b border-[#E2E8F0] bg-[#F1F5F9]/60 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#78716C] mb-6 font-semibold">
            <Link href="/" className="hover:text-[#8C6A48] transition-colors">
              {bd.breadcrumbHome}
            </Link>
            <span className="text-[#DDD7CA]">/</span>
            <Link href="/#catalog" className="hover:text-[#8C6A48] transition-colors">
              {bd.breadcrumbCatalog}
            </Link>
            <span className="text-[#DDD7CA]">/</span>
            <Link
              href={`/districts/${building.districtSlug}/`}
              className="hover:text-[#8C6A48] transition-colors"
            >
              {building.district}
            </Link>
            <span className="text-[#DDD7CA]">/</span>
            <span className="text-[#1C1917] font-bold">{building.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#8C6A48] text-white shadow-soft-tint">
                  {building.heightMeters} m ({building.heightFeet} ft)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#57534E] border border-[#DDD7CA]">
                  {building.floors} {bd.storeys}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#57534E] border border-[#DDD7CA]">
                  {bd.built} {building.yearBuilt}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#57534E] border border-[#DDD7CA]">
                  {building.type}
                </span>
                {building.legacyId && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#EFECE4] border border-[#DDD7CA] text-[#8C6A48] font-bold">
                    {bd.archiveId}: {building.legacyId}
                  </span>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1917] tracking-tight leading-tight">
                {building.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[#57534E] pt-1">
                <div>
                  <span className="text-[#78716C]">{bd.architectLabel}: </span>
                  <span className="text-[#1C1917] font-bold">{building.architect}</span> ({building.architectFirm})
                </div>
                <div className="text-[#DDD7CA]">•</div>
                <div>
                  <span className="text-[#78716C]">{bd.developerLabel}: </span>
                  <span className="text-[#1C1917] font-bold">{building.developer}</span>
                </div>
                <div className="text-[#DDD7CA]">•</div>
                <div>
                  <span className="text-[#78716C]">{bd.districtLabel}: </span>
                  <Link href={`/districts/${building.districtSlug}/`} className="text-[#8C6A48] hover:underline font-bold">
                    {building.district}
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Investment Metric Pill */}
            <div className="p-5 rounded-2xl bg-white border border-[#E5DFD3] shadow-soft-tint flex items-center gap-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#78716C] font-bold">
                  {bd.estRentalYield}
                </div>
                <div className="text-2xl font-extrabold text-[#2D6A4F] font-mono mt-0.5">
                  {building.investmentYield}
                </div>
              </div>
              <div className="border-l border-[#E5DFD3] pl-6">
                <div className="text-xs uppercase tracking-wider text-[#78716C] font-bold">
                  {bd.unitsFrom}
                </div>
                <div className="text-lg font-bold text-[#8C6A48] font-mono mt-0.5">
                  {building.startingPriceAed}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Architectural Photography Showcase */}
        <div className="relative w-full h-80 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-float-card mb-12 bg-[#0F172A]">
          <Image
            src={building.image}
            alt={building.name}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 z-10">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block text-xs uppercase font-mono tracking-wider bg-white/20 text-white px-3.5 py-1.5 rounded-full border border-white/30 backdrop-blur-md">
                {building.district} • {building.type}
              </span>
              <h2 className="!text-white text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight drop-shadow-[0_3px_16px_rgba(0,0,0,0.95)]" style={{ color: '#FFFFFF' }}>
                {building.name}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-bold font-mono bg-white text-[#059669] shadow-md">
                ROI: {building.investmentYield}
              </span>
              <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-bold bg-[#0F172A] text-white border border-white/25 shadow-md">
                {building.startingPriceAed}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left 2 Columns: Full Engineering Passport & Architectural Analysis */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Architectural Overview */}
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-3">
                <h2 className="text-2xl font-bold text-[#1C1917] tracking-tight">
                  {bd.historyTitle}
                </h2>
                <span className="text-xs font-mono font-bold text-[#8C6A48] uppercase tracking-wider">
                  {bd.archiveId}: {building.id}
                </span>
              </div>

              {/* Prominent Clickable District Location Bar */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] flex flex-wrap items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">📍</span>
                  <span className="text-xs text-[#78716C] font-semibold">{bd.districtLocationLabel}</span>
                  <Link
                    href={`/districts/${building.districtSlug}/`}
                    className="text-sm font-extrabold text-[#8C6A48] hover:text-[#6D5135] underline underline-offset-4 transition-colors"
                  >
                    {building.district} ↗
                  </Link>
                </div>
                <Link
                  href={`/districts/${building.districtSlug}/`}
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-[#DDD7CA] hover:border-[#8C6A48] text-xs font-bold text-[#8C6A48] hover:text-[#6D5135] transition-all shadow-2xs"
                >
                  {bd.exploreDistrictCta}
                </Link>
              </div>

              <p className="text-base text-[#57534E] leading-relaxed max-w-prose">
                {building.description}
              </p>
              {building.historicalNote && (
                <div className="p-4 rounded-xl bg-[#EFECE4] border border-[#DDD7CA] text-[#57534E] text-sm leading-relaxed">
                  <strong className="text-[#8C6A48] font-bold">{bd.historyNote}: </strong>
                  {building.historicalNote}
                </div>
              )}
            </section>

            {/* Architectural Highlights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1C1917] border-b border-[#E5DFD3] pb-3 tracking-tight">
                {bd.highlightsTitle}
              </h2>
              <ul className="space-y-3">
                {building.architecturalHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-[#57534E] leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-[#8C6A48]/15 text-[#8C6A48] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Dedicated District Deep-Dive Navigation Banner */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#FAF8F5] via-[#EFECE4] to-[#FAF8F5] border-2 border-[#DDD7CA] shadow-soft-tint flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8C6A48]/15 text-[#8C6A48] text-xs font-mono font-bold uppercase tracking-wider">
                  <span>🏙️</span>
                  <span>{bd.districtBannerBadge}</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#1C1917] tracking-tight">
                  {bd.districtBannerTitle} {building.district}
                </h3>
                <p className="text-xs text-[#57534E] max-w-xl leading-relaxed">
                  {bd.districtBannerDesc} {building.district}.
                </p>
              </div>
              <Link
                href={`/districts/${building.districtSlug}/`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8C6A48] hover:bg-[#6D5135] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 group"
              >
                <span>{bd.districtBannerButton}</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>

            {/* HARD TTX: Full Structural & Geotechnical Passport */}
            {building.foundation && (
              <section className="space-y-6 pt-4">
                <div className="flex items-center justify-between border-b-2 border-[#8C6A48] pb-3">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                      {t.ttxLabels.specMatrix}
                    </span>
                    <h2 className="text-2xl font-extrabold text-[#1C1917] tracking-tight">
                      {t.ttxLabels.title}
                    </h2>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#EFECE4] text-[#8C6A48] border border-[#DDD7CA]">
                    {t.ttxLabels.verifiedBadge}
                  </span>
                </div>

                {/* 0. Engineering Teams & General Contractor */}
                {(building.mainContractor || building.structuralEngineer) && (
                  <div className="rounded-2xl border border-[#E5DFD3] bg-white p-6 shadow-soft-tint space-y-4">
                    <div className="flex items-center gap-2.5 text-sm font-bold text-[#8C6A48] border-b border-[#EFECE4] pb-2 uppercase tracking-wide">
                      <span>👷</span>
                      <span>{t.ttxLabels.engineeringTeam}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      {building.mainContractor && (
                        <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                          <div className="text-[#78716C] font-medium">{t.ttxLabels.contractorLabel}</div>
                          <div className="text-sm font-bold text-[#1C1917] mt-1">{building.mainContractor}</div>
                        </div>
                      )}
                      {building.structuralEngineer && (
                        <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                          <div className="text-[#78716C] font-medium">{t.ttxLabels.structuralEngineerLabel}</div>
                          <div className="text-sm font-bold text-[#1C1917] mt-1">{building.structuralEngineer}</div>
                        </div>
                      )}
                      {building.mepEngineer && (
                        <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                          <div className="text-[#78716C] font-medium">{t.ttxLabels.mepEngineerLabel}</div>
                          <div className="text-xs font-semibold text-[#1C1917] mt-1">{building.mepEngineer}</div>
                        </div>
                      )}
                      {building.urbanIntegration && (
                        <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                          <div className="text-[#78716C] font-medium">{t.ttxLabels.transitIntegration}</div>
                          <div className="text-xs font-semibold text-[#8C6A48] mt-1">{building.urbanIntegration}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 1. Geotechnical & Foundation */}
                <div className="rounded-2xl border border-[#E5DFD3] bg-white p-6 shadow-soft-tint space-y-4">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-[#8C6A48] border-b border-[#EFECE4] pb-2 uppercase tracking-wide">
                    <span>🏗️</span>
                    <span>{t.ttxLabels.geotechnical}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.pilesCount}</div>
                      <div className="text-base font-bold text-[#1C1917] font-mono mt-1">{building.foundation.pilesCount} {t.ttxLabels.units}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.pileDepth}</div>
                      <div className="text-base font-bold text-[#1C1917] font-mono mt-1">{building.foundation.pileDepthMeters} {t.ttxLabels.meters}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.pileDiameter}</div>
                      <div className="text-base font-bold text-[#1C1917] font-mono mt-1">{building.foundation.pileDiameterMeters}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4] sm:col-span-2 md:col-span-1">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.raftThickness}</div>
                      <div className="text-base font-bold text-[#1C1917] font-mono mt-1">{building.foundation.raftThicknessMeters}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4] sm:col-span-2">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.bedrock}</div>
                      <div className="text-xs font-semibold text-[#1C1917] mt-1">{building.foundation.bedrockType}</div>
                    </div>
                  </div>
                </div>

                {/* 2. Wind Engineering & Structural Frame */}
                <div className="rounded-2xl border border-[#E5DFD3] bg-white p-6 shadow-soft-tint space-y-4">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-[#8C6A48] border-b border-[#EFECE4] pb-2 uppercase tracking-wide">
                    <span>💨</span>
                    <span>{t.ttxLabels.windStructural}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.lateralSystem}</div>
                      <div className="text-xs font-semibold text-[#1C1917] mt-1 leading-relaxed">{building.windStructural.lateralSystem}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.vortexDamping}</div>
                      <div className="text-xs font-semibold text-[#1C1917] mt-1 leading-relaxed">{building.windStructural.dampingMechanism}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.maxApexSway}</div>
                      <div className="text-sm font-bold text-[#8C6A48] font-mono mt-1">{building.windStructural.maxApexSwayMeters}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.concreteStrength}</div>
                      <div className="text-sm font-bold text-[#1C1917] font-mono mt-1">{building.windStructural.concreteStrengthGrade}</div>
                    </div>
                  </div>
                </div>

                {/* 3. Facade & Glazing Technologies */}
                <div className="rounded-2xl border border-[#E5DFD3] bg-white p-6 shadow-soft-tint space-y-4">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-[#8C6A48] border-b border-[#EFECE4] pb-2 uppercase tracking-wide">
                    <span>☀️</span>
                    <span>{t.ttxLabels.facadeGlazing}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4] sm:col-span-3">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.glazingSpec}</div>
                      <div className="text-xs font-semibold text-[#1C1917] mt-1 leading-relaxed">{building.facade.glazingType}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.shgc}</div>
                      <div className="text-sm font-bold text-[#1C1917] font-mono mt-1">{building.facade.shgcSolarCoefficient}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.uValue}</div>
                      <div className="text-sm font-bold text-[#1C1917] font-mono mt-1">{building.facade.uValueWPerM2K}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.cleaningCycle}</div>
                      <div className="text-sm font-bold text-[#1C1917] font-mono mt-1">{building.facade.cleaningCycleDays}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4] sm:col-span-3">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.bmu}</div>
                      <div className="text-xs text-[#57534E] mt-1">{building.facade.bmuCleaningSystem}</div>
                    </div>
                  </div>
                </div>

                {/* 4. Vertical Transport (Elevators) */}
                <div className="rounded-2xl border border-[#E5DFD3] bg-white p-6 shadow-soft-tint space-y-4">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-[#8C6A48] border-b border-[#EFECE4] pb-2 uppercase tracking-wide">
                    <span>🛗</span>
                    <span>{t.ttxLabels.verticalTransport}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.elevatorMfg}</div>
                      <div className="text-base font-bold text-[#1C1917] mt-1">{building.verticalTransport.elevatorManufacturer}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.elevatorsTotal}</div>
                      <div className="text-base font-bold text-[#1C1917] font-mono mt-1">{building.verticalTransport.totalElevators} {t.ttxLabels.units}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.maxSpeed}</div>
                      <div className="text-base font-bold text-[#8C6A48] font-mono mt-1">{building.verticalTransport.maxSpeedMs} {t.ttxLabels.speedUnit}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.peakWait}</div>
                      <div className="text-base font-bold text-[#1C1917] font-mono mt-1">{building.verticalTransport.peakWaitingSeconds}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFECE4] col-span-2 sm:col-span-4">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.zoningStrategy}</div>
                      <div className="text-xs text-[#57534E] mt-1">{building.verticalTransport.zoningStrategy}</div>
                    </div>
                  </div>
                </div>

                {/* 5. Resident Reality & Operating Economics */}
                <div className="rounded-2xl border-2 border-[#8C6A48]/30 bg-white p-6 shadow-medium-tint space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EFECE4] pb-2">
                    <div className="flex items-center gap-2.5 text-sm font-bold text-[#1C1917] uppercase tracking-wide">
                      <span>📊</span>
                      <span>{t.ttxLabels.operatingClimate}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#8C6A48]">DLD OFFICIAL INDEX</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-[#EFECE4]/60 border border-[#DDD7CA]">
                      <div className="text-[#78716C] font-medium uppercase">{t.ttxLabels.serviceCharge}</div>
                      <div className="text-xl font-extrabold text-[#1C1917] font-mono mt-1">
                        {building.operatingSpecs.annualServiceChargeAedSqFt} <span className="text-xs font-normal">{lang === "ru" ? "AED / кв. фут" : "AED/sq.ft"}</span>
                      </div>
                      <p className="text-xs text-[#64748B] mt-1">{t.ttxLabels.reraNotice}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#EFECE4]/60 border border-[#DDD7CA]">
                      <div className="text-[#78716C] font-medium uppercase">{t.ttxLabels.coolingProvider}</div>
                      <div className="text-base font-bold text-[#1C1917] mt-1">{building.operatingSpecs.coolingProvider}</div>
                      <span className={`inline-block mt-1 px-2.5 py-0.5 rounded text-xs font-bold ${
                        building.operatingSpecs.chillerBilling.includes('Chiller-Free') 
                          ? 'bg-[#2D6A4F]/10 text-[#2D6A4F]' 
                          : 'bg-[#9E4732]/10 text-[#9E4732]'
                      }`}>
                        {building.operatingSpecs.chillerBilling}
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-[#EFECE4]/60 border border-[#DDD7CA]">
                      <div className="text-[#78716C] font-medium uppercase">{t.ttxLabels.acoustic}</div>
                      <div className="text-xl font-extrabold text-[#1C1917] font-mono mt-1">{building.operatingSpecs.acousticRatingDb}</div>
                      <p className="text-xs text-[#64748B] mt-1">{t.ttxLabels.acousticDesc}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.ceilingHeight}</div>
                      <div className="text-sm font-bold text-[#1C1917] font-mono mt-1">{building.operatingSpecs.clearCeilingHeightMeters} {t.ttxLabels.meters}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.columnImpact}</div>
                      <div className="text-xs font-bold text-[#1C1917] mt-1">{building.layoutEfficiency.columnImpact}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFECE4]">
                      <div className="text-[#78716C] font-medium">{t.ttxLabels.netGross}</div>
                      <div className="text-sm font-bold text-[#2D6A4F] font-mono mt-1">{building.layoutEfficiency.netToGrossRatio}</div>
                    </div>
                  </div>
                </div>

              </section>
            )}

          </div>

          {/* Right Column: Lead Capture & Investment Widget */}
          <div className="space-y-6">
            <div id="inquire" className="sticky top-24 p-6 rounded-3xl border border-[#E5DFD3] bg-white shadow-medium-tint space-y-6">
              <div className="space-y-1.5">
                <div className="inline-block px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#8C6A48] text-white">
                  {bd.verifiedAllocation}
                </div>
                <h3 className="text-xl font-bold text-[#1C1917]">
                  {bd.investIn} {building.name}
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  {bd.investSubtitle}
                </p>
              </div>

              <div className="space-y-3 py-3 border-y border-[#EFECE4] text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#78716C]">{bd.entryPriceAed}</span>
                  <span className="font-mono font-bold text-[#1C1917] text-right">{building.startingPriceAed}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#78716C]">{bd.entryPriceUsd}</span>
                  <span className="font-mono font-bold text-[#1C1917] text-right">{building.startingPriceUsd}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#78716C]">{bd.projectedYield}</span>
                  <span className="font-mono font-bold text-[#2D6A4F] text-right">{building.investmentYield}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#78716C]">{t.ttxLabels.serviceCharge}</span>
                  <span className="font-mono font-bold text-[#8C6A48] text-right">
                    {building.operatingSpecs ? `${building.operatingSpecs.annualServiceChargeAedSqFt} ${lang === "ru" ? "AED / кв. фут" : "AED/sq.ft"}` : "—"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#78716C]">{bd.goldenVisaEligible}</span>
                  <span className="font-semibold text-[#8C6A48] text-right">{bd.goldenVisaEligibleValue}</span>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <a
                href={`https://wa.me/971500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2D6A4F] hover:bg-[#1E4D38] text-white font-bold text-sm shadow-soft-tint active:scale-98 transition-all"
              >
                <span>💬</span>
                <span>{bd.inquireWhatsApp}</span>
              </a>

              <a
                href="#inquire"
                className="w-full block text-center px-4 py-2.5 rounded-xl border border-[#DDD7CA] hover:bg-[#FAF8F5] text-xs text-[#57534E] font-semibold transition-colors"
              >
                {bd.requestFloorplans}
              </a>

              <div className="text-xs text-[#78716C] text-center leading-normal">
                {bd.reraNotice}
              </div>
            </div>
          </div>
        </div>

        {/* Related District Towers */}
        {relatedBuildings.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#E5DFD3]">
            <h2 className="text-xl font-bold text-[#1C1917] mb-6 tracking-tight">
              {bd.moreTowersIn} {building.district}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBuildings.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/buildings/${rel.slug}/`}
                  className="rounded-2xl bg-white border border-[#E5DFD3] hover:border-[#8C6A48] transition-all overflow-hidden group flex flex-col justify-between shadow-soft-tint hover:shadow-medium-tint"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-[#EFECE4]">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="text-xs text-white font-mono font-bold px-2.5 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md shadow-sm">
                        {rel.heightMeters}m • {rel.floors} {bd.storeys}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-[#1C1917] group-hover:text-[#8C6A48] transition-colors">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-[#57534E] mt-1 line-clamp-2 leading-relaxed">
                        {rel.description}
                      </p>
                    </div>
                    <div className="pt-2 text-xs font-bold text-[#8C6A48] flex items-center justify-between">
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
