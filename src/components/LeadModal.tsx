"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LangContext";
import { getAttributionData } from "@/lib/attribution";
import { dispatchLead, LeadRoutingResult } from "@/lib/leadRouting";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  initialTower?: string;
}

export default function LeadModal({
  isOpen,
  onClose,
  title,
  subtitle,
  initialTower,
}: LeadModalProps) {
  const { t, lang } = useLang();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("2m-5m");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [, setRoutingResult] = useState<LeadRoutingResult | null>(null);

  if (!isOpen) return null;

  const modalTitle = title || t.leadModal.defaultTitle;
  const modalSubtitle = subtitle || t.leadModal.defaultSubtitle;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const attribution = getAttributionData();

    const leadPayload = {
      name,
      phone,
      email,
      budget,
      targetTower: initialTower || "General Top-10 Catalog",
      language: lang,
      attribution,
      timestamp: new Date().toISOString(),
    };

    const result = await dispatchLead(leadPayload);
    setRoutingResult(result);

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello! My name is ${name}. I requested the Top-10 Towers Investment Catalog on Dubai-Architecture.info. Please share the PDF and current availability.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-amber-500/40 p-6 sm:p-8 shadow-strong-tint space-y-6">
        {/* Close Button (40px hit area) */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-colors text-lg font-bold"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!isSuccess ? (
          <>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-zinc-950">
                {t.leadModal.modalBadge}
              </span>
              <h3 className="text-2xl font-extrabold text-zinc-100 tracking-tight">
                {modalTitle}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {modalSubtitle}
              </p>
            </div>

            {/* Form with 12px label-to-input gap and 24px between groups (Playbook Law of Proximity) */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-300">
                  {t.leadModal.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alexander Smith"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-300">
                  {t.leadModal.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 50 ... / +7 999 ... / +44 ..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-300">
                  {t.leadModal.emailLabel}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-300">
                  {t.leadModal.budgetLabel}
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                >
                  <option value="under-2m">Under 2,000,000 AED (&lt; $545,000 USD)</option>
                  <option value="2m-5m">2,000,000 – 5,000,000 AED (Golden Visa 10-Yr)</option>
                  <option value="5m-10m">5,000,000 – 10,000,000 AED ($1.36M - $2.7M)</option>
                  <option value="10m+">Over 10,000,000 AED (Ultra-Luxury Penthouse)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold text-sm uppercase tracking-wider shadow-md shadow-amber-500/25 transition-all transform hover:scale-[1.01] active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? "..." : t.leadModal.submitBtn}
              </button>

              <p className="text-xs text-zinc-400 text-center leading-normal">
                🔒 {t.leadModal.instantDelivery}
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4 animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mx-auto border border-emerald-500/30">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-zinc-100">
              {t.leadModal.successTitle}
            </h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
              {t.leadModal.successDesc}
            </p>

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/971500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>💬</span>
                <span>{t.leadModal.openWhatsApp}</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors"
              >
                {t.leadModal.close}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
