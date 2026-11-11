"use client";

import React from "react";
import { useLang } from "@/context/LangContext";

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MethodologyModal({ isOpen, onClose }: MethodologyModalProps) {
  const { lang, isRtl } = useLang();

  if (!isOpen) return null;

  const isRu = lang === "ru";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-[#E5DFD3] shadow-2xl p-6 sm:p-8 text-[#1C1917] ${
          isRtl ? "text-right" : "text-left"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E5DFD3] text-[#78716C] hover:text-[#1C1917] flex items-center justify-center transition-colors cursor-pointer"
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

        {/* Modal Header */}
        <div className="space-y-2 border-b border-[#E5DFD3] pb-5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold font-mono bg-[#8C6A48]/15 text-[#8C6A48]">
              {isRu ? "E-E-A-T & DLD Compliance" : "E-E-A-T & Regulatory Compliance"}
            </span>
            <span className="text-xs text-[#78716C] font-mono">
              EST. 2006 • Dubai Land Department
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917]">
            {isRu
              ? "Методология расчетов, источники данных и правовой статус"
              : "Analytical Methodology, Data Verification & Regulatory Status"}
          </h2>
          <p className="text-xs text-[#57534E] leading-relaxed">
            {isRu
              ? "Прозрачные алгоритмы оценки инвестиционной привлекательности, регламент сбора данных и структура партнерства с лицензированными брокерами ОАЭ."
              : "Transparent valuation frameworks, empirical data validation procedures, and official licensing compliance with accredited UAE brokerage partners."}
          </p>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6 text-xs sm:text-sm text-[#44403C] leading-relaxed">
          {/* Section 1: ROI & Yield Methodology */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] space-y-3">
            <h3 className="font-bold text-base text-[#1C1917] flex items-center gap-2">
              <span>📈</span>
              <span>
                {isRu
                  ? "1. Методология расчета доходности (Gross vs Net Yield)"
                  : "1. Yield Calculation Framework (Gross vs Net Return)"}
              </span>
            </h3>
            <p>
              {isRu
                ? "В отличие от рекламных витрин, публикующих завышенные «грязные» цифры, наш алгоритм разделяет валовую (Gross) и чистую (Net) доходность с учетом всех обязательных расходов:"
                : "Unlike standard real estate portals advertising gross headline yields, our analytical models strictly distinguish between Gross Cash Flow and Net Cash-on-Cash Return:"}
            </p>
            <div className="space-y-2 font-mono text-xs bg-white p-3.5 rounded-xl border border-[#DDD7CA]">
              <div className="text-[#8C6A48] font-bold">
                {isRu ? "Формула чистой доходности (Net Yield):" : "Net Rental Yield Formula:"}
              </div>
              <div className="text-slate-800">
                Net Yield = [Годовой арендный доход − (Service Charge × SqFt) − Chiller Base − OPEX (5%)] / [Цена покупки + Сборы DLD (4%) + Рег. сбор (4,200 AED)] × 100%
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-[#57534E] pt-1">
              <li>
                <strong>{isRu ? "Сервисные сборы (Service Charges):" : "HOA Service Charges:"}</strong>{" "}
                {isRu
                  ? "Ежегодные ставки от 12 до 65 AED за кв. фут, верифицированные по официальной базе RERA Service Charge Index."
                  : "Annual building maintenance tariffs ranging from 12 to 65 AED/sq.ft, audited via official RERA Service Charge index."}
              </li>
              <li>
                <strong>{isRu ? "Кондиционирование (Chiller):" : "District Cooling Fees:"}</strong>{" "}
                {isRu
                  ? "Учет фиксированных тарифов на мощность (Capacity charge) Empower / Tabreed либо статус Chiller-Free."
                  : "Factoring Empower/Tabreed fixed quarterly capacity demand fees versus buildings with Chiller-Free developer subsidies."}
              </li>
            </ul>
          </div>

          {/* Section 2: Data Sources */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] space-y-3">
            <h3 className="font-bold text-base text-[#1C1917] flex items-center gap-2">
              <span>🏛️</span>
              <span>
                {isRu ? "2. Источники данных и верификация" : "2. Primary Data Sources & Verification"}
              </span>
            </h3>
            <p>
              {isRu
                ? "Все ценовые вилки, исторические продажи и ставки аренды агрегируются из официальных государственных реестров:"
                : "All transaction histories, price benchmarks, and rental medians are compiled from official regulatory repositories:"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-[#DDD7CA]">
                <div className="font-bold text-[#1C1917]">Dubai Land Department (DLD)</div>
                <div className="text-[#78716C] mt-1">
                  {isRu
                    ? "Открытые реестры сделок купли-продажи, залогов и ипотек в режиме реального времени."
                    : "Real-time open transaction registries covering sales, title transfers, and recorded mortgages."}
                </div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#DDD7CA]">
                <div className="font-bold text-[#1C1917]">RERA Rental Matrix</div>
                <div className="text-[#78716C] mt-1">
                  {isRu
                    ? "Официальный калькулятор пересмотра арендных ставок согласно Постановлению № 43 от 2013 года."
                    : "Official statutory rental increase calculator governed by Decree No. 43 of 2013."}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Legal & Brokerage Model (Whitewill & Metropolitan) */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] space-y-3">
            <h3 className="font-bold text-base text-[#1C1917] flex items-center gap-2">
              <span>🤝</span>
              <span>
                {isRu
                  ? "3. Правовой статус и проведение сделок (RERA Partners)"
                  : "3. Regulatory Execution & Brokerage Partnership"}
              </span>
            </h3>
            <p>
              {isRu
                ? "Портал Dubai Architecture (dubai-architecture.info) функционирует как независимый архитектурный архив, научно-инженерная база данных и аналитический хаб."
                : "Dubai Architecture (dubai-architecture.info) operates as an independent architectural archive, technical engineering index, and property analytics portal."}
            </p>
            <p>
              {isRu
                ? "Брокерские услуги, официальное бронирование планировок у застройщиков, оформление договоров купли-продажи (SPA) и эскроу-счетов осуществляются через наших аккредитованных лицензированных партнеров — ведущие брокерские агентства недвижимости ОАЭ, включая Metropolitan Premium Properties и Whitewill, обладающих действующими лицензиями RERA / Dubai Land Department."
                : "Real estate brokerage consultations, official developer unit reservations, Sales & Purchase Agreement (SPA) registrations, and escrow payments are executed exclusively through accredited UAE brokerage partners, including Metropolitan Premium Properties and Whitewill, operating under certified RERA / Dubai Land Department broker licenses."}
            </p>
          </div>

          {/* Section 4: Golden Visa Criteria */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] space-y-3">
            <h3 className="font-bold text-base text-[#1C1917] flex items-center gap-2">
              <span>🇦🇪</span>
              <span>
                {isRu ? "4. Регламент Golden Visa (10 лет)" : "4. UAE 10-Year Golden Visa Regulatory Framework"}
              </span>
            </h3>
            <p>
              {isRu
                ? "Критерии соответствия ВНЖ ОАЭ на 10 лет рассчитываются согласно Федеральному декрету-закону ОАЭ № 29 от 2020 года и регламентам GDRFA. Требуется владение объектом (или портфелем) общей стоимостью от 2,000,000 AED (включая строящиеся объекты от одобренных девелоперов)."
                : "Golden Visa eligibility estimates are based on UAE Cabinet Resolutions and GDRFA criteria, mandating a minimum combined unencumbered property valuation of AED 2,000,000 (including qualifying off-plan assets with verified escrow accounts)."}
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-[#E5DFD3] flex items-center justify-between">
          <span className="text-xs text-[#78716C] font-mono">
            RERA Reference: Law No. (7) of 2006
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#1C1917] hover:bg-[#8C6A48] text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            {isRu ? "Понятно" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}
