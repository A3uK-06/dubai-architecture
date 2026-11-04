"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LangContext";
import { getAttributionData } from "@/lib/attribution";
import { dispatchLead, LeadRoutingResult } from "@/lib/leadRouting";

interface GoldenVisaWidgetProps {
  onOpenInquire?: (details: string) => void;
}

export default function GoldenVisaWidget({ onOpenInquire }: GoldenVisaWidgetProps) {
  const { t, lang } = useLang();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [budget, setBudget] = useState<string>("2m-5m");
  const [propertyType, setPropertyType] = useState<string>("off-plan");
  const [family, setFamily] = useState<string>("family");

  // Form submission state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [routingResult, setRoutingResult] = useState<LeadRoutingResult | null>(null);

  const handleNext = () => {
    if (step < 3) {
      setStep((step + 1) as any);
    } else {
      setStep(4);
    }
  };

  const isEligible10Year = budget === "2m-5m" || budget === "5m+";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const attribution = getAttributionData();

    const result = await dispatchLead({
      name,
      phone,
      budget,
      targetTower: `Golden Visa Eligibility Check (${propertyType}, ${family})`,
      language: lang,
      attribution,
      notes: `Readiness: ${propertyType}, Family: ${family}`,
      timestamp: new Date().toISOString(),
    });

    setRoutingResult(result);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const gw = t.goldenVisaWidget;

  return (
    <section id="golden-visa" className="py-16 md:py-24 border-b border-[#E5DFD3] bg-[#EFECE4]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl border border-[#E5DFD3] bg-white shadow-medium-tint relative overflow-hidden">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#EFECE4] text-[#8C6A48] border border-[#DDD7CA]">
              {gw.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
              {gw.title}
            </h2>
            <p className="text-sm text-[#57534E]">
              {gw.subtitle}
            </p>
          </div>

          {/* Stepper Progress */}
          {step < 4 && (
            <div className="flex items-center justify-center gap-2 mb-10 text-xs font-mono">
              <span className={`px-3.5 py-1.5 rounded-full font-bold ${step === 1 ? "bg-[#8C6A48] text-white" : "bg-[#FAF8F5] text-[#78716C] border border-[#E5DFD3]"}`}>
                {gw.step1}
              </span>
              <span className="text-[#DDD7CA]">→</span>
              <span className={`px-3.5 py-1.5 rounded-full font-bold ${step === 2 ? "bg-[#8C6A48] text-white" : "bg-[#FAF8F5] text-[#78716C] border border-[#E5DFD3]"}`}>
                {gw.step2}
              </span>
              <span className="text-[#DDD7CA]">→</span>
              <span className={`px-3.5 py-1.5 rounded-full font-bold ${step === 3 ? "bg-[#8C6A48] text-white" : "bg-[#FAF8F5] text-[#78716C] border border-[#E5DFD3]"}`}>
                {gw.step3}
              </span>
            </div>
          )}

          {/* Step 1: Budget */}
          {step === 1 && (
            <div className="max-w-xl mx-auto space-y-6">
              <h3 className="text-lg font-bold text-[#1C1917] text-center">
                {gw.qBudget}
              </h3>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setBudget("under-2m")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    budget === "under-2m"
                      ? "border-[#8C6A48] bg-[#EFECE4] text-[#1C1917] font-semibold"
                      : "border-[#E5DFD3] bg-[#FAF8F5] text-[#57534E] hover:border-[#DDD7CA]"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold text-[#1C1917]">{gw.optUnder2m}</div>
                    <div className="text-xs text-[#78716C] mt-0.5">{gw.optUnder2mDesc}</div>
                  </div>
                  {budget === "under-2m" && <span className="text-[#8C6A48] font-bold">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => setBudget("2m-5m")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    budget === "2m-5m"
                      ? "border-[#8C6A48] bg-[#EFECE4] text-[#1C1917] font-semibold shadow-soft-tint"
                      : "border-[#E5DFD3] bg-[#FAF8F5] text-[#57534E] hover:border-[#DDD7CA]"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold text-[#8C6A48]">{gw.opt2mTo5m}</div>
                    <div className="text-xs text-[#57534E] mt-0.5">★ {gw.opt2mTo5mDesc}</div>
                  </div>
                  {budget === "2m-5m" && <span className="text-[#8C6A48] font-bold">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => setBudget("5m+")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    budget === "5m+"
                      ? "border-[#8C6A48] bg-[#EFECE4] text-[#1C1917] font-semibold"
                      : "border-[#E5DFD3] bg-[#FAF8F5] text-[#57534E] hover:border-[#DDD7CA]"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold text-[#8C6A48]">{gw.opt5mPlus}</div>
                    <div className="text-xs text-[#57534E] mt-0.5">{gw.opt5mPlusDesc}</div>
                  </div>
                  {budget === "5m+" && <span className="text-[#8C6A48] font-bold">✓</span>}
                </button>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-[#8C6A48] hover:bg-[#6D5135] text-white font-bold text-sm transition-all shadow-soft-tint"
                >
                  {gw.next} &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Readiness */}
          {step === 2 && (
            <div className="max-w-xl mx-auto space-y-6">
              <h3 className="text-lg font-bold text-[#1C1917] text-center">
                {gw.qReadiness}
              </h3>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setPropertyType("off-plan")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    propertyType === "off-plan"
                      ? "border-[#8C6A48] bg-[#EFECE4] text-[#1C1917] font-semibold"
                      : "border-[#E5DFD3] bg-[#FAF8F5] text-[#57534E] hover:border-[#DDD7CA]"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{gw.optOffPlan}</div>
                  </div>
                  {propertyType === "off-plan" && <span className="text-[#8C6A48] font-bold">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => setPropertyType("ready")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    propertyType === "ready"
                      ? "border-[#8C6A48] bg-[#EFECE4] text-[#1C1917] font-semibold"
                      : "border-[#E5DFD3] bg-[#FAF8F5] text-[#57534E] hover:border-[#DDD7CA]"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{gw.optReady}</div>
                  </div>
                  {propertyType === "ready" && <span className="text-[#8C6A48] font-bold">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => setPropertyType("mortgage")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    propertyType === "mortgage"
                      ? "border-[#8C6A48] bg-[#EFECE4] text-[#1C1917] font-semibold"
                      : "border-[#E5DFD3] bg-[#FAF8F5] text-[#57534E] hover:border-[#DDD7CA]"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{gw.optMortgage}</div>
                  </div>
                  {propertyType === "mortgage" && <span className="text-[#8C6A48] font-bold">✓</span>}
                </button>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-[#57534E] text-xs font-semibold"
                >
                  &larr; {gw.back}
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-[#8C6A48] hover:bg-[#6D5135] text-white font-bold text-sm transition-all shadow-soft-tint"
                >
                  {gw.next} &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Family */}
          {step === 3 && (
            <div className="max-w-xl mx-auto space-y-6">
              <h3 className="text-lg font-bold text-[#1C1917] text-center">
                {gw.qFamily}
              </h3>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setFamily("single")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    family === "single"
                      ? "border-[#8C6A48] bg-[#EFECE4] text-[#1C1917] font-semibold"
                      : "border-[#E5DFD3] bg-[#FAF8F5] text-[#57534E] hover:border-[#DDD7CA]"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{gw.optIndividual}</div>
                  </div>
                  {family === "single" && <span className="text-[#8C6A48] font-bold">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => setFamily("family")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    family === "family"
                      ? "border-[#8C6A48] bg-[#EFECE4] text-[#1C1917] font-semibold"
                      : "border-[#E5DFD3] bg-[#FAF8F5] text-[#57534E] hover:border-[#DDD7CA]"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{gw.optFamily}</div>
                  </div>
                  {family === "family" && <span className="text-[#8C6A48] font-bold">✓</span>}
                </button>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-[#57534E] text-xs font-semibold"
                >
                  &larr; {gw.back}
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-[#8C6A48] hover:bg-[#6D5135] text-white font-bold text-sm transition-all shadow-soft-tint"
                >
                  {gw.next} &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Result & Form */}
          {step === 4 && (
            <div className="max-w-xl mx-auto space-y-6">
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] text-center space-y-2">
                <div className="text-2xl">{isEligible10Year ? "🎉" : "💡"}</div>
                <h4 className="text-xl font-bold text-[#1C1917]">
                  {isEligible10Year ? gw.resultEligible : gw.resultStandard}
                </h4>
                <p className="text-xs text-[#57534E] max-w-md mx-auto leading-relaxed">
                  {isEligible10Year ? gw.resultDescEligible : gw.resultDescStandard}
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#2D6A4F]/10 border border-[#2D6A4F]/30 text-center space-y-3">
                  <div className="text-3xl">✅</div>
                  <h4 className="text-lg font-bold text-[#2D6A4F]">Заявка успешно принята</h4>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    Наш аккредитованный специалист свяжется с вами для оформления Золотой визы.
                  </p>
                  {routingResult && (
                    <div className="text-xs font-mono text-[#8C6A48] pt-2">
                      Направлено в отдел: <strong>{routingResult.agencyDesk}</strong>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#78716C] uppercase mb-1">
                      {gw.formName}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={gw.formName}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-[#1C1917] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6A48]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#78716C] uppercase mb-1">
                      {gw.formPhone}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 ... / +7 999 ..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-[#1C1917] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6A48]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#8C6A48] hover:bg-[#6D5135] text-white font-bold text-sm uppercase tracking-wider shadow-soft-tint transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Отправка..." : gw.submitBtn}
                  </button>

                  <p className="text-[11px] text-[#78716C] text-center">
                    🔒 Конфиденциально. Официальный протокол аккредитации RERA ОАЭ.
                  </p>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
