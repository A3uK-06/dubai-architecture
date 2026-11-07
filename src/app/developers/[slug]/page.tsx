import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DEVELOPERS, getDeveloperBySlug } from "@/data/developers";
import { BUILDINGS } from "@/data/buildings";
import SchemaOrg from "@/components/SchemaOrg";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DEVELOPERS.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const developer = getDeveloperBySlug(slug);

  if (!developer) {
    return {
      title: "Developer Not Found",
    };
  }

  const title = `${developer.name} — Dubai Projects, Delivery Track Record & Portfolio`;
  const description = `Official due diligence dossier for ${developer.name}. DLD escrow account reliability, on-time delivery rate (${developer.onTimeDeliveryRate}), architectural skyscraper portfolio, and investment returns.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://dubai-architecture.info/developers/${developer.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://dubai-architecture.info/developers/${developer.slug}/`,
      siteName: "Dubai Architecture",
      type: "article",
    },
  };
}

export const dynamic = "force-static";

export default async function DeveloperDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const developer = getDeveloperBySlug(slug);

  if (!developer) {
    notFound();
  }

  const relatedBuildings = BUILDINGS.filter((b) =>
    b.developer.toLowerCase().includes(developer.shortName.toLowerCase())
  );

  return (
    <article className="min-h-screen bg-transparent text-[#0F172A] pb-24">
      <SchemaOrg
        type="breadcrumbs"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Developers", url: "https://dubai-architecture.info/developers/" },
          { name: developer.name, url: `https://dubai-architecture.info/developers/${developer.slug}/` },
        ]}
      />

      {/* Header Banner */}
      <div className="border-b border-[#E2E8F0] bg-[#F1F5F9]/60 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="flex items-center gap-2 text-xs text-[#78716C] font-semibold">
            <Link href="/" className="hover:text-[#8C6A48] transition-colors">
              Home
            </Link>
            <span className="text-[#DDD7CA]">/</span>
            <Link href="/developers/" className="hover:text-[#8C6A48] transition-colors">
              Developers
            </Link>
            <span className="text-[#DDD7CA]">/</span>
            <span className="text-[#1C1917] font-bold">{developer.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8C6A48] text-white">
              {developer.tier}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-[#57534E] border border-[#DDD7CA]">
              Escrow Rating: {developer.dldEscrowRating}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C1917] tracking-tight">
            {developer.name}
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] max-w-3xl leading-relaxed">
            {developer.description}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left 2 Cols: Due Diligence & Buildings */}
          <div className="lg:col-span-2 space-y-12">
            {/* 1. Track Record Grid */}
            <section className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD3] shadow-soft-tint space-y-5">
              <h2 className="text-xl font-bold text-[#1C1917]">
                Institutional Due Diligence Metrics
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA]">
                  <span className="text-[#78716C] block text-[11px]">On-Time Delivery</span>
                  <strong className="text-base font-bold text-[#2D6A4F] mt-1 block">
                    {developer.onTimeDeliveryRate}
                  </strong>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA]">
                  <span className="text-[#78716C] block text-[11px]">Average Net ROI</span>
                  <strong className="text-base font-bold text-[#8C6A48] mt-1 block">
                    {developer.averageNetRoi}
                  </strong>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA]">
                  <span className="text-[#78716C] block text-[11px]">Founded</span>
                  <strong className="text-base font-bold text-[#1C1917] mt-1 block">
                    {developer.foundingYear}
                  </strong>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#DDD7CA]">
                  <span className="text-[#78716C] block text-[11px]">Headquarters</span>
                  <strong className="text-xs font-bold text-[#1C1917] mt-1 block truncate" title={developer.headquarters}>
                    {developer.headquarters}
                  </strong>
                </div>
              </div>
            </section>

            {/* 2. Developer Key Highlights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1C1917] border-b border-[#E5DFD3] pb-3">
                Key Architectural & Operational Distinctions
              </h2>
              <ul className="space-y-3">
                {developer.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#57534E] leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-[#8C6A48]/15 text-[#8C6A48] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Catalog Projects by this Developer */}
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5DFD3] pb-3">
                <h2 className="text-2xl font-bold text-[#1C1917]">
                  Skyscrapers & Developments in Archive ({relatedBuildings.length})
                </h2>
                <span className="text-xs font-mono text-[#8C6A48]">
                  Verified DLD Freehold
                </span>
              </div>

              {relatedBuildings.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedBuildings.map((building) => (
                    <Link
                      key={building.id}
                      href={`/buildings/${building.slug}/`}
                      className="rounded-2xl bg-white border border-[#E5DFD3] hover:border-[#8C6A48] transition-all overflow-hidden group shadow-soft-tint flex flex-col justify-between"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-[#0F172A]">
                        <Image
                          src={building.image}
                          alt={building.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="text-xs text-white font-mono font-bold px-2.5 py-1 rounded-full bg-black/75 border border-white/20 backdrop-blur-md">
                            {building.heightMeters}m • {building.floors} floors
                          </span>
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono text-[#8C6A48] uppercase">
                            {building.district}
                          </span>
                          <span className="text-xs font-bold text-[#2D6A4F] font-mono">
                            ROI {building.investmentYield}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#8C6A48] transition-colors">
                          {building.name}
                        </h3>
                        <p className="text-xs text-[#57534E] line-clamp-2">
                          {building.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#78716C] italic">
                  Additional pipeline developments by {developer.name} are currently being audited in our archive.
                </p>
              )}
            </section>
          </div>

          {/* Right Sidebar: Developer Contacts & Allocation Concierge */}
          <div className="space-y-6">
            <div className="sticky top-28 rounded-3xl bg-white border-2 border-[#E5DFD3] p-6 shadow-soft-tint space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8C6A48]">
                  Direct Broker Allocation
                </span>
                <h3 className="text-lg font-bold text-[#1C1917]">
                  Inquire {developer.shortName} Inventory
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Request current available off-plan units, high-floor penthouses, and payment plan schedules directly from accredited master brokerage desks.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs font-mono border-t border-[#EFECE4]">
                <div className="flex justify-between py-1">
                  <span className="text-[#78716C]">Escrow Security:</span>
                  <span className="font-bold text-[#1C1917]">DLD Regulated</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#78716C]">Starting Threshold:</span>
                  <span className="font-bold text-[#8C6A48]">{developer.startingPriceAed}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#78716C]">Buyer Markup:</span>
                  <span className="font-bold text-[#2D6A4F]">0% (Official Price)</span>
                </div>
              </div>

              <a
                href={`https://wa.me/971500000000?text=${encodeURIComponent(
                  `Hello, I am inquiring through Dubai-Architecture.info regarding available allocations in ${developer.name} developments.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2D6A4F] hover:bg-[#1E4D38] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>💬</span>
                <span>WhatsApp Developer Concierge</span>
              </a>

              <a
                href={developer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center px-4 py-2.5 rounded-xl border border-[#DDD7CA] hover:bg-[#FAF8F5] text-xs font-semibold text-[#57534E] hover:text-[#8C6A48] transition-colors"
              >
                Visit Official Corporate Site ↗
              </a>

              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#DDD7CA] text-[11px] text-[#78716C] leading-normal text-center">
                All reservations executed via licensed partners Metropolitan Premium Properties & Whitewill.
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
