import React from "react";
import type { Metadata } from "next";
import SchemaOrg from "@/components/SchemaOrg";
import EditorialPolicyClient from "@/components/EditorialPolicyClient";
import { getSeoAlternates } from "@/lib/seoAlternates";

export const metadata: Metadata = {
  title: "Editorial Policy & Due Diligence Standards | Dubai Architecture",
  description:
    "Our editorial standards, technical fact-checking protocols, conflict of interest safeguards, and independent structural audit methodology.",
  alternates: getSeoAlternates("/editorial-policy/"),
  openGraph: {
    title: "Editorial Policy & Due Diligence Standards | Dubai Architecture",
    description: "Our editorial standards, technical fact-checking protocols, and independent structural audit methodology.",
    url: "https://dubai-architecture.info/editorial-policy/",
    siteName: "Dubai Architecture",
    type: "website",
    images: [
      {
        url: "https://dubai-architecture.info/images/hero-dubai-skyline.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Architecture Editorial Standards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Architecture Editorial Policy",
    description: "Technical fact-checking protocols and independent audit methodology.",
    images: ["https://dubai-architecture.info/images/hero-dubai-skyline.jpg"],
  },
};

export const dynamic = "force-static";

export default function EditorialPolicyPage() {
  return (
    <>
      <SchemaOrg
        type="policy"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Editorial Policy", url: "https://dubai-architecture.info/editorial-policy/" },
        ]}
      />
      <EditorialPolicyClient />
    </>
  );
}
