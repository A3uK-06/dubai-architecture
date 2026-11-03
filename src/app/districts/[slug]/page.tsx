import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { DISTRICTS, District } from "@/data/districts";
import { BUILDINGS } from "@/data/buildings";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DISTRICTS.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const district = DISTRICTS.find((d) => d.slug === slug);

  if (!district) {
    return {
      title: "District Not Found",
    };
  }

  const title = `${district.name} — Architecture & Real Estate Guide, Dubai`;
  const description = `Explore ${district.name} architecture, landmark skyscraper towers, master plan overview, and rental yields (${district.averageRoi}).`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://dubai-architecture.info/districts/${district.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://dubai-architecture.info/districts/${district.slug}/`,
      siteName: "Dubai Architecture",
      type: "website",
    },
  };
}

export default async function DistrictPage({ params }: PageProps) {
  const { slug } = await params;
  const district = DISTRICTS.find((d) => d.slug === slug);

  if (!district) {
    notFound();
  }

  const districtBuildings = BUILDINGS.filter(
    (b) => b.districtSlug === district.slug
  );

  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100 pb-24">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-6 font-medium">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <span>/</span>
            <Link href="/#districts" className="hover:text-amber-400">Districts</Link>
            <span>/</span>
            <span className="text-zinc-300">{district.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Master-Developer: {district.developer}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  {district.iconicTowersCount}+ Towers
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                {district.name}
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
                {district.overview}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900 border border-amber-500/30 flex items-center gap-6 shrink-0">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400">
                  Average Rental Yield
                </div>
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                  {district.averageRoi}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Investment Advantages & Master Plan */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Urban Master Plan & Character
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {district.description}
            </p>
            <div className="pt-2">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Primary District Landmarks:
              </div>
              <div className="flex flex-wrap gap-2">
                {district.keyLandmarks.map((lm) => (
                  <span
                    key={lm}
                    className="px-2.5 py-1 rounded-lg bg-zinc-800 text-xs text-zinc-300 border border-zinc-700"
                  >
                    {lm}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-amber-500/20 space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Key Investment Drivers
            </h2>
            <ul className="space-y-3">
              {district.investmentPros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-zinc-800">
              <a
                href={`https://wa.me/971500000000?text=${encodeURIComponent(
                  `Hello, I am interested in real estate investment allocations in ${district.name}, Dubai.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-all"
              >
                <span>💬</span>
                <span>Consult District Broker on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Skyscraper Catalog within this district */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Featured Towers in {district.name}
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Detailed structural profiles of skyscrapers in this area.
              </p>
            </div>
            <span className="text-xs text-amber-400 font-mono">
              {districtBuildings.length} towers indexed
            </span>
          </div>

          {districtBuildings.length === 0 ? (
            <p className="text-zinc-500 text-sm italic">
              Additional towers in {district.name} are currently being digitized from the 2006 archives.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {districtBuildings.map((building) => (
                <Link
                  key={building.id}
                  href={`/buildings/${building.slug}/`}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 flex flex-col justify-between hover:border-amber-400/40 hover:bg-zinc-900/90 transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-400/10 text-amber-300">
                        {building.heightMeters} m
                      </span>
                      <span className="text-xs text-zinc-500">{building.yearBuilt}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {building.name}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-3">
                      {building.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
                    <span>Architectural Profile</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </article>
  );
}
