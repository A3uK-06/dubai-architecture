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
  title = "Download Top-10 Investment Towers Guide (PDF)",
  subtitle = "Direct developer pricing, architectural floor plans, and verified net rental yields (7-10%).",
  initialTower,
}: LeadModalProps) {
  const { lang } = useLang();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("2m-5m");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [routingResult, setRoutingResult] = useState<LeadRoutingResult | null>(null);

  if (!isOpen) return null;

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

    // Dispatch to smart routing engine + Telegram bot
    const result = await dispatchLead(leadPayload);
    setRoutingResult(result);

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello! My name is ${name}. I requested the Top-10 Towers Investment Catalog on Dubai-Architecture.info. Please share the PDF and current availability.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-amber-500/40 p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-lg transition-colors text-xl font-bold"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!isSuccess ? (
          <>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-zinc-950">
                Exclusive Real Estate Dossier
              </span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alexander Smith"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 50 ... / +7 999 ... / +44 ..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Email (Optional for PDF delivery)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Target Investment Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-amber-400"
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
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Routing & Generating Dossier..." : "Get PDF & Floor Plans"}
              </button>

              <div className="text-[11px] text-zinc-500 text-center">
                🔒 Privacy guaranteed. Zero spam. Handled exclusively by RERA-registered broker partners.
              </div>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 py-4 animate-fade-in">
            <span className="text-5xl">📄</span>
            <h3 className="text-2xl font-extrabold text-amber-300">
              Thank You, {name}!
            </h3>
            <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Your inquiry has been routed to our licensed partner agency:{" "}
              <strong className="text-amber-400">{routingResult?.agency}</strong> ({routingResult?.agencyDesk}).
            </p>

            <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-400">
              Reference: <code className="text-amber-400">{routingResult?.leadId}</code>
            </div>

            <div className="pt-2 space-y-3">
              <a
                href={`https://wa.me/971500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>💬</span>
                <span>Receive Instant PDF on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-xl border border-zinc-700 text-zinc-400 hover:text-zinc-200 text-xs transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
