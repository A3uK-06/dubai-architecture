import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Affiliate & RERA Brokerage Disclosure | Dubai Architecture",
  description:
    "Official disclosure of our accredited brokerage network (Metropolitan Premium Properties & Whitewill), RERA compliance, DLD escrow protocols, and user terms.",
  alternates: {
    canonical: "https://dubai-architecture.info/affiliate-disclosure/",
  },
};

export const dynamic = "force-static";

export default function AffiliateDisclosurePage() {
  return (
    <article className="min-h-screen bg-transparent text-[#0F172A] pb-24">
      <SchemaOrg
        type="policy"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Affiliate & Brokerage Disclosure", url: "https://dubai-architecture.info/affiliate-disclosure/" },
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
            <span className="text-[#1C1917] font-bold">Brokerage Disclosure</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
              Regulatory Compliance
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
              Law No. 85 of 2006 (Dubai Real Estate Brokers)
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            Accredited Brokerage & Referral Disclosure
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
            In compliance with the Real Estate Regulatory Agency (RERA), the Dubai Land Department (DLD), and international consumer protection standards, this notice explains how inquiries and commercial transactions are facilitated.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Section 1: Institutional Nature */}
        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Article 01 • Institutional Standing
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              1. Independent Architectural Catalog & Information Provider
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            <strong>Dubai Architecture (dubai-architecture.info)</strong> is an independent architectural catalog and technical observatory established in 2006. We are not a direct property developer, mortgage lender, or escrow trustee. We do not directly hold client funds, accept down payments, or execute binding sale and purchase agreements (SPA).
          </p>

          <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
            All architectural analysis, historical profiles, structural schematics, and floor plans published on this platform are provided strictly for educational, informational, and due diligence research purposes.
          </p>
        </section>

        {/* Section 2: Partner Network */}
        <section className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-6">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Article 02 • Certified Execution Partners
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              2. Accredited RERA Brokerage Network
            </h2>
          </div>

          <p className="text-sm text-[#44403C] leading-relaxed">
            When users utilize our consultation widgets, request unit floor plan dossiers, or seek current freehold inventory allocations in specific towers, their requests are routed to fully accredited, RERA-licensed senior brokerage partners:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#1C1917]">Metropolitan Premium Properties</span>
                <span className="text-xs font-mono bg-[#8C6A48]/10 text-[#8C6A48] px-2 py-0.5 rounded font-bold">RERA Licensed</span>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed">
                One of the UAE's foremost institutional real estate brokerages, handling our global, English, European, and Asian client allocations with multi-lingual native advisors and direct institutional developer allocations.
              </p>
              <div className="text-xs font-mono text-[#78716C]">
                Mandate: International & Multi-Language Client Inquiries
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CA] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#1C1917]">Whitewill Dubai</span>
                <span className="text-xs font-mono bg-[#8C6A48]/10 text-[#8C6A48] px-2 py-0.5 rounded font-bold">RERA Licensed</span>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Award-winning luxury boutique brokerage providing specialized concierge advisory, contract structuring, and relocation assistance for our Russian-speaking and CIS investors.
              </p>
              <div className="text-xs font-mono text-[#78716C]">
                Mandate: Russian & CIS (+7) Client Inquiries
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Consumer Protection */}
        <section className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
          <div className="border-b border-[#E5DFD3] pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
              Article 03 • Zero Extra Cost Guarantee
            </span>
            <h2 className="text-2xl font-bold text-[#1C1917] mt-1">
              3. Referral Remuneration & Pricing Neutrality
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#44403C] leading-relaxed">
            <p>
              Under our affiliate agreements, Dubai Architecture may receive a referral commission from the accredited brokerage partner when a referred client successfully completes a property purchase.
            </p>
            <p>
              <strong>Important Consumer Protection Guarantee:</strong> Using Dubai Architecture imposes <strong>no extra markup, hidden fee, or price premium</strong> on the buyer. Real estate pricing in Dubai is strictly regulated by the Dubai Land Department and master developers; all discounts, payment plans, and developer incentives remain identical.
            </p>
            <p>
              All payments for property purchases are deposited directly into <strong>RERA-approved official developer Escrow Accounts</strong> under Law No. 8 of 2007 (Escrow Accounts for Real Estate Development in Dubai), ensuring complete institutional fund safety.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
