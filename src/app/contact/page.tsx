import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Contact Editorial & Research Office | Dubai Architecture",
  description:
    "Contact the Dubai Architecture editorial board, structural research desk, and press office. Submit architectural documentation or inquire about verified tower allocations.",
  alternates: {
    canonical: "https://dubai-architecture.info/contact/",
  },
};

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <article className="min-h-screen bg-transparent text-[#0F172A] pb-24">
      <SchemaOrg
        type="contact"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Contact Office", url: "https://dubai-architecture.info/contact/" },
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
            <span className="text-[#1C1917] font-bold">Contact</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
              Institutional Communications
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
              Editorial Desk & Research Office
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            Contact Dubai Architecture
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
            Reach out to our architectural research desk, submit project documentation, or connect with senior property advisory specialists in the United Arab Emirates.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Research & Editorial Desk */}
          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                Editorial & Engineering
              </span>
              <h2 className="text-xl font-bold text-[#1C1917] mt-1">
                Architectural Research Desk
              </h2>
            </div>

            <p className="text-sm text-[#57534E] leading-relaxed">
              For structural engineers, architectural studios, photographers, and academic researchers submitting CAD models, geotechnical records, or corrections to building profiles:
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-[#DDD7CA]">
                <div className="text-[#78716C]">Editorial Email</div>
                <div className="text-sm font-bold text-[#1C1917] mt-0.5">press@dubai-architecture.info</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#DDD7CA]">
                <div className="text-[#78716C]">Historical Archive Registry</div>
                <div className="text-sm font-bold text-[#1C1917] mt-0.5">DUB-ARCH-EST-2006</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#DDD7CA]">
                <div className="text-[#78716C]">Cadastral Jurisdiction</div>
                <div className="text-sm font-bold text-[#1C1917] mt-0.5">Dubai, United Arab Emirates (DIFC / Downtown)</div>
              </div>
            </div>
          </div>

          {/* Acquisition & Brokerage Support */}
          <div className="p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-soft-tint space-y-5">
            <div className="border-b border-[#E5DFD3] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                Acquisitions & Advisory
              </span>
              <h2 className="text-xl font-bold text-[#1C1917] mt-1">
                Property Concierge & Allocations
              </h2>
            </div>

            <p className="text-sm text-[#57534E] leading-relaxed">
              For private investors, family offices, and residents seeking off-market penthouses, high-floor residential allocations, or Golden Visa eligible investments:
            </p>

            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/971500000000?text=Hello%2C%20I%20am%20inquiring%20through%20Dubai-Architecture.info"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#2D6A4F] hover:bg-[#1E4D38] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>💬</span>
                <span>Direct WhatsApp Concierge</span>
              </a>

              <Link
                href="/calculator/"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>📊</span>
                <span>Open Multi-Currency ROI Calculator</span>
              </Link>

              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] text-xs text-[#78716C] leading-relaxed">
                Client allocations handled exclusively by accredited RERA brokerage partners: Metropolitan Premium Properties & Whitewill.
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
