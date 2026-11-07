"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLang } from "../context/LangContext";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const { t, lang } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/30 bg-white/85 backdrop-blur-[16px] shadow-soft-tint transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Historical Archive Badge */}
          <Link href="/" className="flex items-center gap-3 group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A] rounded-xl">
            <div className="w-10 h-10 rounded-xl bg-[#0F172A] p-1 flex items-center justify-center shadow-md shadow-[#0F172A]/20 group-hover:scale-105 transition-all duration-200 border border-white/10">
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
                <span className="font-bold text-lg sm:text-xl text-[#0F172A] tracking-tight group-hover:text-[#8C6A48] transition-colors">
                  Dubai Architecture
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0] rounded-md font-mono">
                  EST. 2006
                </span>
              </div>
              <span className="text-xs sm:text-sm text-[#64748B] font-mono tracking-wider">
                dubai-architecture.info
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 text-xs xl:text-[14px] font-semibold text-[#475569] whitespace-nowrap">
            <Link
              href="/"
              className="hover:text-[#0F172A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0F172A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/#catalog"
              className="hover:text-[#0F172A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0F172A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.catalog}
            </Link>
            <Link
              href="/#districts"
              className="hover:text-[#0F172A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0F172A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.districts}
            </Link>
            <Link
              href="/#calculator"
              className="hover:text-[#0F172A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0F172A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.calculator}
            </Link>
            <Link
              href="/#golden-visa"
              className="hover:text-[#0F172A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0F172A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.nav.goldenVisa}
            </Link>
            <Link
              href="/developers/"
              className="hover:text-[#0F172A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0F172A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {lang === "ru" ? "Застройщики" : "Developers"}
            </Link>
          </nav>

          {/* Right Actions: Language Selector & Primary CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <LanguageSelector />

            <Link
              href="#contact"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-[#1E293B] transition-all shadow-soft-tint active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:ring-offset-2"
            >
              {t.nav.contactBroker}
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
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
        <div className="md:hidden border-t border-[#E2E8F0] bg-white/95 backdrop-blur-[16px] px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#0F172A] rounded-lg hover:bg-[#F1F5F9]"
          >
            {t.nav.home}
          </Link>
          <Link
            href="/#catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#0F172A] rounded-lg hover:bg-[#F1F5F9]"
          >
            {t.nav.catalog}
          </Link>
          <Link
            href="/#districts"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#0F172A] rounded-lg hover:bg-[#F1F5F9]"
          >
            {t.nav.districts}
          </Link>
          <Link
            href="/#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#0F172A] rounded-lg hover:bg-[#F1F5F9]"
          >
            {t.nav.calculator}
          </Link>
          <Link
            href="/#golden-visa"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#0F172A] rounded-lg hover:bg-[#F1F5F9]"
          >
            {t.nav.goldenVisa}
          </Link>
          <Link
            href="/developers/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#0F172A] rounded-lg hover:bg-[#F1F5F9]"
          >
            {lang === "ru" ? "Застройщики" : "Developers"}
          </Link>
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0F172A] hover:bg-[#1E293B] rounded-xl shadow-soft-tint"
            >
              {t.nav.contactBroker}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
