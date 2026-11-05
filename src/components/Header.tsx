"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLang } from "../context/LangContext";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const { t } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[rgba(212,175,55,0.15)] bg-[#0B0F17]/80 backdrop-blur-[20px] shadow-luxury-card transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Historical Archive Badge */}
          <Link href="/" className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-xl">
            <div className="w-10 h-10 rounded-xl bg-[#131B26] p-1 flex items-center justify-center shadow-lg shadow-black/40 group-hover:scale-105 group-hover:border-[#D4AF37]/50 transition-all duration-200 border border-[rgba(212,175,55,0.3)]">
              <svg
                className="w-full h-full"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Baseline */}
                <line x1="9" y1="54" x2="55" y2="54" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
                
                {/* Burj Al Arab (Парус) */}
                <line x1="9.5" y1="24.5" x2="18.5" y2="24.5" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M 16.5,19 C 27,24 30.5,38 23.5,53.5 L 16.5,53.5 Z" fill="#FFFFFF" />
                <path d="M 16.5,29 C 23.5,33 25.5,43 20.5,53.5" stroke="#94A3B8" strokeWidth="1" opacity="0.6" />
                <line x1="16.5" y1="17" x2="16.5" y2="53.5" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />

                {/* Burj Khalifa */}
                <polygon points="34,53.5 52,53.5 50.5,43 35.5,43" fill="#D97706" />
                <polygon points="36.5,43 49.5,43 48.5,33 37.5,33" fill="#F59E0B" />
                <polygon points="38.5,33 47.5,33 46.5,23 39.5,23" fill="#F59E0B" />
                <polygon points="40.5,23 45.5,23 44.5,13.5 41.5,13.5" fill="#FDE68A" />
                <line x1="43" y1="13.5" x2="43" y2="6.5" stroke="#FDE68A" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="43" cy="6.5" r="1.5" fill="#FFFFFF" />
                <line x1="43" y1="14" x2="43" y2="53.5" stroke="#FEF3C7" strokeWidth="1.2" opacity="0.8" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl text-[#F8FAFC] tracking-tight group-hover:text-[#D4AF37] transition-colors font-editorial">
                  Dubai Architecture
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold bg-[#131B26] text-[#D4AF37] border border-[rgba(212,175,55,0.3)] rounded-md font-mono">
                  EST. 2006
                </span>
              </div>
              <span className="text-xs sm:text-sm text-[#94A3B8] font-mono tracking-wider">
                dubai-architecture.info
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] sm:text-base font-medium text-[#94A3B8]">
            <Link
              href="/"
              className="hover:text-[#F8FAFC] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D4AF37] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/#catalog"
              className="hover:text-[#F8FAFC] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D4AF37] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.catalog}
            </Link>
            <Link
              href="/#districts"
              className="hover:text-[#F8FAFC] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D4AF37] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.districts}
            </Link>
            <Link
              href="/#calculator"
              className="hover:text-[#F8FAFC] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D4AF37] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.calculator}
            </Link>
            <Link
              href="/#golden-visa"
              className="hover:text-[#F8FAFC] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D4AF37] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.goldenVisa}
            </Link>
          </nav>

          {/* Header Controls */}
          <div className="flex items-center gap-4">
            <LanguageSelector />

            {/* Direct Inquire CTA Button */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0B0F17] bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#B89628] hover:from-[#FDE68A] hover:to-[#D4AF37] transition-all shadow-md shadow-[#D4AF37]/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0B0F17]"
            >
              {t.nav.contactBroker}
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#131B26] rounded-xl transition-colors border border-[rgba(255,255,255,0.08)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[rgba(255,255,255,0.08)] bg-[#0B0F17]/95 backdrop-blur-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3 px-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-semibold text-[#F8FAFC] hover:bg-[#131B26] hover:text-[#D4AF37] transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-semibold text-[#F8FAFC] hover:bg-[#131B26] hover:text-[#D4AF37] transition-colors"
              >
                {t.nav.catalog}
              </Link>
              <Link
                href="/#districts"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-semibold text-[#F8FAFC] hover:bg-[#131B26] hover:text-[#D4AF37] transition-colors"
              >
                {t.nav.districts}
              </Link>
              <Link
                href="/#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-semibold text-[#F8FAFC] hover:bg-[#131B26] hover:text-[#D4AF37] transition-colors"
              >
                {t.nav.calculator}
              </Link>
              <Link
                href="/#golden-visa"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-semibold text-[#F8FAFC] hover:bg-[#131B26] hover:text-[#D4AF37] transition-colors"
              >
                {t.nav.goldenVisa}
              </Link>
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-[#0B0F17] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] shadow-md transition-all"
                >
                  {t.nav.contactBroker}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
