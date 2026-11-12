"use client";

import React, { ReactNode } from "react";
import { LangProvider } from "../context/LangContext";
import { CurrencyProvider } from "../context/CurrencyContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <CurrencyProvider>{children}</CurrencyProvider>
    </LangProvider>
  );
}
