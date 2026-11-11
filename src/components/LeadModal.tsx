"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LangContext";
import { getAttributionData } from "@/lib/attribution";
import { dispatchLead, LeadRoutingResult } from "@/lib/leadRouting";
import { LEAD_MODAL_I18N } from "@/data/localizedLeadModal";

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

  const tLead = LEAD_MODAL_I18N[lang] || LEAD_MODAL_I18N.en;
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
    tLead.getWhatsAppMessage(name, targetBuildingName)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-float-card-hover space-y-6 text-[#0F172A]">
        {!isSuccess ? (
          <>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <span className="inline-block px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#F1F5F9] text-[#0F172A] border border-[#CBD5E1] leading-snug">
                  {t.leadModal.modalBadge}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 -mr-1 -mt-1 w-9 h-9 flex items-center justify-center rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight font-heading">
                {modalTitle}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                {modalSubtitle} ({targetBuildingName})
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#64748B] uppercase tracking-wider">
                  {t.leadModal.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={tLead.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#64748B] uppercase tracking-wider">
                  {t.leadModal.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={tLead.phonePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#64748B] uppercase tracking-wider">
                  {t.leadModal.emailLabel}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={tLead.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#64748B] uppercase tracking-wider">
                  {t.leadModal.budgetLabel}
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
                >
                  <option value="under-2m">{tLead.budgetOptions.under2m}</option>
                  <option value="2m-5m">{tLead.budgetOptions.from2mTo5m}</option>
                  <option value="5m-10m">{tLead.budgetOptions.from5mTo10m}</option>
                  <option value="10m+">{tLead.budgetOptions.over10m}</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm uppercase tracking-wider shadow-sm transition-all active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? t.leadModal.submitting : t.leadModal.submitBtn}
              </button>

              <p className="text-xs text-[#64748B] text-center leading-normal">
                🔒 {t.leadModal.instantDelivery}
              </p>
            </form>
          </>
        ) : (
          <div className="relative text-center py-6 space-y-4">
            <button
              type="button"
              onClick={onClose}
              className="absolute -top-3 -right-3 w-9 h-9 flex items-center justify-center rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#059669] flex items-center justify-center text-3xl mx-auto border border-emerald-200">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] font-heading">
              {t.leadModal.successTitle}
            </h3>
            <p className="text-xs text-[#475569] max-w-sm mx-auto leading-relaxed">
              {t.leadModal.successDesc}
            </p>

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/971500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>💬</span>
                <span>{t.leadModal.openWhatsApp}</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F8F9FA] hover:bg-[#F1F5F9] text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] text-xs font-semibold transition-colors"
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
