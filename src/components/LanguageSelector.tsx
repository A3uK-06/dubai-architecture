"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LangContext";
import { LANGUAGES, LanguageCode } from "../i18n/languages";

export default function LanguageSelector() {
  const { lang, setLang, langInfo } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: LanguageCode) => {
    setLang(code);
    setIsOpen(false);
  };

  const languageList = Object.values(LANGUAGES);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select language"
        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(212,175,55,0.25)] bg-[#131B26]/90 hover:bg-[#1A2433] text-[#F8FAFC] hover:border-[#D4AF37] transition-all text-sm font-medium shadow-luxury-card backdrop-blur-md"
      >
        <span className="text-base leading-none" role="img" aria-hidden="true">
          {langInfo.flag}
        </span>
        <span className="font-semibold tracking-wider uppercase text-xs text-[#D4AF37]">
          {langInfo.code}
        </span>
        <span className="hidden sm:inline text-[#94A3B8] text-xs">
          {langInfo.nativeName}
        </span>
        <svg
          className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#D4AF37]" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-2xl bg-[#131B26] border border-[rgba(212,175,55,0.25)] shadow-2xl z-50 overflow-hidden divide-y divide-[rgba(255,255,255,0.06)]">
          <div className="px-3.5 py-2.5 bg-[#0B0F17]/90 border-b border-[rgba(255,255,255,0.06)]">
            <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider font-mono">
              Select Language
            </p>
          </div>
          <div className="py-1 max-h-80 overflow-y-auto">
            {languageList.map((item) => {
              const isSelected = item.code === lang;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleSelect(item.code)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left transition-colors ${
                    isSelected
                      ? "bg-[#1A2433] text-[#D4AF37] font-bold"
                      : "text-[#F8FAFC] hover:bg-[#1A2433]/70 hover:text-[#D4AF37]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base" role="img" aria-hidden="true">
                      {item.flag}
                    </span>
                    <div>
                      <div className="font-medium text-[#F8FAFC]">{item.name}</div>
                      <div className="text-[11px] text-[#94A3B8]">
                        {item.nativeName}
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <svg
                      className="w-4 h-4 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
