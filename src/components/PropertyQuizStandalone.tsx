"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LangContext";
import { getAttributionData } from "@/lib/attribution";
import { dispatchLead } from "@/lib/leadRouting";
import { trackEvent } from "@/lib/analytics";
import { getQuizTranslation } from "@/data/localizedQuiz";

const CURRENCIES = [
  { code: "USD", symbol: "$" },
  { code: "AED", symbol: "AED" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "RUB", symbol: "₽" },
  { code: "OMR", symbol: "OMR" },
];

const QUICK_BUDGETS: Record<string, string[]> = {
  USD: ["300K – 700K", "700K – 1.5M", "1.5M – 3M", "3M – 7M", "7M – 15M", "15M+"],
  AED: ["1M – 2.5M", "2.5M – 5M", "5M – 10M", "10M – 25M", "25M – 50M", "50M+"],
  EUR: ["280K – 650K", "650K – 1.4M", "1.4M – 2.8M", "2.8M – 6.5M", "6.5M – 14M", "14M+"],
  GBP: ["240K – 550K", "550K – 1.2M", "1.2M – 2.4M", "2.4M – 5.5M", "5.5M – 12M", "12M+"],
  RUB: ["30M – 70M", "70M – 150M", "150M – 300M", "300M – 700M", "700M+"],
  OMR: ["115K – 270K", "270K – 580K", "580K – 1.15M", "1.15M – 2.7M", "2.7M+"],
};

const LANGUAGES = [
  { code: "ru", name: "Русский" },
  { code: "en", name: "English" },
  { code: "ar", name: "العربية" },
  { code: "zh", name: "中文" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "it", name: "Italiano" },
  { code: "tr", name: "Türkçe" },
  { code: "hi", name: "हिन्दी" },
  { code: "ur", name: "اردو" },
];

const POPULAR_COUNTRIES = [
  "ОАЭ (UAE)",
  "Россия",
  "Казахстан",
  "Узбекистан",
  "США (USA)",
  "Великобритания (UK)",
  "Германия (Germany)",
  "Саудовская Аравия (KSA)",
  "Оман (Oman)",
  "Индия (India)",
  "Китай (China)",
  "Франция (France)",
  "Турция (Turkey)",
  "Азербайджан",
  "Беларусь",
  "Другая страна",
];

