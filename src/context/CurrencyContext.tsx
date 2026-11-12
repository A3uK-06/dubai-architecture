"use client";

import React, {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  ReactNode,
} from "react";
import { useLang } from "./LangContext";
import { LanguageCode } from "../i18n/languages";

export type CurrencyCode = "AED" | "USD" | "EUR" | "RUB" | "GBP" | "CNY";

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  name: string;
  flag: string;
  rateFromAed: number; // Multiply AED by this rate to get target currency amount
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  AED: { code: "AED", symbol: "AED", name: "UAE Dirham", flag: "🇦🇪", rateFromAed: 1 },
  USD: { code: "USD", symbol: "$", name: "US Dollar", flag: "🇺🇸", rateFromAed: 0.27229 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", flag: "🇪🇺", rateFromAed: 0.252 },
  RUB: { code: "RUB", symbol: "₽", name: "Russian Ruble", flag: "🇷🇺", rateFromAed: 26.8 },
  GBP: { code: "GBP", symbol: "£", name: "British Pound", flag: "🇬🇧", rateFromAed: 0.216 },
  CNY: { code: "CNY", symbol: "¥", name: "Chinese Yuan", flag: "🇨🇳", rateFromAed: 1.97 },
};

export const CURRENCY_CODES: CurrencyCode[] = ["AED", "USD", "EUR", "RUB", "GBP", "CNY"];

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  currencyInfo: CurrencyInfo;
  convertAed: (amountAed: number, targetCurrency?: CurrencyCode) => number;
  formatAed: (amountAed: number, targetCurrency?: CurrencyCode) => string;
  formatPriceString: (priceStr: string | undefined, targetCurrency?: CurrencyCode) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const STORAGE_KEY = "dubai_arch_currency";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("dubai-currency-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("dubai-currency-change", callback);
  };
}

function getClientCurrencySnapshot(): CurrencyCode {
  if (typeof window === "undefined") return "AED";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as CurrencyCode | null;
    if (saved && saved in CURRENCIES) {
      return saved;
    }
  } catch {
    // Ignore storage errors
  }
  return "AED";
}

function getServerCurrencySnapshot(): CurrencyCode {
  return "AED";
}

export function parseAedNumber(priceStr: string | undefined): number | null {
  if (!priceStr) return null;
  const digits = parseInt(priceStr.replace(/[^\d]/g, ""), 10);
  return !isNaN(digits) && digits > 0 ? digits : null;
}

export function formatWithCurrency(amount: number, currCode: CurrencyCode): string {
  const formatted = Math.round(amount).toLocaleString("en-US");
  switch (currCode) {
    case "USD":
      return `$${formatted}`;
    case "EUR":
      return `€${formatted}`;
    case "GBP":
      return `£${formatted}`;
    case "RUB":
      return `${formatted} ₽`;
    case "CNY":
      return `¥${formatted}`;
    case "AED":
    default:
      return `${formatted} AED`;
  }
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const { lang } = useLang();

  const rawCurrency = useSyncExternalStore(
    subscribe,
    getClientCurrencySnapshot,
    getServerCurrencySnapshot
  );

  // If user hasn't explicitly set currency in localStorage, provide intuitive locale defaults
  const resolvedCurrency: CurrencyCode = (() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_KEY) as CurrencyCode | null;
        if (saved && saved in CURRENCIES) return saved;
      } catch {
        // ignore
      }
    }
    // Default by language if not explicitly set
    if (lang === "ru") return "USD";
    if (lang === "de" || lang === "fr" || lang === "it") return "EUR";
    if (lang === "zh") return "USD";
    if (lang === "ar") return "AED";
    return rawCurrency || "AED";
  })();

  const setCurrency = useCallback((newCurrency: CurrencyCode) => {
    if (!(newCurrency in CURRENCIES)) return;
    try {
      localStorage.setItem(STORAGE_KEY, newCurrency);
      window.dispatchEvent(new Event("dubai-currency-change"));
    } catch {
      // Ignore
    }
  }, []);

  const convertAed = useCallback(
    (amountAed: number, targetCurrency?: CurrencyCode): number => {
      const code = targetCurrency || resolvedCurrency;
      const rate = (CURRENCIES[code] || CURRENCIES.AED).rateFromAed;
      return Math.round(amountAed * rate);
    },
    [resolvedCurrency]
  );

  const formatAed = useCallback(
    (amountAed: number, targetCurrency?: CurrencyCode): string => {
      const code = targetCurrency || resolvedCurrency;
      const converted = convertAed(amountAed, code);
      return formatWithCurrency(converted, code);
    },
    [convertAed, resolvedCurrency]
  );

  const formatPriceString = useCallback(
    (priceStr: string | undefined, targetCurrency?: CurrencyCode): string => {
      if (!priceStr) return "—";
      const num = parseAedNumber(priceStr);
      if (num === null) return priceStr;
      return formatAed(num, targetCurrency);
    },
    [formatAed]
  );

  const currencyInfo = CURRENCIES[resolvedCurrency] || CURRENCIES.AED;

  return (
    <CurrencyContext.Provider
      value={{
        currency: resolvedCurrency,
        setCurrency,
        currencyInfo,
        convertAed,
        formatAed,
        formatPriceString,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextType {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
