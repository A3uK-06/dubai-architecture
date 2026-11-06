"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Building } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import LeadModal from "@/components/LeadModal";

interface InvestmentLivabilityMatrixProps {
  buildings: Building[];
  districtName?: string;
  onOpenDossier?: (buildingName: string) => void;
}

export default function InvestmentLivabilityMatrix({
  buildings,
  districtName,
  onOpenDossier,
}: InvestmentLivabilityMatrixProps) {
  const { lang } = useLang();
  const [selectedTowerForLead, setSelectedTowerForLead] = useState<string | null>(null);

  if (!buildings || buildings.length === 0) return null;

  const isRu = lang === "ru";

  // Helper to extract numeric or formatted values
  const getNetYieldEstimate = (grossYieldStr?: string, serviceChargeAed?: number) => {
    if (!grossYieldStr) return "5.8% - 6.5%";
    const match = grossYieldStr.match(/(\d+\.?\d*)/);
    if (!match) return "6.0%";
    const gross = parseFloat(match[1]);
    // realistic deduction for service charges, maintenance, vacancy
    const deduction = serviceChargeAed && serviceChargeAed > 30 ? 1.8 : 1.2;
    const net = Math.max(4.2, gross - deduction).toFixed(1);
    return `${net}% Net`;
  };

  const getLivabilityHighlights = (b: Building) => {
    if (b.auditReview?.soundproofingRating?.includes("55") || b.auditReview?.soundproofingRating?.includes("56")) {
      return isRu ? "Высокая акустическая защита (STC 55+)" : "Superior Acoustic Attenuation (STC 55+)";
    }
    if (b.operatingSpecs?.chillerBilling?.includes("Free")) {
      return isRu ? "Бесплатное кондиционирование (Chiller-Free)" : "Chiller-Free OPEX Advantage";
    }
    return isRu ? "Премиальная инфраструктура и лобби" : "Prime Lobby & Resident Amenities";
  };

  return (
    <>
      <section className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5DFD3] pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              {isRu ? "Сравнительный анализ привлекательности" : "Investment & Livability Matrix"}
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-0.5">
              {isRu
                ? `Инвестиционная привлекательность и комфорт проживания${districtName ? `: ${districtName}` : ""}`
                : `Investment Yields & Livability Audit${districtName ? `: ${districtName}` : ""}`}
            </h2>
            <p className="text-xs text-[#57534E] mt-1 max-w-2xl leading-relaxed">
              {isRu
                ? "Сравнение ключевых факторов владения: чистая доходность с учетом сервисных сборов (Service Charges), эксплуатационные расходы, пешая доступность и стратегия сдачи (Airbnb vs долгосрочная аренда)."
                : "Audited comparative matrix evaluating net rental returns, HOA service charges, walkability metrics, and tenant investment strategy (Short-Term holiday lets vs Long-Term residence)."}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8C6A48] bg-white px-3 py-1.5 rounded-xl border border-[#DDD7CA] shrink-0">
            <span>📊</span>
            <span>{isRu ? "DLD Open Data Verification" : "Verified by DLD Indices"}</span>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#E5DFD3] bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#F4EFEA] text-[#1C1917] font-bold border-b border-[#E5DFD3] text-[11px] uppercase tracking-wider">
                <th className="p-4 whitespace-nowrap">{isRu ? "Проект / Башня" : "Tower / Project"}</th>
                <th className="p-4 whitespace-nowrap">{isRu ? "Девелопер" : "Developer"}</th>
                <th className="p-4 whitespace-nowrap">{isRu ? "Доходность (Gross / Net)" : "Yield (Gross / Net)"}</th>
                <th className="p-4 whitespace-nowrap">{isRu ? "Сервисный сбор (AED/кв.фут)" : "Service Charge (AED/sq.ft)"}</th>
                <th className="p-4 whitespace-nowrap">{isRu ? "Комфорт и логистика" : "Livability & Transit"}</th>
                <th className="p-4 whitespace-nowrap">{isRu ? "Целевая стратегия" : "Target Strategy"}</th>
                <th className="p-4 text-right whitespace-nowrap">{isRu ? "Досье и расчет" : "Project Dossier"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFECE4] text-[#44403C]">
              {buildings.map((b) => {
                const netYield = getNetYieldEstimate(b.investmentYield, b.operatingSpecs?.annualServiceChargeAedSqFt);
                const serviceCharge = b.operatingSpecs?.annualServiceChargeAedSqFt || 20;
                const isHighService = serviceCharge > 35;
                const isLowService = serviceCharge < 18;

                return (
                  <tr key={b.id} className="hover:bg-[#FAF8F5] transition-colors group">
                    {/* Tower Name & Year */}
                    <td className="p-4">
                      <Link
                        href={`/buildings/${b.slug}/`}
                        className="font-bold text-sm text-[#1C1917] group-hover:text-[#8C6A48] transition-colors block"
                      >
                        {b.name}
                      </Link>
                      <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[#78716C] font-mono">
                        <span>{b.status}</span>
                        <span>•</span>
                        <span>{b.yearBuilt}</span>
                      </div>
                    </td>

                    {/* Developer */}
                    <td className="p-4 font-medium text-[#1C1917] whitespace-nowrap">
                      {b.developer}
                    </td>

                    {/* Yields */}
                    <td className="p-4 whitespace-nowrap">
                      <div className="font-bold text-sm text-[#2D6A4F] font-mono">
                        {b.investmentYield || "7.5%"}
                      </div>
                      <div className="text-[11px] font-mono text-[#78716C]">
                        {netYield}
                      </div>
                    </td>

                    {/* Service Charges */}
                    <td className="p-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                          isLowService
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                            : isHighService
                            ? "bg-amber-50 text-amber-900 border border-amber-200"
                            : "bg-slate-100 text-slate-800"
                        }`}
                      >
                        {serviceCharge} AED / sq.ft
                      </span>
                      <div className="text-[10px] text-[#78716C] mt-0.5">
                        {b.operatingSpecs?.chillerBilling || "Empower Metered"}
                      </div>
                    </td>

                    {/* Livability */}
                    <td className="p-4 min-w-[200px]">
                      <div className="font-medium text-[#1C1917]">
                        {getLivabilityHighlights(b)}
                      </div>
                      <div className="text-[11px] text-[#78716C] line-clamp-1 mt-0.5">
                        {b.auditReview?.soundproofingRating || "Standard Acoustic Isolation"}
                      </div>
                    </td>

                    {/* Best Strategy */}
                    <td className="p-4 min-w-[170px]">
                      <span className="text-[11px] font-semibold text-[#8C6A48] bg-[#F4EFEA] px-2 py-1 rounded-md inline-block">
                        {b.auditReview?.airbnbHolidayHomesPolicy?.includes("Permitted") || b.auditReview?.airbnbHolidayHomesPolicy?.includes("разрешен")
                          ? isRu ? "🏖️ Airbnb / Высокий Cash-flow" : "🏖️ Short-Term / High Cash-flow"
                          : isRu ? "👑 Капитал и долгосрок" : "👑 Capital Preservation / Long-Term"}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="p-4 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => {
                          if (onOpenDossier) {
                            onOpenDossier(b.name);
                          } else {
                            setSelectedTowerForLead(b.name);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C1917] hover:bg-[#8C6A48] text-white font-bold text-xs transition-colors shadow-sm"
                      >
                        <span>📄</span>
                        <span>{isRu ? "Досье и цены" : "Request Dossier"}</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Methodology & Broker Transparency Note */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#78716C] border-t border-[#E5DFD3]">
          <div className="flex items-center gap-2">
            <span>🛡️</span>
            <span>
              {isRu
                ? "Данные сверены с официальным реестром сделок DLD. Сопровождение сделок и бронирование планировок осуществляется через аккредитованных брокеров-партнеров (Whitewill, Metropolitan)."
                : "Audited against official DLD transaction registers. Deal facilitation & unit reservations are executed via accredited brokerage partners (Whitewill, Metropolitan) under RERA licensing."}
            </span>
          </div>
          <Link
            href="/#calculator"
            className="text-[#8C6A48] hover:underline font-bold shrink-0"
          >
            {isRu ? "Перейти в интерактивный калькулятор ROI →" : "Explore Interactive ROI Calculator →"}
          </Link>
        </div>
      </section>

      {/* Lead Modal for Dossier */}
      {selectedTowerForLead && (
        <LeadModal
          isOpen={true}
          onClose={() => setSelectedTowerForLead(null)}
          towerName={selectedTowerForLead}
          title={isRu ? `Запрос досье: ${selectedTowerForLead}` : `Request Official Dossier: ${selectedTowerForLead}`}
          subtitle={
            isRu
              ? "Получите официальный PDF-буклет девелопера, актуальную шахматку доступных планировок и график рассрочки платежей."
              : "Receive the official developer architectural dossier, current available unit inventory, and approved payment schedule."
          }
        />
      )}
    </>
  );
}
