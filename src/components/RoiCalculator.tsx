"use client";

import React, { useState, useMemo, useEffect } from "react";
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
  isEmbedded?: boolean;
}

export default function RoiCalculator({
  initialPriceAed = 2000000,
  initialYieldPercent = 8.0,
  buildingName,
  onOpenInquire,
  isEmbedded = false,
}: RoiCalculatorProps) {
  const { t, lang } = useLang();

  const [priceAed, setPriceAed] = useState<number>(initialPriceAed);
  const [grossYield, setGrossYield] = useState<number>(initialYieldPercent);
  const [serviceChargePercent, setServiceChargePercent] = useState<number>(1.2);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>("AED");

  useEffect(() => {
    if (initialPriceAed > 0) setPriceAed(initialPriceAed);
    if (initialYieldPercent > 0) setGrossYield(initialYieldPercent);
  }, [initialPriceAed, initialYieldPercent]);

  const curr = CURRENCIES[selectedCurrency];

  const minPrice = Math.min(500000, Math.floor(initialPriceAed * 0.5));
  const maxPrice = Math.max(30000000, Math.ceil((initialPriceAed * 2) / 1000000) * 1000000);

  // State for detailed line-item breakdown
  const [showDetailedBreakdown, setShowDetailedBreakdown] = useState<boolean>(true);

  // Calculations with Honest Operational Audit Deductions
  const calculations = useMemo(() => {
    const grossIncomeAed = priceAed * (grossYield / 100);
    const serviceChargesAed = priceAed * (serviceChargePercent / 100);
    const coolingReserveAed = priceAed > 0 ? Math.min(grossIncomeAed * 0.045, 6800) : 0;
    const managementFeeAed = grossIncomeAed * 0.08;
    const netIncomeAed = Math.max(0, grossIncomeAed - serviceChargesAed - coolingReserveAed - managementFeeAed);
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
      coolingReserveConverted: formatCurr(coolingReserveAed),
      managementFeeConverted: formatCurr(managementFeeAed),
      netIncomeConverted: formatCurr(netIncomeAed),
      fiveYearTotalReturnConverted: formatCurr(fiveYearTotalReturnAed),
      netRoiFormatted: netRoi.toFixed(2),
      grossRoiFormatted: grossYield.toFixed(1),
      isGoldenVisaEligible,
    };
  }, [priceAed, grossYield, serviceChargePercent, curr]);

  const handlePresetPrice = (val: number) => {
    setPriceAed(val);
  };

  const presets = useMemo(() => {
    const list: { label: string; val: number }[] = [];
    if (buildingName && initialPriceAed) {
      const formattedEntry = new Intl.NumberFormat("en-US").format(initialPriceAed);
      const entryMap: Record<string, string> = {
        en: "Entry",
        ru: "Старт",
        ar: "البداية من",
        zh: "起售价",
        de: "Einstieg",
        fr: "À partir de",
        it: "A partire da",
        tr: "Başlangıç",
        hi: "प्रारंभिक",
        ur: "ابتدائی قیمت"
      };
      const entryLabel = entryMap[lang] || entryMap.en;
      list.push({
        label: `${formattedEntry} AED (${entryLabel} ${buildingName})`,
        val: initialPriceAed,
      });
    }
    list.push(
      { label: "1.5M AED", val: 1500000 },
      { label: "2M AED (Golden Visa)", val: 2000000 },
      { label: "3.5M AED", val: 3500000 },
      { label: "5M AED", val: 5000000 },
      { label: "10M AED", val: 10000000 }
    );
    return list.filter(
      (item, idx, self) => idx === self.findIndex((s) => s.val === item.val)
    );
  }, [buildingName, initialPriceAed, lang]);

  const whatsappMessage = useMemo(() => {
    const waMap: Record<string, string> = {
      en: `Hello, I used the ROI Calculator on Dubai-Architecture.info. Property budget: ${calculations.priceConverted} ${curr.symbol}. Projected Net ROI: ${calculations.netRoiFormatted}%. Please send matching verified units${buildingName ? ` in ${buildingName}` : ""}.`,
      ru: `Здравствуйте! Я воспользовался калькулятором доходности на Dubai-Architecture.info. Бюджет: ${calculations.priceConverted} ${curr.symbol}. Прогнозируемый чистый ROI: ${calculations.netRoiFormatted}%. Пожалуйста, отправьте проверенные лоты${buildingName ? ` в ${buildingName}` : ""}.`,
      ar: `مرحباً، استخدمت حاسبة العائد على Dubai-Architecture.info. الميزانية: ${calculations.priceConverted} ${curr.symbol}. صافي العائد المتوقع: ${calculations.netRoiFormatted}%. يرجى إرسال الوحدات المتاحة${buildingName ? ` في ${buildingName}` : ""}.`,
      zh: `您好，我在 Dubai-Architecture.info 使用了收益测算器。置业预算：${calculations.priceConverted} ${curr.symbol}，预计净回报率：${calculations.netRoiFormatted}%。请发送匹配房源${buildingName ? `（${buildingName}）` : ""}。`,
      de: `Guten Tag, ich habe den Renditerechner auf Dubai-Architecture.info genutzt. Budget: ${calculations.priceConverted} ${curr.symbol}. Prognostizierte Netto-Rendite: ${calculations.netRoiFormatted}%. Bitte senden Sie passende Angebote${buildingName ? ` im ${buildingName}` : ""}.`,
      fr: `Bonjour, j'ai utilisé le calculateur sur Dubai-Architecture.info. Budget : ${calculations.priceConverted} ${curr.symbol}. Rendement net prévu : ${calculations.netRoiFormatted}%. Merci d'envoyer les biens correspondants${buildingName ? ` à ${buildingName}` : ""}.`,
      it: `Buongiorno, ho utilizzato il calcolatore su Dubai-Architecture.info. Budget: ${calculations.priceConverted} ${curr.symbol}. ROI netto previsto: ${calculations.netRoiFormatted}%. Vi prego di inviare unità corrispondenti${buildingName ? ` presso ${buildingName}` : ""}.`,
      tr: `Merhaba, Dubai-Architecture.info üzerinden getiri hesaplayıcıyı kullandım. Bütçe: ${calculations.priceConverted} ${curr.symbol}. Tahmini net getiri: %${calculations.netRoiFormatted}. Lütfen uygun ilanları gönderin${buildingName ? ` (${buildingName})` : ""}.`,
      hi: `नमस्ते, मैंने Dubai-Architecture.info पर आरओआई कैलकुलेटर का उपयोग किया। बजट: ${calculations.priceConverted} ${curr.symbol}। शुद्ध आरओआई: ${calculations.netRoiFormatted}%। कृपया उपयुक्त संपत्तियां भेजें${buildingName ? ` ${buildingName} में` : ""}।`,
      ur: `ہیلو، میں نے Dubai-Architecture.info پر منافع کا کیلکولیٹر استعمال کیا۔ بجٹ: ${calculations.priceConverted} ${curr.symbol}۔ متوقع خالص منافع: ${calculations.netRoiFormatted}%۔ برائے مہربانی دستیاب یونٹس بھیجیں${buildingName ? ` ${buildingName} میں` : ""}۔`
    };
    return encodeURIComponent(waMap[lang] || waMap.en);
  }, [calculations.priceConverted, curr.symbol, calculations.netRoiFormatted, buildingName, lang]);

  const content = (
    <>
      {/* Section Header with Currency Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#F1F5F9] text-[#0F172A] border border-[#CBD5E1] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
            <span>{buildingName ? `${buildingName} • ${t.calculator.badge}` : t.calculator.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight font-heading">
            {buildingName
              ? ({
                  en: `ROI & Investment Calculator: ${buildingName}`,
                  ru: `Калькулятор доходности: ${buildingName}`,
                  ar: `حاسبة العائد الاستثماري: ${buildingName}`,
                  zh: `投资收益回报测算器: ${buildingName}`,
                  de: `Rendite- & Investitionsrechner: ${buildingName}`,
                  fr: `Calculateur de rentabilité : ${buildingName}`,
                  it: `Calcolatore di rendimento ROI: ${buildingName}`,
                  tr: `Yatırım Getirisi (ROI) Hesaplayıcı: ${buildingName}`,
                  hi: `रिटर्न एवं निवेश कैलकुलेटर: ${buildingName}`,
                  ur: `سرمایہ کاری منافع کیلکولیٹر: ${buildingName}`
                }[lang] || `ROI & Investment Calculator: ${buildingName}`)
              : t.calculator.title}
          </h2>
          <p className="text-[#475569] text-sm sm:text-base max-w-xl mt-2 leading-relaxed">
            {buildingName
              ? ({
                  en: `Interactive rental yield, payback period, and 5-year capital appreciation projection for apartments in ${buildingName}.`,
                  ru: `Интерактивный расчет окупаемости, чистой арендной доходности и прироста капитала для апартаментов в ${buildingName}.`,
                  ar: `حساب تفاعلي لفترة استرداد رأس المال، والعائد الإيجاري الصافي، وتوقعات نمو القيمة لـ 5 سنوات في ${buildingName}.`,
                  zh: `对 ${buildingName} 公寓的租金净回报率、静态投资回收期及未来5年资本增值进行全景测算。`,
                  de: `Interaktive Berechnung von Mietrendite, Amortisationszeit und 5-Jahres-Wertsteigerung für Wohnungen im ${buildingName}.`,
                  fr: `Simulation interactive du rendement locatif net, du délai de retour sur investissement et de la plus-value à 5 ans pour ${buildingName}.`,
                  it: `Calcolo interattivo di rendita da locazione, periodo di ammortamento e rivalutazione a 5 anni per ${buildingName}.`,
                  tr: `${buildingName} projesindeki daireler için interaktif net kira getirisi, amortisman süresi ve 5 yıllık sermaye artışı projeksiyonu.`,
                  hi: `${buildingName} में अपार्टमेंट के लिए किराये की शुद्ध उपज, पेबैक अवधि और 5-वर्षीय पूंजी वृद्धि का इंटरैक्टिव अनुमान।`,
                  ur: `${buildingName} میں اپارٹمنٹس کے لیے خالص کرائے کے منافع، واپسی کی مدت اور 5 سالہ کیپٹل گروتھ کا تفصیلی تخمینہ۔`
                }[lang] || `Interactive rental yield, payback period, and 5-year capital appreciation projection for apartments in ${buildingName}.`)
              : t.calculator.subtitle}
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl backdrop-blur-[16px] bg-white/85 border border-white/60 shadow-sm shrink-0">
          {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cCode) => (
            <button
              key={cCode}
              type="button"
              onClick={() => setSelectedCurrency(cCode)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
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
      <div className={`grid grid-cols-1 ${isEmbedded ? "xl:grid-cols-12" : "lg:grid-cols-12"} gap-8 items-start`}>
        {/* Left Column: Sliders & Controls */}
        <div className={`${isEmbedded ? "xl:col-span-7" : "lg:col-span-7"} p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] space-y-7 shadow-float-card`}>
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
              {presets.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handlePresetPrice(item.val)}
                  className={`px-3.5 py-2 rounded-xl border font-mono text-xs sm:text-sm text-left transition-all break-words max-w-full ${
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
                min={minPrice}
                max={maxPrice}
                step={priceAed > 10000000 ? 500000 : 100000}
                value={priceAed}
                onChange={(e) => setPriceAed(Number(e.target.value))}
                className="w-full h-3 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#0F172A]"
              />
              <div className="flex justify-between text-xs sm:text-sm font-mono text-[#64748B] mt-2">
                <span>{new Intl.NumberFormat("en-US", { notation: "compact" }).format(minPrice)} AED</span>
                <span>{new Intl.NumberFormat("en-US", { notation: "compact" }).format(maxPrice)} AED</span>
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
              max="16"
              step="0.1"
              value={grossYield}
              onChange={(e) => setGrossYield(Number(e.target.value))}
              className="w-full h-3 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#0F172A]"
            />
            <div className="flex justify-between text-xs sm:text-sm font-mono text-[#64748B] mt-1.5">
              <span>4.0%</span>
              <span>16.0%</span>
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

        {/* Right Column: Floating Summary Card */}
        <div className={`${isEmbedded ? "xl:col-span-5" : "lg:col-span-5 lg:sticky lg:top-28"} p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] space-y-6 shadow-float-card overflow-hidden`}>
          <div>
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#64748B]">
              {t.calculator.annualProjections}
            </span>
            <div className="mt-2 space-y-1">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-[#059669] tracking-tight leading-none">
                {calculations.netRoiFormatted}%
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#475569] leading-snug break-words">
                {t.calculator.netRoiSub}
              </p>
            </div>
          </div>

          {/* Financial Metrics Breakdown with Honest Line Items */}
          <div className="space-y-3.5 py-4 border-y border-[#F1F5F9] text-xs sm:text-sm">
            <div className="flex justify-between items-start gap-2">
              <span className="text-[#64748B] font-medium min-w-0 break-words">{t.calculator.estimatedGross}</span>
              <span className="font-mono font-bold text-[#0F172A] shrink-0 text-right">
                +{calculations.grossIncomeConverted} {curr.symbol}
              </span>
            </div>

            <div className="flex justify-between items-start gap-2 text-rose-700">
              <span className="text-[#64748B] flex items-start gap-1.5 min-w-0 break-words">
                <span className="shrink-0">🏢</span>
                <span className="break-words">{t.calculator.maintenanceCharges}</span>
              </span>
              <span className="font-mono font-bold text-[#9E4732] shrink-0 text-right">
                -{calculations.serviceChargesConverted} {curr.symbol}
              </span>
            </div>

            <div className="flex justify-between items-start gap-2 text-rose-700">
              <span className="text-[#64748B] flex items-start gap-1.5 min-w-0 break-words">
                <span className="shrink-0">❄️</span>
                <span>{({
    ru: "Охлаждение Empower / Резерв",
    ar: "تبريد إمباور / احتياطي السعة",
    de: "Empower-Kühlung / Reserve",
    fr: "Climatisation Empower / Réserve",
    it: "Raffrescamento Empower / Riserva",
    tr: "Empower Soğutma / Rezerv",
    zh: "Empower 集中供冷及能耗储备",
    hi: "एम्पावर कूलिंग / रिजर्व",
    ur: "ایم پاور کولنگ / ریزرو فنڈ"
  } as Record<string, string>)[lang] || "Empower AC & Capacity Reserve"}</span>
              </span>
              <span className="font-mono font-bold text-[#9E4732] shrink-0 text-right">
                -{calculations.coolingReserveConverted} {curr.symbol}
              </span>
            </div>

            <div className="flex justify-between items-start gap-2 text-rose-700">
              <span className="text-[#64748B] flex items-start gap-1.5 min-w-0 break-words">
                <span className="shrink-0">🔑</span>
                <span>{({
    ru: "Управление и сдача (8%)",
    ar: "إدارة العقار والتأجير (8%)",
    de: "Immobilienverwaltung (8%)",
    fr: "Gestion locative (8%)",
    it: "Gestione immobiliare (8%)",
    tr: "Mülk Yönetimi (%8)",
    zh: "物业托管与租赁管理费 (8%)",
    hi: "संपत्ति प्रबंधन और किराया (8%)",
    ur: "پراپرٹی مینجمنٹ و کرایہ داری (8%)"
  } as Record<string, string>)[lang] || "Property Management (8%)"}</span>
              </span>
              <span className="font-mono font-bold text-[#9E4732] shrink-0 text-right">
                -{calculations.managementFeeConverted} {curr.symbol}
              </span>
            </div>

            <div className="flex justify-between items-start gap-2 pt-3 border-t border-[#F1F5F9] bg-[#F8FAFC] -mx-3 p-3 rounded-xl">
              <div className="min-w-0">
                <span className="font-extrabold text-[#0F172A] block break-words">{t.calculator.annualNetProfit}</span>
                <span className="text-[11px] text-[#64748B] font-mono block break-words">
                  {({
    ru: "Реальный Net Cash Flow",
    ar: "صافي التدفق النقدي الفعلي",
    de: "Echter Netto-Cashflow",
    fr: "Cash-flow net réel",
    it: "Flusso di cassa netto reale",
    tr: "Gerçek Net Nakit Akışı",
    zh: "真实到手纯租金净现金流",
    hi: "वास्तविक नेट कैश फ्लो",
    ur: "حقیقی خالص کیش فلو"
  } as Record<string, string>)[lang] || "True Net Cash Flow"}
                </span>
              </div>
              <span className="font-mono font-extrabold text-[#059669] text-base sm:text-lg shrink-0 text-right">
                {calculations.netIncomeConverted} {curr.symbol}
              </span>
            </div>

            <div className="flex justify-between items-start gap-2 pt-1">
              <span className="text-[#64748B] min-w-0 break-words">{t.calculator.fiveYearReturn}</span>
              <span className="font-mono font-bold text-[#0F172A] shrink-0 text-right">
                {calculations.fiveYearTotalReturnConverted} {curr.symbol}
              </span>
            </div>
          </div>

          {/* Independent Auditor Stamp */}
          <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-[11px] text-[#78716C] leading-normal flex items-start gap-2">
            <span className="text-sm">🛡️</span>
            <div>
              <strong className="text-[#8C6A48] font-bold">
                {({
    ru: "Формула независимого аудита: ",
    ar: "ضمان نزاهة التدقيق المستقل: ",
    de: "Unabhängige Prüfungsgewähr: ",
    fr: "Garantie d'audit indépendant : ",
    it: "Garanzia di revisione indipendente: ",
    tr: "Bağımsız Denetim Güvencesi: ",
    zh: "独立审计诚信保障: ",
    hi: "स्वतंत्र ऑडिट गारंटी: ",
    ur: "آزادانہ آڈٹ دیانت کی ضمانت: "
  } as Record<string, string>)[lang] || "Auditor Integrity Guarantee: "}
              </strong>
              {({
                en: "Calculations reflect official DLD service indexes, actual district cooling tariffs, and real property management reserves.",
                ru: "Расчет очищен от брокерских завышений и включает реальные индексы сервисных сборов DLD, сборы Empower и расходы на управление.",
                ar: "الحسابات مجردة من مبالغات الوسطاء وتعتمد مؤشرات رسوم أراضي دبي الرسمية، وتعرفات تبريد إمباور الفعلية، ومصاريف الإدارة.",
                zh: "测算已剔除中介销售滤镜与虚高估算，严格纳入迪拜土地局（DLD）官方物业费指数、Empower 供冷实支及托管支出。",
                de: "Berechnungen bereinigt um Makleraufschläge; basieren auf offiziellen DLD-Gebührenindizes, Empower-Tarifen und Verwaltungskosten.",
                fr: "Calculs affranchis de toute surenchère commerciale ; basés sur les indices officiels du DLD, les tarifs réels Empower et la gestion.",
                it: "Calcoli depurati da stime ottimistiche; basati sugli indici ufficiali del DLD, sulle tariffe reali Empower e sui costi di gestione.",
                tr: "Hesaplamalar abartılardan arındırılmış olup resmi DLD aidat endeksleri, Empower soğutma tarifeleri ve yönetim giderlerini içerir.",
                hi: "गणना ब्रोकर की अतिशयोक्ति से मुक्त है और इसमें आधिकारिक डीएलडी सेवा सूचकांक, एम्पावर कूलिंग टैरिफ और प्रबंधन लागत शामिल हैं।",
                ur: "تخمینوں کو بروکرز کے مبالغے سے پاک رکھا گیا ہے اور ان میں سرکاری DLD سروس انڈیکس، ایم پاور ٹیرف اور مینجمنٹ فیس شامل ہے۔"
              }[lang] || "Calculations reflect official DLD service indexes, actual district cooling tariffs, and real property management reserves.")}
            </div>
          </div>

          {/* Golden Visa Status */}
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
                onClick={() =>
                  onOpenInquire(
                    buildingName || `${t.goldenVisaWidget.step1}: ${calculations.priceConverted} ${curr.symbol}`
                  )
                }
                className="w-full py-3 rounded-xl border border-[#E2E8F0] hover:bg-[#F8F9FA] text-xs sm:text-sm font-semibold text-[#475569] hover:text-[#0F172A] transition-colors"
              >
                {t.calculator.inquireCalculationCta}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );

  if (isEmbedded) {
    return (
      <section id="roi-calculator" className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5]/80 border border-[#E5DFD3] shadow-soft-tint space-y-6">
        {content}
      </section>
    );
  }

  return (
    <section id="calculator" className="py-16 md:py-24 border-b border-[#E2E8F0] bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
}
