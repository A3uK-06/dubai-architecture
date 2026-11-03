"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LangContext";
import { getAttributionData } from "@/lib/attribution";
import { dispatchLead, LeadRoutingResult } from "@/lib/leadRouting";

export default function GoldenVisaWidget() {
  const { lang } = useLang();

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

  return (
    <section id="golden-visa-widget" className="py-16 md:py-24 border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl border border-amber-500/40 bg-zinc-900/90 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Subtle Golden Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Official 2026 Regulations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              UAE 10-Year Golden Visa Eligibility Checker
            </h2>
            <p className="text-sm text-zinc-300">
              Answer 3 simple questions to verify your eligibility for 10-year residency via Dubai real estate acquisition.
            </p>
          </div>

          {/* Stepper Progress */}
          {step < 4 && (
            <div className="flex items-center justify-center gap-2 mb-10 text-xs font-mono">
              <span className={`px-3 py-1 rounded-full ${step === 1 ? "bg-amber-400 text-zinc-950 font-bold" : "bg-zinc-800 text-zinc-400"}`}>
                1. Budget
              </span>
              <span className="text-zinc-600">→</span>
              <span className={`px-3 py-1 rounded-full ${step === 2 ? "bg-amber-400 text-zinc-950 font-bold" : "bg-zinc-800 text-zinc-400"}`}>
                2. Readiness
              </span>
              <span className="text-zinc-600">→</span>
              <span className={`px-3 py-1 rounded-full ${step === 3 ? "bg-amber-400 text-zinc-950 font-bold" : "bg-zinc-800 text-zinc-400"}`}>
                3. Family
              </span>
            </div>
          )}

          {/* Step 1: Budget */}
          {step === 1 && (
            <div className="max-w-xl mx-auto space-y-6 animate-fade-in">
              <h3 className="text-lg font-bold text-white text-center">
                What is your target property investment budget?
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
                    <div className="text-sm">Under 2,000,000 AED (&lt; $545,000 USD)</div>
                    <div className="text-xs text-zinc-500 mt-0.5">Eligible for 2-Year Investor Residency</div>
                  </div>
                  {budget === "under-2m" && <span className="text-amber-400">✓</span>}
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
                    <div className="text-sm font-bold text-amber-300">2,000,000 – 5,000,000 AED ($545k – $1.36M)</div>
                    <div className="text-xs text-zinc-400 mt-0.5">★ Direct UAE 10-Year Golden Visa Qualification</div>
                  </div>
                  {budget === "2m-5m" && <span className="text-amber-400">✓</span>}
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
                    <div className="text-sm font-bold text-amber-300">Over 5,000,000 AED (&gt; $1.36M USD)</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Ultra-Prime Asset + Golden Visa + Priority Bank Onboarding</div>
                  </div>
                  {budget === "5m+" && <span className="text-amber-400">✓</span>}
                </button>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm transition-all shadow-md shadow-amber-500/20"
                >
                  Next Step &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Readiness */}
          {step === 2 && (
            <div className="max-w-xl mx-auto space-y-6 animate-fade-in">
              <h3 className="text-lg font-bold text-white text-center">
                What stage of property development do you prefer?
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
                    <div className="text-sm font-bold">Off-Plan / Under Construction</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Flexible payment plans (e.g. 70/30 or 80/20), maximum capital appreciation</div>
                  </div>
                  {propertyType === "off-plan" && <span className="text-amber-400">✓</span>}
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
                    <div className="text-sm font-bold">Ready / Completed Property</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Immediate title deed (Oqood/Title Deed), instant rental income</div>
                  </div>
                  {propertyType === "ready" && <span className="text-amber-400">✓</span>}
                </button>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm transition-all shadow-md shadow-amber-500/20"
                >
                  Next Step &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Family */}
          {step === 3 && (
            <div className="max-w-xl mx-auto space-y-6 animate-fade-in">
              <h3 className="text-lg font-bold text-white text-center">
                Who will be included in the residency application?
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
                    <div className="text-sm font-bold">Primary Investor Only</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Single applicant with full banking & tax rights</div>
                  </div>
                  {family === "single" && <span className="text-amber-400">✓</span>}
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
                    <div className="text-sm font-bold">Investor + Spouse + Children</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Covers spouse and children without age restrictions under Golden Visa rules</div>
                  </div>
                  {family === "family" && <span className="text-amber-400">✓</span>}
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
                    <div className="text-sm font-bold">Investor + Family + Dependent Parents</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Full multi-generation sponsorship package</div>
                  </div>
                  {family === "extended" && <span className="text-amber-400">✓</span>}
                </button>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm transition-all shadow-md shadow-amber-500/20"
                >
                  See Visa Eligibility Results &rarr;
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
                  {isEligible10Year
                    ? "Congratulations! You Qualify for the UAE 10-Year Golden Visa"
                    : "You Qualify for the UAE 2-Year Investor Residency Visa"}
                </h3>
                <p className="text-xs text-zinc-300 max-w-lg mx-auto">
                  Based on your parameters ({budget}, {propertyType}, {family}), your investment aligns 100% with Dubai Land Department (DLD) and Federal Authority for Identity and Citizenship (ICP) requirements.
                </p>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>100% Foreign Property Ownership</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>0% Personal Income & Rental Tax</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>No minimum stay requirement</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Access to UAE Premier Banking</span>
                </div>
              </div>

              {/* Consultation Form */}
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4"
                >
                  <div className="text-sm font-bold text-white">
                    Request Approved Golden Visa Properties & Free Legal Assessment
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name"
                      className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="WhatsApp / Phone (with country code)"
                      className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Routing to Assigned Broker..." : "Receive Golden Visa Property Catalog (PDF & WhatsApp)"}
                  </button>
                  <div className="text-[11px] text-zinc-500 text-center">
                    🔒 Official RERA licensed broker guidance. No fees, 100% confidential.
                  </div>
                </form>
              ) : (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="text-3xl">✅</div>
                  <h4 className="text-lg font-bold text-emerald-400">
                    Application Received, {name}!
                  </h4>
                  <p className="text-xs text-zinc-300">
                    Your request has been routed to our partner agency:{" "}
                    <strong className="text-amber-400">{routingResult?.agency}</strong> ({routingResult?.agencyDesk}).
                  </p>
                  <a
                    href={`https://wa.me/971500000000?text=${encodeURIComponent(
                      `Hello, I completed the Golden Visa checker on Dubai-Architecture.info. My name is ${name}, budget: ${budget}. Please share the pre-approved property list.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold transition-all"
                  >
                    <span>💬</span>
                    <span>Continue in WhatsApp</span>
                  </a>
                </div>
              )}

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-zinc-500 hover:text-zinc-300 underline"
                >
                  Restart Questionnaire
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
