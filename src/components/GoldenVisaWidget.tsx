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
    <section id="golden-visa" className="py-20 md:py-28 border-b border-[rgba(255,255,255,0.06)] bg-[#0B0F17]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[#131B26] shadow-luxury-card relative overflow-hidden card-sheen">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#0B0F17] text-[#D4AF37] border border-[rgba(212,175,55,0.3)] shadow-luxury-card font-mono">
              {gw.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC] tracking-tight font-editorial">
              {gw.title}
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              {gw.subtitle}
            </p>
          </div>

          {/* Stepper Progress */}
          {step < 4 && (
            <div className="flex items-center justify-center gap-2 mb-10 text-xs sm:text-sm font-mono">
              <span
                className={`px-4 py-2 rounded-full font-bold transition-all ${
                  step === 1
                    ? "bg-gradient-to-r from-[#E5C378] to-[#D4AF37] text-[#0B0F17] shadow-md shadow-[#D4AF37]/20"
                    : "bg-[#0B0F17] text-[#94A3B8] border border-[rgba(255,255,255,0.08)]"
                }`}
              >
                1. {gw.step1}
              </span>
              <span className="text-[#94A3B8]">→</span>
              <span
                className={`px-4 py-2 rounded-full font-bold transition-all ${
                  step === 2
                    ? "bg-gradient-to-r from-[#E5C378] to-[#D4AF37] text-[#0B0F17] shadow-md shadow-[#D4AF37]/20"
                    : "bg-[#0B0F17] text-[#94A3B8] border border-[rgba(255,255,255,0.08)]"
                }`}
              >
                2. {gw.step2}
              </span>
              <span className="text-[#94A3B8]">→</span>
              <span
                className={`px-4 py-2 rounded-full font-bold transition-all ${
                  step === 3
                    ? "bg-gradient-to-r from-[#E5C378] to-[#D4AF37] text-[#0B0F17] shadow-md shadow-[#D4AF37]/20"
                    : "bg-[#0B0F17] text-[#94A3B8] border border-[rgba(255,255,255,0.08)]"
                }`}
              >
                3. {gw.step3}
              </span>
            </div>
          )}

          {/* Step 1: Budget with Selectable Cards */}
          {step === 1 && (
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] text-center font-editorial">
                {gw.qBudget}
              </h3>
              <div className="space-y-3.5">
                {/* Option 1: Under 2M */}
                <div
                  role="radio"
                  aria-checked={budget === "under-2m"}
                  tabIndex={0}
                  onClick={() => setBudget("under-2m")}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setBudget("under-2m")}
                  className={`w-full p-5 rounded-2xl border-2 text-left flex items-center justify-between cursor-pointer transition-all duration-200 ${
                    budget === "under-2m"
                      ? "border-[#D4AF37] bg-[#1A2433] shadow-lg shadow-[#D4AF37]/15 ring-1 ring-[#D4AF37]/40"
                      : "border-[rgba(255,255,255,0.08)] bg-[#0B0F17] hover:border-[#D4AF37]/40 hover:bg-[#1A2433]/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        budget === "under-2m" ? "border-[#D4AF37] bg-[#D4AF37]" : "border-[rgba(255,255,255,0.2)] bg-transparent"
                      }`}
                    >
                      {budget === "under-2m" && <div className="w-2.5 h-2.5 rounded-full bg-[#0B0F17]" />}
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-[#F8FAFC]">{gw.optUnder2m}</div>
                      <div className="text-sm text-[#94A3B8] mt-1">{gw.optUnder2mDesc}</div>
                    </div>
                  </div>
                </div>

                {/* Option 2: 2M - 5M (Golden Visa) */}
                <div
                  role="radio"
                  aria-checked={budget === "2m-5m"}
                  tabIndex={0}
                  onClick={() => setBudget("2m-5m")}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setBudget("2m-5m")}
                  className={`w-full p-5 rounded-2xl border-2 text-left flex items-center justify-between cursor-pointer transition-all duration-200 ${
                    budget === "2m-5m"
                      ? "border-[#D4AF37] bg-[#1A2433] shadow-lg shadow-[#D4AF37]/15 ring-1 ring-[#D4AF37]/40"
                      : "border-[rgba(255,255,255,0.08)] bg-[#0B0F17] hover:border-[#D4AF37]/40 hover:bg-[#1A2433]/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        budget === "2m-5m" ? "border-[#D4AF37] bg-[#D4AF37]" : "border-[rgba(255,255,255,0.2)] bg-transparent"
                      }`}
                    >
                      {budget === "2m-5m" && <div className="w-2.5 h-2.5 rounded-full bg-[#0B0F17]" />}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base sm:text-lg font-bold text-[#F8FAFC]">{gw.opt2mTo5m}</span>
                        <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                          10-Year Golden Visa
                        </span>
                      </div>
                      <div className="text-sm text-[#94A3B8] mt-1">{gw.opt2mTo5mDesc}</div>
                    </div>
                  </div>
                </div>

                {/* Option 3: 5M+ */}
                <div
                  role="radio"
                  aria-checked={budget === "5m+"}
                  tabIndex={0}
                  onClick={() => setBudget("5m+")}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setBudget("5m+")}
                  className={`w-full p-5 rounded-2xl border-2 text-left flex items-center justify-between cursor-pointer transition-all duration-200 ${
                    budget === "5m+"
                      ? "border-[#D4AF37] bg-[#1A2433] shadow-lg shadow-[#D4AF37]/15 ring-1 ring-[#D4AF37]/40"
                      : "border-[rgba(255,255,255,0.08)] bg-[#0B0F17] hover:border-[#D4AF37]/40 hover:bg-[#1A2433]/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        budget === "5m+" ? "border-[#D4AF37] bg-[#D4AF37]" : "border-[rgba(255,255,255,0.2)] bg-transparent"
                      }`}
                    >
                      {budget === "5m+" && <div className="w-2.5 h-2.5 rounded-full bg-[#0B0F17]" />}
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-[#F8FAFC]">{gw.opt5mPlus}</div>
                      <div className="text-sm text-[#94A3B8] mt-1">{gw.opt5mPlusDesc}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#FDE68A] hover:to-[#D4AF37] text-[#0B0F17] font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all shadow-md shadow-[#D4AF37]/25 flex items-center gap-2"
                >
                  <span>{gw.next}</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Readiness with Selectable Cards */}
          {step === 2 && (
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] text-center font-editorial">
                {gw.qReadiness}
              </h3>
              <div className="space-y-3.5">
                {[
                  { id: "off-plan", label: gw.optOffPlan },
                  { id: "ready", label: gw.optReady },
                  { id: "mortgage", label: gw.optMortgage },
                ].map((opt) => (
                  <div
                    key={opt.id}
                    role="radio"
                    aria-checked={propertyType === opt.id}
                    tabIndex={0}
                    onClick={() => setPropertyType(opt.id)}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setPropertyType(opt.id)}
                    className={`w-full p-5 rounded-2xl border-2 text-left flex items-center justify-between cursor-pointer transition-all duration-200 ${
                      propertyType === opt.id
                        ? "border-[#D4AF37] bg-[#1A2433] shadow-lg shadow-[#D4AF37]/15 ring-1 ring-[#D4AF37]/40"
                        : "border-[rgba(255,255,255,0.08)] bg-[#0B0F17] hover:border-[#D4AF37]/40 hover:bg-[#1A2433]/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          propertyType === opt.id ? "border-[#D4AF37] bg-[#D4AF37]" : "border-[rgba(255,255,255,0.2)] bg-transparent"
                        }`}
                      >
                        {propertyType === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-[#0B0F17]" />}
                      </div>
                      <div className="text-base sm:text-lg font-bold text-[#F8FAFC]">{opt.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-xl bg-[#0B0F17] border border-[rgba(255,255,255,0.08)] text-[#94A3B8] hover:text-[#F8FAFC] text-xs sm:text-sm font-semibold"
                >
                  &larr; {gw.back}
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#FDE68A] hover:to-[#D4AF37] text-[#0B0F17] font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all shadow-md shadow-[#D4AF37]/25 flex items-center gap-2"
                >
                  <span>{gw.next}</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Family with Selectable Cards */}
          {step === 3 && (
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] text-center font-editorial">
                {gw.qFamily}
              </h3>
              <div className="space-y-3.5">
                {[
                  { id: "single", label: gw.optIndividual },
                  { id: "family", label: gw.optFamily },
                ].map((opt) => (
                  <div
                    key={opt.id}
                    role="radio"
                    aria-checked={family === opt.id}
                    tabIndex={0}
                    onClick={() => setFamily(opt.id)}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setFamily(opt.id)}
                    className={`w-full p-5 rounded-2xl border-2 text-left flex items-center justify-between cursor-pointer transition-all duration-200 ${
                      family === opt.id
                        ? "border-[#D4AF37] bg-[#1A2433] shadow-lg shadow-[#D4AF37]/15 ring-1 ring-[#D4AF37]/40"
                        : "border-[rgba(255,255,255,0.08)] bg-[#0B0F17] hover:border-[#D4AF37]/40 hover:bg-[#1A2433]/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          family === opt.id ? "border-[#D4AF37] bg-[#D4AF37]" : "border-[rgba(255,255,255,0.2)] bg-transparent"
                        }`}
                      >
                        {family === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-[#0B0F17]" />}
                      </div>
                      <div className="text-base sm:text-lg font-bold text-[#F8FAFC]">{opt.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-[#0B0F17] border border-[rgba(255,255,255,0.08)] text-[#94A3B8] hover:text-[#F8FAFC] text-xs sm:text-sm font-semibold"
                >
                  &larr; {gw.back}
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#FDE68A] hover:to-[#D4AF37] text-[#0B0F17] font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all shadow-md shadow-[#D4AF37]/25 flex items-center gap-2"
                >
                  <span>{gw.next}</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Result & Form */}
          {step === 4 && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="p-7 rounded-2xl bg-[#0B0F17] border border-[rgba(212,175,55,0.3)] text-center space-y-3 shadow-luxury-card">
                <div className="text-4xl">{isEligible10Year ? "🛡️" : "💡"}</div>
                <h4 className="text-2xl font-bold text-[#D4AF37] font-editorial">
                  {isEligible10Year ? gw.resultEligible : gw.resultStandard}
                </h4>
                <p className="text-sm sm:text-base text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
                  {isEligible10Year ? gw.resultDescEligible : gw.resultDescStandard}
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-7 rounded-2xl bg-[#0B0F17] border border-emerald-500/40 text-center space-y-3.5 shadow-luxury-card">
                  <div className="text-4xl">✅</div>
                  <h4 className="text-xl font-bold text-emerald-400 font-editorial">{gw.submittedTitle}</h4>
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    {gw.submittedDesc}
                  </p>
                  {routingResult && (
                    <div className="text-xs sm:text-sm font-mono text-[#D4AF37] pt-2">
                      {gw.routedTo} <strong>{routingResult.agencyDesk}</strong>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-2 font-mono">
                      {gw.formName}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={gw.formName}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0B0F17] border border-[rgba(255,255,255,0.08)] text-[#F8FAFC] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-2 font-mono">
                      {gw.formPhone}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 ... / +7 999 ..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0B0F17] border border-[rgba(255,255,255,0.08)] text-[#F8FAFC] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#B89628] hover:from-[#FDE68A] hover:to-[#D4AF37] text-[#0B0F17] font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-[#D4AF37]/25 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? gw.submitting : gw.submitBtn}
                  </button>

                  <p className="text-xs text-[#94A3B8] text-center">
                    {gw.confidentialNotice}
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
