import React from "react";
import type { Metadata } from "next";
import CatalogSection from "@/components/CatalogSection";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Skyscrapers Directory — All Towers",
  description:
    "Complete directory of Dubai skyscrapers, supertalls, architectural engineering specifications, and prime real estate investment allocations.",
  alternates: {
    canonical: "https://dubai-architecture.info/buildings/",
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
