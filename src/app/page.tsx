"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    setLeadModalTower(towerName || "Dubai Architectural Landmarks");
    setLeadModalOpen(true);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F17] text-[#F8FAFC] transition-colors">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 border-b border-[rgba(255,255,255,0.06)] bg-[#0B0F17]">
        {/* Real Architectural Skyline Background with Dark Luxury Vignette */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-dubai-skyline.jpg"
            alt="Dubai Architectural Skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/80 via-[#0B0F17]/90 to-[#0B0F17]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-7">
            {/* Heritage Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(212,175,55,0.3)] bg-[#131B26]/90 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide shadow-luxury-card backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8FAFC] font-editorial leading-[1.12]">
              {t.hero.title}{" "}
              <span className="bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B89628] bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-[#94A3B8] max-w-[62ch] font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Search Bar - Architectural Visual Anchor */}
            <div className="w-full max-w-2xl mt-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("catalog");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative flex items-center"
              >
                <div className={`absolute ${isRtl ? "right-4" : "left-4"} text-[#D4AF37] pointer-events-none`}>
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
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
                  className={`w-full h-[58px] rounded-2xl bg-[#131B26] border border-[rgba(255,255,255,0.08)] text-[#F8FAFC] placeholder-[#64748B] shadow-luxury-card focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-base sm:text-lg ${
                    isRtl ? "pr-14 pl-36" : "pl-14 pr-36"
                  }`}
                />
                <button
                  type="submit"
                  className={`absolute ${
                    isRtl ? "left-2" : "right-2"
                  } h-11 px-6 rounded-xl bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#FDE68A] hover:to-[#D4AF37] text-[#0B0F17] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md`}
                >
                  {t.filters.search.replace("...", "")}
                </button>
              </form>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#catalog"
                className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#B89628] hover:from-[#FDE68A] hover:to-[#D4AF37] text-[#0B0F17] transition-all shadow-lg shadow-[#D4AF37]/20 active:scale-95"
              >
                {t.hero.ctaCatalog}
              </a>
              <a
                href="#districts"
                className="px-8 py-4 rounded-xl font-semibold text-base bg-[#131B26] hover:bg-[#1A2433] text-[#F8FAFC] border border-[rgba(255,255,255,0.1)] hover:border-[#D4AF37]/40 transition-all shadow-luxury-card"
              >
                {t.nav.districts}
              </a>
              <button
                type="button"
                onClick={() => openLeadModal()}
                className="px-8 py-4 rounded-xl font-semibold text-base bg-[#131B26]/60 hover:bg-[#131B26] text-[#D4AF37] border border-[rgba(212,175,55,0.3)] transition-all shadow-luxury-card"
              >
                {t.hero.downloadGuideBtn}
              </button>
            </div>

            {/* Live Stats Counter Strip with Floating Compound Shadows */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-10 mt-6 border-t border-[rgba(255,255,255,0.06)]">
              <div className="p-6 rounded-2xl bg-[#131B26] border border-[rgba(255,255,255,0.07)] shadow-luxury-card text-center card-sheen">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] font-mono tabular-nums">18+</div>
                <div className="text-xs sm:text-sm text-[#94A3B8] font-semibold mt-1.5">{t.hero.statsYears}</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#131B26] border border-[rgba(255,255,255,0.07)] shadow-luxury-card text-center card-sheen">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#D4AF37] font-mono tabular-nums">30+</div>
                <div className="text-xs sm:text-sm text-[#94A3B8] font-semibold mt-1.5">{t.hero.statsTowers}</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#131B26] border border-[rgba(255,255,255,0.07)] shadow-luxury-card text-center card-sheen">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#10B981] font-mono tabular-nums">8.2%</div>
                <div className="text-xs sm:text-sm text-[#94A3B8] font-semibold mt-1.5">{t.hero.statsRoi}</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#131B26] border border-[rgba(255,255,255,0.07)] shadow-luxury-card text-center card-sheen">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] font-mono tabular-nums">10</div>
                <div className="text-xs sm:text-sm text-[#94A3B8] font-semibold mt-1.5">{t.hero.statsDistricts}</div>
              </div>
            </div>

            {/* Language & DLD status info */}
            <div className="text-xs sm:text-sm text-[#94A3B8] font-mono pt-2">
              🌍 {t.hero.statusBarText} • {t.hero.activeLanguage} <strong className="text-[#D4AF37]">{langInfo.name}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog of Towers */}
      <CatalogSection />

      {/* Districts Exploration Section */}
      <DistrictsSection />

      {/* Multicurrency ROI & Yield Calculator */}
      <RoiCalculator onOpenInquire={(tower) => openLeadModal(tower)} />

      {/* Golden Visa Eligibility Checker */}
      <GoldenVisaWidget onOpenInquire={(details) => openLeadModal(details)} />

      {/* Global Lead Capture Modal */}
      {leadModalOpen && (
        <LeadModal
          towerName={leadModalTower}
          onClose={() => setLeadModalOpen(false)}
        />
      )}
    </div>
  );
}
