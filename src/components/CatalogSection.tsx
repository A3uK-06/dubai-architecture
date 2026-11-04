"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BUILDINGS, Building } from "@/data/buildings";
import { DISTRICTS } from "@/data/districts";
import { useLang } from "@/context/LangContext";
import { getLocalizedBuilding, getLocalizedDistrict } from "@/data/localizedContent";

export default function CatalogSection() {
  const { t, lang, isRtl } = useLang();

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

      // Type (check both original and localized if needed, or by original slug/english key)
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

  return (
    <section id="catalog" className="py-16 md:py-24 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/30 mb-2">
              {t.nav.catalog} • {BUILDINGS.length} {t.catalog.masterpieces}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.catalog.title}
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-xl backdrop-blur-md mb-10 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.filters.search}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 text-xs"
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
              className="px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-zinc-200 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400"
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
              className="px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-zinc-200 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400"
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
              className="px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-zinc-200 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400"
            >
              <option value="height">{t.catalog.sortOptions.height}</option>
              <option value="year">{t.catalog.sortOptions.year}</option>
              <option value="rating">{t.catalog.sortOptions.popularity}</option>
              <option value="yield">{t.catalog.sortOptions.yield}</option>
            </select>
          </div>

          {/* Quick Pills for Building Types */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/80 text-xs">
            <span className="text-zinc-500 font-medium">{t.catalog.type}:</span>
            {["all", "Residential", "Commercial", "Hotel", "Mixed-Use", "Cultural"].map((typeKey) => (
              <button
                key={typeKey}
                onClick={() => setSelectedType(typeKey)}
                className={`px-3 py-1 rounded-lg transition-all ${
                  selectedType === typeKey
                    ? "bg-amber-400 text-zinc-950 font-bold"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {typeMap[typeKey] || typeKey}
              </button>
            ))}

            {(search || selectedDistrict !== "all" || selectedHeight !== "all" || selectedType !== "all") && (
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedDistrict("all");
                  setSelectedHeight("all");
                  setSelectedType("all");
                }}
                className="ml-auto text-amber-400 hover:underline text-xs"
              >
                {t.catalog.resetFilters}
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6 text-xs text-zinc-400">
          <span>
            {t.catalog.showing} <strong className="text-amber-400">{filteredBuildings.length}</strong> {t.catalog.buildings}
          </span>
          {selectedDistrict !== "all" && (
            <span className="text-zinc-500">
              {t.catalog.filteredBy} {localizedDistricts.find((d) => d.slug === selectedDistrict)?.name}
            </span>
          )}
        </div>

        {/* Buildings Grid */}
        {filteredBuildings.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <div className="text-4xl mb-3">🏙️</div>
            <h3 className="text-lg font-bold text-white">{t.catalog.noMatch}</h3>
            <p className="text-sm text-zinc-400 mt-1">{t.catalog.clearSearch}</p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedDistrict("all");
                setSelectedHeight("all");
                setSelectedType("all");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-amber-400 text-zinc-950 text-xs font-bold"
            >
              {t.catalog.resetAllFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBuildings.map((building) => (
              <div
                key={building.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/70 overflow-hidden hover:border-amber-500/40 transition-all hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col group"
              >
                {/* Visual Header / Badge */}
                <div className="p-6 bg-gradient-to-br from-zinc-800/90 via-zinc-900 to-zinc-950 relative border-b border-zinc-800">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30">
                      {building.heightMeters} m • {building.floors} {t.buildingCard.floors}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono px-2 py-0.5 rounded bg-zinc-950/60 border border-zinc-800">
                      {building.yearBuilt}
                    </span>
                  </div>

                  <Link href={`/districts/${building.districtSlug}/`} className="text-xs text-amber-400 font-semibold tracking-wider uppercase hover:underline">
                    {building.district}
                  </Link>

                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mt-1">
                    <Link href={`/buildings/${building.slug}/`}>
                      {building.name}
                    </Link>
                  </h3>

                  <div className="text-xs text-zinc-400 mt-1 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-[11px] text-zinc-300">
                      {typeMap[building.type] || building.type}
                    </span>
                    {building.status === "Under Construction" && (
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-semibold">
                        {t.catalog.underConstruction}
                      </span>
                    )}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="text-xs text-zinc-400 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500">{t.buildingCard.architect}:</span>
                      <span className="text-zinc-200 font-medium text-right truncate max-w-[200px]" title={building.architectFirm}>
                        {building.architect}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500">{t.buildingCard.developer}:</span>
                      <span className="text-zinc-200 font-medium text-right truncate max-w-[200px]">
                        {building.developer}
                      </span>
                    </div>
                    {building.investmentYield !== "N/A" && (
                      <div className="flex justify-between items-center pt-1 border-t border-zinc-800/60">
                        <span className="text-zinc-500">{t.catalog.estRentalYield}:</span>
                        <span className="text-emerald-400 font-bold font-mono">
                          {building.investmentYield}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Highlights snippet */}
                  <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                    {building.description}
                  </p>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
                    <Link
                      href={`/buildings/${building.slug}/`}
                      className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 group/link"
                    >
                      <span>{t.buildingCard.viewDetails}</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                    </Link>

                    <Link
                      href={`/buildings/${building.slug}/#inquire`}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors"
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
