"use client";

import React, { useState, useMemo } from "react";
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
    <section id="catalog" className="py-16 md:py-24 border-b border-[#E5DFD3] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#EFECE4] text-[#8C6A48] border border-[#DDD7CA] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6A48]" />
              <span>{t.nav.catalog} • {BUILDINGS.length} {t.catalog.buildings}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight leading-tight">
              {t.catalog.title}
            </h2>
          </div>
          <p className="text-[#57534E] text-sm max-w-md leading-relaxed">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-6 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint mb-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div>
              <label className="block text-xs font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                {t.filters.search}
              </label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.filters.search}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-[#1C1917] text-xs focus:outline-none focus:ring-2 focus:ring-[#8C6A48] transition-all"
              />
            </div>

            {/* District Filter */}
            <div>
              <label className="block text-xs font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                {t.filters.allDistricts}
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-[#1C1917] text-xs focus:outline-none focus:ring-2 focus:ring-[#8C6A48] transition-all"
              >
                <option value="all">{t.filters.allDistricts}</option>
                {localizedDistricts.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Height Category */}
            <div>
              <label className="block text-xs font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                {t.filters.allHeights}
              </label>
              <select
                value={selectedHeight}
                onChange={(e) => setSelectedHeight(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-[#1C1917] text-xs focus:outline-none focus:ring-2 focus:ring-[#8C6A48] transition-all"
              >
                <option value="all">{t.filters.allHeights}</option>
                <option value="megatall">&gt; 600m (Megatall)</option>
                <option value="supertall">300m - 600m (Supertall)</option>
                <option value="highrise">&lt; 300m (Highrise)</option>
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label className="block text-xs font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                {t.filters.sortBy}
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3] text-[#1C1917] text-xs focus:outline-none focus:ring-2 focus:ring-[#8C6A48] transition-all"
              >
                <option value="height">{t.filters.heightDesc}</option>
                <option value="year">{t.filters.yearDesc}</option>
                <option value="rating">{t.filters.popularity}</option>
                <option value="yield">ROI (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Quick Filter Pill Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#EFECE4]">
            {Object.entries(typeMap).map(([typeKey, typeLabel]) => {
              const isActive = selectedType === typeKey;
              return (
                <button
                  key={typeKey}
                  type="button"
                  onClick={() => setSelectedType(typeKey)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-[#8C6A48] text-white shadow-soft-tint"
                      : "bg-[#FAF8F5] text-[#57534E] hover:bg-[#EFECE4] border border-[#E5DFD3]"
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
                className="ml-auto text-[#8C6A48] hover:text-[#6D5135] text-xs font-bold underline underline-offset-4 transition-colors"
              >
                {t.catalog.resetFilters}
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6 text-xs text-[#78716C]">
          <span>
            {t.catalog.showing} <strong className="text-[#1C1917] font-bold font-mono">{filteredBuildings.length}</strong> {t.catalog.buildings}
          </span>
          {selectedDistrict !== "all" && (
            <span>
              {t.catalog.filteredBy}{" "}
              <strong className="text-[#8C6A48]">
                {localizedDistricts.find((d) => d.slug === selectedDistrict)?.name}
              </strong>
            </span>
          )}
        </div>

        {/* Buildings Grid */}
        {filteredBuildings.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white border border-[#E5DFD3] shadow-soft-tint">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#EFECE4] flex items-center justify-center text-3xl">
              🏙️
            </div>
            <h3 className="text-lg font-bold text-[#1C1917]">{t.catalog.noMatch}</h3>
            <p className="text-sm text-[#57534E] mt-2 max-w-sm mx-auto leading-relaxed">
              {t.catalog.clearSearch}
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-6 px-5 py-2.5 rounded-xl bg-[#8C6A48] hover:bg-[#6D5135] text-white text-xs font-bold uppercase tracking-wider shadow-soft-tint transition-all"
            >
              {t.catalog.resetAllFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBuildings.map((building) => (
              <div
                key={building.id}
                className="rounded-2xl border border-[#E5DFD3] bg-white overflow-hidden hover:border-[#8C6A48] transition-all duration-300 shadow-soft-tint hover:shadow-strong-tint flex flex-col h-full group luxury-card-sheen"
              >
                {/* Image Header with Cinematic Luxury Vignette */}
                <div className="relative h-64 w-full overflow-hidden bg-[#EFECE4] border-b border-[#E5DFD3]">
                  <Image
                    src={building.image}
                    alt={building.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-black/80 text-white border border-white/25 backdrop-blur-md shadow-sm">
                      {building.heightMeters} m • {building.floors} {t.buildingCard.floors}
                    </span>
                    <span className="text-xs text-white font-mono font-bold px-2.5 py-1 rounded-full bg-black/80 border border-white/25 backdrop-blur-md shadow-sm">
                      {building.yearBuilt}
                    </span>
                  </div>

                  {/* District & Status Badges on Image */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-2">
                    <Link
                      href={`/districts/${building.districtSlug}/`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 hover:bg-[#8C6A48] text-white border border-white/20 backdrop-blur-md text-xs font-extrabold tracking-wider uppercase transition-colors truncate drop-shadow-md"
                    >
                      <span>📍</span>
                      <span className="truncate">{building.district}</span>
                      <span className="text-[10px]">↗</span>
                    </Link>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="px-2.5 py-1 rounded-full bg-white/95 text-[11px] font-extrabold text-[#1C1917] backdrop-blur-md shadow-sm">
                        {typeMap[building.type] || building.type}
                      </span>
                      {building.status === "Under Construction" && (
                        <span className="px-2 py-0.5 rounded-full bg-[#9E4732] text-white text-[10px] font-bold backdrop-blur-sm shadow-xs">
                          {t.catalog.underConstruction}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Explicit Clickable District Link in Card Body */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs">📍</span>
                      <span className="text-[11px] font-bold text-[#78716C] uppercase tracking-wider">
                        {t.buildingCard.districtLocationLabel || "Район:"}
                      </span>
                      <Link
                        href={`/districts/${building.districtSlug}/`}
                        className="text-xs font-extrabold text-[#8C6A48] hover:text-[#6D5135] underline underline-offset-2 transition-colors"
                      >
                        {building.district} ↗
                      </Link>
                    </div>

                    {/* Tower Name */}
                    <h3 className="text-xl font-extrabold text-[#1C1917] font-heading group-hover:text-[#8C6A48] transition-colors tracking-tight">
                      <Link href={`/buildings/${building.slug}/`}>
                        {building.name}
                      </Link>
                    </h3>

                    {/* Description Snippet */}
                    <p className="text-xs text-[#57534E] mt-2 line-clamp-2 leading-relaxed">
                      {building.description}
                    </p>

                    {/* Prominent District Deep-Dive Bridge Link */}
                    <Link
                      href={`/districts/${building.districtSlug}/`}
                      className="group/dst mt-3 p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#EFECE4] border border-[#E5DFD3] hover:border-[#8C6A48]/40 transition-all flex items-center justify-between text-xs text-[#57534E]"
                    >
                      <span className="truncate">
                        {t.buildingCard.districtLocationLabel || "Район:"} <strong className="text-[#1C1917]">{building.district}</strong> — {t.buildingCard.exploreDistrictInfrastructure || "инфраструктура и инвестиции"}
                      </span>
                      <span className="text-[#8C6A48] group-hover/dst:translate-x-1 transition-transform font-bold ml-1.5 shrink-0">→</span>
                    </Link>

                    {/* Architectural Specifications Grid */}
                    <div className="mt-3.5 pt-3 border-t border-[#EFECE4] grid grid-cols-2 gap-2 text-xs">
                      {/* Architect */}
                      <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3]">
                        <div className="text-[10px] uppercase tracking-wider text-[#78716C] font-semibold">
                          {t.buildingCard.architect}
                        </div>
                        <div className="font-bold text-[#1C1917] truncate mt-0.5">
                          {building.architect}
                        </div>
                      </div>

                      {/* Developer */}
                      <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3]">
                        <div className="text-[10px] uppercase tracking-wider text-[#78716C] font-semibold">
                          {t.buildingCard.developer}
                        </div>
                        <div className="font-bold text-[#1C1917] truncate mt-0.5">
                          {building.developer}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Financial & Yield Metric Bar */}
                  <div className="pt-3 border-t border-[#EFECE4] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#78716C] font-bold">
                        Net Yield
                      </div>
                      <div className="text-sm font-extrabold text-[#2D6A4F] font-mono mt-0.5">
                        {building.investmentYield}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-[#78716C] font-bold">
                        Цены от
                      </div>
                      <div className="text-sm font-bold text-[#8C6A48] font-mono mt-0.5">
                        {building.startingPriceAed}
                      </div>
                    </div>
                  </div>

                  {/* Dual CTA Actions: Tower Passport + District Guide */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Link
                      href={`/buildings/${building.slug}/`}
                      className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-[#8C6A48] hover:bg-[#6D5135] text-white text-xs font-bold transition-all shadow-soft-tint group/btn"
                    >
                      <span>{t.buildingCard.viewDetails || "Паспорт ТТХ"}</span>
                      <span className="group-hover/btn:translate-x-0.5 transition-transform">&rarr;</span>
                    </Link>
                    <Link
                      href={`/districts/${building.districtSlug}/`}
                      className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-[#FAF8F5] hover:bg-[#EFECE4] text-[#8C6A48] hover:text-[#6D5135] border border-[#E5DFD3] hover:border-[#8C6A48]/50 text-xs font-bold transition-all group/btn"
                    >
                      <span>{t.buildingCard.exploreDistrict || "О районе"}</span>
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
