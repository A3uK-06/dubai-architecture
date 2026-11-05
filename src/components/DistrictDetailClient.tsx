"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { District } from "@/data/districts";
import { BUILDINGS } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import { getLocalizedDistrict, getLocalizedBuilding } from "@/data/localizedContent";

interface DistrictDetailClientProps {
  initialDistrict: District;
}

export default function DistrictDetailClient({
  initialDistrict,
}: DistrictDetailClientProps) {
  const { t, lang } = useLang();

  const district = useMemo(() => {
    return getLocalizedDistrict(initialDistrict, lang);
  }, [initialDistrict, lang]);

  const districtBuildings = useMemo(() => {
    return BUILDINGS.filter((b) => b.districtSlug === district.slug).map((b) =>
      getLocalizedBuilding(b, lang)
    );
  }, [district.slug, lang]);

  const dd = t.districtDetail;

  const getWalkabilityDisplay = (score?: string) => {
    if (!score) return "";
    if (lang === "ru") {
      if (score.includes("High") || score.includes("Превосходная") || score.includes("Высокая")) {
        return "Высокая (Пешеходные бульвары)";
      }
      if (score.includes("Moderate") || score.includes("Средняя") || score.includes("Умеренная")) {
        return "Умеренная (Внутри кластеров)";
      }
      if (score.includes("Car-Dependent") || score.includes("Автомобильная")) {
        return "Автомобильная зависимость";
      }
    }
    return score;
  };

  return (
    <article className="min-h-screen bg-[#0B0F17] text-[#F8FAFC] pb-24 transition-colors">
      {/* Header */}
      <div className="border-b border-[rgba(255,255,255,0.06)] bg-[#0B0F17]/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#94A3B8] mb-6 font-semibold font-mono">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              {dd.breadcrumbHome}
            </Link>
            <span className="text-[rgba(255,255,255,0.2)]">/</span>
            <Link href="/#districts" className="hover:text-[#D4AF37] transition-colors">
              {dd.breadcrumbDistricts}
            </Link>
            <span className="text-[rgba(255,255,255,0.2)]">/</span>
            <span className="text-[#D4AF37] font-bold">{district.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono bg-gradient-to-r from-[#E5C378] to-[#D4AF37] text-[#0B0F17] shadow-md">
                  {dd.masterDeveloper}: {district.developer}
                </span>
                <span className="text-xs text-[#F8FAFC] font-mono font-semibold bg-[#131B26] px-2.5 py-1 rounded-full border border-[rgba(255,255,255,0.1)]">
                  {district.iconicTowersCount}+ {dd.towersCount}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8FAFC] tracking-tight font-editorial">
                {district.name}
              </h1>

              <p className="text-base sm:text-lg text-[#94A3B8] max-w-3xl leading-relaxed">
                {district.overview}
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-[#131B26] border border-[rgba(212,175,55,0.25)] shadow-luxury-card flex items-center gap-6 shrink-0">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold font-mono">
                  {dd.avgRentalYield}
                </div>
                <div className="text-2xl font-extrabold text-[#D4AF37] font-mono mt-0.5 tabular-nums">
                  {district.averageRoi}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* District Photography Showcase */}
        <div className="relative w-full h-80 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-float-card bg-[#0F172A]">
          <Image
            src={district.image}
            alt={district.name}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 z-10">
            <div className="max-w-2xl space-y-2">
              <span className="inline-block text-xs uppercase font-mono tracking-wider bg-white/20 text-white px-3.5 py-1.5 rounded-full border border-white/30 backdrop-blur-md">
                {district.developer}
              </span>
              <h2 className="!text-white text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight drop-shadow-[0_3px_16px_rgba(0,0,0,0.95)]" style={{ color: '#FFFFFF' }}>
                {district.name}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm text-white font-mono font-bold px-4 py-2 rounded-full bg-black/60 border border-white/30 backdrop-blur-md shadow-sm">
                {district.iconicTowersCount}+ {dd.towersCount}
              </span>
              <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-bold font-mono bg-white text-[#059669] shadow-md">
                ROI: {district.averageRoi}
              </span>
            </div>
          </div>
        </div>

        {/* 1. Urban Masterplan & Architectural DNA */}
        <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-4">
          <div className="flex items-center justify-between border-b border-[#EFECE4] pb-3">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                {dd.masterplanBadge}
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-0.5">
                {dd.masterplanTitle}
              </h2>
            </div>
            <span className="text-xs font-mono text-[#78716C]">{dd.masterDeveloperAnalysis}</span>
          </div>
          <p className="text-base text-[#57534E] leading-relaxed max-w-4xl">
            {district.urbanConcept || district.description}
          </p>
          <div className="pt-2">
            <div className="text-xs font-bold text-[#78716C] uppercase tracking-wider mb-2">
              {dd.districtHighlights}:
            </div>
            <div className="flex flex-wrap gap-2">
              {district.keyLandmarks.map((lm) => (
                <span
                  key={lm}
                  className="px-3 py-1 rounded-lg bg-[#FAF8F5] text-xs font-semibold text-[#1C1917] border border-[#E5DFD3]"
                >
                  📍 {lm}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Micro-zones & Sub-districts */}
        {district.subZones && district.subZones.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-3">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                  {dd.subzonesSubtitle}
                </span>
                <h2 className="text-2xl font-bold text-[#1C1917] mt-0.5">
                  {dd.subzonesTitle}
                </h2>
              </div>
              <span className="text-xs font-mono font-bold text-[#8C6A48]">{dd.sqFtPrice}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {district.subZones.map((zone, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#EFECE4] text-[#8C6A48]">
                      {dd.zoneLabel} {idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-[#1C1917]">{zone.name}</h3>
                    <p className="text-xs text-[#57534E] leading-relaxed">{zone.character}</p>
                  </div>
                  <div className="pt-3 border-t border-[#EFECE4] space-y-2 text-xs">
                    <div>
                      <span className="text-[#78716C] block">{dd.avgPriceLabel}</span>
                      <span className="font-mono font-bold text-base text-[#1C1917]">{zone.pricePerSqFtAed}</span>
                    </div>
                    <div>
                      <span className="text-[#78716C] block">{dd.bestForLabel}</span>
                      <span className="font-medium text-[#57534E]">{zone.bestFor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. Transit, Highway Access & Bottlenecks */}
        {district.transitAnalysis && (
          <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-6">
            <div className="flex items-center justify-between border-b border-[#EFECE4] pb-3">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                  {dd.transitSubtitle}
                </span>
                <h2 className="text-2xl font-bold text-[#1C1917] mt-0.5">
                  {dd.transitTitle}
                </h2>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#EFECE4] text-[#8C6A48] border border-[#DDD7CA]">
                {dd.walkabilityLabel} {getWalkabilityDisplay(district.transitAnalysis.walkabilityScore)}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EFECE4] space-y-1.5">
                <div className="font-bold text-sm text-[#1C1917] flex items-center gap-2">
                  <span>🛣️</span>
                  <span>{dd.highwayAccessLabel}</span>
                </div>
                <p className="text-[#57534E] leading-relaxed">{district.transitAnalysis.highwayAccess}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF5F5] border border-[#FED7D7] space-y-1.5">
                <div className="font-bold text-sm text-[#9E4732] flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{dd.bottlenecksLabel}</span>
                </div>
                <p className="text-[#57534E] leading-relaxed">{district.transitAnalysis.rushHourBottleneck}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EFECE4] space-y-1.5">
                <div className="font-bold text-sm text-[#1C1917] flex items-center gap-2">
                  <span>🚇</span>
                  <span>{dd.publicTransitLabel}</span>
                </div>
                <p className="text-[#57534E] leading-relaxed">{district.transitAnalysis.publicTransit}</p>
              </div>
            </div>
          </section>
        )}

        {/* 4. Infrastructure & Operating Audit */}
        {district.infrastructureAudit && (
          <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-6">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                {dd.infrastructureSubtitle}
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-0.5">
                {dd.infrastructureTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white border border-[#E5DFD3]">
                <div className="text-[#78716C] font-semibold">{dd.chillerLabel}</div>
                <div className="text-sm font-bold text-[#1C1917] mt-1">{district.infrastructureAudit.chillerType}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E5DFD3]">
                <div className="text-[#78716C] font-semibold">{dd.stormwaterLabel}</div>
                <div className="text-sm font-bold text-[#1C1917] mt-1">{district.infrastructureAudit.stormwaterResilience}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E5DFD3]">
                <div className="text-[#78716C] font-semibold">{dd.serviceChargesLabel}</div>
                <div className="text-sm font-bold text-[#8C6A48] font-mono mt-1">{district.infrastructureAudit.serviceChargeRangeAed}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E5DFD3]">
                <div className="text-[#78716C] font-semibold">{dd.occupancyLabel}</div>
                <div className="text-sm font-bold text-[#2D6A4F] font-mono mt-1">{district.infrastructureAudit.occupancyRate}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E5DFD3] sm:col-span-2 md:col-span-4">
                <div className="text-[#78716C] font-semibold">{dd.tenantProfileLabel}</div>
                <div className="text-sm font-medium text-[#1C1917] mt-1">{district.infrastructureAudit.targetTenantProfile}</div>
              </div>
            </div>
          </section>
        )}

        {/* 5. Honest Investment Pros & Risks */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-4">
            <h2 className="text-xl font-bold text-[#1C1917] flex items-center gap-2">
              <span className="text-[#2D6A4F]">✓</span>
              <span>{dd.prosTitle}</span>
            </h2>
            <ul className="space-y-3">
              {district.investmentPros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#57534E]">
                  <span className="w-5 h-5 rounded-full bg-[#2D6A4F]/15 text-[#2D6A4F] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-4">
            <h2 className="text-xl font-bold text-[#9E4732] flex items-center gap-2">
              <span>⚠️</span>
              <span>{dd.risksTitle}</span>
            </h2>
            <ul className="space-y-3">
              {(district.investmentRisks || [
                dd.defaultRisk1,
                dd.defaultRisk2
              ]).map((risk, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#57534E]">
                  <span className="w-5 h-5 rounded-full bg-[#9E4732]/15 text-[#9E4732] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    !
                  </span>
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. Iconic Skyscrapers in this District */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-[#E5DFD3] pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                {dd.architecturalPortfolio}
              </span>
              <h2 className="text-2xl font-bold text-[#1C1917] mt-0.5">
                {dd.iconicTowersInDistrict} {district.name}
              </h2>
            </div>
            <span className="text-xs text-[#8C6A48] font-mono font-bold bg-[#EFECE4] px-3 py-1 rounded-full border border-[#DDD7CA]">
              {districtBuildings.length} {dd.towersCount}
            </span>
          </div>

          {districtBuildings.length === 0 ? (
            <p className="text-[#78716C] text-sm italic py-8">
              {t.catalog.noMatch}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {districtBuildings.map((building) => (
                <Link
                  key={building.id}
                  href={`/buildings/${building.slug}/`}
                  className="rounded-2xl border border-[#E5DFD3] bg-white overflow-hidden flex flex-col justify-between hover:border-[#8C6A48] shadow-soft-tint hover:shadow-medium-tint transition-all group"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-[#EFECE4]">
                    <Image
                      src={building.image}
                      alt={building.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold font-mono bg-black/75 text-white border border-white/20 backdrop-blur-md">
                        {building.heightMeters} m
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="text-xs text-white font-mono px-2 py-0.5 rounded bg-black/75 border border-white/20 backdrop-blur-md">
                        {building.yearBuilt}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#1C1917] group-hover:text-[#8C6A48] transition-colors">
                        {building.name}
                      </h3>
                      <p className="text-xs text-[#57534E] line-clamp-3 mt-1.5 leading-relaxed">
                        {building.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EFECE4] flex items-center justify-between text-xs font-bold text-[#8C6A48]">
                      <span>{t.buildingCard.viewDetails}</span>
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </article>
  );
}
