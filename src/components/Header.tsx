"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLang } from "../context/LangContext";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const { t, isRtl } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl shadow-soft-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Historical Badge */}
          <Link href="/" className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
              <svg
                className="w-6 h-6 text-zinc-950"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
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
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-md">
                  EST. 2006
                </span>
              </div>
              <span className="text-xs text-zinc-400 font-mono tracking-wider">
                dubai-architecture.info
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Space-xl gap (32px), 4px rhythm */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <Link
              href="/"
              className="hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/#catalog"
              className="hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.catalog}
            </Link>
            <Link
              href="/#districts"
              className="hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.districts}
            </Link>
            <Link
              href="/#calculator"
              className="hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.calculator}
            </Link>
            <Link
              href="/#golden-visa"
              className="hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.goldenVisa}
            </Link>
          </nav>

          {/* Right Actions: Language Selector & Primary CTA Button */}
          <div className="flex items-center gap-4">
            <LanguageSelector />

            <Link
              href="#contact"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/25 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              {t.nav.contactBroker}
            </Link>

            {/* Mobile menu toggle (44px min hit target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
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

        {/* Mobile dropdown menu (Thumb-friendly 44px+ touch targets) */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800/80 py-4 px-2 space-y-1 bg-zinc-950/95 backdrop-blur-2xl rounded-b-2xl shadow-strong-tint animate-in fade-in slide-in-from-top-2 duration-150">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center h-12 px-4 rounded-xl text-base font-medium text-zinc-200 hover:bg-zinc-900 hover:text-amber-300 transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center h-12 px-4 rounded-xl text-base font-medium text-zinc-200 hover:bg-zinc-900 hover:text-amber-300 transition-colors"
            >
              {t.nav.catalog}
            </Link>
            <Link
              href="/#districts"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center h-12 px-4 rounded-xl text-base font-medium text-zinc-200 hover:bg-zinc-900 hover:text-amber-300 transition-colors"
            >
              {t.nav.districts}
            </Link>
            <Link
              href="/#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center h-12 px-4 rounded-xl text-base font-medium text-zinc-200 hover:bg-zinc-900 hover:text-amber-300 transition-colors"
            >
              {t.nav.calculator}
            </Link>
            <Link
              href="/#golden-visa"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center h-12 px-4 rounded-xl text-base font-medium text-zinc-200 hover:bg-zinc-900 hover:text-amber-300 transition-colors"
            >
              {t.nav.goldenVisa}
            </Link>
            <div className="pt-3 px-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center h-12 rounded-xl text-sm font-bold uppercase tracking-wider text-zinc-950 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-400/20 active:scale-98 transition-all"
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
