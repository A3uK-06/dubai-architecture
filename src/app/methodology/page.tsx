import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Investment & Engineering Methodology | Dubai Architecture Index",
  description:
    "Official calculation methodology, Dubai Land Department (DLD) open data validation, HOA service charge auditing, and RERA brokerage partnership compliance (Metropolitan Premium Properties & Whitewill).",
  alternates: {
    canonical: "https://dubai-architecture.info/methodology/",
  },
};

export const dynamic = "force-static";

export default function MethodologyPage() {
  return (
    <article className="min-h-screen bg-transparent text-[#0F172A] pb-24">
      <SchemaOrg
        type="breadcrumbs"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Methodology & DLD Compliance", url: "https://dubai-architecture.info/methodology/" },
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
            <span className="text-[#1C1917] font-bold">Methodology & E-E-A-T Framework</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
              E-E-A-T & Regulatory Compliance
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
              EST. 2006 • Dubai Land Department Open Data
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            Investment Methodology & Regulatory Framework
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
            Transparent algorithmic models for gross and net rental yield estimation, empirical verification protocols via the Dubai Land Department (DLD) open transaction ledger, and our accredited RERA brokerage execution network.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Section 1: Gross vs Net Yield */}
        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Section 01 • Financial Modeling
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              1. Gross vs Net Yield Calculation Methodology
            </h2>
          </div>

          <p className="text-sm text-[#44403C] leading-relaxed">
            Many promotional platforms in Dubai market inflated headline rental yields (often citing 8% to 11% gross). Dubai Architecture implements an institutional-grade cash-flow deduction model separating headline gross yields from actual net cash-on-cash returns.
          </p>

          <div className="p-5 rounded-2xl bg-white border border-[#DDD7CA] space-y-2 font-mono text-xs sm:text-sm">
            <div className="text-[#8C6A48] font-bold">
              Standard Net Rental Yield Formula:
            </div>
            <div className="text-[#1C1917] bg-[#FAF8F5] p-3 rounded-xl border border-[#E5DFD3] overflow-x-auto">
              Net Yield = [Annual Rent − (HOA Service Charges × Area) − Chiller Capacity Fees − Maintenance Reserve (1%) − Property Management (5%)] / [Purchase Price + 4% DLD Transfer Fee + Trustee Fee (AED 4,200) + Brokerage Fee (2%)] × 100%
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#DDD7CA]">
              <strong className="text-[#1C1917] block font-bold text-sm mb-1">
                HOA Service Charges (Mollak System)
              </strong>
              <p className="text-[#57534E]">
                Audited annually by RERA and billed per square foot (ranging from 12 AED/sq.ft in suburban clusters to 55+ AED/sq.ft in Burj Khalifa). We pull historical rates from the Mollak regulatory portal.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#DDD7CA]">
              <strong className="text-[#1C1917] block font-bold text-sm mb-1">
                District Cooling Tariffs (Empower / Tabreed)
              </strong>
              <p className="text-[#57534E]">
                Our models distinguish between buildings that are consumption-metered (requiring fixed quarterly capacity payments) and developments that feature developer-subsidized Chiller-Free cooling.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Data Sources */}
        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Section 02 • Data Repositories
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              2. Primary Data Sources & Empirical Verification
            </h2>
          </div>

          <p className="text-sm text-[#44403C] leading-relaxed">
            All price per square foot ranges, historical sales volumes, and tenant demographics are cross-referenced across official UAE public and licensed databases:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white border border-[#DDD7CA] space-y-2">
              <span className="text-xl">🏛️</span>
              <h3 className="font-bold text-[#1C1917]">Dubai Land Department (DLD)</h3>
              <p className="text-[#57534E]">
                Direct ingestion of recorded Title Deeds, off-plan Oqood contracts, and historical transaction sales volumes.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#DDD7CA] space-y-2">
              <span className="text-xl">📊</span>
              <h3 className="font-bold text-[#1C1917]">RERA Rental Calculator</h3>
              <p className="text-[#57534E]">
                Legal rental increase caps and baseline district rental indices established under Dubai Decree No. 43 of 2013.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#DDD7CA] space-y-2">
              <span className="text-xl">🏗️</span>
              <h3 className="font-bold text-[#1C1917]">Developer Master Records</h3>
              <p className="text-[#57534E]">
                Official architectural floor plans, slab heights, structural blueprints, and payment schedules verified from master developers (Emaar, Nakheel, Omniyat, Meraas, Sobha, Binghatti).
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Legal Status & Brokerage Network */}
        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Section 03 • Legal Execution
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              3. Regulatory Position & Accredited Brokerage Network
            </h2>
          </div>

          <p className="text-sm text-[#44403C] leading-relaxed">
            <strong>Dubai Architecture (dubai-architecture.info)</strong> operates strictly as an independent architectural research archive, engineering encyclopedia, and investment intelligence portal.
          </p>

          <div className="p-5 rounded-2xl bg-white border border-[#DDD7CA] space-y-3 text-xs sm:text-sm text-[#44403C]">
            <p className="font-semibold text-[#1C1917]">
              Transaction Execution and Licensed Brokerage Disclosure:
            </p>
            <p>
              In full compliance with <em>Law No. (7) of 2006 concerning Real Property Registration in the Emirate of Dubai</em>, all real estate advisory, client consultations, unit reservations, and contract signings (MOU / Form F / SPA) are executed through accredited, licensed UAE brokerage partners.
            </p>
            <p>
              Our premier brokerage execution partners include <strong>Metropolitan Premium Properties</strong> and <strong>Whitewill</strong>, both possessing active brokerage registrations, corporate ORN licenses, and verified escrow accounting facilities approved by the Dubai Real Estate Regulatory Agency (RERA).
            </p>
          </div>
        </section>

        {/* Section 4: Golden Visa */}
        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Section 04 • Immigration Policy
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              4. UAE 10-Year Golden Visa Statutory Criteria
            </h2>
          </div>

          <p className="text-sm text-[#44403C] leading-relaxed">
            Our Golden Visa qualification tool evaluates property allocations under <em>Federal Decree-Law No. (29) of 2020</em> and prevailing GDRFA / ICP resolutions:
          </p>

          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-[#57534E]">
            <li>
              <strong>Valuation Floor:</strong> Minimum AED 2,000,000 (approx. \$545,000 USD) in property acquisition value.
            </li>
            <li>
              <strong>Off-Plan Eligibility:</strong> Permitted for projects registered with DLD-approved escrow accounts, provided total contract value meets the AED 2,000,000 threshold.
            </li>
            <li>
              <strong>Mortgage Provisions:</strong> Qualifying properties with bank mortgages are eligible once the investor equity portion meets or exceeds the statutory threshold, with bank NOC documentation.
            </li>
            <li>
              <strong>Family Sponsorship:</strong> Permits primary visa holders to sponsor spouses, children without age restrictions, and domestic staff with uninterrupted 10-year residency renewals.
            </li>
          </ul>
        </section>

        {/* Contact Desk */}
        <div className="p-6 rounded-2xl bg-[#0F172A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base text-white">Have Questions Regarding Our Data or Methodology?</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Contact our senior research and analytical compliance desk.
            </p>
          </div>
          <Link
            href="/#calculator"
            className="px-5 py-2.5 rounded-xl bg-[#8C6A48] hover:bg-[#A37B55] text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            Launch ROI Calculator →
          </Link>
        </div>
      </div>
    </article>
  );
}
