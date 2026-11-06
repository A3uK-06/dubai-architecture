"use client";

import React, { useMemo } from "react";
import { Building, getBuildingAuditReview, getBuildingFloorPlans, getBuildingDldLedger } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import { getLocalizedFloorPlan, TYPOLOGY_NAMES } from "@/data/floorPlanI18n";

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

  const audit = useMemo(() => getBuildingAuditReview(building), [building]);
  const rawPlans = useMemo(() => getBuildingFloorPlans(building), [building]);
  const ledger = useMemo(() => getBuildingDldLedger(building), [building]);

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
              {lang === "ru" ? "Официальный инженерный паспорт (PDF/Печать)" : "Official Technical Passport (PDF / Print Ready)"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>🖨️</span>
              <span>{lang === "ru" ? "Сохранить как PDF / Печать" : "Save as PDF / Print Document"}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
            >
              ✕
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
              <span className="text-[#64748B] block">{lang === "ru" ? "Высота" : "Official Height"}:</span>
              <strong className="text-sm font-bold text-[#0F172A]">{building.heightMeters} m ({building.heightFeet} ft)</strong>
            </div>
            <div>
              <span className="text-[#64748B] block">{lang === "ru" ? "Этажность" : "Storeys"}:</span>
              <strong className="text-sm font-bold text-[#0F172A]">{building.floors} levels</strong>
            </div>
            <div>
              <span className="text-[#64748B] block">{lang === "ru" ? "Год постройки" : "Year Built"}:</span>
              <strong className="text-sm font-bold text-[#0F172A]">{building.yearBuilt}</strong>
            </div>
            <div>
              <span className="text-[#64748B] block">{lang === "ru" ? "Архитектор" : "Architect"}:</span>
              <strong className="text-sm font-bold text-[#0F172A]">{building.architect}</strong>
            </div>
          </div>

          {/* Section 1: Independent Engineering Audit Verdict */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider font-mono border-b border-[#E2E8F0] pb-1.5 flex items-center gap-2">
              <span>⚖️</span>
              <span>{lang === "ru" ? "1. Заключение технического аудитора" : "1. Independent Engineering Due Diligence"}</span>
            </h2>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] text-xs sm:text-sm text-[#334155] leading-relaxed">
              {audit.honestVerdict}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="font-bold text-emerald-800 uppercase tracking-wide">✓ {lang === "ru" ? "Подтвержденные преимущества" : "Verified Asset Strengths"}</div>
                <ul className="space-y-1 text-emerald-950">
                  {audit.strengths.map((s, idx) => (
                    <li key={idx}>• {s}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-2">
                <div className="font-bold text-rose-800 uppercase tracking-wide">⚠ {lang === "ru" ? "Скрытые минусы и операционные риски" : "Operational Flaws & Buyer Warnings"}</div>
                <ul className="space-y-1 text-rose-950">
                  {audit.pitfallsAndWeaknesses.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: Complete Structural & Geotechnical Passport */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider font-mono border-b border-[#E2E8F0] pb-1.5 flex items-center gap-2">
              <span>🏗️</span>
              <span>{lang === "ru" ? "2. Геотехнический и конструктивный паспорт" : "2. Geotechnical & Structural Passport"}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-[#E2E8F0] bg-white">
                <div className="text-[#64748B] font-mono">{lang === "ru" ? "Свайное поле" : "Deep Foundations"}:</div>
                <div className="font-bold mt-1 text-[#0F172A]">{building.foundation.pilesCount} {lang === "ru" ? "свай" : "piles"} • {building.foundation.pileDepthMeters}m depth</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">{building.foundation.bedrockType}</div>
              </div>

              <div className="p-3 rounded-xl border border-[#E2E8F0] bg-white">
                <div className="text-[#64748B] font-mono">{lang === "ru" ? "Ветроустойчивость" : "Wind Engineering"}:</div>
                <div className="font-bold mt-1 text-[#0F172A]">{building.windStructural.lateralSystem}</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">Sway: {building.windStructural.maxApexSwayMeters} • {building.windStructural.concreteStrengthGrade}</div>
              </div>

              <div className="p-3 rounded-xl border border-[#E2E8F0] bg-white">
                <div className="text-[#64748B] font-mono">{lang === "ru" ? "Фасад и теплофизика" : "Facade & Thermal Envelope"}:</div>
                <div className="font-bold mt-1 text-[#0F172A]">{building.facade.glazingType}</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">SHGC: {building.facade.shgcSolarCoefficient} • U-Val: {building.facade.uValueWPerM2K}</div>
              </div>
            </div>
          </div>

          {/* Section 3: Official Mollak DLD Service Charges & Operating Reality */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider font-mono border-b border-[#E2E8F0] pb-1.5 flex items-center gap-2">
              <span>📊</span>
              <span>{lang === "ru" ? "3. Эксплуатационные расходы и правила кондоминиума" : "3. Operating Economics & Condominium Rules"}</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-xl">
              <div>
                <span className="text-[#64748B] block">{lang === "ru" ? "Тариф Mollak (DLD)" : "Service Charge"}:</span>
                <strong className="text-sm font-bold text-[#8C6A48] font-mono">{ledger.metrics.serviceChargeMollakAed} AED/sq.ft</strong>
              </div>
              <div>
                <span className="text-[#64748B] block">{lang === "ru" ? "Охлаждение" : "District Cooling"}:</span>
                <strong className="text-sm font-bold text-[#0F172A]">{building.operatingSpecs.coolingProvider}</strong>
              </div>
              <div>
                <span className="text-[#64748B] block">{lang === "ru" ? "Лифты в пик" : "Peak Lift Wait"}:</span>
                <strong className="text-sm font-bold text-[#0F172A] font-mono">{audit.elevatorPeakWaitReality}</strong>
              </div>
              <div>
                <span className="text-[#64748B] block">{lang === "ru" ? "Политика Airbnb" : "Holiday Homes"}:</span>
                <strong className="text-sm font-bold text-[#059669]">{audit.airbnbHolidayHomesPolicy}</strong>
              </div>
            </div>
            <div className="text-[11px] text-[#64748B] font-mono p-2.5 bg-[#FAF8F5] rounded-xl border border-[#DDD7CA]">
              💡 {audit.hiddenOperatingCosts}
            </div>
          </div>

          {/* Section 4: Architectural Floor Plans Summary */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider font-mono border-b border-[#E2E8F0] pb-1.5 flex items-center gap-2">
              <span>📐</span>
              <span>{lang === "ru" ? "4. Типоразмеры и планировочный состав" : "4. Unit Typology & Living Areas"}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {plans.map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl border border-[#E2E8F0] bg-white space-y-1.5">
                  <div className="flex justify-between items-baseline font-bold text-[#0F172A]">
                    <span className="text-sm font-heading">{p.typeTag}</span>
                    <span className="font-mono text-[#8C6A48] font-bold">{p.totalAreaSqFt} sq.ft ({p.totalAreaSqM} m²)</span>
                  </div>
                  <div className="text-[#64748B] text-[11px] leading-relaxed">
                    {lang === "ru"
                      ? `Жилая площадь: ${p.internalAreaSqFt} sq.ft • Балкон: ${p.balconyAreaSqFt} sq.ft • Спален: ${p.roomsBreakdown.bedrooms}, Санузлов: ${p.roomsBreakdown.bathrooms}`
                      : `Internal: ${p.internalAreaSqFt} sq.ft • Balcony: ${p.balconyAreaSqFt} sq.ft • ${p.roomsBreakdown.bedrooms} Bed, ${p.roomsBreakdown.bathrooms} Bath`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Recent Verified DLD Transaction Ledger */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider font-mono border-b border-[#E2E8F0] pb-1.5 flex items-center gap-2">
              <span>🏛️</span>
              <span>{lang === "ru" ? "5. Официальные зарегистрированные сделки DLD" : "5. Official Registered DLD Transaction Record"}</span>
            </h2>
            <table className="w-full text-left text-xs border border-[#E2E8F0] rounded-xl overflow-hidden">
              <thead className="bg-[#F8FAFC] font-mono text-[#64748B] text-[10px] uppercase">
                <tr>
                  <th className="p-2.5">{lang === "ru" ? "Дата / ID" : "Date / ID"}</th>
                  <th className="p-2.5">{lang === "ru" ? "Типология" : "Unit Typology"}</th>
                  <th className="p-2.5">{lang === "ru" ? "Площадь" : "Area"}</th>
                  <th className="p-2.5">{lang === "ru" ? "Цена / кв.фут" : "Rate / sq.ft"}</th>
                  <th className="p-2.5 text-right">{lang === "ru" ? "Сумма сделки" : "Amount (AED)"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] font-mono">
                {ledger.recentTransactions.slice(0, 4).map((tx) => (
                  <tr key={tx.id}>
                    <td className="p-2.5 text-[#64748B]">{tx.date} ({tx.id})</td>
                    <td className="p-2.5 font-bold text-[#0F172A]">{TYPOLOGY_NAMES[tx.unitType]?.[lang] || tx.unitType}</td>
                    <td className="p-2.5">{tx.areaSqFt} sq.ft</td>
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
                {lang === "ru"
                  ? "Данные сверены с открытыми реестрами DLD, сервисом Mollak и муниципальной технической документацией."
                  : "Data certified against DLD open transactions, Mollak service charge index, and municipal engineering records."}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] text-[11px] text-[#78716C] max-w-sm">
              <strong className="text-[#8C6A48] font-bold">
                {lang === "ru" ? "Конфиденциальная предпродажная экспертиза:" : "Confidential Pre-Purchase Due Diligence:"}
              </strong>{" "}
              {lang === "ru"
                ? "Для независимой выездной инженерной проверки объекта или верификации эскроу-счетов RERA свяжитесь с аудиторским отделом: info@dubai-architecture.info"
                : "For independent physical engineering inspections or RERA escrow verification, contact senior audit desk: info@dubai-architecture.info"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
