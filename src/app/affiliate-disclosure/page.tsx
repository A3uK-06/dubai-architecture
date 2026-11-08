import React from "react";
import type { Metadata } from "next";
import SchemaOrg from "@/components/SchemaOrg";
import AffiliateDisclosureClient from "@/components/AffiliateDisclosureClient";
import { getSeoAlternates } from "@/lib/seoAlternates";

export const metadata: Metadata = {
  title: "Affiliate & RERA Brokerage Disclosure | Dubai Architecture",
  description:
    "Official disclosure of our accredited brokerage network (Metropolitan Premium Properties & Whitewill), RERA compliance, DLD escrow protocols, and user terms.",
  alternates: getSeoAlternates("/affiliate-disclosure/"),
  openGraph: {
    title: "Affiliate & RERA Brokerage Disclosure | Dubai Architecture",
    description: "Official disclosure of accredited brokerage network, RERA compliance, and DLD escrow protocols.",
    url: "https://dubai-architecture.info/affiliate-disclosure/",
    siteName: "Dubai Architecture",
    type: "website",
    images: [
      {
        url: "https://dubai-architecture.info/images/hero-dubai-skyline.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Architecture Brokerage Disclosure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Architecture Affiliate & Brokerage Disclosure",
    description: "RERA compliance, accredited brokerage network, and escrow protocols.",
    images: ["https://dubai-architecture.info/images/hero-dubai-skyline.jpg"],
  },
};

export const dynamic = "force-static";

export default function AffiliateDisclosurePage() {
  return (
    <>
      <SchemaOrg
        type="policy"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Affiliate & Brokerage Disclosure", url: "https://dubai-architecture.info/affiliate-disclosure/" },
        ]}
      />
      <AffiliateDisclosureClient />
    </>
  );
}
