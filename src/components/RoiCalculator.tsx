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
    <section id="calculator" className="py-16 md:py-24 border-b border-[#E5DFD3] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#EFECE4] text-[#8C6A48] border border-[#DDD7CA] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6A48]" />
              <span>{t.calculator.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight leading-tight">
              {t.calculator.title}
            </h2>
            <p className="text-[#57534E] text-sm max-w-xl mt-2 leading-relaxed">
              {t.calculator.subtitle}
            </p>
          </div>

          {/* Currency Pill Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-[#E5DFD3] shadow-soft-tint">
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cCode) => (
              <button
                key={cCode}
                type="button"
                onClick={() => setSelectedCurrency(cCode)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedCurrency === cCode
                    ? "bg-[#8C6A48] text-white shadow-sm"
                    : "text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF8F5]"
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
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD3] space-y-6 shadow-soft-tint">
            {/* Property Price Input */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-[#1C1917]">
                  {t.calculator.propertyPrice}
                </label>
                <div className="text-lg font-extrabold font-mono text-[#8C6A48]">
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
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handlePresetPrice(item.val)}
                    className={`px-3 py-1.5 rounded-xl border font-mono text-xs transition-colors ${
                      priceAed === item.val
                        ? "bg-[#EFECE4] text-[#8C6A48] border-[#8C6A48] font-bold"
                        : "bg-[#FAF8F5] text-[#57534E] border-[#E5DFD3] hover:bg-[#EFECE4]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Price Slider */}
              <input
                type="range"
                min="500000"
                max="25000000"
                step="100000"
                value={priceAed}
                onChange={(e) => setPriceAed(Number(e.target.value))}
                className="w-full h-2 bg-[#EFECE4] rounded-lg appearance-none cursor-pointer accent-[#8C6A48]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#78716C]">
                <span>500K AED</span>
                <span>25M AED</span>
              </div>
            </div>

            {/* Gross Yield Slider */}
            <div className="space-y-2 pt-2 border-t border-[#EFECE4]">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#1C1917]">{t.calculator.rentalYield}</span>
                <span className="font-mono font-bold text-[#2D6A4F] text-base">{grossYield}%</span>
              </div>
              <input
                type="range"
                min="4"
                max="14"
                step="0.1"
                value={grossYield}
                onChange={(e) => setGrossYield(Number(e.target.value))}
                className="w-full h-2 bg-[#EFECE4] rounded-lg appearance-none cursor-pointer accent-[#8C6A48]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#78716C]">
                <span>4.0%</span>
                <span>14.0%</span>
              </div>
            </div>

            {/* Service Charges Slider */}
            <div className="space-y-2 pt-2 border-t border-[#EFECE4]">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#1C1917]">{t.calculator.serviceCharge}</span>
                <span className="font-mono font-bold text-[#9E4732] text-sm">{serviceChargePercent}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3.0"
                step="0.1"
                value={serviceChargePercent}
                onChange={(e) => setServiceChargePercent(Number(e.target.value))}
                className="w-full h-2 bg-[#EFECE4] rounded-lg appearance-none cursor-pointer accent-[#8C6A48]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#78716C]">
                <span>0.5% (~12 AED/sq.ft)</span>
                <span>3.0% (~55 AED/sq.ft Burj)</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD3] space-y-6 shadow-medium-tint">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#78716C]">
                ПРОГНОЗ ДОХОДНОСТИ
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <div className="text-4xl font-extrabold font-mono text-[#2D6A4F]">
                  {calculations.netRoiFormatted}%
                </div>
                <span className="text-xs font-bold text-[#57534E]">
                  Чистая доходность (Net ROI)
                </span>
              </div>
            </div>

            <div className="space-y-3 py-4 border-y border-[#EFECE4] text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[#78716C]">Валовый доход / год</span>
                <span className="font-mono font-bold text-[#1C1917]">
                  {calculations.grossIncomeConverted} {curr.symbol}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#78716C]">Сборы Service Charges (DLD)</span>
                <span className="font-mono font-bold text-[#9E4732]">
                  - {calculations.serviceChargesConverted} {curr.symbol}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#EFECE4]">
                <span className="font-bold text-[#1C1917]">Чистый доход / год</span>
                <span className="font-mono font-bold text-[#2D6A4F] text-sm">
                  {calculations.netIncomeConverted} {curr.symbol}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#78716C]">Прогноз возврата за 5 лет (+капитализация)</span>
                <span className="font-mono font-bold text-[#8C6A48]">
                  {calculations.fiveYearTotalReturnConverted} {curr.symbol}
                </span>
              </div>
            </div>

            {/* Golden Visa Status */}
            <div className={`p-3.5 rounded-xl border text-xs flex items-center justify-between ${
              calculations.isGoldenVisaEligible
                ? "bg-[#2D6A4F]/10 border-[#2D6A4F]/30 text-[#2D6A4F]"
                : "bg-[#EFECE4] border-[#DDD7CA] text-[#57534E]"
            }`}>
              <div className="flex items-center gap-2">
                <span>{calculations.isGoldenVisaEligible ? "🎖️" : "ℹ️"}</span>
                <span className="font-semibold">
                  {calculations.isGoldenVisaEligible
                    ? "Соответствует порогу Золотой визы (от 2 млн AED)"
                    : "До порога Золотой визы: + " +
                      new Intl.NumberFormat("en-US").format(Math.max(0, 2000000 - priceAed)) +
                      " AED"}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2">
              <a
                href={`https://wa.me/971500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2D6A4F] hover:bg-[#1E4D38] text-white font-bold text-xs uppercase tracking-wider shadow-soft-tint transition-all"
              >
                <span>💬</span>
                <span>Запросить лоты под расчет (WhatsApp)</span>
              </a>

              {onOpenInquire && (
                <button
                  type="button"
                  onClick={() => onOpenInquire(buildingName || `Бюджет ${calculations.priceConverted} ${curr.symbol}`)}
                  className="w-full py-2.5 rounded-xl border border-[#DDD7CA] hover:bg-[#FAF8F5] text-xs font-semibold text-[#57534E] transition-colors"
                >
                  Отправить заявку брокеру
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