export default function PropertyQuizStandalone() {
  const { lang: siteLang, isRtl } = useLang();
  const tq = getQuizTranslation(siteLang);

  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState("");
  const [area, setArea] = useState("");
  const [handoverTimeline, setHandoverTimeline] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [budget, setBudget] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>(siteLang || "ru");
  const [clientCountry, setClientCountry] = useState("ОАЭ (UAE)");
  const [customCountry, setCustomCountry] = useState("");

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contactPreference, setContactPreference] = useState<"direct" | "representative">("direct");
  const [commPreferences, setCommPreferences] = useState("");
  const [comment, setComment] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const propertyTypeItems = [
    { id: "primary", icon: "🏗️", ...tq.propertyTypes.primary },
    { id: "secondary_buy", icon: "🔑", ...tq.propertyTypes.secondary_buy },
    { id: "secondary_sell", icon: "🏷️", ...tq.propertyTypes.secondary_sell },
    { id: "rent", icon: "🏡", ...tq.propertyTypes.rent },
    { id: "commercial", icon: "🏢", ...tq.propertyTypes.commercial },
  ];

  const areaItems = [
    { id: "studio", label: tq.areaOptions.studio },
    { id: "twoBed", label: tq.areaOptions.twoBed },
    { id: "threeBed", label: tq.areaOptions.threeBed },
    { id: "penthouse", label: tq.areaOptions.penthouse },
    { id: "any", label: tq.areaOptions.any },
  ];

  const handoverItems = [
    { id: "ready", label: tq.handoverOptions.ready },
    { id: "nearFuture", label: tq.handoverOptions.nearFuture },
    { id: "midFuture", label: tq.handoverOptions.midFuture },
    { id: "longTerm", label: tq.handoverOptions.longTerm },
    { id: "any", label: tq.handoverOptions.any },
  ];

  const handleNextStep = () => {
    setErrorMsg("");
    if (step === 1) {
      if (!propertyType) {
        setErrorMsg("Пожалуйста, выберите тип недвижимости");
        return;
      }
      trackEvent("quiz_step_1_complete", { propertyType });
      setStep(2);
    } else if (step === 2) {
      if (!area) {
        setErrorMsg("Пожалуйста, выберите интересующую площадь");
        return;
      }
      trackEvent("quiz_step_2_complete", { area, handoverTimeline });
      setStep(3);
    } else if (step === 3) {
      if (!budget.trim()) {
        setErrorMsg("Пожалуйста, укажите или выберите бюджет");
        return;
      }
      trackEvent("quiz_step_3_complete", { budget, currency });
      setStep(4);
    } else if (step === 4) {
      const finalCountry = clientCountry === "Другая страна" ? customCountry.trim() : clientCountry;
      if (!finalCountry) {
        setErrorMsg("Пожалуйста, укажите страну клиента");
        return;
      }
      trackEvent("quiz_step_4_complete", { country: finalCountry, language: selectedLanguage });
      setStep(5);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Пожалуйста, введите ваше имя");
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 7) {
      setErrorMsg("Пожалуйста, введите корректный номер телефона с кодом страны");
      return;
    }

    setIsSubmitting(true);

    const finalCountry = clientCountry === "Другая страна" ? customCountry.trim() : clientCountry;
    const finalPropertyTypeObj = propertyTypeItems.find((p) => p.id === propertyType);
    const finalAreaObj = areaItems.find((a) => a.id === area);
    const finalHandoverObj = handoverItems.find((h) => h.id === handoverTimeline);
    const attribution = getAttributionData();

    try {
      await dispatchLead({
        name: name.trim(),
        lastName: lastName.trim() || undefined,
        phone: phone.trim(),
        email: email.trim() || undefined,
        propertyType: finalPropertyTypeObj?.label || propertyType,
        area: finalAreaObj?.label || area,
        handoverTimeline: finalHandoverObj?.label || handoverTimeline || undefined,
        budget: budget.trim(),
        currency,
        clientCountry: finalCountry,
        contactPreference,
        communicationPreferences: commPreferences.trim() || undefined,
        comment: comment.trim() || undefined,
        language: selectedLanguage,
        attribution,
        timestamp: new Date().toISOString(),
      });

      trackEvent("quiz_complete", {
        propertyType,
        area,
        budget,
        currency,
        country: finalCountry,
        language: selectedLanguage,
        contactPreference,
      });

      setIsCompleted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Не удалось отправить заявку. Попробуйте еще раз.";
      setErrorMsg(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessengerClick = (channel: "whatsapp" | "telegram") => {
    trackEvent("quiz_messenger_click", { channel });
    alert(`Номер для ${channel === "whatsapp" ? "WhatsApp" : "Telegram"} будет подключен в ближайшее время. Ваша заявка уже зафиксирована в системе!`);
  };

  return (
    <div className={`w-full rounded-3xl bg-white border border-[#E2E8F0] shadow-xl overflow-hidden text-[#0F172A] ${isRtl ? "text-right" : "text-left"}`}>
      {/* Header */}
      <div className="px-6 sm:px-8 py-6 border-b border-[#F1F5F9] bg-[#FAFAFA]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-amber-400 flex items-center justify-center font-bold text-2xl shadow-md shrink-0">
            🏛️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-xl sm:text-2xl text-[#0F172A] font-heading">
                {tq.modalTitle}
              </h1>
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#8C6A48]/15 text-[#8C6A48] border border-[#8C6A48]/30">
                {tq.modalBadge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
              {tq.modalSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar (if not completed) */}
      {!isCompleted && (
        <div className="w-full bg-[#F1F5F9] h-2">
          <div
            className="bg-[#8C6A48] h-2 transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      )}

      {/* Content Body */}
      <div className="p-6 sm:p-10 space-y-6">
        {errorMsg && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm font-medium">
            ⚠️ {errorMsg}
          </div>
        )}

        {/* STEP 1: PROPERTY TYPE */}
        {!isCompleted && step === 1 && (
          <div className="space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#8C6A48] tracking-wider uppercase">
                {tq.stepIndicator(1, 5)}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                {tq.step1Title} <span className="text-rose-500">*</span>
              </h2>
              <p className="text-sm text-[#64748B]">{tq.step1Subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2">
              {propertyTypeItems.map((t) => {
                const isSelected = propertyType === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setPropertyType(t.id)}
                    className={`text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer ${
                      isSelected
                        ? "border-[#8C6A48] bg-[#FDFBF7] shadow-sm ring-1 ring-[#8C6A48]"
                        : "border-[#E2E8F0] hover:border-[#CBD5E1] bg-white hover:bg-[#F8FAFC]"
                    }`}
                  >
                    <span className="text-3xl mt-0.5">{t.icon}</span>
                    <div className="flex-1">
                      <div className="font-bold text-base text-[#0F172A] flex items-center justify-between">
                        {t.label}
                        {isSelected && <span className="text-[#8C6A48] text-xl font-bold">✓</span>}
                      </div>
                      <p className="text-xs sm:text-sm text-[#64748B] mt-1">{t.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleNextStep}
                disabled={!propertyType}
                className="px-8 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] disabled:opacity-40 text-white font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                {tq.nextBtn}
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: AREA & HANDOVER TIMELINE */}
        {!isCompleted && step === 2 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#8C6A48] tracking-wider uppercase">
                {tq.stepIndicator(2, 5)}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                {tq.step2Title}
              </h2>
              <p className="text-sm text-[#64748B]">{tq.step2Subtitle}</p>
            </div>

            {/* Area Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                {tq.areaLabel} <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {areaItems.map((a) => {
                  const isSelected = area === a.id;
                  return (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => setArea(a.id)}
                      className={`text-left p-3.5 rounded-xl border text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? "border-[#8C6A48] bg-[#FDFBF7] text-[#8C6A48] ring-1 ring-[#8C6A48]"
                          : "border-[#E2E8F0] bg-white text-[#0F172A] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <span>{a.label}</span>
                      {isSelected && <span className="font-bold text-base">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Handover Timeline Selection */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                {tq.handoverLabel} <span className="text-stone-400 font-normal">{tq.optionalLabel}</span>
              </label>
              <div className="grid grid-cols-1 gap-2">
                {handoverItems.map((h) => {
                  const isSelected = handoverTimeline === h.id;
                  return (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => setHandoverTimeline(h.id)}
                      className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? "border-[#8C6A48] bg-[#FDFBF7] text-[#8C6A48] ring-1 ring-[#8C6A48]"
                          : "border-[#E2E8F0] bg-white text-[#475569] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <span>{h.label}</span>
                      {isSelected && <span className="font-bold">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-3 rounded-xl border border-[#CBD5E1] text-[#475569] font-bold text-sm hover:bg-[#F8FAFC] transition-all cursor-pointer"
              >
                {tq.backBtn}
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                disabled={!area}
                className="px-8 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] disabled:opacity-40 text-white font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                {tq.nextBtn}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: BUDGET & CURRENCY */}
        {!isCompleted && step === 3 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#8C6A48] tracking-wider uppercase">
                {tq.stepIndicator(3, 5)}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                {tq.step3Title} <span className="text-rose-500">*</span>
              </h2>
              <p className="text-sm text-[#64748B]">{tq.step3Subtitle}</p>
            </div>

            {/* Currency Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                {tq.currencyLabel} <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {CURRENCIES.map((c) => {
                  const isSelected = currency === c.code;
                  return (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => {
                        setCurrency(c.code);
                        setBudget("");
                      }}
                      className={`py-3 px-3 rounded-xl border text-center font-bold text-sm transition-all cursor-pointer ${
                        isSelected
                          ? "border-[#8C6A48] bg-[#8C6A48] text-white shadow-sm"
                          : "border-[#E2E8F0] bg-white text-[#475569] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      {c.symbol} {c.code}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Budget Chips */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                {tq.quickBudgetLabel}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {(QUICK_BUDGETS[currency] || QUICK_BUDGETS.USD).map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`py-2.5 px-3 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                      budget === b
                        ? "border-[#8C6A48] bg-[#FDFBF7] text-[#8C6A48] ring-1 ring-[#8C6A48]"
                        : "border-[#E2E8F0] bg-white text-[#0F172A] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    {b} {currency}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Budget Input */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                {tq.exactBudgetLabel} <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-[#64748B]">
                  {CURRENCIES.find((c) => c.code === currency)?.symbol || "$"}
                </span>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder={tq.budgetPlaceholder}
                  className="w-full pl-10 pr-16 py-3.5 rounded-xl border border-[#CBD5E1] bg-white text-[#0F172A] font-semibold text-base focus:border-[#8C6A48] focus:ring-1 focus:ring-[#8C6A48] outline-none transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#94A3B8]">
                  {currency}
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-xl border border-[#CBD5E1] text-[#475569] font-bold text-sm hover:bg-[#F8FAFC] transition-all cursor-pointer"
              >
                {tq.backBtn}
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                disabled={!budget.trim()}
                className="px-8 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] disabled:opacity-40 text-white font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                {tq.nextBtn}
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: LANGUAGE & COUNTRY */}
        {!isCompleted && step === 4 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#8C6A48] tracking-wider uppercase">
                {tq.stepIndicator(4, 5)}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                {tq.step4Title} <span className="text-rose-500">*</span>
              </h2>
              <p className="text-sm text-[#64748B]">{tq.step4Subtitle}</p>
            </div>

            {/* Language Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                {tq.languageLabel} <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setSelectedLanguage(l.code)}
                    className={`py-2.5 px-3 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                      selectedLanguage === l.code
                        ? "border-[#8C6A48] bg-[#FDFBF7] text-[#8C6A48] ring-1 ring-[#8C6A48]"
                        : "border-[#E2E8F0] bg-white text-[#475569] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Country */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                {tq.countryLabel} <span className="text-rose-500">*</span>
              </label>
              <select
                value={clientCountry}
                onChange={(e) => setClientCountry(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-[#CBD5E1] bg-white text-[#0F172A] font-medium text-base focus:border-[#8C6A48] focus:ring-1 focus:ring-[#8C6A48] outline-none transition-all cursor-pointer"
              >
                {POPULAR_COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              {clientCountry === "Другая страна" && (
                <input
                  type="text"
                  value={customCountry}
                  onChange={(e) => setCustomCountry(e.target.value)}
                  placeholder={tq.otherCountryPlaceholder}
                  className="w-full mt-2.5 px-4 py-3 rounded-xl border border-[#CBD5E1] bg-white text-[#0F172A] text-sm focus:border-[#8C6A48] outline-none"
                />
              )}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-xl border border-[#CBD5E1] text-[#475569] font-bold text-sm hover:bg-[#F8FAFC] transition-all cursor-pointer"
              >
                {tq.backBtn}
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="px-8 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                {tq.nextBtn}
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: CONTACTS & PREFERENCES */}
        {!isCompleted && step === 5 && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#8C6A48] tracking-wider uppercase">
                {tq.stepIndicator(5, 5)}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">{tq.step5Title}</h2>
              <p className="text-sm text-[#64748B]">{tq.step5Subtitle}</p>
            </div>

            {/* Names Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                  {tq.nameLabel} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={tq.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-white text-[#0F172A] text-base focus:border-[#8C6A48] outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#64748B] uppercase tracking-wider block">
                  {tq.lastNameLabel} <span className="text-xs font-normal text-stone-400 lowercase">{tq.optionalLabel}</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder={tq.lastNamePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-white text-[#0F172A] text-base focus:border-[#8C6A48] outline-none"
                />
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                  {tq.phoneLabel} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={tq.phonePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-white text-[#0F172A] text-base font-mono focus:border-[#8C6A48] outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#64748B] uppercase tracking-wider block">
                  {tq.emailLabel} <span className="text-xs font-normal text-stone-400 lowercase">{tq.optionalLabel}</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="investor@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-white text-[#0F172A] text-base focus:border-[#8C6A48] outline-none"
                />
              </div>
            </div>

            {/* Contact Preference */}
            <div className="space-y-2 pt-1">
              <label className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
                {tq.contactPrefLabel} <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setContactPreference("direct")}
                  className={`p-3.5 rounded-xl border text-left text-sm font-bold transition-all cursor-pointer flex items-center justify-between ${
                    contactPreference === "direct"
                      ? "border-[#8C6A48] bg-[#FDFBF7] text-[#8C6A48] ring-1 ring-[#8C6A48]"
                      : "border-[#E2E8F0] bg-white text-[#475569] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <span>{tq.contactDirect}</span>
                  {contactPreference === "direct" && <span>✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => setContactPreference("representative")}
                  className={`p-3.5 rounded-xl border text-left text-sm font-bold transition-all cursor-pointer flex items-center justify-between ${
                    contactPreference === "representative"
                      ? "border-[#8C6A48] bg-[#FDFBF7] text-[#8C6A48] ring-1 ring-[#8C6A48]"
                      : "border-[#E2E8F0] bg-white text-[#475569] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <span>{tq.contactRep}</span>
                  {contactPreference === "representative" && <span>✓</span>}
                </button>
              </div>
            </div>

            {/* Communication Timing & Preferences */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#64748B] uppercase tracking-wider block">
                {tq.commPreferencesLabel} <span className="text-xs font-normal text-stone-400 lowercase">{tq.optionalLabel}</span>
              </label>
              <input
                type="text"
                value={commPreferences}
                onChange={(e) => setCommPreferences(e.target.value)}
                placeholder={tq.commPreferencesPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-white text-[#0F172A] text-sm focus:border-[#8C6A48] outline-none"
              />
            </div>

            {/* Comment */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#64748B] uppercase tracking-wider block">
                {tq.commentLabel} <span className="text-xs font-normal text-stone-400 lowercase">{tq.optionalLabel}</span>
              </label>
              <textarea
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={tq.commentPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-white text-[#0F172A] text-sm focus:border-[#8C6A48] outline-none"
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(4)}
                className="px-6 py-3 rounded-xl border border-[#CBD5E1] text-[#475569] font-bold text-sm hover:bg-[#F8FAFC] transition-all cursor-pointer"
              >
                {tq.backBtn}
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !name.trim() || !phone.trim()}
                className="px-8 py-3.5 rounded-xl bg-[#8C6A48] hover:bg-[#78593A] disabled:opacity-40 text-white font-bold text-base tracking-wide shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                {isSubmitting ? tq.submittingBtn : tq.submitBtn}
              </button>
            </div>
          </form>
        )}

        {/* STEP 6: SUCCESS & MESSENGER SELECTION */}
        {isCompleted && (
          <div className="py-10 text-center space-y-8 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-4xl mx-auto shadow-inner">
              ✓
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[#0F172A] font-heading">
                {tq.successTitle}
              </h2>
              <p className="text-base text-[#64748B] max-w-lg mx-auto">
                {tq.successSubtitle}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] max-w-lg mx-auto text-left text-sm space-y-2 font-medium text-[#475569]">
              <div>• <span className="font-bold">{tq.summaryClient}:</span> {name} {lastName} ({clientCountry})</div>
              <div>• <span className="font-bold">{tq.summaryCategory}:</span> {propertyTypeItems.find((p) => p.id === propertyType)?.label}</div>
              <div>• <span className="font-bold">{tq.summaryArea}:</span> {areaItems.find((a) => a.id === area)?.label}</div>
              <div>• <span className="font-bold">{tq.summaryBudget}:</span> {budget} {currency}</div>
              <div>• <span className="font-bold">{tq.summaryContact}:</span> {contactPreference === "representative" ? tq.contactRep : tq.contactDirect}</div>
            </div>

            {/* Action Buttons: WhatsApp (Primary) & Telegram (Secondary) */}
            <div className="pt-2 space-y-4 max-w-lg mx-auto">
              <p className="text-xs font-bold uppercase tracking-wider text-[#8C6A48]">
                {tq.messengerChoiceLabel}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* WhatsApp Primary */}
                <button
                  type="button"
                  onClick={() => handleMessengerClick("whatsapp")}
                  className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-md flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                  </svg>
                  <span>{tq.whatsappBtn}</span>
                </button>

                {/* Telegram Secondary (Smaller) */}
                <button
                  type="button"
                  onClick={() => handleMessengerClick("telegram")}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-2xl bg-[#229ED9] hover:bg-[#1e8ec3] text-white font-semibold text-sm shadow-sm flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.989z" />
                  </svg>
                  <span>{tq.telegramBtn}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
