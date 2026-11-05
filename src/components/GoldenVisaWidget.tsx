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
    <section id="golden-visa" className="py-16 md:py-24 border-b border-[#E2E8F0] bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl border border-[#E2E8F0] bg-white shadow-float-card relative overflow-hidden">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#F1F5F9] text-[#0F172A] border border-[#CBD5E1]">
              {gw.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight font-heading">
              {gw.title}
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              {gw.subtitle}
            </p>
          </div>

          {/* Stepper Progress */}
          {step < 4 && (
            <div className="flex items-center justify-center gap-2 mb-10 text-xs sm:text-sm font-mono">
              <span
                className={`px-4 py-2 rounded-full font-bold transition-all ${
                  step === 1
                    ? "bg-[#0F172A] text-white shadow-xs"
                    : "bg-[#F8F9FA] text-[#64748B] border border-[#E2E8F0]"
                }`}
              >
                1. {gw.step1}
              </span>
              <span className="text-[#CBD5E1]">→</span>
              <span
                className={`px-4 py-2 rounded-full font-bold transition-all ${
                  step === 2
                    ? "bg-[#0F172A] text-white shadow-xs"
                    : "bg-[#F8F9FA] text-[#64748B] border border-[#E2E8F0]"
                }`}
              >
                2. {gw.step2}
              </span>
              <span className="text-[#CBD5E1]">→</span>
              <span
                className={`px-4 py-2 rounded-full font-bold transition-all ${
                  step === 3
                    ? "bg-[#0F172A] text-white shadow-xs"
                    : "bg-[#F8F9FA] text-[#64748B] border border-[#E2E8F0]"
                }`}
              >
                3. {gw.step3}
              </span>
            </div>
          )}

          {/* Step 1: Budget with Selectable Cards */}
          {step === 1 && (
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] text-center font-heading">
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
                      ? "border-[#0F172A] bg-white shadow-md ring-2 ring-[#0F172A]/10"
                      : "border-[#E2E8F0] bg-[#F8F9FA] hover:border-[#CBD5E1] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        budget === "under-2m" ? "border-[#0F172A] bg-[#0F172A]" : "border-[#CBD5E1] bg-white"
                      }`}
                    >
                      {budget === "under-2m" && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-[#0F172A]">{gw.optUnder2m}</div>
                      <div className="text-sm sm:text-base text-[#64748B] mt-1">{gw.optUnder2mDesc}</div>
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
                      ? "border-[#0F172A] bg-white shadow-md ring-2 ring-[#0F172A]/10"
                      : "border-[#E2E8F0] bg-[#F8F9FA] hover:border-[#CBD5E1] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        budget === "2m-5m" ? "border-[#0F172A] bg-[#0F172A]" : "border-[#CBD5E1] bg-white"
                      }`}
                    >
                      {budget === "2m-5m" && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base sm:text-lg font-bold text-[#0F172A]">{gw.opt2mTo5m}</span>
                        <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-full bg-emerald-100 text-[#059669]">
                          10-Year Golden Visa
                        </span>
                      </div>
                      <div className="text-sm sm:text-base text-[#64748B] mt-1">{gw.opt2mTo5mDesc}</div>
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
                      ? "border-[#0F172A] bg-white shadow-md ring-2 ring-[#0F172A]/10"
                      : "border-[#E2E8F0] bg-[#F8F9FA] hover:border-[#CBD5E1] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        budget === "5m+" ? "border-[#0F172A] bg-[#0F172A]" : "border-[#CBD5E1] bg-white"
                      }`}
                    >
                      {budget === "5m+" && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-[#0F172A]">{gw.opt5mPlus}</div>
                      <div className="text-sm sm:text-base text-[#64748B] mt-1">{gw.opt5mPlusDesc}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-7 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm sm:text-base transition-all shadow-sm flex items-center gap-2"
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
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] text-center font-heading">
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
                        ? "border-[#0F172A] bg-white shadow-md ring-2 ring-[#0F172A]/10"
                        : "border-[#E2E8F0] bg-[#F8F9FA] hover:border-[#CBD5E1] hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          propertyType === opt.id ? "border-[#0F172A] bg-[#0F172A]" : "border-[#CBD5E1] bg-white"
                        }`}
                      >
                        {propertyType === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                      </div>
                      <div className="text-base sm:text-lg font-bold text-[#0F172A]">{opt.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] text-xs sm:text-sm font-semibold"
                >
                  &larr; {gw.back}
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-7 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm sm:text-base transition-all shadow-sm flex items-center gap-2"
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
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] text-center font-heading">
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
                        ? "border-[#0F172A] bg-white shadow-md ring-2 ring-[#0F172A]/10"
                        : "border-[#E2E8F0] bg-[#F8F9FA] hover:border-[#CBD5E1] hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          family === opt.id ? "border-[#0F172A] bg-[#0F172A]" : "border-[#CBD5E1] bg-white"
                        }`}
                      >
                        {family === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                      </div>
                      <div className="text-base sm:text-lg font-bold text-[#0F172A]">{opt.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] text-xs sm:text-sm font-semibold"
                >
                  &larr; {gw.back}
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-7 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm sm:text-base transition-all shadow-sm flex items-center gap-2"
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
              <div className="p-7 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] text-center space-y-3">
                <div className="text-4xl">{isEligible10Year ? "🛡️" : "💡"}</div>
                <h4 className="text-2xl font-bold text-[#0F172A] font-heading">
                  {isEligible10Year ? gw.resultEligible : gw.resultStandard}
                </h4>
                <p className="text-sm sm:text-base text-[#475569] max-w-lg mx-auto leading-relaxed">
                  {isEligible10Year ? gw.resultDescEligible : gw.resultDescStandard}
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-7 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3.5">
                  <div className="text-4xl">✅</div>
                  <h4 className="text-xl font-bold text-[#059669]">{gw.submittedTitle}</h4>
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                    {gw.submittedDesc}
                  </p>
                  {routingResult && (
                    <div className="text-xs sm:text-sm font-mono text-[#0F172A] pt-2">
                      {gw.routedTo} <strong>{routingResult.agencyDesk}</strong>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#64748B] uppercase tracking-wider mb-2">
                      {gw.formName}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={gw.formName}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] text-[#0F172A] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#64748B] uppercase tracking-wider mb-2">
                      {gw.formPhone}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 ... / +7 999 ..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] text-[#0F172A] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-sm transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? gw.submitting : gw.submitBtn}
                  </button>

                  <p className="text-xs sm:text-sm text-[#64748B] text-center">
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