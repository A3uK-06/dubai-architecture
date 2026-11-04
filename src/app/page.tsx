"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import CatalogSection from "@/components/CatalogSection";
import DistrictsSection from "@/components/DistrictsSection";
import RoiCalculator from "@/components/RoiCalculator";
import GoldenVisaWidget from "@/components/GoldenVisaWidget";
import LeadModal from "@/components/LeadModal";

export default function Home() {
  const { t, langInfo, isRtl } = useLang();
  const [searchQuery, setSearchQuery] = useState("");
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadModalTower, setLeadModalTower] = useState("");

  const openLeadModal = (towerName?: string) => {
    setLeadModalTower(towerName || "Dubai Top-10 Architectural Icons");
    setLeadModalOpen(true);
  };

  return (
    <div className="flex-1 flex flex-col bg-zinc-950 text-zinc-100 selection:bg-amber-500/20 selection:text-amber-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-zinc-800/80">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-amber-600/5 to-transparent blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -top-10 right-10 w-72 h-72 bg-amber-400/5 blur-2xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            {/* Heritage Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              {t.hero.title}{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-2xl mt-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("catalog");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative flex items-center"
              >
                <div className={`absolute ${isRtl ? "right-4" : "left-4"} text-zinc-400 pointer-events-none`}>
                  <svg
                    className="w-5 h-5"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.hero.searchPlaceholder}
                  className={`w-full py-4 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 text-zinc-100 placeholder-zinc-500 shadow-2xl backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all text-sm sm:text-base ${
                    isRtl ? "pr-12 pl-36" : "pl-12 pr-36"
                  }`}
                />
                <button
                  type="submit"
                  className={`absolute ${
                    isRtl ? "left-2" : "right-2"
                  } px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm transition-all shadow-md shadow-amber-500/20`}
                >
                  {t.filters.search}
                </button>
              </form>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#catalog"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {t.hero.ctaCatalog}
              </a>
              <button
                type="button"
                onClick={() => openLeadModal()}
                className="px-6 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 hover:text-white font-medium text-sm tracking-wide transition-all backdrop-blur-md"
              >
                {t.hero.downloadGuideBtn}
              </button>
            </div>

            {/* Metrics & Statistics Bar */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-zinc-800/60 mt-10">
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
                <div className="text-3xl font-extrabold text-amber-400">18+</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                  {t.hero.statsYears}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
                <div className="text-3xl font-extrabold text-zinc-100">150+</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                  {t.hero.statsTowers}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
                <div className="text-3xl font-extrabold text-amber-400">7–10%</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                  {t.hero.statsRoi}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
                <div className="text-3xl font-extrabold text-zinc-100">8</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                  {t.hero.statsDistricts}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multilingual Status Bar */}
      <section className="py-4 bg-zinc-900/40 border-b border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-base">{langInfo.flag}</span>
              <span className="font-semibold text-zinc-200">
                {langInfo.nativeName} ({langInfo.name})
              </span>
              <span>•</span>
              <span className="text-zinc-400">{langInfo.country}</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-amber-400 font-mono">
                {isRtl ? "RTL (Right-to-Left)" : "LTR (Left-to-Right)"}
              </span>
            </div>
            <div className="text-zinc-500 font-mono">
              {t.hero.statusBarText}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Skyscraper Catalog with Filters */}
      <CatalogSection />

      {/* Key Urban Districts Showcase */}
      <DistrictsSection />

      {/* Multicurrency ROI Calculator */}
      <RoiCalculator onOpenLeadModal={() => openLeadModal()} />

      {/* Interactive Golden Visa Qualification Widget */}
      <GoldenVisaWidget />

      {/* Lead Magnet Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-500/10 via-zinc-900 to-amber-500/10 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl border border-amber-500/40 bg-zinc-950/80 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl backdrop-blur-xl">
            <div className="space-y-3 max-w-2xl">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-zinc-950">
                {t.investmentBanner.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {t.investmentBanner.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {t.investmentBanner.subtitle}
              </p>
            </div>
            <button
              onClick={() => openLeadModal()}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all transform hover:scale-105 active:scale-95 shrink-0"
            >
              {t.investmentBanner.ctaText}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="mt-auto border-t border-zinc-800 bg-zinc-950 py-12 text-sm text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="font-bold text-zinc-300 text-base">
                {t.siteTitle} • <span className="font-mono text-amber-400">dubai-architecture.info</span>
              </div>
              <p className="text-xs text-zinc-400 mt-1 max-w-xl">
                {t.footer.description}
              </p>
            </div>
            <div className="text-xs text-zinc-400 font-mono">
              {t.footer.rightsReserved}
            </div>
          </div>
          <div className="pt-6 border-t border-zinc-900 text-[11px] text-zinc-600">
            {t.footer.disclaimer}
          </div>
        </div>
      </footer>

      {/* Global Lead Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        initialTower={leadModalTower}
      />
    </div>
  );
}
