"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLang } from "../context/LangContext";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const { t } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E5DFD3] bg-[#F7F5F0]/95 backdrop-blur-xl shadow-soft-tint transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Historical Archive Badge */}
          <Link href="/" className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6A48] rounded-xl">
            <div className="w-10 h-10 rounded-xl bg-[#8C6A48] text-white flex items-center justify-center shadow-md shadow-[#8C6A48]/20 group-hover:bg-[#6D5135] transition-all duration-200">
              <svg
                className="w-5 h-5 text-white"
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
                <span className="font-bold text-lg text-[#1C1917] tracking-tight group-hover:text-[#8C6A48] transition-colors">
                  Dubai Architecture
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold bg-[#EFECE4] text-[#8C6A48] border border-[#DDD7CA] rounded-md font-mono">
                  EST. 2006
                </span>
              </div>
              <span className="text-xs text-[#78716C] font-mono tracking-wider">
                dubai-architecture.info
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#57534E]">
            <Link
              href="/"
              className="hover:text-[#1C1917] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C6A48] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/#catalog"
              className="hover:text-[#1C1917] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C6A48] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.catalog}
            </Link>
            <Link
              href="/#districts"
              className="hover:text-[#1C1917] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C6A48] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.districts}
            </Link>
            <Link
              href="/#calculator"
              className="hover:text-[#1C1917] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C6A48] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.calculator}
            </Link>
            <Link
              href="/#golden-visa"
              className="hover:text-[#1C1917] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C6A48] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.goldenVisa}
            </Link>
          </nav>

          {/* Right Actions: Language Selector & Primary CTA Button */}
          <div className="flex items-center gap-4">
            <LanguageSelector />

            <Link
              href="#contact"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#8C6A48] hover:bg-[#6D5135] transition-all shadow-soft-tint active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#8C6A48] focus:ring-offset-2 focus:ring-offset-[#F7F5F0]"
            >
              {t.nav.contactBroker}
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center text-[#57534E] hover:text-[#1C1917] hover:bg-[#EFECE4] rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#8C6A48]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5DFD3] bg-[#F7F5F0] px-4 pt-4 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#1C1917] rounded-lg hover:bg-[#EFECE4]"
          >
            {t.nav.home}
          </Link>
          <Link
            href="/#catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#1C1917] rounded-lg hover:bg-[#EFECE4]"
          >
            {t.nav.catalog}
          </Link>
          <Link
            href="/#districts"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#1C1917] rounded-lg hover:bg-[#EFECE4]"
          >
            {t.nav.districts}
          </Link>
          <Link
            href="/#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#1C1917] rounded-lg hover:bg-[#EFECE4]"
          >
            {t.nav.calculator}
          </Link>
          <Link
            href="/#golden-visa"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#1C1917] rounded-lg hover:bg-[#EFECE4]"
          >
            {t.nav.goldenVisa}
          </Link>
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#8C6A48] rounded-xl shadow-soft-tint"
            >
              {t.nav.contactBroker}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
