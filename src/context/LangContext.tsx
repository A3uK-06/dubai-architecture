"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useSyncExternalStore,
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

function applyDocumentAttributes(targetLang: LanguageCode) {
  if (typeof document !== "undefined") {
    const info = LANGUAGES[targetLang] || LANGUAGES[DEFAULT_LANGUAGE];
    document.documentElement.lang = targetLang;
    document.documentElement.dir = info.dir;
  }
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("dubai-lang-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("dubai-lang-change", callback);
  };
}

function getClientLanguageSnapshot(): LanguageCode {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  // 1. Check URL path prefix (e.g. /ru/, /ar/)
  try {
    const segments = window.location.pathname.split("/").filter(Boolean);
    if (segments.length > 0 && segments[0] in LANGUAGES) {
      return segments[0] as LanguageCode;
    }
  } catch {
    // Ignore URL errors
  }

  // 2. Check localStorage
  try {
    const savedLang = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (savedLang && savedLang in LANGUAGES) {
      return savedLang;
    }
  } catch {
    // Ignore localStorage errors
  }

  // 3. Check browser language
  try {
    const detected = getSystemLanguage();
    if (detected && detected in LANGUAGES) {
      return detected;
    }
  } catch {
    // Ignore detection errors
  }

  return DEFAULT_LANGUAGE;
}

function getServerLanguageSnapshot(): LanguageCode {
  return DEFAULT_LANGUAGE;
}

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(
    subscribe,
    getClientLanguageSnapshot,
    getServerLanguageSnapshot
  );

  useEffect(() => {
    applyDocumentAttributes(lang);
  }, [lang]);

  const setLang = useCallback((newLang: LanguageCode) => {
    if (!(newLang in LANGUAGES)) return;
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      applyDocumentAttributes(newLang);
      window.dispatchEvent(new Event("dubai-lang-change"));
    } catch {
      // Ignore
    }
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
