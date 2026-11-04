"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LangContext";
import { getAttributionData } from "@/lib/attribution";
import { dispatchLead, LeadRoutingResult } from "@/lib/leadRouting";

export default function GoldenVisaWidget() {
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
    <section id="golden-visa" className="py-16 md:py-24 border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl border border-amber-500/40 bg-zinc-900/90 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Subtle Golden Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
              {gw.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {gw.title}
            </h2>
            <p className="text-sm text-zinc-300">
              {gw.subtitle}
            </p>
          </div>

          {/* Stepper Progress */}
          {step < 4 && (
            <div className="flex items-center justify-center gap-2 mb-10 text-xs font-mono">
              <span className={`px-3 py-1 rounded-full ${step === 1 ? "bg-amber-400 text-zinc-950 font-bold" : "bg-zinc-800 text-zinc-400"}`}>
                {gw.step1}
              </span>
              <span className="text-zinc-600">→</span>
              <span className={`px-3 py-1 rounded-full ${step === 2 ? "bg-amber-400 text-zinc-950 font-bold" : "bg-zinc-800 text-zinc-400"}`}>
                {gw.step2}
              </span>
              <span className="text-zinc-600">→</span>
              <span className={`px-3 py-1 rounded-full ${step === 3 ? "bg-amber-400 text-zinc-950 font-bold" : "bg-zinc-800 text-zinc-400"}`}>
                {gw.step3}
              </span>
            </div>
          )}

          {/* Step 1: Budget */}
          {step === 1 && (
            <div className="max-w-xl mx-auto space-y-6 animate-fade-in">
              <h3 className="text-lg font-bold text-white text-center">
                {gw.qBudget}
              </h3>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setBudget("under-2m")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    budget === "under-2m"
                      ? "border-amber-400 bg-amber-400/10 text-white font-semibold"
                      : "border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  <div>
                    <div className="text-sm font-semibold">{gw.optUnder2m}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{gw.optUnder2mDesc}</div>
                  </div>
                  {budget === "under-2m" && <span className="text-amber-400 font-bold">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => setBudget("2m-5m")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    budget === "2m-5m"
                      ? "border-amber-400 bg-amber-400/10 text-white font-semibold shadow-md shadow-amber-500/10"
                      : "border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold text-amber-300">{gw.opt2mTo5m}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">★ {gw.opt2mTo5mDesc}</div>
                  </div>
                  {budget === "2m-5m" && <span className="text-amber-400 font-bold">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => setBudget("5m+")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    budget === "5m+"
                      ? "border-amber-400 bg-amber-400/10 text-white font-semibold"
                      : "border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold text-amber-300">{gw.opt5mPlus}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{gw.opt5mPlusDesc}</div>
                  </div>
                  {budget === "5m+" && <span className="text-amber-400 font-bold">✓</span>}
                </button>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm transition-all shadow-md shadow-amber-500/20"
                >
                  {gw.next} &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Readiness */}
          {step === 2 && (
            <div className="max-w-xl mx-auto space-y-6 animate-fade-in">
              <h3 className="text-lg font-bold text-white text-center">
                {gw.qReadiness}
              </h3>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setPropertyType("off-plan")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    propertyType === "off-plan"
                      ? "border-amber-400 bg-amber-400/10 text-white font-semibold"
                      : "border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{gw.optOffPlan}</div>
                  </div>
                  {propertyType === "off-plan" && <span className="text-amber-400 font-bold">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => setPropertyType("ready")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    propertyType === "ready"
                      ? "border-amber-400 bg-amber-400/10 text-white font-semibold"
                      : "border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{gw.optReady}</div>
                  </div>
                  {propertyType === "ready" && <span className="text-amber-400 font-bold">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => setPropertyType("mortgage")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    propertyType === "mortgage"
                      ? "border-amber-400 bg-amber-400/10 text-white font-semibold"
                      : "border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{gw.optMortgage}</div>
                  </div>
                  {propertyType === "mortgage" && <span className="text-amber-400 font-bold">✓</span>}
                </button>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold"
                >
                  &larr; {gw.back}
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm transition-all shadow-md shadow-amber-500/20"
                >
                  {gw.next} &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Family */}
          {step === 3 && (
            <div className="max-w-xl mx-auto space-y-6 animate-fade-in">
              <h3 className="text-lg font-bold text-white text-center">
                {gw.qFamily}
              </h3>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setFamily("single")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    family === "single"
                      ? "border-amber-400 bg-amber-400/10 text-white font-semibold"
                      : "border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{gw.optIndividual}</div>
                  </div>
                  {family === "single" && <span className="text-amber-400 font-bold">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => setFamily("family")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    family === "family"
                      ? "border-amber-400 bg-amber-400/10 text-white font-semibold"
                      : "border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{gw.optFamily}</div>
                  </div>
                  {family === "family" && <span className="text-amber-400 font-bold">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => setFamily("extended")}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    family === "extended"
                      ? "border-amber-400 bg-amber-400/10 text-white font-semibold"
                      : "border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">{gw.optParents}</div>
                  </div>
                  {family === "extended" && <span className="text-amber-400 font-bold">✓</span>}
                </button>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold"
                >
                  &larr; {gw.back}
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm transition-all shadow-md shadow-amber-500/20"
                >
                  {gw.next} &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Results & Lead Capture */}
          {step === 4 && (
            <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-center space-y-2">
                <span className="text-4xl">🎉</span>
                <h3 className="text-2xl font-extrabold text-amber-300">
                  {isEligible10Year ? gw.resultEligible : gw.resultStandard}
                </h3>
                <p className="text-xs text-zinc-300 max-w-lg mx-auto">
                  {isEligible10Year ? gw.resultDescEligible : gw.resultDescStandard}
                </p>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{t.goldenVisa.benefit1}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{t.goldenVisa.benefit2}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{t.goldenVisa.benefit3}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{t.goldenVisa.benefit4}</span>
                </div>
              </div>

              {/* Submission Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
                  <h4 className="text-sm font-bold text-white text-center">
                    {gw.submitBtn}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">{gw.formName}</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alexander"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-100 text-xs focus:outline-none focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">{gw.formPhone}</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-100 text-xs focus:outline-none focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "..." : gw.submitBtn}
                  </button>
                </form>
              ) : (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="text-2xl">✅</div>
                  <h4 className="text-lg font-bold text-emerald-400">{gw.submittedTitle}</h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto">{gw.submittedDesc}</p>
                  <a
                    href={`https://wa.me/971500000000?text=${encodeURIComponent(
                      `Hello, I verified my Golden Visa eligibility on Dubai-Architecture.info: Budget: ${budget}, Type: ${propertyType}, Family: ${family}. Name: ${name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    <span>💬</span>
                    <span>{t.whatsapp.buttonText}</span>
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
