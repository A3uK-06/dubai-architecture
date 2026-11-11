"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Building } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import LeadModal from "@/components/LeadModal";
import { MATRIX_I18N } from "@/data/localizedMatrix";

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

  const tM = MATRIX_I18N[lang] || MATRIX_I18N.en;

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
      return tM.acousticTag;
    }
    if (b.operatingSpecs?.chillerBilling?.includes("Free")) {
      return tM.chillerTag;
    }
    return tM.amenitiesTag;
  };

  return (
    <>
      <section className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5DFD3] pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              {tM.badge}
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-0.5">
              {tM.title(districtName)}
            </h2>
            <p className="text-xs text-[#57534E] mt-1 max-w-2xl leading-relaxed">
              {tM.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8C6A48] bg-white px-3 py-1.5 rounded-xl border border-[#DDD7CA] shrink-0">
            <span>📊</span>
            <span>{tM.dldVerified}</span>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#E5DFD3] bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#F4EFEA] text-[#1C1917] font-bold border-b border-[#E5DFD3] text-[11px] uppercase tracking-wider">
                <th className="p-4 whitespace-nowrap">{tM.colTower}</th>
                <th className="p-4 whitespace-nowrap">{tM.colDeveloper}</th>
                <th className="p-4 whitespace-nowrap">{tM.colYield}</th>
                <th className="p-4 whitespace-nowrap">{tM.colService}</th>
                <th className="p-4 whitespace-nowrap">{tM.colTransit}</th>
                <th className="p-4 whitespace-nowrap">{tM.colStrategy}</th>
                <th className="p-4 text-right whitespace-nowrap">{tM.colAction}</th>
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
                          ? tM.strategyShortTerm
                          : tM.strategyLongTerm}
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C1917] hover:bg-[#8C6A48] text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
                      >
                        <span>📄</span>
                        <span>{tM.requestDossierBtn}</span>
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
            <span>{tM.footerNote}</span>
          </div>
          <Link
            href="/#calculator"
            className="text-[#8C6A48] hover:underline font-bold shrink-0"
          >
            {tM.calculatorLink}
          </Link>
        </div>
      </section>

      {/* Lead Modal for Dossier */}
      {selectedTowerForLead && (
        <LeadModal
          isOpen={true}
          onClose={() => setSelectedTowerForLead(null)}
          towerName={selectedTowerForLead}
          title={tM.modalTitle(selectedTowerForLead)}
          subtitle={tM.modalSubtitle}
        />
      )}
    </>
  );
}
