"use client";

import React, { useMemo } from "react";
import { Building, getBuildingFloorPlans, getBuildingDldLedger } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import { getLocalizedFloorPlan, TYPOLOGY_NAMES } from "@/data/floorPlanI18n";
import { getBuildingInvestorReality } from "@/data/investorRealityCheck";
import { getLocalizedBuildingAuditReview } from "@/data/localizedAuditReview";
import { DOSSIER_I18N } from "@/data/localizedDossier";

interface DossierViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  building: Building;
}

export default function DossierViewerModal({
  isOpen,
  onClose,
  building,
}: DossierViewerModalProps) {
  const { lang } = useLang();

  const tDossier = useMemo(() => DOSSIER_I18N[lang] || DOSSIER_I18N.en, [lang]);
  const audit = useMemo(() => getLocalizedBuildingAuditReview(building, lang), [building, lang]);
  const rawPlans = useMemo(() => getBuildingFloorPlans(building), [building]);
  const ledger = useMemo(() => getBuildingDldLedger(building), [building]);
  const { viewRadar, solarExposure, walkability, labels } = useMemo(() => {
    return getBuildingInvestorReality(building, lang);
  }, [building, lang]);

  const plans = useMemo(() => {
    return rawPlans.map((p) => getLocalizedFloorPlan(p, lang, building.name));
  }, [rawPlans, lang, building.name]);

  if (!isOpen) return null;

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200 print:p-0 print:bg-white">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-[#E2E8F0] shadow-2xl p-6 sm:p-10 text-[#0F172A] space-y-8 print:border-none print:shadow-none print:max-h-none print:overflow-visible print:p-4">
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold text-[#8C6A48] uppercase tracking-wider">
              {tDossier.badge}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>🖨️</span>
              <span>{tDossier.savePdf}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* PRINTABLE DOSSIER DOCUMENT BODY */}
        <div className="space-y-8 font-sans">
          {/* Document Masthead */}
          <div className="border-b-2 border-[#0F172A] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#8C6A48]">
                Dubai Architecture Heritage Registry • Est. 2006
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-1 font-heading">
                {building.name}
              </h1>
              <div className="text-xs sm:text-sm text-[#64748B] mt-1 font-mono">
                {building.district} • {building.type} • {building.status}
              </div>
            </div>

            <div className="text-left sm:text-right font-mono text-xs space-y-1">
              <div className="px-3 py-1 rounded-md bg-[#FAF8F5] border border-[#DDD7CA] text-[#8C6A48] font-bold inline-block">
                ARCHIVE DOSSIER: #{building.legacyId || building.id}
              </div>
              <div className="text-[#64748B] text-[11px]">DLD / RERA Audited: 2025/2026</div>
            </div>
          </div>

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-2xl text-xs font-mono">
            <div>
              <span className="text-[#64748B] block">{tDossier.height}:</span>
              <strong className="text-sm font-bold text-[#0F172A]">{building.heightMeters} m ({building.heightFeet} ft)</strong>
            </div>
            <div>
              <span className="text-[#64748B] block">{tDossier.storeys}:</span>
              <strong className="text-sm font-bold text-[#0F172A]">{building.floors} {tDossier.levels}</strong>
            </div>
            <div>
              <span className="text-[#64748B] block">{tDossier.yearBuilt}:</span>
              <strong className="text-sm font-bold text-[#0F172A]">{building.yearBuilt}</strong>
            </div>
            <div>
              <span className="text-[#64748B] block">{tDossier.architect}:</span>
              <strong className="text-sm font-bold text-[#0F172A]">{building.architect}</strong>
            </div>
          </div>

          {/* Section 1: Independent Engineering Audit Verdict */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider font-mono border-b border-[#E2E8F0] pb-1.5 flex items-center gap-2">
              <span>⚖️</span>
              <span>{tDossier.sec1Title}</span>
            </h2>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] text-xs sm:text-sm text-[#334155] leading-relaxed">
              {audit.honestVerdict}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="font-bold text-emerald-800 uppercase tracking-wide">✓ {tDossier.verifiedStrengths}</div>
                <ul className="space-y-1 text-emerald-950">
                  {audit.strengths.map((s, idx) => (
                    <li key={idx}>• {s}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-2">
                <div className="font-bold text-rose-800 uppercase tracking-wide">⚠ {tDossier.operationalFlaws}</div>
                <ul className="space-y-1 text-rose-950">
                  {audit.pitfallsAndWeaknesses.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: View Blocker Radar & Horizon Integrity */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider font-mono border-b border-[#E2E8F0] pb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span>🛡️</span>
                <span>{tDossier.sec2Title}</span>
              </span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-bold">
                {viewRadar.status}
              </span>
            </h2>
            <p className="text-xs text-[#334155] leading-relaxed">
              {viewRadar.assessment}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <strong className="text-emerald-900 block mb-1">✓ {labels.protectedOrientations}:</strong>
                <ul className="space-y-1 text-emerald-950">
                  {viewRadar.protectedOrientations.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
                <strong className="text-amber-900 block mb-1">⚠ {labels.threatOrientations}:</strong>
                {viewRadar.threatOrientations.length > 0 ? (
                  <ul className="space-y-1 text-amber-950">
                    {viewRadar.threatOrientations.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-[#64748B] italic">{tDossier.unobstructableFrontline}</span>
                )}
              </div>
            </div>
          </div>

          {/* Section 3: Sun & Thermal Exposure */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider font-mono border-b border-[#E2E8F0] pb-1.5 flex items-center gap-2">
              <span>☀️</span>
              <span>{tDossier.sec3Title}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-200">
                <strong className="text-sky-900 block mb-0.5">❄️ {labels.optimalAspect}:</strong>
                <span className="text-slate-700">{solarExposure.optimalAspect}</span>
              </div>
              <div className="p-3 rounded-xl bg-orange-50 border border-orange-200">
                <strong className="text-orange-900 block mb-0.5">🔥 {labels.harshAspect}:</strong>
                <span className="text-slate-700">{solarExposure.harshAspect}</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] text-xs text-[#57534E]">
              <strong>💡 {labels.residentTip}:</strong> {solarExposure.residentTip}
            </div>
          </div>

          {/* Section 4: Walkability & Transit Reality */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider font-mono border-b border-[#E2E8F0] pb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span>🚶</span>
                <span>{tDossier.sec4Title}</span>
              </span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-white font-mono font-bold">
                {walkability.score}/100 • {walkability.category}
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                <span className="text-[#64748B] block">🚇 {labels.metroStationLabel}:</span>
                <strong className="text-[#0F172A] block mt-0.5">{walkability.metroStation}</strong>
                <span className="text-emerald-700 font-bold block mt-0.5">{walkability.metroDistanceMinutes} {labels.metroMinutesLabel} ({walkability.metroAccessType})</span>
              </div>
              <div className="p-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                <span className="text-[#64748B] block">🛒 {labels.dailyEssentialsLabel}:</span>
                <span className="text-slate-700 block mt-0.5">{walkability.dailyEssentialsOnFoot}</span>
              </div>
            </div>
          </div>

          {/* Section 5: Complete Structural & Geotechnical Passport */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider font-mono border-b border-[#E2E8F0] pb-1.5 flex items-center gap-2">
              <span>🏗️</span>
              <span>{tDossier.sec5Title}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-[#E2E8F0] bg-white">
                <div className="text-[#64748B] font-mono">{tDossier.deepFoundations}:</div>
                <div className="font-bold mt-1 text-[#0F172A]">{building.foundation.pilesCount} {tDossier.piles} • {building.foundation.pileDepthMeters}{tDossier.depth}</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">{building.foundation.bedrockType}</div>
              </div>

              <div className="p-3 rounded-xl border border-[#E2E8F0] bg-white">
                <div className="text-[#64748B] font-mono">{tDossier.windEng}:</div>
                <div className="font-bold mt-1 text-[#0F172A]">{building.windStructural.lateralSystem}</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">{tDossier.swayLabel || "Sway"}: {building.windStructural.maxApexSwayMeters} • {building.windStructural.concreteStrengthGrade}</div>
              </div>

              <div className="p-3 rounded-xl border border-[#E2E8F0] bg-white">
                <div className="text-[#64748B] font-mono">{tDossier.facadeEnv}:</div>
                <div className="font-bold mt-1 text-[#0F172A]">{building.facade.glazingType}</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">SHGC: {building.facade.shgcSolarCoefficient} • U-Val: {building.facade.uValueWPerM2K}</div>
              </div>
            </div>
          </div>

          {/* Section 6: Official Mollak DLD Service Charges & Operating Reality */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider font-mono border-b border-[#E2E8F0] pb-1.5 flex items-center gap-2">
              <span>📊</span>
              <span>{tDossier.sec6Title}</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-xl">
              <div>
                <span className="text-[#64748B] block">{tDossier.serviceCharge}:</span>
                <strong className="text-sm font-bold text-[#8C6A48] font-mono">{ledger.metrics.serviceChargeMollakAed} AED/{tDossier.sqftUnit || "sq.ft"}</strong>
              </div>
              <div>
                <span className="text-[#64748B] block">{tDossier.cooling}:</span>
                <strong className="text-sm font-bold text-[#0F172A]">{building.operatingSpecs.coolingProvider}</strong>
              </div>
              <div>
                <span className="text-[#64748B] block">{tDossier.peakWait}:</span>
                <strong className="text-sm font-bold text-[#0F172A] font-mono">{audit.elevatorPeakWaitReality}</strong>
              </div>
              <div>
                <span className="text-[#64748B] block">{tDossier.holidayHomes}:</span>
                <strong className="text-sm font-bold text-[#059669]">{audit.airbnbHolidayHomesPolicy}</strong>
              </div>
            </div>
            <div className="text-[11px] text-[#64748B] font-mono p-2.5 bg-[#FAF8F5] rounded-xl border border-[#DDD7CA]">
              💡 {audit.hiddenOperatingCosts}
            </div>
          </div>

          {/* Section 7: Architectural Floor Plans Summary */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider font-mono border-b border-[#E2E8F0] pb-1.5 flex items-center gap-2">
              <span>📐</span>
              <span>{tDossier.sec7Title}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {plans.map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl border border-[#E2E8F0] bg-white space-y-1.5">
                  <div className="flex justify-between items-baseline font-bold text-[#0F172A]">
                    <span className="text-sm font-heading">{p.typeTag}</span>
                    <span className="font-mono text-[#8C6A48] font-bold">{p.totalAreaSqFt} {tDossier.sqftUnit || "sq.ft"} ({p.totalAreaSqM} m²)</span>
                  </div>
                  <div className="text-[#64748B] text-[11px] leading-relaxed">
                    {tDossier.internalArea}: {p.internalAreaSqFt} {tDossier.sqftUnit || "sq.ft"} • {tDossier.balconyArea}: {p.balconyAreaSqFt} {tDossier.sqftUnit || "sq.ft"} • {p.roomsBreakdown.bedrooms} {tDossier.bedrooms}, {p.roomsBreakdown.bathrooms} {tDossier.bathrooms}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 8: Recent Verified DLD Transaction Ledger */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider font-mono border-b border-[#E2E8F0] pb-1.5 flex items-center gap-2">
              <span>🏛️</span>
              <span>{tDossier.sec8Title}</span>
            </h2>
            <table className="w-full text-left text-xs border border-[#E2E8F0] rounded-xl overflow-hidden">
              <thead className="bg-[#F8FAFC] font-mono text-[#64748B] text-[10px] uppercase">
                <tr>
                  <th className="p-2.5">{tDossier.thDate}</th>
                  <th className="p-2.5">{tDossier.thTypology}</th>
                  <th className="p-2.5">{tDossier.thArea}</th>
                  <th className="p-2.5">{tDossier.thRate}</th>
                  <th className="p-2.5 text-right">{tDossier.thAmount}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] font-mono">
                {ledger.recentTransactions.slice(0, 4).map((tx) => (
                  <tr key={tx.id}>
                    <td className="p-2.5 text-[#64748B]">{tx.date} ({tx.id})</td>
                    <td className="p-2.5 font-bold text-[#0F172A]">{TYPOLOGY_NAMES[tx.unitType]?.[lang] || tx.unitType}</td>
                    <td className="p-2.5">{tx.areaSqFt} {tDossier.sqftUnit || "sq.ft"}</td>
                    <td className="p-2.5 text-[#8C6A48] font-bold">{tx.pricePerSqFtAed} AED</td>
                    <td className="p-2.5 text-right font-bold text-[#0F172A]">{new Intl.NumberFormat("en-US").format(tx.amountAed)} AED</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Document Verification & Disclaimer Seal */}
          <div className="border-t-2 border-[#0F172A] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-[#64748B] gap-4">
            <div className="space-y-1">
              <div className="font-mono font-bold text-[#0F172A]">
                DUBAI-ARCHITECTURE.INFO • INDEPENDENT REPOSITORY
              </div>
              <div className="text-[11px]">
                {tDossier.certText}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] text-[11px] text-[#78716C] max-w-sm">
              <strong className="text-[#8C6A48] font-bold">
                {tDossier.confidentialTitle}
              </strong>{" "}
              {tDossier.confidentialText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
