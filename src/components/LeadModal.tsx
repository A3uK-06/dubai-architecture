"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LangContext";
import { getAttributionData } from "@/lib/attribution";
import { dispatchLead, LeadRoutingResult } from "@/lib/leadRouting";

interface LeadModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  initialTower?: string;
  towerName?: string;
}

export default function LeadModal({
  isOpen = true,
  onClose,
  title,
  subtitle,
  initialTower,
  towerName,
}: LeadModalProps) {
  const { t, lang } = useLang();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("2m-5m");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [, setRoutingResult] = useState<LeadRoutingResult | null>(null);

  if (isOpen === false) return null;

  const targetBuildingName = towerName || initialTower || "General Dubai Top-10 Catalog";
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
      targetTower: targetBuildingName,
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
    `Hello! My name is ${name}. I requested the Architecture & Investment Dossier on Dubai-Architecture.info for ${targetBuildingName}. Please share current availability.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#131B26] border border-[rgba(212,175,55,0.3)] p-6 sm:p-8 shadow-2xl shadow-black/80 space-y-6 text-[#F8FAFC] card-sheen">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-[#94A3B8] hover:text-[#D4AF37] hover:bg-[#1A2433] rounded-xl transition-colors text-lg font-bold"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!isSuccess ? (
          <>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B0F17] text-[#D4AF37] border border-[rgba(212,175,55,0.3)] font-mono">
                {t.leadModal.modalBadge}
              </span>
              <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-tight font-editorial">
                {modalTitle}
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {modalSubtitle} ({targetBuildingName})
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-mono">
                  {t.leadModal.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alexander Smith"
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-[rgba(255,255,255,0.1)] text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-mono">
                  {t.leadModal.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 50 ... / +7 999 ... / +44 ..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-[rgba(255,255,255,0.1)] text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-mono">
                  {t.leadModal.emailLabel}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-[rgba(255,255,255,0.1)] text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-mono">
                  {t.leadModal.budgetLabel}
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-[rgba(255,255,255,0.1)] text-sm text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                >
                  <option value="under-2m" className="bg-[#131B26] text-[#F8FAFC]">Under 2,000,000 AED (&lt; $545,000 USD)</option>
                  <option value="2m-5m" className="bg-[#131B26] text-[#F8FAFC]">2,000,000 – 5,000,000 AED (Golden Visa 10-Yr)</option>
                  <option value="5m-10m" className="bg-[#131B26] text-[#F8FAFC]">5,000,000 – 10,000,000 AED ($1.36M - $2.7M)</option>
                  <option value="10m+" className="bg-[#131B26] text-[#F8FAFC]">Over 10,000,000 AED (Ultra-Luxury Penthouse)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#FDE68A] hover:to-[#D4AF37] text-[#0B0F17] font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#D4AF37]/25 transition-all active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? t.leadModal.submitting : t.leadModal.submitBtn}
              </button>

              <p className="text-xs text-[#94A3B8] text-center leading-normal">
                🔒 {t.leadModal.instantDelivery}
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center text-3xl mx-auto border border-[#D4AF37]/40 ring-4 ring-[#D4AF37]/10">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-[#F8FAFC] font-editorial">
              {t.leadModal.successTitle}
            </h3>
            <p className="text-xs text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
              {t.leadModal.successDesc}
            </p>

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/971500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#E5C378] to-[#D4AF37] text-[#0B0F17] font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>💬</span>
                <span>{t.leadModal.openWhatsApp}</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0B0F17] hover:bg-[#1A2433] text-[#94A3B8] hover:text-[#F8FAFC] border border-[rgba(255,255,255,0.08)] text-xs font-semibold transition-colors"
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
