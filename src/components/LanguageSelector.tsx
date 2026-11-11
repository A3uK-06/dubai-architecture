"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LangContext";
import { LANGUAGES, LanguageCode } from "../i18n/languages";
import CountryFlag from "./CountryFlag";

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

    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const segments = currentPath.split("/").filter(Boolean);

      // Check if current URL starts with an existing language code
      const currentLangPrefix = segments.length > 0 && segments[0] in LANGUAGES ? segments[0] : null;

      // Determine base route path without language prefix
      let subPath = currentLangPrefix ? "/" + segments.slice(1).join("/") : currentPath;
      if (!subPath.startsWith("/")) subPath = "/" + subPath;
      if (subPath !== "/" && !subPath.endsWith("/")) subPath = subPath + "/";

      // If target is English, remove prefix; otherwise prepend code
      let targetUrl = code === "en" ? subPath : `/${code}${subPath === "/" ? "/" : subPath}`;
      if (window.location.hash) {
        targetUrl += window.location.hash;
      }

      if (targetUrl !== currentPath) {
        window.location.assign(targetUrl);
      }
    }
  };

  const languageList = Object.values(LANGUAGES);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select language"
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DDD7CA] bg-[#EFECE4] hover:bg-[#E5DFD3] text-[#1C1917] hover:border-[#8C6A48] transition-all text-sm font-medium shadow-soft-tint backdrop-blur-md cursor-pointer"
      >
        <CountryFlag
          code={langInfo.code}
          className="w-5 h-3.5"
          title={langInfo.name}
        />
        <span className="font-semibold tracking-wider uppercase text-xs text-[#8C6A48]">
          {langInfo.code}
        </span>
        <span className="hidden sm:inline text-[#57534E] text-xs">
          {langInfo.nativeName}
        </span>
        <svg
          className={`w-3.5 h-3.5 text-[#78716C] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#8C6A48]" : ""
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
        <div className="absolute right-0 mt-2 w-72 max-w-[calc(100vw-2rem)] origin-top-right rounded-2xl bg-white border border-[#E5DFD3] shadow-strong-tint z-50 overflow-hidden divide-y divide-[#EFECE4]">
          <div className="px-3.5 py-2.5 bg-[#FAF8F5] flex items-center justify-between">
            <p className="text-xs font-semibold text-[#78716C] uppercase tracking-wider">
              Select Language
            </p>
            <span className="text-[11px] text-[#A8A29E] font-medium">10 languages</span>
          </div>
          <div className="py-1 max-h-80 overflow-y-auto">
            {languageList.map((item) => {
              const isSelected = item.code === lang;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleSelect(item.code)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#EFECE4] text-[#8C6A48] font-bold"
                      : "text-[#1C1917] hover:bg-[#FAF8F5]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CountryFlag
                      code={item.code}
                      className="w-5 h-3.5"
                      title={item.name}
                    />
                    <div>
                      <div className="font-medium text-[#1C1917] flex items-center gap-1.5">
                        <span>{item.name}</span>
                        <span className="text-[11px] text-[#78716C]">
                          ({item.nativeName})
                        </span>
                      </div>
                      <div className="text-[10px] text-[#A8A29E]">
                        {item.country}
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <svg
                      className="w-4 h-4 text-[#8C6A48] shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
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
