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
  onOpenLeadModal?: (details: { budget: string; yield: string; currency: string }) => void;
}

export default function RoiCalculator({
  initialPriceAed = 2000000,
  initialYieldPercent = 8.0,
  buildingName,
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
    <section id="calculator" className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{t.calculator.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight leading-tight">
              {t.calculator.title}
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl mt-2 leading-relaxed">
              {t.calculator.subtitle}
            </p>
          </div>

          {/* Currency Pill Switcher (Physical Selector) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-soft-tint">
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cCode) => (
              <button
                key={cCode}
                type="button"
                onClick={() => setSelectedCurrency(cCode)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedCurrency === cCode
                    ? "bg-amber-400 text-zinc-950 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
                }`}
              >
                {cCode}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 space-y-6 shadow-soft-tint backdrop-blur-md">
            {/* Property Price Input */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-zinc-200">
                  {t.calculator.propertyPrice}
                </label>
                <div className="text-lg font-extrabold font-mono text-amber-300">
                  {calculations.priceConverted} {curr.symbol}
                </div>
              </div>

              {/* Quick Presets (Physical Selectors) */}
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  { label: "1.5M AED", val: 1500000 },
                  { label: "2M AED (Golden Visa)", val: 2000000 },
                  { label: "3.5M AED", val: 3500000 },
                  { label: "5M AED", val: 5000000 },
                  { label: "10M AED", val: 10000000 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    type="button"
                    onClick={() => handlePresetPrice(preset.val)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                      priceAed === preset.val
                        ? "border-amber-400 bg-amber-400/20 text-amber-300 shadow-sm"
                        : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <input
                type="range"
                min={800000}
                max={20000000}
                step={100000}
                value={priceAed}
                onChange={(e) => setPriceAed(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-xs text-zinc-500 font-mono">
                <span>800k AED</span>
                <span>20M AED</span>
              </div>
            </div>

            {/* Gross Rental Yield Slider */}
            <div className="space-y-2 pt-3 border-t border-zinc-800/80">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-zinc-200">
                  {t.calculator.rentalYield}
                </label>
                <span className="text-base font-extrabold font-mono text-emerald-400">
                  {grossYield.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min={5.0}
                max={12.0}
                step={0.1}
                value={grossYield}
                onChange={(e) => setGrossYield(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-xs text-zinc-500 font-mono">
                <span>{t.calculator.conservative}</span>
                <span>{t.calculator.dubaiAvg}</span>
                <span>{t.calculator.shortTermHigh}</span>
              </div>
            </div>

            {/* Service Charges Slider */}
            <div className="space-y-2 pt-3 border-t border-zinc-800/80">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-zinc-200">
                  {t.calculator.serviceCharge}
                </label>
                <span className="text-sm font-mono text-zinc-300">
                  {serviceChargePercent.toFixed(1)}% p.a.
                </span>
              </div>
              <input
                type="range"
                min={0.5}
                max={2.5}
                step={0.1}
                value={serviceChargePercent}
                onChange={(e) => setServiceChargePercent(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-xs text-zinc-500 font-mono">
                <span>{t.calculator.lowMaintenance}</span>
                <span>{t.calculator.ultraLuxury}</span>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-zinc-400 pt-3 border-t border-zinc-800/80 leading-relaxed">
              ℹ️ {t.calculator.disclaimer}
            </div>
          </div>

          {/* Results Summary Card with Playbook Tinted Strong Shadow */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-amber-500/40 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 shadow-medium-tint space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                {t.calculator.annualProjections}
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
                {t.calculator.zeroTax}
              </span>
            </div>

            {/* Net ROI Highlight */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-emerald-500/30 text-center space-y-1 shadow-soft-tint">
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                {t.calculator.netRoi}
              </div>
              <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono tracking-tight">
                {calculations.netRoiFormatted}%
              </div>
              <div className="text-xs text-zinc-400 pt-1">
                {t.calculator.netRoiSub}
              </div>
            </div>

            {/* Breakdown lines (Right-aligned numeric values) */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center text-zinc-300">
                <span>{t.calculator.estimatedGross}:</span>
                <span className="font-mono font-semibold text-zinc-100 text-right">
                  +{calculations.grossIncomeConverted} {curr.symbol}
                </span>
              </div>
              <div className="flex justify-between items-center text-zinc-400 text-xs">
                <span>{t.calculator.maintenanceCharges}</span>
                <span className="font-mono text-rose-400 text-right">
                  -{calculations.serviceChargesConverted} {curr.symbol}
                </span>
              </div>
              <div className="flex justify-between items-center text-zinc-200 pt-2 border-t border-zinc-800 font-bold">
                <span>{t.calculator.estimatedNet}:</span>
                <span className="font-mono text-emerald-400 text-base text-right">
                  {calculations.netIncomeConverted} {curr.symbol} / {t.calculator.perYear}
                </span>
              </div>
              <div className="flex justify-between items-center text-zinc-400 text-xs pt-1">
                <span>{t.calculator.fiveYearReturn}</span>
                <span className="font-mono text-amber-300 font-semibold text-right">
                  ~{calculations.fiveYearTotalReturnConverted} {curr.symbol}
                </span>
              </div>
            </div>

            {/* Golden Visa Qualification Badge */}
            {calculations.isGoldenVisaEligible ? (
              <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center gap-3 text-xs text-amber-300">
                <span className="text-xl">🏆</span>
                <div>
                  <div className="font-bold text-amber-400">{t.calculator.goldenVisaQualified}</div>
                  <div className="text-xs text-zinc-300 mt-0.5">{t.calculator.goldenVisaQualifiedDesc}</div>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-zinc-800/40 border border-zinc-700/60 text-xs text-zinc-400">
                {t.calculator.goldenVisaNeed}
              </div>
            )}

            {/* Action CTA */}
            <div className="pt-2 space-y-2">
              <a
                href={`https://wa.me/971500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold text-sm uppercase tracking-wider shadow-md shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {t.calculator.inquireCalculationCta}
              </a>
              <div className="text-xs text-zinc-500 text-center">
                {t.calculator.instantMatchDesc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
