import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DEVELOPERS } from "@/data/developers";
import { BUILDINGS } from "@/data/buildings";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Top Dubai Real Estate Developers | Institutional Reliability & Projects Guide",
  description:
    "Comprehensive guide to Dubai's top master developers (Emaar, Sobha, Nakheel, Omniyat, Binghatti, Meraas). DLD escrow ratings, on-time delivery track records, and architectural portfolios.",
  alternates: {
    canonical: "https://dubai-architecture.info/developers/",
  },
};

export const dynamic = "force-static";

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#0F172A] pb-24">
      <SchemaOrg
        type="breadcrumbs"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Master Developers", url: "https://dubai-architecture.info/developers/" },
        ]}
      />

      {/* Hero Banner */}
      <div className="border-b border-[#E2E8F0] bg-[#F1F5F9]/60 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex items-center gap-2 text-xs text-[#78716C] font-semibold">
            <Link href="/" className="hover:text-[#8C6A48] transition-colors">
              Home
            </Link>
            <span className="text-[#DDD7CA]">/</span>
            <span className="text-[#1C1917] font-bold">Master Developers</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
              DLD Escrow Verified
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
              Top-10 Institutional Developers
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            Dubai Master Developers Directory
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
            Institutional due diligence, historical delivery reliability, and portfolio audits of the master developers shaping Dubai's skyline. Audited against Dubai Land Department (DLD) escrow account regulations.
          </p>
        </div>
      </div>

      {/* Developers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEVELOPERS.map((dev) => {
            const devBuildings = BUILDINGS.filter((b) =>
              b.developer.toLowerCase().includes(dev.shortName.toLowerCase())
            );

            return (
              <div
                key={dev.id}
                className="rounded-3xl bg-[#FAF8F5] border-2 border-[#E5DFD3] hover:border-[#8C6A48] transition-all p-7 flex flex-col justify-between shadow-soft-tint group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                        {dev.tier}
                      </span>
                      <h2 className="text-2xl font-bold text-[#1C1917] group-hover:text-[#8C6A48] transition-colors mt-0.5">
                        <Link href={`/developers/${dev.slug}/`}>
                          {dev.name}
                        </Link>
                      </h2>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-white border border-[#DDD7CA] text-[#2D6A4F] shrink-0">
                      ROI: {dev.averageNetRoi}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-3">
                    {dev.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-white border border-[#DDD7CA]">
                      <span className="text-[#78716C] block text-[10px]">Delivery Rate</span>
                      <strong className="text-[#1C1917] font-bold text-xs">{dev.onTimeDeliveryRate}</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-[#DDD7CA]">
                      <span className="text-[#78716C] block text-[10px]">Founded</span>
                      <strong className="text-[#1C1917] font-bold text-xs">{dev.foundingYear}</strong>
                    </div>
                  </div>

                  {devBuildings.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[11px] font-semibold text-[#78716C] block mb-1.5">
                        Key Towers in Archive ({devBuildings.length}):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {devBuildings.slice(0, 3).map((b) => (
                          <Link
                            key={b.id}
                            href={`/buildings/${b.slug}/`}
                            className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-[#DDD7CA] hover:border-[#8C6A48] text-[#1C1917] hover:text-[#8C6A48] transition-colors"
                          >
                            {b.name}
                          </Link>
                        ))}
                        {devBuildings.length > 3 && (
                          <span className="text-[10px] text-[#78716C] self-center">
                            +{devBuildings.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5DFD3] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#78716C]">
                    From {dev.startingPriceAed}
                  </span>
                  <Link
                    href={`/developers/${dev.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8C6A48] group-hover:text-[#6D5135] transition-colors"
                  >
                    <span>Full Developer Dossier</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
