"use client";

import React, { useState, useMemo } from "react";
import { useLang } from "@/context/LangContext";

type CurrencyCode = "AED" | "USD" | "EUR" | "GBP" | "RUB" | "CNY";

interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rateFromAed: number;
}

const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  AED: { code: "AED", symbol: "AED", name: "UAE Dirham", rateFromAed: 1 },
  USD: { code: "USD", symbol: "$", name: "US Dollar", rateFromAed: 0.27229 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", rateFromAed: 0.252 },
  GBP: { code: "GBP", symbol: "£", name: "British Pound", rateFromAed: 0.216 },
  RUB: { code: "RUB", symbol: "₽", name: "Russian Ruble", rateFromAed: 26.8 },
  CNY: { code: "CNY", symbol: "¥", name: "Chinese Yuan", rateFromAed: 1.97 },
};

interface RoiCalculatorProps {
  initialPriceAed?: number;
  initialYieldPercent?: number;
  buildingName?: string;
  onOpenInquire?: (tower: string) => void;
  onOpenLeadModal?: (details: { budget: string; yield: string; currency: string }) => void;
}

export default function RoiCalculator({
  initialPriceAed = 2000000,
  initialYieldPercent = 8.0,
  buildingName,
  onOpenInquire,
}: RoiCalculatorProps) {
  const { t } = useLang();

  const [priceAed, setPriceAed] = useState<number>(initialPriceAed);
  const [grossYield, setGrossYield] = useState<number>(initialYieldPercent);
  const [serviceChargePercent, setServiceChargePercent] = useState<number>(1.2);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>("AED");

  const curr = CURRENCIES[selectedCurrency];

  // Calculations
  const calculations = useMemo(() => {
    const grossIncomeAed = priceAed * (grossYield / 100);
    const serviceChargesAed = priceAed * (serviceChargePercent / 100);
    const netIncomeAed = Math.max(0, grossIncomeAed - serviceChargesAed);
    const netRoi = priceAed > 0 ? (netIncomeAed / priceAed) * 100 : 0;
    const isGoldenVisaEligible = priceAed >= 2000000;
    const fiveYearAppreciationAed = priceAed * 0.28;
    const fiveYearTotalReturnAed = netIncomeAed * 5 + fiveYearAppreciationAed;

    const rate = curr.rateFromAed;
    const formatCurr = (valAed: number) => {
      const converted = valAed * rate;
      return new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0,
      }).format(converted);
    };

    return {
      priceConverted: formatCurr(priceAed),
      grossIncomeConverted: formatCurr(grossIncomeAed),
      serviceChargesConverted: formatCurr(serviceChargesAed),
      netIncomeConverted: formatCurr(netIncomeAed),
      fiveYearTotalReturnConverted: formatCurr(fiveYearTotalReturnAed),
      netRoiFormatted: netRoi.toFixed(2),
      isGoldenVisaEligible,
    };
  }, [priceAed, grossYield, serviceChargePercent, curr]);

  const handlePresetPrice = (val: number) => {
    setPriceAed(val);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I used the ROI Calculator on Dubai-Architecture.info. Property budget: ${calculations.priceConverted} ${curr.symbol}. Projected Net ROI: ${calculations.netRoiFormatted}%. Please send matching verified units${buildingName ? ` in ${buildingName}` : ""}.`
  );

  return (
    <section id="calculator" className="py-16 md:py-24 border-b border-[#E2E8F0] bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Glassmorphic Currency Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#F1F5F9] text-[#0F172A] border border-[#CBD5E1] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
              <span>{t.calculator.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight font-heading">
              {t.calculator.title}
            </h2>
            <p className="text-[#475569] text-base sm:text-lg max-w-xl mt-2 leading-relaxed">
              {t.calculator.subtitle}
            </p>
          </div>

          {/* Glassmorphic Currency Pill Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl backdrop-blur-[16px] bg-white/85 border border-white/60 shadow-sm">
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cCode) => (
              <button
                key={cCode}
                type="button"
                onClick={() => setSelectedCurrency(cCode)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
                  selectedCurrency === cCode
                    ? "bg-[#0F172A] text-white shadow-sm"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-white"
                }`}
              >
                {cCode}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Interactive Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] space-y-7 shadow-float-card">
            {/* Property Price Slider */}
            <div className="space-y-3.5">
              <div className="flex justify-between items-baseline">
                <label className="text-sm sm:text-base font-bold text-[#0F172A]">
                  {t.calculator.propertyPrice}
                </label>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-[#0F172A]">
                  {calculations.priceConverted} <span className="text-[#64748B] text-base sm:text-lg">{curr.symbol}</span>
                </div>
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm pt-1">
                {[
                  { label: "1.5M AED", val: 1500000 },
                  { label: "2M AED (Golden Visa)", val: 2000000 },
                  { label: "3.5M AED", val: 3500000 },
                  { label: "5M AED", val: 5000000 },
                  { label: "10M AED", val: 10000000 },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handlePresetPrice(item.val)}
                    className={`px-3.5 py-2 rounded-xl border font-mono text-xs sm:text-sm transition-all ${
                      priceAed === item.val
                        ? "bg-[#0F172A] text-white border-[#0F172A] font-bold shadow-xs"
                        : "bg-[#F8F9FA] text-[#475569] border-[#E2E8F0] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Tactile Range Slider */}
              <div className="pt-2">
                <input
                  type="range"
                  min="500000"
                  max="25000000"
                  step="100000"
                  value={priceAed}
                  onChange={(e) => setPriceAed(Number(e.target.value))}
                  className="w-full h-3 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#0F172A]"
                />
                <div className="flex justify-between text-xs sm:text-sm font-mono text-[#64748B] mt-2">
                  <span>500K AED</span>
                  <span>25M AED</span>
                </div>
              </div>
            </div>

            {/* Gross Yield Slider */}
            <div className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <div className="flex justify-between items-baseline">
                <span className="text-sm sm:text-base font-bold text-[#0F172A]">{t.calculator.rentalYield}</span>
                <span className="font-mono font-bold text-[#059669] text-xl sm:text-2xl">{grossYield}%</span>
              </div>
              <input
                type="range"
                min="4"
                max="14"
                step="0.1"
                value={grossYield}
                onChange={(e) => setGrossYield(Number(e.target.value))}
                className="w-full h-3 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#0F172A]"
              />
              <div className="flex justify-between text-xs sm:text-sm font-mono text-[#64748B] mt-1.5">
                <span>4.0%</span>
                <span>14.0%</span>
              </div>
            </div>

            {/* Service Charges Slider */}
            <div className="space-y-3 pt-4 border-t border-[#F1F5F9]">
              <div className="flex justify-between items-baseline">
                <span className="text-sm sm:text-base font-bold text-[#0F172A]">{t.calculator.serviceCharge}</span>
                <span className="font-mono font-bold text-[#9E4732] text-lg sm:text-xl">{serviceChargePercent}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3.0"
                step="0.1"
                value={serviceChargePercent}
                onChange={(e) => setServiceChargePercent(Number(e.target.value))}
                className="w-full h-3 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#0F172A]"
              />
              <div className="flex justify-between text-xs sm:text-sm font-mono text-[#64748B] mt-1.5">
                <span>0.5% (~12 AED/sq.ft)</span>
                <span>3.0% (~55 AED/sq.ft Burj)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Summary Card (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] space-y-6 shadow-float-card">
            <div>
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#64748B]">
                {t.calculator.annualProjections}
              </span>
              <div className="mt-2 flex items-baseline gap-3">
                <div className="text-5xl sm:text-6xl font-extrabold font-mono text-[#059669] tracking-tight">
                  {calculations.netRoiFormatted}%
                </div>
                <span className="text-sm sm:text-base font-semibold text-[#475569]">
                  {t.calculator.netRoiSub}
                </span>
              </div>
            </div>

            {/* Financial Metrics Breakdown */}
            <div className="space-y-4 py-4 border-y border-[#F1F5F9] text-sm sm:text-base">
              <div className="flex justify-between items-center">
                <span className="text-[#64748B]">{t.calculator.estimatedGross}</span>
                <span className="font-mono font-bold text-[#0F172A]">
                  {calculations.grossIncomeConverted} {curr.symbol}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#64748B]">{t.calculator.maintenanceCharges}</span>
                <span className="font-mono font-bold text-[#9E4732]">
                  - {calculations.serviceChargesConverted} {curr.symbol}
                </span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-[#F1F5F9]">
                <span className="font-bold text-[#0F172A]">{t.calculator.annualNetProfit}</span>
                <span className="font-mono font-bold text-[#059669] text-base sm:text-lg">
                  {calculations.netIncomeConverted} {curr.symbol}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#64748B]">{t.calculator.fiveYearReturn}</span>
                <span className="font-mono font-bold text-[#0F172A]">
                  {calculations.fiveYearTotalReturnConverted} {curr.symbol}
                </span>
              </div>
            </div>

            {/* Golden Visa Status: Pill Badge with Shield Icon */}
            <div
              className={`p-4 sm:p-5 rounded-2xl border text-sm sm:text-base flex items-center gap-3.5 transition-all ${
                calculations.isGoldenVisaEligible
                  ? "bg-emerald-50 border-emerald-200 text-[#059669]"
                  : "bg-[#F8F9FA] border-[#E2E8F0] text-[#64748B]"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                  calculations.isGoldenVisaEligible ? "bg-emerald-100 text-[#059669]" : "bg-[#E2E8F0] text-[#64748B]"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <div className="font-semibold leading-relaxed">
                {calculations.isGoldenVisaEligible
                  ? t.calculator.goldenVisaQualified
                  : `${t.calculator.goldenVisaNeed} + ${new Intl.NumberFormat("en-US").format(Math.max(0, 2000000 - priceAed))} AED`}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/971500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-sm transition-all"
              >
                <span>💬</span>
                <span>{t.calculator.whatsappConsultation}</span>
              </a>

              {onOpenInquire && (
                <button
                  type="button"
                  onClick={() => onOpenInquire(buildingName || `${t.goldenVisaWidget.step1}: ${calculations.priceConverted} ${curr.symbol}`)}
                  className="w-full py-3 rounded-xl border border-[#E2E8F0] hover:bg-[#F8F9FA] text-xs sm:text-sm font-semibold text-[#475569] hover:text-[#0F172A] transition-colors"
                >
                  {t.calculator.inquireCalculationCta}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}