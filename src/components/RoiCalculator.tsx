"use client";

import React, { useState, useMemo } from "react";
import { useLang } from "@/context/LangContext";

type CurrencyCode = "AED" | "USD" | "EUR" | "GBP" | "RUB" | "CNY";

interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rateFromAed: number; // multiplier from AED
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
  onOpenLeadModal,
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
    const fiveYearAppreciationAed = priceAed * 0.28; // ~5% compounded 5 years
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

  const handlePresetPrice = (aedVal: number) => {
    setPriceAed(aedVal);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I calculated an investment profile on Dubai-Architecture.info: Budget: ${calculations.priceConverted} ${curr.code}, Expected Net Yield: ${calculations.netRoiFormatted}%${
      buildingName ? ` for ${buildingName}` : ""
    }. Please provide available matching floor plans and pricing.`
  );

  return (
    <section id="calculator" className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/30 mb-2">
              {t.calculator.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.calculator.title}
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Currency Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 mb-8 backdrop-blur-md">
          <span className="text-xs font-semibold text-zinc-400 px-2 uppercase tracking-wider">
            {t.calculator.selectCurrency}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {Object.values(CURRENCIES).map((c) => (
              <button
                key={c.code}
                onClick={() => setSelectedCurrency(c.code)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCurrency === c.code
                    ? "bg-amber-400 text-zinc-950 shadow-md shadow-amber-500/20"
                    : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-750 hover:text-white"
                }`}
              >
                {c.symbol} {c.code}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 space-y-6 shadow-xl">
            {/* Property Price Input */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-zinc-200">
                  {t.calculator.propertyPrice}
                </label>
                <div className="text-lg font-extrabold font-mono text-amber-400">
                  {calculations.priceConverted} {curr.symbol}
                </div>
              </div>

              {/* Quick Presets */}
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
                    className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-all ${
                      priceAed === preset.val
                        ? "border-amber-400 bg-amber-400/20 text-amber-300"
                        : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200"
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
                className="w-full h-2 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>800k AED</span>
                <span>20M AED</span>
              </div>
            </div>

            {/* Gross Rental Yield Slider */}
            <div className="space-y-2 pt-2 border-t border-zinc-800/80">
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
                className="w-full h-2 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>{t.calculator.conservative}</span>
                <span>{t.calculator.dubaiAvg}</span>
                <span>{t.calculator.shortTermHigh}</span>
              </div>
            </div>

            {/* Service Charges Slider */}
            <div className="space-y-2 pt-2 border-t border-zinc-800/80">
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
                className="w-full h-2 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>{t.calculator.lowMaintenance}</span>
                <span>{t.calculator.ultraLuxury}</span>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="text-[11px] text-zinc-500 pt-2 border-t border-zinc-800/80 leading-relaxed">
              ℹ️ {t.calculator.disclaimer}
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-amber-500/40 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                {t.calculator.annualProjections}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
                {t.calculator.zeroTax}
              </span>
            </div>

            {/* Net ROI Highlight */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-emerald-500/30 text-center space-y-1">
              <div className="text-xs uppercase tracking-wider text-zinc-400">
                {t.calculator.netRoi}
              </div>
              <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono tracking-tight">
                {calculations.netRoiFormatted}%
              </div>
              <div className="text-xs text-zinc-400 pt-1">
                {t.calculator.netRoiSub}
              </div>
            </div>

            {/* Breakdown lines */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center text-zinc-300">
                <span>{t.calculator.estimatedGross}:</span>
                <span className="font-mono font-semibold text-zinc-100">
                  +{calculations.grossIncomeConverted} {curr.symbol}
                </span>
              </div>
              <div className="flex justify-between items-center text-zinc-400 text-xs">
                <span>{t.calculator.maintenanceCharges}</span>
                <span className="font-mono text-rose-400">
                  -{calculations.serviceChargesConverted} {curr.symbol}
                </span>
              </div>
              <div className="flex justify-between items-center text-zinc-200 pt-2 border-t border-zinc-800 font-bold">
                <span>{t.calculator.estimatedNet}:</span>
                <span className="font-mono text-emerald-400 text-base">
                  {calculations.netIncomeConverted} {curr.symbol} / {t.calculator.perYear}
                </span>
              </div>
              <div className="flex justify-between items-center text-zinc-400 text-xs pt-1">
                <span>{t.calculator.fiveYearReturn}</span>
                <span className="font-mono text-amber-400 font-semibold">
                  ~{calculations.fiveYearTotalReturnConverted} {curr.symbol}
                </span>
              </div>
            </div>

            {/* Golden Visa Qualification Badge */}
            {calculations.isGoldenVisaEligible ? (
              <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center gap-3 text-xs text-amber-300">
                <span className="text-xl">🏆</span>
                <div>
                  <div className="font-bold text-amber-400">{t.calculator.goldenVisaQualified}</div>
                  <div className="text-[11px] text-zinc-300">{t.calculator.goldenVisaQualifiedDesc}</div>
                </div>
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-zinc-800/40 border border-zinc-700/60 text-xs text-zinc-400">
                {t.calculator.goldenVisaNeed}
              </div>
            )}

            {/* Action CTA */}
            <div className="pt-2 space-y-2">
              <a
                href={`https://wa.me/971500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {t.calculator.inquireCalculationCta}
              </a>
              <div className="text-[11px] text-zinc-500 text-center">
                {t.calculator.instantMatchDesc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
