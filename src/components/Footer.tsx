"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import MethodologyModal from "@/components/MethodologyModal";
import { FOOTER_I18N } from "@/data/localizedFooter";

export default function Footer() {
  const { t, lang } = useLang();
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  const tF = FOOTER_I18N[lang] || FOOTER_I18N.en;

  return (
    <>
      <footer className="w-full bg-[#0F172A] text-white border-t border-[#1E293B] mt-auto print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand & Historical Archive Statement */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/20">
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
                  <span className="font-bold text-xl text-white tracking-tight">Dubai Architecture</span>
                  <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-white/10 text-amber-400 border border-white/20 rounded font-mono">
                    EST. 2006
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed max-w-lg">
                {t.footer.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                  🏛️ {t.footer.historicalArchiveNote}
                </span>
                <button
                  type="button"
                  onClick={() => setIsMethodologyOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-300 transition-colors cursor-pointer"
                >
                  <span>📋</span>
                  <span>{tF.methodologyDldBtn}</span>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                {t.footer.linksTitle}
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
                <li>
                  <Link href="/" className="hover:text-amber-400 transition-colors">
                    {t.nav.home}
                  </Link>
                </li>
                <li>
                  <Link href="/#catalog" className="hover:text-amber-400 transition-colors">
                    {t.nav.catalog}
                  </Link>
                </li>
                <li>
                  <Link href="/#districts" className="hover:text-amber-400 transition-colors">
                    {t.nav.districts}
                  </Link>
                </li>
                <li>
                  <Link href="/developers/" className="hover:text-amber-400 transition-colors">
                    {tF.developersLink}
                  </Link>
                </li>
                <li>
                  <Link href="/#calculator" className="hover:text-amber-400 transition-colors">
                    {t.nav.calculator}
                  </Link>
                </li>
                <li>
                  <Link href="/#golden-visa" className="hover:text-amber-400 transition-colors">
                    {t.nav.goldenVisa}
                  </Link>
                </li>
                <li>
                  <Link href="/methodology/" className="hover:text-amber-400 transition-colors">
                    {tF.methodologyLink}
                  </Link>
                </li>
                <li>
                  <Link href="/about/" className="hover:text-amber-400 transition-colors">
                    {tF.aboutLink}
                  </Link>
                </li>
                <li>
                  <Link href="/editorial-policy/" className="hover:text-amber-400 transition-colors">
                    {tF.editorialPolicyLink}
                  </Link>
                </li>
                <li>
                  <Link href="/affiliate-disclosure/" className="hover:text-amber-400 transition-colors">
                    {tF.affiliateDisclosureLink}
                  </Link>
                </li>
                <li>
                  <Link href="/contact/" className="hover:text-amber-400 transition-colors">
                    {tF.contactLink}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal / Compliance & Broker Partner Disclosure */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                {t.footer.legalTitle}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.footer.disclaimer}
              </p>
              <div className="pt-2 text-xs text-slate-400 space-y-1.5">
                <div className="text-amber-400/90 font-mono font-semibold">
                  {tF.brokerPartnersTitle}
                </div>
                <div className="text-slate-400 text-[11px] leading-relaxed">
                  {tF.brokerPartnersDesc}
                </div>
                <div className="pt-1 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsMethodologyOpen(true)}
                    className="text-xs text-amber-400 hover:text-amber-300 underline font-sans font-medium cursor-pointer"
                  >
                    {tF.quickViewBtn}
                  </button>
                  <span className="text-slate-600">•</span>
                  <Link
                    href="/methodology/"
                    className="text-xs text-amber-400 hover:text-amber-300 underline font-sans font-medium"
                  >
                    {tF.fullMethodologyPageLink}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
            <div>
              © {new Date().getFullYear()} Dubai Architecture (dubai-architecture.info). {t.footer.rightsReserved}
            </div>
            <div className="flex items-center gap-4">
              <span>Dubai, United Arab Emirates</span>
              <span>•</span>
              <span className="text-amber-400">Archive ID: DUB-ARCH-2006</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Methodology Modal */}
      <MethodologyModal
        isOpen={isMethodologyOpen}
        onClose={() => setIsMethodologyOpen(false)}
      />
    </>
  );
}
