"use client";

import React, { useState } from "react";
import Link from "next/link";
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
    <div className="flex-1 flex flex-col bg-transparent text-[#0F172A] transition-colors">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E2E8F0] bg-gradient-to-b from-[#F1F5F9]/60 to-[#F8F9FA]">
        {/* Real Architectural Skyline Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-dubai-skyline.jpg"
            alt="Dubai Architectural Skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA]/60 via-[#F8F9FA]/85 to-[#F8F9FA]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            {/* Heritage Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#CBD5E1] bg-white text-[#0F172A] text-xs sm:text-sm font-bold tracking-wide shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0F172A] animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] font-heading leading-[1.12]">
              {t.hero.title}{" "}
              <span className="text-[#8C6A48]">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#475569] max-w-[65ch] font-normal leading-relaxed">
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
                <div className={`absolute ${isRtl ? "right-4" : "left-4"} text-[#64748B] pointer-events-none`}>
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
                  className={`w-full h-[56px] rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] placeholder-[#64748B] shadow-float-card focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all text-base sm:text-lg ${
                    isRtl ? "pr-14 pl-36" : "pl-14 pr-36"
                  }`}
                />
                <button
                  type="submit"
                  className={`absolute ${
                    isRtl ? "left-2" : "right-2"
                  } h-11 px-6 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm`}
                >
                  {t.filters.search.replace("...", "")}
                </button>
              </form>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#catalog"
                className="px-7 py-4 rounded-xl font-bold text-base bg-[#0F172A] hover:bg-[#1E293B] text-white transition-all shadow-sm"
              >
                {t.hero.ctaCatalog}
              </a>
              <a
                href="#districts"
                className="px-7 py-4 rounded-xl font-semibold text-base bg-white hover:bg-[#F8F9FA] text-[#0F172A] border border-[#CBD5E1] transition-all shadow-sm"
              >
                {t.nav.districts}
              </a>
              <button
                type="button"
                onClick={() => openLeadModal()}
                className="px-7 py-4 rounded-xl font-semibold text-base bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] border border-[#CBD5E1] transition-all"
              >
                {t.hero.downloadGuideBtn}
              </button>
            </div>

            {/* Live Stats Counter Strip with Floating Compound Shadows */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-10 mt-6 border-t border-[#E2E8F0]">
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-float-card text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] font-mono">18+</div>
                <div className="text-xs sm:text-sm text-[#64748B] font-semibold mt-1.5">{t.hero.statsYears}</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-float-card text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#8C6A48] font-mono">30+</div>
                <div className="text-xs sm:text-sm text-[#64748B] font-semibold mt-1.5">{t.hero.statsTowers}</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-float-card text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#059669] font-mono">8.2%</div>
                <div className="text-xs sm:text-sm text-[#64748B] font-semibold mt-1.5">{t.hero.statsRoi}</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-float-card text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] font-mono">10</div>
                <div className="text-xs sm:text-sm text-[#64748B] font-semibold mt-1.5">{t.hero.statsDistricts}</div>
              </div>
            </div>

            {/* Language & DLD status info */}
            <div className="text-xs sm:text-sm text-[#64748B] font-mono pt-2">
              🌍 {t.hero.statusBarText} • {t.hero.activeLanguage} <strong>{langInfo.name}</strong>
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
