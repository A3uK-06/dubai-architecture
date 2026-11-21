"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LangContext";
import { trackEvent } from "@/lib/analytics";
import PropertyQuizModal from "@/components/PropertyQuizModal";

export default function FloatingWhatsApp() {
  const { isRtl, lang } = useLang();
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [tooltip, setTooltip] = useState<string | null>(null);

  // Future numbers can be passed via env variables
  const envWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const envTelegram = process.env.NEXT_PUBLIC_TELEGRAM_USERNAME;

  const hasRealWhatsApp = Boolean(envWhatsApp && envWhatsApp !== "971500000000");
  const hasRealTelegram = Boolean(envTelegram && envTelegram !== "sample");

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    trackEvent("messenger_click", { channel: "whatsapp" });
    if (!hasRealWhatsApp) {
      e.preventDefault();
      setIsQuizOpen(true);
    }
  };

  const handleTelegramClick = (e: React.MouseEvent) => {
    trackEvent("messenger_click", { channel: "telegram" });
    if (!hasRealTelegram) {
      e.preventDefault();
      setIsQuizOpen(true);
    }
  };

  const quizButtonLabel = ({
    en: "Find Property (Quiz)",
    ru: "Подбор недвижимости (Квиз)",
    ar: "البحث عن عقار (استبيان)",
    zh: "房产智能筛选（问卷）",
    de: "Immobilien-Finder (Quiz)",
    fr: "Sélection Immobilière (Quiz)",
    it: "Trova Immobile (Quiz)",
    tr: "Mülk Bulucu (Test)",
    hi: "संपत्ति खोज (क्विज़)",
    ur: "جائیداد کا انتخاب (کوئز)",
  }[lang] || "Подбор недвижимости (Квиз)");

  return (
    <>
      <div
        className={`fixed bottom-5 ${
          isRtl ? "left-4 sm:left-6" : "right-4 sm:right-6"
        } z-40 flex items-center gap-2 print:hidden`}
      >
        {/* Tooltip */}
        {tooltip && (
          <div
            className={`hidden sm:block absolute bottom-16 ${
              isRtl ? "left-0" : "right-0"
            } bg-[#0F172A] text-white text-xs px-3.5 py-2 rounded-xl shadow-xl whitespace-nowrap border border-white/10 animate-in fade-in duration-150`}
          >
            {tooltip}
          </div>
        )}

        {/* Telegram Button (Smaller) */}
        <a
          href={hasRealTelegram ? `https://t.me/${envTelegram}` : "#"}
          target={hasRealTelegram ? "_blank" : undefined}
          rel={hasRealTelegram ? "noopener noreferrer" : undefined}
          onClick={handleTelegramClick}
          onMouseEnter={() => setTooltip("Написать в Telegram / Запустить квиз")}
          onMouseLeave={() => setTooltip(null)}
          aria-label="Telegram"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#229ED9] hover:bg-[#1e8ec3] text-white shadow-lg flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.989z" />
          </svg>
        </a>

        {/* WhatsApp Button (Primary, Noticeable) */}
        <a
          href={hasRealWhatsApp ? `https://wa.me/${envWhatsApp}` : "#"}
          target={hasRealWhatsApp ? "_blank" : undefined}
          rel={hasRealWhatsApp ? "noopener noreferrer" : undefined}
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setTooltip("Написать в WhatsApp / Запустить квиз")}
          onMouseLeave={() => setTooltip(null)}
          aria-label="WhatsApp"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/30 relative"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
          <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
          </svg>
        </a>

        {/* Quiz Launcher Pill */}
        <button
          type="button"
          onClick={() => setIsQuizOpen(true)}
          className="hidden md:flex items-center gap-2 px-4 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold shadow-xl border border-[#8C6A48]/50 hover:border-[#8C6A48] backdrop-blur-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="text-amber-400">🏛️</span>
          <span>{quizButtonLabel}</span>
        </button>
      </div>

      {/* Interactive Property Quiz Modal */}
      <PropertyQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />
    </>
  );
}
