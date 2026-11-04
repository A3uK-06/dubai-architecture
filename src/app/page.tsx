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
    <div className="flex-1 flex flex-col bg-[#F7F5F0] text-[#1C1917] transition-colors">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E5DFD3] bg-[#EFECE4]/50">
        {/* Real Architectural Skyline Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-dubai-skyline.jpg"
            alt="Dubai Architectural Skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5F0]/60 via-[#F7F5F0]/85 to-[#F7F5F0]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            {/* Heritage Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DDD7CA] bg-white text-[#8C6A48] text-xs font-bold tracking-wide shadow-soft-tint">
              <span className="w-2 h-2 rounded-full bg-[#8C6A48] animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1C1917] leading-[1.1]">
              {t.hero.title}{" "}
              <span className="text-[#8C6A48]">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#57534E] max-w-2xl font-normal leading-relaxed">
              Независимый архитектурный архив с 2006 года: детальные инженерные паспорта небоскребов Дубая, геотехника свайных фундаментов, ветроустойчивость, коммунальные тарифы DLD и инвестиционный аудит планировок.
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
                <div className={`absolute ${isRtl ? "right-4" : "left-4"} text-[#78716C] pointer-events-none`}>
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
                  className={`w-full py-4 rounded-2xl bg-white border border-[#DDD7CA] text-[#1C1917] placeholder-[#78716C] shadow-medium-tint focus:outline-none focus:ring-2 focus:ring-[#8C6A48] transition-all text-sm sm:text-base ${
                    isRtl ? "pr-12 pl-36" : "pl-12 pr-36"
                  }`}
                />
                <button
                  type="submit"
                  className={`absolute ${
                    isRtl ? "left-2" : "right-2"
                  } px-5 py-2.5 rounded-xl bg-[#8C6A48] hover:bg-[#6D5135] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-soft-tint`}
                >
                  Поиск
                </button>
              </form>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#catalog"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#8C6A48] hover:bg-[#6D5135] text-white transition-all shadow-soft-tint"
              >
                {t.hero.ctaCatalog}
              </a>
              <a
                href="#districts"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-[#FAF8F5] text-[#1C1917] border border-[#DDD7CA] transition-all shadow-soft-tint"
              >
                {t.nav.districts}
              </a>
              <button
                type="button"
                onClick={() => openLeadModal()}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#EFECE4] hover:bg-[#E5DFD3] text-[#8C6A48] border border-[#DDD7CA] transition-all"
              >
                {t.hero.downloadGuideBtn}
              </button>
            </div>

            {/* Live Stats Counter Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-10 mt-6 border-t border-[#E5DFD3]">
              <div className="p-4 rounded-2xl bg-white border border-[#E5DFD3] shadow-soft-tint">
                <div className="text-3xl font-extrabold text-[#1C1917] font-mono">18+</div>
                <div className="text-xs text-[#78716C] font-semibold mt-1">{t.hero.statsYears}</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E5DFD3] shadow-soft-tint">
                <div className="text-3xl font-extrabold text-[#8C6A48] font-mono">30+</div>
                <div className="text-xs text-[#78716C] font-semibold mt-1">Культовых башен в базе</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E5DFD3] shadow-soft-tint">
                <div className="text-3xl font-extrabold text-[#2D6A4F] font-mono">8.2%</div>
                <div className="text-xs text-[#78716C] font-semibold mt-1">{t.hero.statsRoi}</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E5DFD3] shadow-soft-tint">
                <div className="text-3xl font-extrabold text-[#1C1917] font-mono">10</div>
                <div className="text-xs text-[#78716C] font-semibold mt-1">{t.hero.statsDistricts}</div>
              </div>
            </div>

            {/* Language & DLD status info */}
            <div className="text-xs text-[#78716C] font-mono pt-2">
              🌍 {t.hero.statusBarText} • Активный язык: <strong>{langInfo.name}</strong>
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
