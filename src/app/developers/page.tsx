import React from "react";
import type { Metadata } from "next";
import SchemaOrg from "@/components/SchemaOrg";
import DevelopersClient from "@/components/DevelopersClient";
import { getSeoAlternates } from "@/lib/seoAlternates";

export const metadata: Metadata = {
  title: "Top Dubai Real Estate Developers | Institutional Reliability & Projects Guide",
  description:
    "Comprehensive guide to Dubai's top master developers (Emaar, Sobha, Nakheel, Omniyat, Binghatti, Meraas). DLD escrow ratings, on-time delivery track records, and architectural portfolios.",
  alternates: getSeoAlternates("/developers/"),
  openGraph: {
    title: "Top Dubai Real Estate Developers | Institutional Reliability & Projects Guide",
    description:
      "Comprehensive guide to Dubai's top master developers (Emaar, Sobha, Nakheel, Omniyat, Binghatti, Meraas). DLD escrow ratings and on-time delivery track records.",
    url: "https://dubai-architecture.info/developers/",
    siteName: "Dubai Architecture",
    type: "website",
    images: [
      {
        url: "https://dubai-architecture.info/images/hero-dubai-skyline.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Top Developers Due Diligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Dubai Real Estate Developers Guide",
    description: "DLD escrow ratings and track records of Dubai master developers.",
    images: ["https://dubai-architecture.info/images/hero-dubai-skyline.jpg"],
  },
};

export const dynamic = "force-static";

export default function DevelopersPage() {
  return (
    <>
      <SchemaOrg
        type="breadcrumbs"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Master Developers", url: "https://dubai-architecture.info/developers/" },
        ]}
      />
      <DevelopersClient />
    </>
  );
}
