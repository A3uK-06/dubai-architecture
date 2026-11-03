import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BUILDINGS, Building } from "@/data/buildings";
import SchemaOrg from "@/components/SchemaOrg";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BUILDINGS.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const building = BUILDINGS.find((b) => b.slug === slug);

  if (!building) {
    return {
      title: "Building Not Found",
    };
  }

  const title = `${building.name} (${building.heightMeters}m) — Architectural Profile & Investment`;
  const description = `Complete structural architecture profile, engineering specifications, developer info, and luxury investment allocations for ${building.name} in ${building.district}, Dubai.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://dubai-architecture.info/buildings/${building.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://dubai-architecture.info/buildings/${building.slug}/`,
      siteName: "Dubai Architecture",
      type: "article",
    },
  };
}

export default async function BuildingPage({ params }: PageProps) {
  const { slug } = await params;
  const building = BUILDINGS.find((b) => b.slug === slug);

  if (!building) {
    notFound();
  }

  const relatedBuildings = BUILDINGS.filter(
    (b) => b.districtSlug === building.districtSlug && b.id !== building.id
  ).slice(0, 3);

  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      <SchemaOrg type="building" building={building} />

      {/* Hero Header */}
      <div className="relative border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 via-zinc-950 to-zinc-950 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-6 font-medium">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <span>/</span>
            <Link href="/#catalog" className="hover:text-amber-400">Skyscrapers</Link>
            <span>/</span>
            <Link href={`/districts/${building.districtSlug}/`} className="hover:text-amber-400">{building.district}</Link>
            <span>/</span>
            <span className="text-zinc-300">{building.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  {building.heightMeters} m ({building.heightFeet} ft)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-800 text-zinc-300">
                  {building.floors} Storeys
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-800 text-zinc-300">
                  Built {building.yearBuilt}
                </span>
                {building.legacyId && (
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-zinc-900 border border-zinc-700 text-amber-400">
                    Archive ID: {building.legacyId}
                  </span>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                {building.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                <div>
                  <span className="text-zinc-500">Architect: </span>
                  <span className="text-zinc-200 font-semibold">{building.architect}</span> ({building.architectFirm})
                </div>
                <div>•</div>
                <div>
                  <span className="text-zinc-500">Developer: </span>
                  <span className="text-zinc-200 font-semibold">{building.developer}</span>
                </div>
                <div>•</div>
                <div>
                  <span className="text-zinc-500">District: </span>
                  <Link href={`/districts/${building.districtSlug}/`} className="text-amber-400 hover:underline">
                    {building.district}
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Investment Pill */}
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-amber-500/30 flex items-center gap-6">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400">
                  Estimated Rental Yield
                </div>
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                  {building.investmentYield}
                </div>
              </div>
              <div className="border-l border-zinc-800 pl-6">
                <div className="text-[11px] uppercase tracking-wider text-zinc-400">
                  Units From
                </div>
                <div className="text-lg font-bold text-amber-400 font-mono">
                  {building.startingPriceAed}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left 2 Columns: Architectural Specs & History */}
          <div className="lg:col-span-2 space-y-12">
            {/* Architectural Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-zinc-800 pb-3">
                Architectural History & Design Concept
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed">
                {building.description}
              </p>
              {building.historicalNote && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm">
                  <strong>Historical Archive Note: </strong>
                  {building.historicalNote}
                </div>
              )}
            </section>

            {/* Engineering Highlights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-zinc-800 pb-3">
                Key Structural & Engineering Milestones
              </h2>
              <ul className="space-y-3">
                {building.architecturalHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Structural Specification Matrix */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-zinc-800 pb-3">
                Technical Specifications (TTX)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs text-zinc-500">Official Height</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {building.heightMeters} m / {building.heightFeet} ft
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs text-zinc-500">Total Floors</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {building.floors} Above-Ground Levels
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs text-zinc-500">Year Completed</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {building.yearBuilt}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-xs text-zinc-500">Function / Building Type</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {building.type}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 sm:col-span-2">
                  <div className="text-xs text-zinc-500">Structural System</div>
                  <div className="text-base font-semibold text-zinc-200 mt-0.5">
                    {building.structuralSystem || "Reinforced concrete structural core with high-performance perimeter columns"}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Lead Capture & Investment Widget */}
          <div className="space-y-6">
            <div id="inquire" className="sticky top-24 p-6 rounded-3xl border border-amber-500/40 bg-zinc-900/90 shadow-2xl backdrop-blur-xl space-y-6">
              <div className="space-y-1">
                <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-zinc-950">
                  Verified Allocation
                </div>
                <h3 className="text-xl font-bold text-white">
                  Invest in {building.name}
                </h3>
                <p className="text-xs text-zinc-400">
                  Request current resale pricing, floor plans, and developer resale allocations.
                </p>
              </div>

              <div className="space-y-3 py-2 border-y border-zinc-800 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Entry Price (AED):</span>
                  <span className="font-mono font-bold text-zinc-200">{building.startingPriceAed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Entry Price (USD):</span>
                  <span className="font-mono font-bold text-zinc-200">{building.startingPriceUsd}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Projected Net Yield:</span>
                  <span className="font-mono font-bold text-emerald-400">{building.investmentYield}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">UAE Golden Visa:</span>
                  <span className="font-semibold text-amber-400">✓ Eligible (2M+ AED)</span>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <a
                href={`https://wa.me/971500000000?text=${encodeURIComponent(
                  `Hello, I am inquiring through Dubai-Architecture.info regarding available luxury units in ${building.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all"
              >
                <span>💬</span>
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                href="#inquire"
                className="w-full block text-center px-4 py-2.5 rounded-xl border border-zinc-700 hover:bg-zinc-800 text-xs text-zinc-300 font-medium transition-colors"
              >
                Request Official PDF Floorplans
              </a>

              <div className="text-[11px] text-zinc-500 text-center leading-tight">
                🔒 Direct consultation via licensed RERA real estate brokers in Dubai. 0% buyer commission.
              </div>
            </div>
          </div>
        </div>

        {/* Related District Towers */}
        {relatedBuildings.length > 0 && (
          <div className="mt-20 pt-12 border-t border-zinc-800">
            <h2 className="text-xl font-bold text-white mb-6">
              More Architectural Icons in {building.district}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBuildings.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/buildings/${rel.slug}/`}
                  className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/40 transition-all group"
                >
                  <div className="text-xs text-amber-400 font-mono mb-1">
                    {rel.heightMeters}m • {rel.floors} Floors
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                    {rel.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
