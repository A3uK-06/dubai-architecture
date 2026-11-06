import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "About Dubai Architecture Archive | Est. 2006 — Structural & Heritage Encyclopedia",
  description:
    "The history, editorial mission, and structural engineering methodology of Dubai-Architecture.info. Documenting UAE skyscrapers since 2006 with open cadastral validation.",
  alternates: {
    canonical: "https://dubai-architecture.info/about/",
  },
};

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-transparent text-[#0F172A] pb-24">
      <SchemaOrg
        type="about"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "About Dubai Architecture", url: "https://dubai-architecture.info/about/" },
        ]}
      />

      {/* Header Banner */}
      <div className="border-b border-[#E2E8F0] bg-[#F1F5F9]/60 pt-12 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex items-center gap-2 text-xs text-[#78716C] font-semibold">
            <Link href="/" className="hover:text-[#8C6A48] transition-colors">
              Home
            </Link>
            <span className="text-[#DDD7CA]">/</span>
            <span className="text-[#1C1917] font-bold">About Us</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
              Institutional Heritage
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
              EST. 2006 • Digital Architectural Almanac
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            About the Dubai Architecture Historical Archive
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
            Founded during the initial skyscraper boom of 2006, Dubai-Architecture.info is an independent architectural catalog and technical observatory tracking the vertical evolution, engineering breakthroughs, and cadastral reality of the United Arab Emirates.
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Story Section */}
        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Chapter 01 • Institutional Legacy
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              1. 18+ Years of Documenting High-Rise Engineering
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#44403C] leading-relaxed">
            <p>
              In 2006, when Sheikh Zayed Road was transforming from a desert highway into a global canyon of supertall towers and the foundations of Burj Khalifa (then Burj Dubai) were first penetrating the bedrock, <strong>Dubai Architecture (dubai-architecture.info)</strong> was established to systematically document this historic structural transformation.
            </p>
            <p>
              Over nearly two decades, the archive accumulated extensive architectural records, technical field photography, structural diagrams, and international forum citations. As Dubai transitioned from raw rapid expansion to mature institutional metropolis, the archive was modernized into an open-access digital encyclopedia combining <strong>deep structural engineering passports</strong> with <strong>empirical cadastral data</strong> from the Dubai Land Department (DLD).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA] space-y-1">
              <div className="text-[#8C6A48] font-bold text-base">2006</div>
              <div className="text-[#1C1917] font-semibold">Founding Year</div>
              <p className="text-[#78716C]">Initial launch as a high-rise photo & structural log.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA] space-y-1">
              <div className="text-[#8C6A48] font-bold text-base">100% Freehold</div>
              <div className="text-[#1C1917] font-semibold">DLD Open Registry</div>
              <p className="text-[#78716C]">Empirical verification of transactions and cadastral titles.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA] space-y-1">
              <div className="text-[#8C6A48] font-bold text-base">RERA Licensed</div>
              <div className="text-[#1C1917] font-semibold">Partner Execution</div>
              <p className="text-[#78716C]">All transactions facilitated exclusively by accredited brokers.</p>
            </div>
          </div>
        </section>

        {/* Mission & Added Value */}
        <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-6">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Chapter 02 • Editorial Mission
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              2. Why We Are Not a "Listing Aggregator" or "Bridge Portal"
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            The Dubai real estate web is saturated with superficial marketing portals that display generic renderings, speculative prices, and inflated rental yield claims (often promising 10–12% without factoring in Mollak HOA fees or chiller capacity tariffs).
          </p>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            <strong>Dubai Architecture operates on a fundamentally different standard:</strong>
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] flex items-start gap-3.5">
              <span className="text-xl">🏛️</span>
              <div className="space-y-1">
                <h3 className="font-bold text-[#1C1917] text-sm sm:text-base">
                  Structural & Geotechnical Truth First
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  We document what marketing brochures conceal: foundation types (bored cast-in-place friction piles into limestone/calcarenite), lateral load systems (mega-columns, outrigger trusses, core-wall dampers), elevator peak wait times, soundproofing acoustic ratings, and district cooling arrangements (Empower vs Tabreed).
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] flex items-start gap-3.5">
              <span className="text-xl">📊</span>
              <div className="space-y-1">
                <h3 className="font-bold text-[#1C1917] text-sm sm:text-base">
                  Net Cash-on-Cash Financial Models
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Our embedded ROI calculator models the true friction of ownership: deducting 4% DLD transfer taxes, Mollak-audited service charges per sq.ft, tenant turnover reserves, and professional property management fees.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] flex items-start gap-3.5">
              <span className="text-xl">🤝</span>
              <div className="space-y-1">
                <h3 className="font-bold text-[#1C1917] text-sm sm:text-base">
                  Strict Regulatory Partnership (RERA Compliance)
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  We do not take user funds, hold escrow deposits, or execute direct contracts. When an architectural investor or resident requests allocation access, they are connected directly with licensed senior brokers at <strong>Metropolitan Premium Properties</strong> or <strong>Whitewill</strong>, ensuring full compliance with Law No. 85 of 2006 regarding real estate brokers in Dubai.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Authority Network */}
        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-6">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Chapter 03 • Authoritative Citations & Standards
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              3. Institutional Knowledge Graph & Primary Sources
            </h2>
          </div>

          <p className="text-sm text-[#44403C] leading-relaxed">
            Our building dossiers and historical indices are cross-referenced with internationally recognized engineering bodies and official governmental registries:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <a
              href="https://www.skyscrapercenter.com/dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white border border-[#DDD7CA] hover:border-[#8C6A48] transition-colors block group"
            >
              <div className="font-bold text-[#1C1917] text-sm group-hover:text-[#8C6A48] flex items-center justify-between">
                <span>CTBUH Skyscraper Center</span>
                <span>↗</span>
              </div>
              <p className="text-[#57534E] mt-1">
                Council on Tall Buildings and Urban Habitat official building height, floor counts, and engineering classifications.
              </p>
            </a>

            <a
              href="https://dubailand.gov.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white border border-[#DDD7CA] hover:border-[#8C6A48] transition-colors block group"
            >
              <div className="font-bold text-[#1C1917] text-sm group-hover:text-[#8C6A48] flex items-center justify-between">
                <span>Dubai Land Department (DLD)</span>
                <span>↗</span>
              </div>
              <p className="text-[#57534E] mt-1">
                Official open data portal for executed title deed registrations, secondary market re-sales, and rental index benchmarks.
              </p>
            </a>

            <a
              href="https://www.som.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white border border-[#DDD7CA] hover:border-[#8C6A48] transition-colors block group"
            >
              <div className="font-bold text-[#1C1917] text-sm group-hover:text-[#8C6A48] flex items-center justify-between">
                <span>Skidmore, Owings & Merrill (SOM)</span>
                <span>↗</span>
              </div>
              <p className="text-[#57534E] mt-1">
                Master architects and structural engineers of Burj Khalifa, Cayan Tower, and global structural innovations.
              </p>
            </a>

            <a
              href="https://www.fosterandpartners.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white border border-[#DDD7CA] hover:border-[#8C6A48] transition-colors block group"
            >
              <div className="font-bold text-[#1C1917] text-sm group-hover:text-[#8C6A48] flex items-center justify-between">
                <span>Foster + Partners</span>
                <span>↗</span>
              </div>
              <p className="text-[#57534E] mt-1">
                Pioneering high-density bioclimatic skyscrapers including The Index Tower in DIFC and luxury residential estates.
              </p>
            </a>
          </div>
        </section>

        {/* Navigation & Fast Links */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5DFD3] text-sm font-semibold">
          <Link
            href="/editorial-policy/"
            className="text-[#8C6A48] hover:text-[#6D5135] underline underline-offset-4"
          >
            Read Our Editorial Policy & Due Diligence Framework &rarr;
          </Link>
          <Link
            href="/contact/"
            className="text-[#1C1917] hover:text-[#8C6A48] transition-colors"
          >
            Contact Editorial & Research Office &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
