"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LangContext";
import { getAttributionData } from "@/lib/attribution";
import { LanguageCode } from "@/i18n/languages";
import { trackEvent } from "@/lib/analytics";

const RERA_STATUS: Record<LanguageCode, string> = {
  en: "RERA Broker Online",
  ru: "RERA брокер онлайн",
  ar: "وسيط ريرا متصل الآن",
  zh: "RERA 认证经纪人在线",
  de: "RERA-Makler online",
  fr: "Courtier RERA en ligne",
  hi: "RERA ब्रोकर ऑनलाइन",
  ur: "ریرا بروکر آن لائن",
  it: "Broker RERA online",
  tr: "RERA Brokeri Çevrimiçi",
};

export default function FloatingWhatsApp() {
  const { t, isRtl, lang } = useLang();
  const [isHovered, setIsHovered] = useState(false);

  // Default international WhatsApp contact number for licensed partner brokers
  const whatsappNumber = "971500000000";

  const getWhatsAppUrl = () => {
    const attr = getAttributionData();
    let message = t.whatsapp.defaultMessage;

    if (attr.utm_source) {
      message += ` [Ref: ${attr.utm_source}${attr.utm_campaign ? ` / ${attr.utm_campaign}` : ""}]`;
    }

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div
      className={`fixed bottom-6 ${
        isRtl ? "left-6" : "right-6"
      } z-50 flex items-center group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on hover */}
      {isHovered && (
        <div
          className={`hidden sm:block absolute ${
            isRtl ? "left-16" : "right-16"
          } bg-white border border-[#E5DFD3] text-[#1C1917] text-xs px-3.5 py-2 rounded-xl shadow-medium-tint whitespace-nowrap backdrop-blur-md animate-fade-in`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse" />
            <span className="font-bold text-[#2D6A4F]">{RERA_STATUS[lang] || RERA_STATUS.en}</span>
          </div>
          <p className="text-[11px] text-[#78716C] mt-0.5">
            {t.whatsapp.tooltip}
          </p>
        </div>
      )}

      {/* Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation"
        onClick={() => {
          trackEvent("generate_lead", {
            channel: "whatsapp",
            location: typeof window !== "undefined" ? window.location.pathname : "unknown",
          });
        }}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-zinc-950 font-bold text-sm shadow-2xl shadow-emerald-500/30 transition-all transform hover:scale-105 active:scale-95 border border-emerald-300/40"
      >
        <span className="text-xl leading-none">💬</span>
        <span className="hidden sm:inline font-semibold tracking-wide text-zinc-950">
          {t.whatsapp.buttonText}
        </span>
      </a>
    </div>
  );
}
