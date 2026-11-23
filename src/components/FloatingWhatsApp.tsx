"use client";

import React, { useState } from "react";
import { useLang } from "@/context/LangContext";
import { trackEvent } from "@/lib/analytics";
import PropertyQuizModal from "@/components/PropertyQuizModal";

export default function FloatingWhatsApp() {
  const { isRtl, lang } = useLang();
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const quizButtonLabel = ({
    en: "Find Property (Quiz)",
    ru: "Подбор недвижимости (Квиз)",
    ar: "البحث عن عقار (استبيان)",
    zh: "房产智能筛选（问卷）",
    de: "Immobilien-Finder (Quiz)",
    fr: "Sélection Immobilière (Quiz)",
    it: "Trova Immobile (Quiz)",
    tr: "Mülk Bulucu (Test)",
    hi: "संपत्ति खोज (क्виज़)",
    ur: "جائیداد کا انتخاب (کوئز)",
  }[lang] || "Подбор недвижимости (Квиз)");

  return (
    <>
      <div
        className={`fixed bottom-5 ${
          isRtl ? "left-4 sm:left-6" : "right-4 sm:right-6"
        } z-40 flex items-center print:hidden`}
      >
        {/* Quiz Launcher Pill */}
        <button
          type="button"
          onClick={() => {
            trackEvent("quiz_floating_button_click", { location: window.location.pathname });
            setIsQuizOpen(true);
          }}
          className="flex items-center gap-2.5 h-12 sm:h-14 px-4 sm:px-6 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold shadow-2xl border border-[#8C6A48]/50 hover:border-[#8C6A48] backdrop-blur-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="text-lg sm:text-xl">🏛️</span>
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
