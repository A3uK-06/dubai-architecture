export type LanguageCode =
  | "en"
  | "ru"
  | "ar"
  | "hi"
  | "zh"
  | "de"
  | "fr"
  | "ur"
  | "it"
  | "tr";

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
  country: string;
}

export const LANGUAGES: Record<LanguageCode, LanguageInfo> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
    dir: "ltr",
    country: "Global / UK / US",
  },
  ru: {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    flag: "🇷🇺",
    dir: "ltr",
    country: "Russia & CIS",
  },
  ar: {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇦🇪",
    dir: "rtl",
    country: "UAE & GCC",
  },
  hi: {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    flag: "🇮🇳",
    dir: "ltr",
    country: "India",
  },
  zh: {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "🇨🇳",
    dir: "ltr",
    country: "China",
  },
  de: {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    dir: "ltr",
    country: "Germany / DACH",
  },
  fr: {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    dir: "ltr",
    country: "France / EU",
  },
  ur: {
    code: "ur",
    name: "Urdu",
    nativeName: "اردو",
    flag: "🇵🇰",
    dir: "rtl",
    country: "Pakistan",
  },
  it: {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "🇮🇹",
    dir: "ltr",
    country: "Italy",
  },
  tr: {
    code: "tr",
    name: "Turkish",
    nativeName: "Türkçe",
    flag: "🇹🇷",
    dir: "ltr",
    country: "Turkey",
  },
};

export const DEFAULT_LANGUAGE: LanguageCode = "en";

export function isRtlLanguage(code: LanguageCode): boolean {
  return LANGUAGES[code]?.dir === "rtl";
}

/**
 * Detects system browser language and matches with supported languages.
 */
export function getSystemLanguage(): LanguageCode {
  if (typeof window === "undefined" || !navigator) {
    return DEFAULT_LANGUAGE;
  }

  const browserLangs = navigator.languages || [navigator.language || ""];

  for (const lang of browserLangs) {
    const primary = lang.toLowerCase().split("-")[0];
    if (primary in LANGUAGES) {
      return primary as LanguageCode;
    }
  }

  return DEFAULT_LANGUAGE;
}
