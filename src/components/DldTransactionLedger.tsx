"use client";

import React, { useState, useMemo } from "react";
import { Building, getBuildingDldLedger } from "@/data/buildings";
import { useLang } from "@/context/LangContext";
import { DLD_PROCEDURES, TYPOLOGY_NAMES, localizeFloorZone } from "@/data/floorPlanI18n";

interface DldTransactionLedgerProps {
  building: Building;
}

export default function DldTransactionLedger({ building }: DldTransactionLedgerProps) {
  const { lang } = useLang();
  const ledger = useMemo(() => getBuildingDldLedger(building), [building]);
  const [filterType, setFilterType] = useState<string>("all");

  const filteredTransactions = useMemo(() => {
    if (filterType === "all") return ledger.recentTransactions;
    if (filterType === "1bed") {
      return ledger.recentTransactions.filter((tx) => tx.unitType.toLowerCase().includes("1-bed"));
    }
    if (filterType === "2bed") {
      return ledger.recentTransactions.filter((tx) => tx.unitType.toLowerCase().includes("2-bed"));
    }
    if (filterType === "3bed") {
      return ledger.recentTransactions.filter((tx) => tx.unitType.toLowerCase().includes("3-bed"));
    }
    return ledger.recentTransactions;
  }, [ledger.recentTransactions, filterType]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  const getLocalizedProcedure = (procedure: string) => {
    return DLD_PROCEDURES[procedure]?.[lang] || procedure;
  };

  const getLocalizedUnitType = (unitType: string) => {
    return TYPOLOGY_NAMES[unitType]?.[lang] || unitType;
  };

  return (
    <section id="dld-ledger" className="rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 lg:p-9 shadow-float-card space-y-8">
      {/* Header with DLD Open Data Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F1F5F9] pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-sans font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{lang === "ru" ? "Официальные данные DLD Open Data" : "Verified DLD Open Data Stream"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] font-heading">
            {lang === "ru" ? "Реестр зарегистрированных сделок (DLD)" : "Dubai Land Department Transaction Ledger"}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] font-sans leading-relaxed max-w-3xl">
            {lang === "ru"
              ? `Фактические сделки купли-продажи и ипотеки в ${building.name}, зарегистрированные Земельным департаментом Дубая.`
              : `Actual title-deed sales and mortgage transactions in ${building.name} officially registered with DLD.`}
          </p>
        </div>
        <div className="text-right self-start sm:self-auto font-sans text-xs shrink-0">
          <div className="text-[#64748B] font-medium">{ledger.metrics.lastUpdatedDld}</div>
          <div className="font-bold text-[#8C6A48] text-sm mt-0.5">{building.district}</div>
        </div>
      </div>

      {/* 4 Core Market KPIs with Generous Spacing */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        {/* Median Price Per Sq.Ft */}
        <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
          <div className="text-xs text-[#64748B] font-sans font-bold uppercase tracking-wider">
            {lang === "ru" ? "Медиана за кв. фут" : "Median Price / sq.ft"}
          </div>
          <div className="text-xl sm:text-2xl font-extrabold font-sans tabular-nums text-[#0F172A]">
            {formatNumber(ledger.metrics.medianPricePerSqFtAed)} <span className="text-xs font-normal text-[#64748B]">AED</span>
          </div>
          <div className="text-xs font-sans text-[#059669] font-bold">
            +{ledger.metrics.annualAppreciationPercent}% {lang === "ru" ? "за 12 мес." : "12M trend"}
          </div>
        </div>

        {/* 90-Day Transaction Volume */}
        <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
          <div className="text-xs text-[#64748B] font-sans font-bold uppercase tracking-wider">
            {lang === "ru" ? "Сделок за 90 дней" : "90-Day Volume"}
          </div>
          <div className="text-xl sm:text-2xl font-extrabold font-sans tabular-nums text-[#8C6A48]">
            {ledger.metrics.totalTransactions90Days} <span className="text-xs font-normal text-[#64748B]">{lang === "ru" ? "договоров" : "deeds"}</span>
          </div>
          <div className="text-xs font-sans text-[#64748B] font-medium">
            {lang === "ru" ? "Высокая ликвидность" : "Active liquidity"}
          </div>
        </div>

        {/* Official Mollak Service Charge */}
        <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
          <div className="text-xs text-[#64748B] font-sans font-bold uppercase tracking-wider">
            {lang === "ru" ? "Тариф Mollak (DLD)" : "Mollak Service Charge"}
          </div>
          <div className="text-xl sm:text-2xl font-extrabold font-sans tabular-nums text-[#0F172A]">
            {ledger.metrics.serviceChargeMollakAed} <span className="text-xs font-normal text-[#64748B]">AED/sq.ft</span>
          </div>
          <div className="text-xs font-sans text-[#64748B] font-medium">
            {lang === "ru" ? "Утверждено RERA" : "RERA Approved"}
          </div>
        </div>

        {/* Median Annual Lease (Ejari) */}
        <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
          <div className="text-xs text-[#64748B] font-sans font-bold uppercase tracking-wider">
            {lang === "ru" ? "Аренда 1-Bed (Ejari)" : "1-Bed Rent (Ejari)"}
          </div>
          <div className="text-xl sm:text-2xl font-extrabold font-sans tabular-nums text-[#059669]">
            {formatNumber(ledger.metrics.rentalMedian1BrAed)} <span className="text-xs font-normal text-[#64748B]">AED/yr</span>
          </div>
          <div className="text-xs font-sans text-[#64748B] font-medium">
            2-Bed: ~{formatNumber(ledger.metrics.rentalMedian2BrAed)} AED
          </div>
        </div>
      </div>

      {/* Filter Tabs for Transaction Table */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap gap-2 text-xs font-sans">
          {[
            { id: "all", label: lang === "ru" ? "Все сделки" : "All Deeds" },
            { id: "1bed", label: TYPOLOGY_NAMES["1-Bedroom Suite"]?.[lang] || "1-Bedroom" },
            { id: "2bed", label: TYPOLOGY_NAMES["2-Bedroom Executive"]?.[lang] || "2-Bedroom" },
            { id: "3bed", label: TYPOLOGY_NAMES["3-Bedroom Residence"]?.[lang] || "3-Bedroom" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilterType(tab.id)}
              className={`px-4 py-2 rounded-xl transition-all font-sans font-semibold cursor-pointer ${
                filterType === tab.id
                  ? "bg-[#0F172A] text-white shadow-xs"
                  : "bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="text-xs font-sans text-[#64748B]">
          {lang === "ru" ? "Записей в реестре:" : "Showing:"} <strong className="text-[#0F172A]">{filteredTransactions.length}</strong>
        </div>
      </div>

      {/* Responsive Transaction Ledger Table with Room to Breathe */}
      <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0]">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] font-sans font-bold text-[#64748B] uppercase tracking-wider text-xs">
              <th className="py-4 px-5">{lang === "ru" ? "ID транзакции / Дата" : "Tx ID & Date"}</th>
              <th className="py-4 px-5">{lang === "ru" ? "Тип процедуры" : "Procedure"}</th>
              <th className="py-4 px-5">{lang === "ru" ? "Типология & Зона" : "Unit & Tier"}</th>
              <th className="py-4 px-5">{lang === "ru" ? "Площадь" : "Area"}</th>
              <th className="py-4 px-5">{lang === "ru" ? "Цена / кв. фут" : "Rate / sq.ft"}</th>
              <th className="py-4 px-5 text-right">{lang === "ru" ? "Сумма сделки" : "Total Amount"}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9] text-[#334155] font-sans">
            {filteredTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-[#FAF8F5]/80 transition-colors">
                <td className="py-4 px-5">
                  <div className="font-mono font-bold text-xs sm:text-sm text-[#0F172A]">{tx.id}</div>
                  <div className="text-xs text-[#64748B] font-sans mt-0.5">{tx.date}</div>
                </td>
                <td className="py-4 px-5">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-semibold tracking-wide ${
                      tx.procedure === "Sales"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                        : tx.procedure === "Mortgage"
                        ? "bg-blue-50 text-blue-800 border border-blue-300"
                        : "bg-amber-50 text-amber-800 border border-amber-300"
                    }`}
                  >
                    {getLocalizedProcedure(tx.procedure)}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <div className="font-bold text-[#0F172A] font-sans text-xs sm:text-sm">{getLocalizedUnitType(tx.unitType)}</div>
                  <div className="text-xs text-[#64748B] font-sans mt-0.5">{localizeFloorZone(tx.floorZone, lang)}</div>
                </td>
                <td className="py-4 px-5 font-sans font-semibold tabular-nums text-xs sm:text-sm">
                  {formatNumber(tx.areaSqFt)} sq.ft
                </td>
                <td className="py-4 px-5 font-sans font-bold tabular-nums text-[#8C6A48] text-xs sm:text-sm">
                  {formatNumber(tx.pricePerSqFtAed)} AED
                </td>
                <td className="py-4 px-5 text-right">
                  <div className="font-sans font-extrabold tabular-nums text-[#0F172A] text-sm sm:text-base">
                    {formatNumber(tx.amountAed)} AED
                  </div>
                  <div className="text-xs text-[#64748B] font-sans tabular-nums mt-0.5">
                    ~${formatNumber(Math.round(tx.amountAed * 0.272))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DLD Open Data Guarantee Note */}
      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] text-xs text-[#78716C] leading-relaxed flex items-center justify-between flex-wrap gap-2.5 font-sans">
        <div className="flex items-center gap-2">
          <span>🛡️</span>
          <span>
            {lang === "ru"
              ? "Данные верифицированы с открытым реестром Dubai Land Department и сервисом Mollak. Цены включают реальные зарегистрированные договоры купли-продажи."
              : "Data verified against Dubai Land Department open registers and Mollak escrow portal. Values represent actual legal deeds."}
          </span>
        </div>
        <span className="font-semibold text-[#8C6A48] tracking-wider uppercase text-xs">SOURCE: DLD / MOLLAK</span>
      </div>
    </section>
  );
}
