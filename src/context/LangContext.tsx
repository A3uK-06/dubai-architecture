"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import {
  LanguageCode,
  LANGUAGES,
  DEFAULT_LANGUAGE,
  getSystemLanguage,
  LanguageInfo,
} from "../i18n/languages";
import { TRANSLATIONS, TranslationDictionary } from "../i18n/translations";

interface LangContextType {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: TranslationDictionary;
  isRtl: boolean;
  langInfo: LanguageInfo;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

const STORAGE_KEY = "dubai_arch_lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>(DEFAULT_LANGUAGE);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
      if (savedLang && savedLang in LANGUAGES) {
        setLangState(savedLang);
        applyDocumentAttributes(savedLang);
      } else {
        const detected = getSystemLanguage();
        setLangState(detected);
        applyDocumentAttributes(detected);
      }
    } catch {
      // Fallback in case localStorage is restricted
      applyDocumentAttributes(DEFAULT_LANGUAGE);
    }
  }, []);

  const applyDocumentAttributes = (targetLang: LanguageCode) => {
    if (typeof document !== "undefined") {
      const info = LANGUAGES[targetLang] || LANGUAGES[DEFAULT_LANGUAGE];
      document.documentElement.lang = targetLang;
      document.documentElement.dir = info.dir;
    }
  };

  const setLang = useCallback((newLang: LanguageCode) => {
    if (!(newLang in LANGUAGES)) return;
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // Ignore localStorage errors
    }
    applyDocumentAttributes(newLang);
  }, []);

  const langInfo = LANGUAGES[lang] || LANGUAGES[DEFAULT_LANGUAGE];
  const isRtl = langInfo.dir === "rtl";
  const t = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANGUAGE];

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
        t,
        isRtl,
        langInfo,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextType {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
