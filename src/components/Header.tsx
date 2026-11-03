"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLang } from "../context/LangContext";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const { t, isRtl } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Historical Badge */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <svg
                className="w-6 h-6 text-zinc-950"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13H5.5L12 6.5z" />
                <path d="M11 11h2v7h-2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-zinc-100 tracking-tight group-hover:text-amber-400 transition-colors">
                  Dubai Architecture
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded">
                  EST. 2006
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 font-mono tracking-wider">
                dubai-architecture.info
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
            <Link
              href="/"
              className="hover:text-amber-400 transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/#catalog"
              className="hover:text-amber-400 transition-colors"
            >
              {t.nav.catalog}
            </Link>
            <Link
              href="/#districts"
              className="hover:text-amber-400 transition-colors"
            >
              {t.nav.districts}
            </Link>
            <Link
              href="/#calculator"
              className="hover:text-amber-400 transition-colors"
            >
              {t.nav.calculator}
            </Link>
            <Link
              href="/#golden-visa"
              className="hover:text-amber-400 transition-colors"
            >
              {t.nav.goldenVisa}
            </Link>
          </nav>

          {/* Right Actions: Language Selector & Inquire Button */}
          <div className="flex items-center gap-3">
            <LanguageSelector />

            <Link
              href="#contact"
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/20 active:scale-95"
            >
              {t.nav.contactBroker}
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 py-4 px-2 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:bg-zinc-800 hover:text-amber-400"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:bg-zinc-800 hover:text-amber-400"
            >
              {t.nav.catalog}
            </Link>
            <Link
              href="/#districts"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:bg-zinc-800 hover:text-amber-400"
            >
              {t.nav.districts}
            </Link>
            <Link
              href="/#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:bg-zinc-800 hover:text-amber-400"
            >
              {t.nav.calculator}
            </Link>
            <Link
              href="/#golden-visa"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:bg-zinc-800 hover:text-amber-400"
            >
              {t.nav.goldenVisa}
            </Link>
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block px-4 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-zinc-950 bg-amber-400 hover:bg-amber-300"
              >
                {t.nav.contactBroker}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
