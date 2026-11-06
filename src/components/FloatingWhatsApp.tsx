"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LangContext";
import { getAttributionData } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";
import LeadModal from "@/components/LeadModal";

export default function FloatingWhatsApp() {
  const { t, isRtl, lang } = useLang();
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isRu = lang === "ru";

  // Use configured WhatsApp number or fallback to modal concierge if none is set
  const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const hasRealWhatsApp = Boolean(envNumber && envNumber !== "971500000000");

  const getWhatsAppUrl = () => {
    const attr = getAttributionData();
    let message = t.whatsapp.defaultMessage;

    if (attr.utm_source) {
      message += ` [Ref: ${attr.utm_source}${attr.utm_campaign ? ` / ${attr.utm_campaign}` : ""}]`;
    }

    return `https://wa.me/${envNumber || "971500000000"}?text=${encodeURIComponent(message)}`;
  };

  const handleClick = (e: React.MouseEvent) => {
    trackEvent("generate_lead", {
      channel: hasRealWhatsApp ? "whatsapp" : "concierge_modal",
      location: typeof window !== "undefined" ? window.location.pathname : "unknown",
    });

    if (!hasRealWhatsApp) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        className={`fixed bottom-6 ${
          isRtl ? "left-6" : "right-6"
        } z-40 flex items-center group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Discreet Tooltip */}
        {isHovered && (
          <div
            className={`hidden sm:block absolute ${
              isRtl ? "left-14" : "right-14"
            } bg-white border border-[#E5DFD3] text-[#1C1917] text-xs px-3.5 py-2 rounded-xl shadow-medium-tint whitespace-nowrap backdrop-blur-md animate-fade-in`}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8C6A48] animate-pulse" />
              <span className="font-bold text-[#8C6A48]">
                {isRu ? "Консьерж-сервис (Metropolitan & Whitewill)" : "Private Advisory Desk (Metropolitan & Whitewill)"}
              </span>
            </div>
            <p className="text-[11px] text-[#78716C] mt-0.5">
              {isRu
                ? "Запрос проектных досье, планировок и доступных квот у девелоперов"
                : "Request official developer dossiers, floor plans & payment plans"}
            </p>
          </div>
        )}

        {/* Elegant Luxury Button */}
        <a
          href={hasRealWhatsApp ? getWhatsAppUrl() : "#"}
          target={hasRealWhatsApp ? "_blank" : undefined}
          rel={hasRealWhatsApp ? "noopener noreferrer" : undefined}
          onClick={handleClick}
          aria-label="Private Advisory Concierge"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1C1917]/95 hover:bg-[#292524] text-white text-xs sm:text-sm font-semibold shadow-xl border border-[#8C6A48]/50 hover:border-[#8C6A48] backdrop-blur-md transition-all transform hover:scale-105 active:scale-95"
        >
          <span className="text-base text-amber-400">🏛️</span>
          <span className="hidden sm:inline font-mono tracking-wide text-stone-200">
            {isRu ? "Консьерж-сервис" : "Private Concierge"}
          </span>
        </a>
      </div>

      {/* Concierge Modal Fallback */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isRu ? "Консьерж-сервис: Досье и планировки" : "Private Advisory: Project Dossiers & Unit Access"}
        subtitle={
          isRu
            ? "Запросите официальные презентации застройщиков, планы этажей и расчет доходности от аккредитованных брокеров-партнеров (Whitewill, Metropolitan)."
            : "Request official developer floor plans, project brochures and verified payment schedules via licensed UAE brokerage partners."
        }
      />
    </>
  );
}
