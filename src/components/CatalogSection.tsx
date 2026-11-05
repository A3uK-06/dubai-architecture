"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUILDINGS } from "@/data/buildings";
import { DISTRICTS } from "@/data/districts";
import { useLang } from "@/context/LangContext";
import { getLocalizedBuilding, getLocalizedDistrict } from "@/data/localizedContent";

export default function CatalogSection() {
  const { t, lang } = useLang();

  const [search, setSearch] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedHeight, setSelectedHeight] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState<"height" | "year" | "rating" | "yield">("height");

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener for "/" to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Compute building density per district
  const districtCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const b of BUILDINGS) {
      counts[b.districtSlug] = (counts[b.districtSlug] || 0) + 1;
    }
    return counts;
  }, []);

  // Localized districts list
  const localizedDistricts = useMemo(() => {
    return DISTRICTS.map((d) => getLocalizedDistrict(d, lang));
  }, [lang]);

  // Localized buildings list
  const localizedBuildings = useMemo(() => {
    return BUILDINGS.map((b) => getLocalizedBuilding(b, lang));
  }, [lang]);

  const filteredBuildings = useMemo(() => {
    return localizedBuildings.filter((b) => {
      // Search text
      if (search) {
        const query = search.toLowerCase();
        const matchesName = b.name.toLowerCase().includes(query);
        const matchesArch =
          b.architect.toLowerCase().includes(query) ||
          b.architectFirm.toLowerCase().includes(query);
        const matchesDev = b.developer.toLowerCase().includes(query);
        const matchesDist = b.district.toLowerCase().includes(query);
        if (!matchesName && !matchesArch && !matchesDev && !matchesDist) {
          return false;
        }
      }

      // District
      if (selectedDistrict !== "all" && b.districtSlug !== selectedDistrict) {
        return false;
      }

      // Height
      if (selectedHeight === "megatall" && b.heightMeters < 600) return false;
      if (
        selectedHeight === "supertall" &&
        (b.heightMeters < 300 || b.heightMeters >= 600)
      )
        return false;
      if (selectedHeight === "highrise" && b.heightMeters >= 300) return false;

      // Type
      if (selectedType !== "all") {
        const origBuilding = BUILDINGS.find((orig) => orig.id === b.id);
        if (origBuilding && origBuilding.type !== selectedType) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "height") return b.heightMeters - a.heightMeters;
      if (sortBy === "year") return b.yearBuilt - a.yearBuilt;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "yield") {
        const yieldA = parseFloat(a.investmentYield) || 0;
        const yieldB = parseFloat(b.investmentYield) || 0;
        return yieldB - yieldA;
      }
      return 0;
    });
  }, [search, selectedDistrict, selectedHeight, selectedType, sortBy, localizedBuildings]);

  const typeMap: Record<string, string> = {
    all: t.catalog.types.all,
    Residential: t.catalog.types.residential,
    Commercial: t.catalog.types.commercial,
    Hotel: t.catalog.types.hotel,
    "Mixed-Use": t.catalog.types.mixedUse,
    Cultural: t.catalog.types.cultural,
  };

  const handleResetFilters = () => {
    setSearch("");
    setSelectedDistrict("all");
    setSelectedHeight("all");
    setSelectedType("all");
  };

  return (
    <section id="catalog" className="py-20 md:py-28 border-b border-[rgba(255,255,255,0.06)] bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#131B26] text-[#D4AF37] border border-[rgba(212,175,55,0.3)] mb-3.5 shadow-luxury-card">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="font-mono tracking-wider">{t.nav.catalog} • {BUILDINGS.length} {t.catalog.buildings}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-tight font-editorial">
              {t.catalog.title}
            </h2>
          </div>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-xl leading-relaxed">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Filter Controls Bar: Dark Luxury Cockpit Styling */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#131B26] border border-[rgba(255,255,255,0.08)] shadow-luxury-card mb-12 space-y-7 card-sheen">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Search Input - Architectural Visual Anchor */}
            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2 font-mono">
                {t.filters.search}
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#D4AF37]">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t.filters.search}
                  className="w-full h-[52px] pl-11 pr-11 rounded-xl bg-[#0B0F17] border border-[rgba(255,255,255,0.08)] text-[#F8FAFC] text-sm sm:text-base placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                  <kbd className="hidden sm:inline-flex items-center justify-center w-6 h-6 text-xs font-mono font-bold text-[#94A3B8] bg-[#1A2433] border border-[rgba(255,255,255,0.12)] rounded shadow-xs">
                    /
                  </kbd>
                </div>
              </div>
            </div>

            {/* District Filter with Density Count Hints */}
            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2 font-mono">
                {t.filters.allDistricts}
              </label>
              <div className="relative">
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full h-[52px] px-4 rounded-xl bg-[#0B0F17] border border-[rgba(255,255,255,0.08)] text-[#F8FAFC] text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all cursor-pointer appearance-none pr-10"
                >
                  <option value="all" className="bg-[#131B26] text-[#F8FAFC]">
                    {t.filters.allDistricts} ({BUILDINGS.length})
                  </option>
                  {localizedDistricts.map((d) => (
                    <option key={d.slug} value={d.slug} className="bg-[#131B26] text-[#F8FAFC]">
                      {d.name} ({districtCounts[d.slug] || 0})
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Height Category */}
            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2 font-mono">
                {t.filters.allHeights}
              </label>
              <div className="relative">
                <select
                  value={selectedHeight}
                  onChange={(e) => setSelectedHeight(e.target.value)}
                  className="w-full h-[52px] px-4 rounded-xl bg-[#0B0F17] border border-[rgba(255,255,255,0.08)] text-[#F8FAFC] text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all cursor-pointer appearance-none pr-10"
                >
                  <option value="all" className="bg-[#131B26] text-[#F8FAFC]">{t.filters.allHeights}</option>
                  <option value="megatall" className="bg-[#131B26] text-[#F8FAFC]">&gt; 600m (Megatall)</option>
                  <option value="supertall" className="bg-[#131B26] text-[#F8FAFC]">300m - 600m (Supertall)</option>
                  <option value="highrise" className="bg-[#131B26] text-[#F8FAFC]">&lt; 300m (Highrise)</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Sort Order */}
            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2 font-mono">
                {t.filters.sortBy}
              </label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full h-[52px] px-4 rounded-xl bg-[#0B0F17] border border-[rgba(255,255,255,0.08)] text-[#F8FAFC] text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all cursor-pointer appearance-none pr-10"
                >
                  <option value="height" className="bg-[#131B26] text-[#F8FAFC]">{t.filters.heightDesc}</option>
                  <option value="year" className="bg-[#131B26] text-[#F8FAFC]">{t.filters.yearDesc}</option>
                  <option value="rating" className="bg-[#131B26] text-[#F8FAFC]">{t.filters.popularity}</option>
                  <option value="yield" className="bg-[#131B26] text-[#F8FAFC]">{t.catalog.sortOptions.yield}</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Horizontal Glass Chips */}
          <div className="flex flex-wrap items-center gap-2.5 pt-5 border-t border-[rgba(255,255,255,0.06)]">
            {Object.entries(typeMap).map(([typeKey, typeLabel]) => {
              const isActive = selectedType === typeKey;
              return (
                <button
                  key={typeKey}
                  type="button"
                  onClick={() => setSelectedType(typeKey)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#E5C378] to-[#D4AF37] text-[#0B0F17] font-bold shadow-md shadow-[#D4AF37]/25"
                      : "glass-chip text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#D4AF37]/40"
                  }`}
                >
                  {typeLabel}
                </button>
              );
            })}

            {(search || selectedDistrict !== "all" || selectedHeight !== "all" || selectedType !== "all") && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="ml-auto text-xs sm:text-sm font-semibold text-[#D4AF37] hover:underline underline-offset-4 transition-colors font-mono"
              >
                {t.catalog.resetFilters}
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6 text-xs sm:text-sm text-[#94A3B8]">
          <span>
            {t.catalog.showing} <strong className="text-[#D4AF37] font-bold font-mono text-sm sm:text-base tabular-nums">{filteredBuildings.length}</strong> {t.catalog.buildings}
          </span>
          {selectedDistrict !== "all" && (
            <span>
              {t.catalog.filteredBy}{" "}
              <strong className="text-[#F8FAFC] font-semibold">
                {localizedDistricts.find((d) => d.slug === selectedDistrict)?.name}
              </strong>
            </span>
          )}
        </div>

        {/* Buildings Grid: Bento-Grid Architecture & Elimination of Label:Value */}
        {filteredBuildings.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#131B26] border border-[rgba(255,255,255,0.08)] shadow-luxury-card">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#1A2433] flex items-center justify-center text-3xl">
              🏙️
            </div>
            <h3 className="text-xl font-bold text-[#F8FAFC] font-editorial">{t.catalog.noMatch}</h3>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2 max-w-sm mx-auto leading-relaxed">
              {t.catalog.clearSearch}
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-[#E5C378] to-[#D4AF37] text-[#0B0F17] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-all"
            >
              {t.catalog.resetAllFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBuildings.map((building) => (
              <div
                key={building.id}
                className="rounded-3xl border border-[rgba(255,255,255,0.07)] bg-[#131B26] overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 shadow-luxury-card hover:shadow-luxury-card-hover flex flex-col h-full group card-sheen"
              >
                {/* 1. ВИЗУАЛЬНЫЙ БЛОК: Фото с градиентом linear-gradient(to top, #131B26 10%, transparent 90%) и парящими бейджами */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0B0F17]">
                  <Image
                    src={building.image}
                    alt={building.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle luxury gradient down into card surface */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, #131B26 8%, rgba(19, 27, 38, 0.45) 50%, rgba(11, 15, 23, 0.2) 90%)",
                    }}
                  />

                  {/* Top Floating Badges: Location (Left) & Construction Status (Right) */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-start z-10">
                    {/* Left: District Badge */}
                    <Link
                      href={`/districts/${building.districtSlug}/`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B0F17]/80 hover:bg-[#1A2433] text-[#F8FAFC] border border-[rgba(255,255,255,0.18)] backdrop-blur-md text-xs font-semibold tracking-wide transition-colors truncate drop-shadow-md"
                    >
                      <span>📍</span>
                      <span className="truncate">{building.district}</span>
                    </Link>

                    {/* Right: Construction Status Badge */}
                    {building.status === "Under Construction" ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-950/80 text-[#E5C378] border border-[#D4AF37]/40 text-xs font-bold backdrop-blur-md shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                        <span>{t.catalog.underConstruction}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-950/85 text-emerald-400 border border-emerald-500/35 text-xs font-bold backdrop-blur-md shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Completed</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* 2. АРХИТЕКТУРНЫЙ И РЕДАКЦИОННЫЙ БЛОК */}
                <div className="p-6 pt-4 sm:p-7 sm:pt-5 flex-1 flex flex-col">
                  {/* Tower Title (Bold 22px, #FFFFFF, Monumental Editorial Serif) */}
                  <h3 className="text-[22px] font-bold text-[#FFFFFF] font-editorial group-hover:text-[#D4AF37] transition-colors tracking-tight leading-snug">
                    <Link href={`/buildings/${building.slug}/`}>
                      {building.name}
                    </Link>
                  </h3>

                  {/* Architect & Developer: Delicate row with compass/ruler icon */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8] mt-2 font-medium truncate">
                    <span className="text-[#D4AF37]" title="Architect & Developer">📐</span>
                    <span className="truncate">
                      {building.architect} • {building.developer}
                    </span>
                  </div>

                  {/* Architectural Concept Snippet (max 3 lines, comfortable 160% line height, max-w-[60ch]) */}
                  <p className="text-sm text-[#94A3B8] mt-3 line-clamp-3 leading-relaxed max-w-[60ch]">
                    {building.description}
                  </p>

                  {/* 3. ИНВЕСТИЦИОННЫЙ БАР: Две контрастные плашки ТТХ (Financial Dashboard Mini-Bar) */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {/* Left Mini-Bar: Net Yield */}
                    <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-[rgba(212,175,55,0.22)] flex flex-col justify-center">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF37]/80 block">
                        NET YIELD
                      </span>
                      <span className="text-2xl font-extrabold text-[#D4AF37] font-mono tabular-nums mt-0.5 leading-none">
                        {building.investmentYield}
                      </span>
                    </div>

                    {/* Right Mini-Bar: Starting Price */}
                    <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-[rgba(255,255,255,0.08)] flex flex-col justify-center">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#94A3B8] block">
                        STARTING PRICE
                      </span>
                      <span className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] font-mono tabular-nums mt-0.5 leading-none truncate" title={building.startingPriceAed}>
                        {building.startingPriceAed.replace(" AED", "")} <span className="text-xs font-normal text-[#94A3B8]">AED</span>
                      </span>
                    </div>
                  </div>

                  {/* 4. Инженерные параметры: Floors & Height через элегантные разделители */}
                  <div className="mt-4 pt-3.5 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                    <span>{building.heightMeters} m</span>
                    <span className="text-[rgba(255,255,255,0.18)]">|</span>
                    <span>{building.floors} Floors</span>
                    <span className="text-[rgba(255,255,255,0.18)]">|</span>
                    <span>{building.yearBuilt} Handover</span>
                  </div>

                  {/* 5. Унификация высоты: CTA кнопки прижаты к самому низу через margin-top: auto */}
                  <div className="mt-auto pt-5 grid grid-cols-2 gap-2.5">
                    <Link
                      href={`/buildings/${building.slug}/`}
                      className="flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#FDE68A] hover:to-[#D4AF37] text-[#0B0F17] text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-md shadow-[#D4AF37]/20 group/btn text-center"
                    >
                      <span className="truncate">Profile</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                    <Link
                      href={`/districts/${building.districtSlug}/`}
                      className="flex items-center justify-center gap-1 py-3 px-3.5 rounded-xl bg-[#0B0F17] hover:bg-[#1A2433] text-[#F8FAFC] border border-[rgba(255,255,255,0.1)] hover:border-[#D4AF37]/40 text-xs sm:text-sm font-medium transition-all group/btn text-center"
                    >
                      <span className="truncate">{building.district}</span>
                      <span className="group-hover/btn:translate-x-0.5 transition-transform text-[#D4AF37]">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
