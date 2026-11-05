"use client";

import React from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="w-full bg-[#070A0F] text-[#F8FAFC] border-t border-[rgba(212,175,55,0.15)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Historical Archive Statement */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#131B26] p-1 flex items-center justify-center border border-[rgba(212,175,55,0.3)] shadow-luxury-card">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <line x1="9" y1="54" x2="55" y2="54" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
                  <line x1="9.5" y1="24.5" x2="18.5" y2="24.5" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M 16.5,19 C 27,24 30.5,38 23.5,53.5 L 16.5,53.5 Z" fill="#FFFFFF" />
                  <line x1="16.5" y1="17" x2="16.5" y2="53.5" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
                  <polygon points="34,53.5 52,53.5 50.5,43 35.5,43" fill="#D97706" />
                  <polygon points="36.5,43 49.5,43 48.5,33 37.5,33" fill="#F59E0B" />
                  <polygon points="38.5,33 47.5,33 46.5,23 39.5,23" fill="#F59E0B" />
                  <polygon points="40.5,23 45.5,23 44.5,13.5 41.5,13.5" fill="#FDE68A" />
                  <line x1="43" y1="13.5" x2="43" y2="6.5" stroke="#FDE68A" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="43" cy="6.5" r="1.5" fill="#FFFFFF" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-xl text-[#F8FAFC] tracking-tight font-editorial">
                  Dubai Architecture
                </span>
                <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-[#131B26] text-[#D4AF37] border border-[rgba(212,175,55,0.3)] rounded font-mono">
                  EST. 2006
                </span>
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-lg">
              {t.footer.description}
            </p>

            <div className="pt-2">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#131B26] border border-[rgba(212,175,55,0.2)] text-[#D4AF37]">
                🏛️ {t.footer.historicalArchiveNote}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] font-mono">
              {t.footer.linksTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#94A3B8] font-medium">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/#catalog" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.catalog}
                </Link>
              </li>
              <li>
                <Link href="/#districts" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.districts}
                </Link>
              </li>
              <li>
                <Link href="/#calculator" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.calculator}
                </Link>
              </li>
              <li>
                <Link href="/#golden-visa" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.goldenVisa}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Compliance */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] font-mono">
              {t.footer.legalTitle}
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              {t.footer.disclaimer}
            </p>
            <div className="pt-2 text-xs font-mono text-[#64748B]">
              RERA / DLD Standard Transparency • ISO 9001
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8] font-mono">
          <div>
            © {new Date().getFullYear()} Dubai Architecture (dubai-architecture.info). {t.footer.rightsReserved}
          </div>
          <div className="flex items-center gap-4">
            <span>Dubai, United Arab Emirates</span>
            <span>•</span>
            <span className="text-[#D4AF37]">Archive ID: DUB-ARCH-2006</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
