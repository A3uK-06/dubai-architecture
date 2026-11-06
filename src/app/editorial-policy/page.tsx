import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Editorial Policy & Due Diligence Standards | Dubai Architecture",
  description:
    "Our editorial standards, technical fact-checking protocols, conflict of interest safeguards, and independent structural audit methodology.",
  alternates: {
    canonical: "https://dubai-architecture.info/editorial-policy/",
  },
};

export const dynamic = "force-static";

export default function EditorialPolicyPage() {
  return (
    <article className="min-h-screen bg-transparent text-[#0F172A] pb-24">
      <SchemaOrg
        type="policy"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Editorial Policy", url: "https://dubai-architecture.info/editorial-policy/" },
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
            <span className="text-[#1C1917] font-bold">Editorial Policy</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
              E-E-A-T Editorial Guidelines
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
              Independent Due Diligence • Zero Paid Promotions
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            Editorial Policy & Technical Fact-Checking Standards
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
            How Dubai Architecture maintains strict independence between technical architectural assessments and real estate brokerage inquiries, ensuring unvarnished engineering truths.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Section 1: Independence */}
        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Standard 01 • Impartiality
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              1. Complete Separation of Editorial Content and Brokerage Affiliation
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            Under our charter, no property developer (whether Emaar, Nakheel, DAMAC, Sobha, or private consortia) can purchase an editorial rating, delete unfavorable resident metrics, or modify our <strong>Independent Technical Audit</strong>.
          </p>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            Every building profile is drafted by architectural and structural analysts. If a tower suffers from notorious lift wait times during morning rush hours, inferior acoustic dampening between party walls, or excessive Mollak chiller capacity charges, these factors are prominently published in the tower's public dossier.
          </p>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed font-mono">
            <strong>Key Principle:</strong> "A building's aesthetic prestige does not excuse mechanical, logistical, or financial deficiency. True architectural criticism must serve the occupant and investor."
          </div>
        </section>

        {/* Section 2: Verification Sources */}
        <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Standard 02 • Verification Protocols
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              2. Data Verification & Primary Source Hierarchy
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#44403C]">
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
              <strong className="text-[#1C1917] text-sm block">1. Structural Height & Storeys</strong>
              <p className="text-[#57534E]">
                Verified against Council on Tall Buildings and Urban Habitat (CTBUH) technical criteria (Height to Architectural Top) and municipal building permits.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
              <strong className="text-[#1C1917] text-sm block">2. Cadastral Status & Transaction Ledger</strong>
              <p className="text-[#57534E]">
                Extracted directly from open data feeds published by the Dubai Land Department (DLD), verifying true contract sales value, mortgage registrations, and historical rental index ceilings.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-1">
              <strong className="text-[#1C1917] text-sm block">3. HOA Service Fees & Mollak Audits</strong>
              <p className="text-[#57534E]">
                Cross-referenced with RERA-approved annual budgets within the Mollak electronic escrow and management system.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Corrections Policy */}
        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Standard 03 • Corrections & Inquiries
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              3. Corrections, Right of Reply & Technical Revisions
            </h2>
          </div>

          <p className="text-sm text-[#44403C] leading-relaxed">
            We welcome technical corrections from master structural engineers, architects, geotechnical consultants, and verified Owners' Association Management Companies (OAMCs).
          </p>

          <p className="text-sm text-[#44403C] leading-relaxed">
            If you represent a project engineering team or have verified municipal documentation indicating a factual discrepancy (e.g., revised structural height, updated foundation pile count, or certified chiller tariff adjustments), please submit verified documentation to our research desk.
          </p>

          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8C6A48] hover:bg-[#6D5135] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <span>Submit Technical Correction &rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
