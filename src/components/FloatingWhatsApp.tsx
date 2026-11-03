"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LangContext";
import { getAttributionData } from "@/lib/attribution";

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
          } bg-zinc-900 border border-emerald-500/30 text-zinc-100 text-xs px-3.5 py-2 rounded-xl shadow-2xl whitespace-nowrap backdrop-blur-md animate-fade-in`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-400">RERA Broker Online</span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-0.5">
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
