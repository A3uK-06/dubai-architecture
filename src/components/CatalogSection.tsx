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
    <section id="catalog" className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{t.nav.catalog} • {BUILDINGS.length} {t.catalog.masterpieces}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight leading-tight">
              {t.catalog.title}
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Filter Controls Bar (4px spacing scale, WCAG AA contrast) */}
        <div className="p-4 sm:p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-soft-tint backdrop-blur-md mb-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.filters.search}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-zinc-400 hover:text-zinc-200 text-xs rounded-full hover:bg-zinc-800 transition-colors"
                >
                  ✕
                </button>
              )}
            </div>

            {/* District Selector */}
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              aria-label="Filter by District"
              className="px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
            >
              <option value="all">{t.filters.allDistricts}</option>
              {localizedDistricts.map((d) => (
                <option key={d.id} value={d.slug}>
                  {d.name}
                </option>
              ))}
            </select>

            {/* Height Selector */}
            <select
              value={selectedHeight}
              onChange={(e) => setSelectedHeight(e.target.value)}
              aria-label="Filter by Height"
              className="px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
            >
              <option value="all">{t.catalog.heightOptions.all}</option>
              <option value="megatall">{t.catalog.heightOptions.megatall}</option>
              <option value="supertall">{t.catalog.heightOptions.supertall}</option>
              <option value="highrise">{t.catalog.heightOptions.highrise}</option>
            </select>

            {/* Sort Order */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              aria-label="Sort order"
              className="px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
            >
              <option value="height">{t.catalog.sortOptions.height}</option>
              <option value="year">{t.catalog.sortOptions.year}</option>
              <option value="rating">{t.catalog.sortOptions.popularity}</option>
              <option value="yield">{t.catalog.sortOptions.yield}</option>
            </select>
          </div>

          {/* Quick Pills for Building Types */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-zinc-800/80 text-xs">
            <span className="text-zinc-400 font-medium mr-1">{t.catalog.type}:</span>
            {["all", "Residential", "Commercial", "Hotel", "Mixed-Use", "Cultural"].map((typeKey) => {
              const isActive = selectedType === typeKey;
              return (
                <button
                  key={typeKey}
                  type="button"
                  onClick={() => setSelectedType(typeKey)}
                  className={`px-3.5 py-1.5 rounded-lg transition-all font-medium ${
                    isActive
                      ? "bg-amber-400 text-zinc-950 font-bold shadow-sm shadow-amber-400/20"
                      : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                  }`}
                >
                  {typeMap[typeKey] || typeKey}
                </button>
              );
            })}

            {(search || selectedDistrict !== "all" || selectedHeight !== "all" || selectedType !== "all") && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="ml-auto text-amber-400 hover:text-amber-300 text-xs font-semibold underline underline-offset-4 transition-colors"
              >
                {t.catalog.resetFilters}
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6 text-xs text-zinc-400">
          <span>
            {t.catalog.showing} <strong className="text-amber-300 font-bold font-mono">{filteredBuildings.length}</strong> {t.catalog.buildings}
          </span>
          {selectedDistrict !== "all" && (
            <span className="text-zinc-400">
              {t.catalog.filteredBy}{" "}
              <strong className="text-zinc-200">
                {localizedDistricts.find((d) => d.slug === selectedDistrict)?.name}
              </strong>
            </span>
          )}
        </div>

        {/* Buildings Grid */}
        {filteredBuildings.length === 0 ? (
          /* Empty State - Playbook Section 7 standard with actionable recovery */
          <div className="p-12 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800 shadow-soft-tint">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-zinc-800/80 flex items-center justify-center text-3xl">
              🏙️
            </div>
            <h3 className="text-lg font-bold text-zinc-100">{t.catalog.noMatch}</h3>
            <p className="text-sm text-zinc-400 mt-2 max-w-sm mx-auto leading-relaxed">
              {t.catalog.clearSearch}
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-6 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-bold uppercase tracking-wider shadow-md shadow-amber-400/20 active:scale-95 transition-all"
            >
              {t.catalog.resetAllFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBuildings.map((building) => (
              <div
                key={building.id}
                className="rounded-2xl border border-zinc-800/90 bg-zinc-900/60 overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:shadow-medium-tint flex flex-col h-full group"
              >
                {/* Real Photography Image Header */}
                <div className="relative h-60 w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
                  <Image
                    src={building.image}
                    alt={building.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/45 to-transparent" />

                  {/* Top Badges (High Contrast WCAG AA) */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-zinc-950/90 text-amber-300 border border-amber-400/40 backdrop-blur-md shadow-sm">
                      {building.heightMeters} m • {building.floors} {t.buildingCard.floors}
                    </span>
                    <span className="text-xs text-zinc-300 font-mono px-2.5 py-1 rounded-full bg-zinc-950/90 border border-zinc-800 backdrop-blur-md shadow-sm">
                      {building.yearBuilt}
                    </span>
                  </div>

                  {/* District & Status Badges over photo */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between gap-2">
                    <Link
                      href={`/districts/${building.districtSlug}/`}
                      className="text-xs text-amber-300 font-bold tracking-wider uppercase hover:underline drop-shadow-md truncate"
                    >
                      {building.district}
                    </Link>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="px-2 py-0.5 rounded-md bg-zinc-900/90 text-[11px] font-medium text-zinc-200 border border-zinc-700/60 backdrop-blur-sm">
                        {typeMap[building.type] || building.type}
                      </span>
                      {building.status === "Under Construction" && (
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/25 text-amber-200 text-[11px] font-semibold border border-amber-500/40 backdrop-blur-sm">
                          {t.catalog.underConstruction}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Content & Architectural Spec Hierarchy (Playbook elimination of 'Label: Value' anti-pattern) */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Tower Name */}
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-amber-300 transition-colors tracking-tight">
                      <Link href={`/buildings/${building.slug}/`}>
                        {building.name}
                      </Link>
                    </h3>

                    {/* Description Snippet */}
                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {building.description}
                    </p>

                    {/* Architectural Specifications - structured tags with iconography */}
                    <div className="mt-4 pt-3 border-t border-zinc-800/70 grid grid-cols-2 gap-2 text-xs">
                      {/* Architect */}
                      <div className="p-2 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                        <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                          {t.buildingCard.architect}
                        </div>
                        <div className="text-zinc-200 font-semibold truncate mt-0.5" title={building.architectFirm}>
                          {building.architect}
                        </div>
                      </div>

                      {/* Developer */}
                      <div className="p-2 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                        <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                          {t.buildingCard.developer}
                        </div>
                        <div className="text-zinc-200 font-semibold truncate mt-0.5">
                          {building.developer}
                        </div>
                      </div>
                    </div>

                    {/* Investment Yield Badge (Prominent Key Metric) */}
                    {building.investmentYield !== "N/A" && (
                      <div className="mt-2.5 px-3 py-1.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between text-xs">
                        <span className="text-emerald-300 font-medium flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {t.catalog.estRentalYield}
                        </span>
                        <span className="text-emerald-400 font-bold font-mono text-sm">
                          {building.investmentYield}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Actions: Primary & Secondary with strict 'mt-auto' bottom pinning */}
                  <div className="mt-auto pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                    {/* Primary Button */}
                    <Link
                      href={`/buildings/${building.slug}/`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-sm shadow-amber-400/20 active:scale-98 group/btn"
                    >
                      <span>{t.buildingCard.viewDetails}</span>
                      <span className="ml-1.5 group-hover/btn:translate-x-0.5 transition-transform">&rarr;</span>
                    </Link>

                    {/* Secondary Button */}
                    <Link
                      href={`/buildings/${building.slug}/#inquire`}
                      className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold transition-colors border border-zinc-700/60"
                    >
                      {t.buildingCard.inquireUnits}
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
