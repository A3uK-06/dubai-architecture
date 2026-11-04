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
    <section id="catalog" className="py-16 md:py-24 border-b border-[#E2E8F0] bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#F1F5F9] text-[#0F172A] border border-[#CBD5E1] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
              <span>{t.nav.catalog} • {BUILDINGS.length} {t.catalog.buildings}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight font-heading">
              {t.catalog.title}
            </h2>
          </div>
          <p className="text-[#475569] text-base sm:text-lg max-w-lg leading-relaxed">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-float-card mb-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Search Input - Architectural Visual Anchor */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#64748B] uppercase tracking-wider mb-2">
                {t.filters.search}
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#64748B]">
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
                  className="w-full h-[52px] pl-11 pr-11 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] text-[#0F172A] text-sm sm:text-base placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                  <kbd className="hidden sm:inline-flex items-center justify-center w-6 h-6 text-xs font-mono font-bold text-[#64748B] bg-white border border-[#CBD5E1] rounded shadow-xs">
                    /
                  </kbd>
                </div>
              </div>
            </div>

            {/* District Filter with Density Count Hints */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#64748B] uppercase tracking-wider mb-2">
                {t.filters.allDistricts}
              </label>
              <div className="relative">
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full h-[52px] px-4 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] text-[#0F172A] text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all cursor-pointer appearance-none pr-10"
                >
                  <option value="all">
                    {t.filters.allDistricts} ({BUILDINGS.length})
                  </option>
                  {localizedDistricts.map((d) => (
                    <option key={d.slug} value={d.slug}>
                      {d.name} ({districtCounts[d.slug] || 0})
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#64748B]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Height Category */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#64748B] uppercase tracking-wider mb-2">
                {t.filters.allHeights}
              </label>
              <div className="relative">
                <select
                  value={selectedHeight}
                  onChange={(e) => setSelectedHeight(e.target.value)}
                  className="w-full h-[52px] px-4 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] text-[#0F172A] text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all cursor-pointer appearance-none pr-10"
                >
                  <option value="all">{t.filters.allHeights}</option>
                  <option value="megatall">&gt; 600m (Megatall)</option>
                  <option value="supertall">300m - 600m (Supertall)</option>
                  <option value="highrise">&lt; 300m (Highrise)</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#64748B]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Sort Order */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#64748B] uppercase tracking-wider mb-2">
                {t.filters.sortBy}
              </label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full h-[52px] px-4 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] text-[#0F172A] text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:bg-white transition-all cursor-pointer appearance-none pr-10"
                >
                  <option value="height">{t.filters.heightDesc}</option>
                  <option value="year">{t.filters.yearDesc}</option>
                  <option value="rating">{t.filters.popularity}</option>
                  <option value="yield">ROI (High to Low)</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#64748B]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Horizontal Chip-Filters */}
          <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[#E2E8F0]">
            {Object.entries(typeMap).map(([typeKey, typeLabel]) => {
              const isActive = selectedType === typeKey;
              return (
                <button
                  key={typeKey}
                  type="button"
                  onClick={() => setSelectedType(typeKey)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-[#0F172A] text-white shadow-sm ring-1 ring-[#0F172A]"
                      : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A] border border-[#E2E8F0]"
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
                className="ml-auto text-xs sm:text-sm font-bold text-[#0F172A] hover:text-[#8C6A48] underline underline-offset-4 transition-colors"
              >
                {t.catalog.resetFilters}
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6 text-xs sm:text-sm text-[#64748B]">
          <span>
            {t.catalog.showing} <strong className="text-[#0F172A] font-bold font-mono text-sm sm:text-base">{filteredBuildings.length}</strong> {t.catalog.buildings}
          </span>
          {selectedDistrict !== "all" && (
            <span>
              {t.catalog.filteredBy}{" "}
              <strong className="text-[#0F172A] font-semibold">
                {localizedDistricts.find((d) => d.slug === selectedDistrict)?.name}
              </strong>
            </span>
          )}
        </div>

        {/* Buildings Grid with Chunking, Depth, and CTA Bottom Alignment */}
        {filteredBuildings.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white border border-[#E2E8F0] shadow-float-card">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#F1F5F9] flex items-center justify-center text-3xl">
              🏙️
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] font-heading">{t.catalog.noMatch}</h3>
            <p className="text-sm sm:text-base text-[#475569] mt-2 max-w-sm mx-auto leading-relaxed">
              {t.catalog.clearSearch}
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-6 px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              {t.catalog.resetAllFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredBuildings.map((building) => (
              <div
                key={building.id}
                className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden hover:border-[#0F172A]/40 transition-all duration-300 shadow-float-card hover:shadow-float-card-hover flex flex-col h-full group"
              >
                {/* 1. МЕДИА/ХЕДЕР с парящими бейджами и Overlapping-эффектом */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#F1F5F9]">
                  <Image
                    src={building.image}
                    alt={building.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/20 to-transparent" />

                  {/* Top Floating Badges: Height & Status */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-start z-10">
                    <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold font-mono bg-[#0F172A]/85 text-white border border-white/20 backdrop-blur-md shadow-sm">
                      {building.heightMeters} m • {building.floors} {t.buildingCard.floors}
                    </span>
                    {building.status === "Under Construction" ? (
                      <span className="px-3 py-1 rounded-full bg-[#9E4732] text-white text-xs sm:text-sm font-bold backdrop-blur-sm shadow-xs">
                        {t.catalog.underConstruction}
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-white/95 text-[#0F172A] text-xs sm:text-sm font-bold backdrop-blur-md shadow-xs">
                        {typeMap[building.type] || building.type}
                      </span>
                    )}
                  </div>

                  {/* Floating District Badge */}
                  <div className="absolute bottom-4 left-3.5 z-10">
                    <Link
                      href={`/districts/${building.districtSlug}/`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0F172A]/85 hover:bg-[#8C6A48] text-white border border-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wide transition-colors truncate drop-shadow-md"
                    >
                      <span>📍</span>
                      <span className="truncate">{building.district}</span>
                      <span className="text-xs">↗</span>
                    </Link>
                  </div>

                  {/* Overlapping Badge: Net Yield overlapping bottom border of photo */}
                  <div className="absolute -bottom-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#0F172A] text-white text-xs sm:text-sm font-bold font-mono border-2 border-white shadow-md">
                      <span>ROI</span>
                      <span className="text-[#34D399] font-extrabold">{building.investmentYield}</span>
                    </span>
                  </div>
                </div>

                {/* 2. АРХИТЕКТУРНЫЙ БЛОК + ИНВЕСТИЦИОННЫЙ БАР + CTA */}
                <div className="p-6 pt-5 sm:p-7 sm:pt-6 flex-1 flex flex-col">
                  {/* Tower Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading group-hover:text-[#8C6A48] transition-colors tracking-tight leading-snug">
                    <Link href={`/buildings/${building.slug}/`}>
                      {building.name}
                    </Link>
                  </h3>

                  {/* Architectural Concept Snippet (Regular 15-16px, max 3 lines, max-w-[65ch]) */}
                  <p className="text-sm sm:text-base text-[#475569] mt-3 line-clamp-3 leading-relaxed max-w-[65ch]">
                    {building.description}
                  </p>

                  {/* Architectural Metadata: Architect & Developer (Compact row) */}
                  <div className="mt-4 pt-3.5 border-t border-[#F1F5F9] grid grid-cols-2 gap-3">
                    <div className="truncate">
                      <span className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                        {t.buildingCard.architect}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#0F172A] truncate block mt-0.5" title={building.architect}>
                        {building.architect}
                      </span>
                    </div>
                    <div className="truncate">
                      <span className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                        {t.buildingCard.developer}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#0F172A] truncate block mt-0.5" title={building.developer}>
                        {building.developer}
                      </span>
                    </div>
                  </div>

                  {/* 3. ИНВЕСТИЦИОННЫЙ БАР (Data Grid: Key Metrics without "Label: Value") */}
                  <div className="mt-4 p-3.5 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-lg sm:text-xl font-extrabold text-[#059669] font-mono leading-none">
                        {building.investmentYield}
                      </div>
                      <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mt-1.5">
                        Net Yield
                      </div>
                    </div>
                    <div className="border-x border-[#E2E8F0] px-1">
                      <div className="text-base sm:text-lg font-bold text-[#0F172A] font-mono leading-none truncate" title={building.startingPriceAed}>
                        {building.startingPriceAed.replace(" AED", "")}
                      </div>
                      <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mt-1.5">
                        Старт (AED)
                      </div>
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-[#0F172A] font-mono leading-none">
                        {building.yearBuilt}
                      </div>
                      <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mt-1.5">
                        Год
                      </div>
                    </div>
                  </div>

                  {/* 4. Выравнивание CTA по нижнему краю (margin-top: auto) */}
                  <div className="mt-auto pt-5 grid grid-cols-2 gap-2.5">
                    <Link
                      href={`/buildings/${building.slug}/`}
                      className="flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold transition-all shadow-sm group/btn text-center"
                    >
                      <span className="truncate">{t.buildingCard.viewDetails || "Паспорт ТТХ"}</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                    <Link
                      href={`/districts/${building.districtSlug}/`}
                      className="flex items-center justify-center gap-1 py-3 px-3.5 rounded-xl bg-[#F8F9FA] hover:bg-[#F1F5F9] text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] text-xs sm:text-sm font-semibold transition-all group/btn text-center"
                    >
                      <span className="truncate">{t.buildingCard.exploreDistrict || "О районе"}</span>
                      <span className="group-hover/btn:translate-x-0.5 transition-transform">&rarr;</span>
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