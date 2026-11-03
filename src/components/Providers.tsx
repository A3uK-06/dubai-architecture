"use client";

import React, { ReactNode } from "react";
import { LangProvider } from "../context/LangContext";

export default function Providers({ children }: { children: ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}
