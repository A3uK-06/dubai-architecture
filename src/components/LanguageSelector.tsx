"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LangContext";
import { LANGUAGES, LanguageCode } from "../i18n/languages";

export default function LanguageSelector() {
  const { lang, setLang, langInfo } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
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
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 hover:border-amber-400 transition-all text-sm font-medium shadow-sm backdrop-blur-md"
      >
        <span className="text-base leading-none" role="img" aria-hidden="true">
          {langInfo.flag}
        </span>
        <span className="font-semibold tracking-wider uppercase text-xs text-amber-300">
          {langInfo.code}
        </span>
        <span className="hidden sm:inline text-zinc-300 text-xs">
          {langInfo.nativeName}
        </span>
        <svg
          className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-amber-400" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-64 rounded-xl bg-zinc-900/95 border border-zinc-700/80 shadow-2xl backdrop-blur-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150`}
          role="menu"
        >
          <div className="px-3 py-1.5 border-b border-zinc-800 text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
            Top Investor Languages (DLD)
          </div>
          <div className="max-h-80 overflow-y-auto divide-y divide-zinc-800/40">
            {languageList.map((item) => {
              const isSelected = item.code === lang;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleSelect(item.code)}
                  className={`w-full text-left px-3.5 py-2.5 flex items-center justify-between text-sm transition-colors hover:bg-zinc-800/80 ${
                    isSelected
                      ? "bg-amber-500/10 text-amber-300 font-semibold"
                      : "text-zinc-200"
                  }`}
                  role="menuitem"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl" role="img" aria-label={item.name}>
                      {item.flag}
                    </span>
                    <div className="flex flex-col">
                      <span className="leading-tight">
                        {item.nativeName}
                        {item.nativeName !== item.name && (
                          <span className="text-zinc-400 text-xs ml-1.5 font-normal">
                            ({item.name})
                          </span>
                        )}
                      </span>
                      <span className="text-[10px] text-zinc-400">
                        {item.country}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
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
