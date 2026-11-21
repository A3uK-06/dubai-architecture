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
        } z-40 flex items-center gap-3 print:hidden`}
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

        {/* Telegram Button (Secondary, clean paper plane) */}
        <a
          href={hasRealTelegram ? `https://t.me/${envTelegram}` : "#"}
          target={hasRealTelegram ? "_blank" : undefined}
          rel={hasRealTelegram ? "noopener noreferrer" : undefined}
          onClick={handleTelegramClick}
          onMouseEnter={() => setTooltip("Telegram / Запустить квиз")}
          onMouseLeave={() => setTooltip(null)}
          aria-label="Telegram"
          className="w-11 h-11 rounded-full bg-[#229ED9] hover:bg-[#1e8ec3] text-white shadow-md hover:shadow-lg flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Authentic full-bleed paper airplane */}
          <svg className="w-6 h-6 fill-white -ml-0.5" viewBox="0 0 24 24">
            <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701v.001l-.316 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.432z" />
          </svg>
        </a>

        {/* WhatsApp Button (Primary, large, bold, unmistakable) */}
        <a
          href={hasRealWhatsApp ? `https://wa.me/${envWhatsApp}` : "#"}
          target={hasRealWhatsApp ? "_blank" : undefined}
          rel={hasRealWhatsApp ? "noopener noreferrer" : undefined}
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setTooltip("WhatsApp / Запустить квиз")}
          onMouseLeave={() => setTooltip(null)}
          aria-label="WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Authentic full-size WhatsApp speech bubble & phone */}
          <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.13.82.84-3.05-.2-.31a8.17 8.17 0 0 1-1.26-4.36c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.2-8.2 8.24zm4.49-6.15c-.25-.12-1.46-.72-1.68-.81-.23-.08-.39-.12-.56.12-.17.25-.65.81-.8 1-.15.19-.3.21-.55.08-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.98.68.46-.05 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.3z" />
          </svg>
        </a>

        {/* Quiz Launcher Pill */}
        <button
          type="button"
          onClick={() => setIsQuizOpen(true)}
          className="hidden md:flex items-center gap-2.5 h-14 px-6 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold shadow-xl border border-[#8C6A48]/50 hover:border-[#8C6A48] backdrop-blur-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="text-xl">🏛️</span>
          <span className="tracking-wide">{quizButtonLabel}</span>
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
