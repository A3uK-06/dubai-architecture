import React from "react";
import type { Metadata } from "next";
import CatalogSection from "@/components/CatalogSection";
import SchemaOrg from "@/components/SchemaOrg";
import { getSeoAlternates } from "@/lib/seoAlternates";

export const metadata: Metadata = {
  title: "Skyscrapers Directory — All Towers",
  description:
    "Complete directory of Dubai skyscrapers, supertalls, architectural engineering specifications, and prime real estate investment allocations.",
  alternates: getSeoAlternates("/buildings/"),
  openGraph: {
    title: "Skyscrapers Directory — All Towers | Dubai Architecture",
    description: "Complete directory of Dubai skyscrapers and engineering masterpieces.",
    url: "https://dubai-architecture.info/buildings/",
    siteName: "Dubai Architecture",
    type: "website",
    images: [
      {
        url: "https://dubai-architecture.info/images/hero-dubai-skyline.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Skyscrapers Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Skyscrapers Directory",
    description: "Complete directory of Dubai skyscrapers and supertalls.",
    images: ["https://dubai-architecture.info/images/hero-dubai-skyline.jpg"],
  },
};

export default function BuildingsPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      <SchemaOrg
        type="breadcrumbs"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Skyscrapers Directory", url: "https://dubai-architecture.info/buildings/" },
        ]}
      />
      <CatalogSection />
    </div>
  );
}
