import React from "react";
import type { Metadata } from "next";
import CatalogSection from "@/components/CatalogSection";

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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-6">
      <CatalogSection />
    </div>
  );
}
