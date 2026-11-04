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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#E5DFD3] p-6 sm:p-8 shadow-strong-tint space-y-6 text-[#1C1917]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF8F5] rounded-xl transition-colors text-lg font-bold"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!isSuccess ? (
          <>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EFECE4] text-[#8C6A48] border border-[#DDD7CA]">
                {t.leadModal.modalBadge}
              </span>
              <h3 className="text-2xl font-extrabold text-[#1C1917] tracking-tight">
                {modalTitle}
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                {modalSubtitle} ({targetBuildingName})
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#78716C] uppercase">
                  {t.leadModal.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alexander Smith"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-sm text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:ring-2 focus:ring-[#8C6A48] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#78716C] uppercase">
                  {t.leadModal.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 50 ... / +7 999 ... / +44 ..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-sm text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:ring-2 focus:ring-[#8C6A48] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#78716C] uppercase">
                  {t.leadModal.emailLabel}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-sm text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:ring-2 focus:ring-[#8C6A48] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#78716C] uppercase">
                  {t.leadModal.budgetLabel}
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#8C6A48] transition-all"
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
                className="w-full py-4 px-6 rounded-xl bg-[#8C6A48] hover:bg-[#6D5135] text-white font-bold text-sm uppercase tracking-wider shadow-soft-tint transition-all active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? "Отправка..." : t.leadModal.submitBtn}
              </button>

              <p className="text-xs text-[#78716C] text-center leading-normal">
                🔒 {t.leadModal.instantDelivery}
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F] flex items-center justify-center text-3xl mx-auto border border-[#2D6A4F]/30">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-[#1C1917]">
              {t.leadModal.successTitle}
            </h3>
            <p className="text-xs text-[#57534E] max-w-sm mx-auto leading-relaxed">
              {t.leadModal.successDesc}
            </p>

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/971500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#2D6A4F] hover:bg-[#1E4D38] text-white font-bold text-sm shadow-soft-tint transition-all flex items-center justify-center gap-2"
              >
                <span>💬</span>
                <span>{t.leadModal.openWhatsApp}</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-[#FAF8F5] hover:bg-[#EFECE4] text-[#57534E] border border-[#E5DFD3] text-xs font-semibold transition-colors"
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
