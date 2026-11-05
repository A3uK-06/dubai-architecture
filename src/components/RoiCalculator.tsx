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
  initialYieldPercent = 8.5,
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
    `Hello, I used the Investment Terminal on Dubai-Architecture.info. Property budget: ${calculations.priceConverted} ${curr.symbol}. Projected Net ROI: ${calculations.netRoiFormatted}%. Please send matching verified units${buildingName ? ` in ${buildingName}` : ""}.`
  );

  return (
    <section id="calculator" className="py-20 md:py-28 border-b border-[rgba(255,255,255,0.06)] bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Glassmorphic Currency Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#131B26] text-[#D4AF37] border border-[rgba(212,175,55,0.3)] mb-3.5 shadow-luxury-card">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="font-mono tracking-wider">{t.calculator.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-tight font-editorial">
              {t.calculator.title}
            </h2>
            <p className="text-[#94A3B8] text-base sm:text-lg max-w-xl mt-2 leading-relaxed">
              {t.calculator.subtitle}
            </p>
          </div>

          {/* Dark Glass Currency Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#131B26] border border-[rgba(255,255,255,0.08)] shadow-luxury-card backdrop-blur-xl">
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cCode) => (
              <button
                key={cCode}
                type="button"
                onClick={() => setSelectedCurrency(cCode)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
                  selectedCurrency === cCode
                    ? "bg-gradient-to-r from-[#E5C378] to-[#D4AF37] text-[#0B0F17] shadow-md shadow-[#D4AF37]/20"
                    : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A2433]"
                }`}
              >
                {cCode}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Interactive Cockpit Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Cockpit Sliders & Controls */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#131B26] border border-[rgba(255,255,255,0.08)] space-y-8 shadow-luxury-card card-sheen">
            {/* Property Price Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <label className="text-sm sm:text-base font-bold text-[#F8FAFC] font-editorial uppercase tracking-wider">
                  {t.calculator.propertyPrice}
                </label>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-[#F8FAFC] tabular-nums">
                  {calculations.priceConverted} <span className="text-[#D4AF37] text-lg font-normal">{curr.symbol}</span>
                </div>
              </div>

              {/* Quick Preset Glass Chips */}
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
                        ? "bg-[#D4AF37] text-[#0B0F17] border-[#D4AF37] font-bold shadow-md shadow-[#D4AF37]/20"
                        : "bg-[#0B0F17] text-[#94A3B8] border-[rgba(255,255,255,0.08)] hover:bg-[#1A2433] hover:text-[#F8FAFC]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Tactile Range Slider */}
              <div className="pt-3">
                <input
                  type="range"
                  min="500000"
                  max="25000000"
                  step="100000"
                  value={priceAed}
                  onChange={(e) => setPriceAed(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs font-mono text-[#94A3B8] mt-2.5">
                  <span>500K AED</span>
                  <span>25M AED</span>
                </div>
              </div>
            </div>

            {/* Gross Yield Slider */}
            <div className="space-y-4 pt-6 border-t border-[rgba(255,255,255,0.06)]">
              <div className="flex justify-between items-baseline">
                <span className="text-sm sm:text-base font-bold text-[#F8FAFC] font-editorial uppercase tracking-wider">
                  {t.calculator.rentalYield}
                </span>
                <span className="font-mono font-bold text-[#D4AF37] text-2xl tabular-nums">{grossYield}%</span>
              </div>
              <input
                type="range"
                min="4"
                max="14"
                step="0.1"
                value={grossYield}
                onChange={(e) => setGrossYield(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs font-mono text-[#94A3B8] mt-2.5">
                <span>4.0%</span>
                <span>14.0%</span>
              </div>
            </div>

            {/* Service Charges Slider */}
            <div className="space-y-4 pt-6 border-t border-[rgba(255,255,255,0.06)]">
              <div className="flex justify-between items-baseline">
                <span className="text-sm sm:text-base font-bold text-[#F8FAFC] font-editorial uppercase tracking-wider">
                  {t.calculator.serviceCharge}
                </span>
                <span className="font-mono font-bold text-[#94A3B8] text-xl tabular-nums">{serviceChargePercent}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3.0"
                step="0.1"
                value={serviceChargePercent}
                onChange={(e) => setServiceChargePercent(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs font-mono text-[#94A3B8] mt-2.5">
                <span>0.5% (~12 AED/sq.ft)</span>
                <span>3.0% (~55 AED/sq.ft Burj Khalifa)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Golden Visa Residence Card (Sticky Dashboard) */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-28 p-7 sm:p-8 rounded-3xl bg-[#131B26] border transition-all duration-300 space-y-6 shadow-luxury-card ${
              calculations.isGoldenVisaEligible
                ? "gold-neon-card"
                : "border-[rgba(255,255,255,0.08)]"
            }`}
          >
            {/* Top Emblem Strip */}
            <div className="flex items-center justify-between pb-2 border-b border-[rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-2">
                <span className="text-lg">🏛️</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                  UAE INVESTOR DOSSIER
                </span>
              </div>
              <span className="text-xs font-mono text-[#94A3B8]">OFFICIAL DLD MODEL</span>
            </div>

            {/* Accent Net Yield Display */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8]">
                {t.calculator.annualProjections}
              </span>
              <div className="mt-2 flex items-baseline gap-3">
                <div className="text-5xl sm:text-6xl font-extrabold font-mono text-[#D4AF37] tracking-tight tabular-nums">
                  {calculations.netRoiFormatted}%
                </div>
                <span className="text-sm sm:text-base font-semibold text-[#94A3B8]">
                  {t.calculator.netRoiSub}
                </span>
              </div>
            </div>

            {/* Financial Metrics Breakdown */}
            <div className="space-y-4 py-4 border-y border-[rgba(255,255,255,0.06)] text-sm sm:text-base">
              <div className="flex justify-between items-center">
                <span className="text-[#94A3B8]">{t.calculator.estimatedGross}</span>
                <span className="font-mono font-bold text-[#F8FAFC] tabular-nums">
                  {calculations.grossIncomeConverted} {curr.symbol}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#94A3B8]">{t.calculator.maintenanceCharges}</span>
                <span className="font-mono font-bold text-[#EF4444] tabular-nums">
                  - {calculations.serviceChargesConverted} {curr.symbol}
                </span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-[rgba(255,255,255,0.06)]">
                <span className="font-bold text-[#F8FAFC] font-editorial">{t.calculator.annualNetProfit}</span>
                <span className="font-mono font-bold text-[#D4AF37] text-lg tabular-nums">
                  {calculations.netIncomeConverted} {curr.symbol}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#94A3B8]">{t.calculator.fiveYearReturn}</span>
                <span className="font-mono font-bold text-[#10B981] tabular-nums">
                  {calculations.fiveYearTotalReturnConverted} {curr.symbol}
                </span>
              </div>
            </div>

            {/* Golden Visa Resident Status Card with Shield Emblem */}
            <div
              className={`p-4 sm:p-5 rounded-2xl border text-sm sm:text-base flex items-center gap-3.5 transition-all ${
                calculations.isGoldenVisaEligible
                  ? "bg-[#0B0F17] border-[#D4AF37]/50 text-[#D4AF37]"
                  : "bg-[#0B0F17] border-[rgba(255,255,255,0.08)] text-[#94A3B8]"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  calculations.isGoldenVisaEligible
                    ? "bg-[#D4AF37]/20 text-[#D4AF37] ring-2 ring-[#D4AF37]/40"
                    : "bg-[#1A2433] text-[#94A3B8]"
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
                className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#FDE68A] hover:to-[#D4AF37] text-[#0B0F17] font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-[#D4AF37]/25 transition-all active:scale-95"
              >
                <span>💬</span>
                <span>{t.calculator.whatsappConsultation}</span>
              </a>

              {onOpenInquire && (
                <button
                  type="button"
                  onClick={() => onOpenInquire(buildingName || `${t.goldenVisaWidget.step1}: ${calculations.priceConverted} ${curr.symbol}`)}
                  className="w-full py-3 rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-[#D4AF37]/50 bg-[#0B0F17] hover:bg-[#1A2433] text-xs sm:text-sm font-semibold text-[#F8FAFC] transition-colors"
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
