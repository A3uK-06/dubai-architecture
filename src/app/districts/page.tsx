import React from "react";
import type { Metadata } from "next";
import DistrictsSection from "@/components/DistrictsSection";
import SchemaOrg from "@/components/SchemaOrg";
import { getSeoAlternates } from "@/lib/seoAlternates";

export const metadata: Metadata = {
  title: "Dubai Districts Directory — Master Communities",
  description:
    "Comprehensive guide to Dubai's prime architectural districts: Downtown Dubai, Dubai Marina, DIFC, Palm Jumeirah, Business Bay, JLT, Creek Harbour, and JVC.",
  alternates: getSeoAlternates("/districts/"),
  openGraph: {
    title: "Dubai Districts Directory — Master Communities",
    description: "Comprehensive guide to Dubai's prime architectural districts and ROI benchmarks.",
    url: "https://dubai-architecture.info/districts/",
    siteName: "Dubai Architecture",
    type: "website",
    images: [
      {
        url: "https://dubai-architecture.info/images/hero-dubai-skyline.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Districts Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Districts Directory",
    description: "Guide to Dubai prime architectural districts and ROI benchmarks.",
    images: ["https://dubai-architecture.info/images/hero-dubai-skyline.jpg"],
  },
};

export default function DistrictsPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      <SchemaOrg
        type="breadcrumbs"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Dubai Districts", url: "https://dubai-architecture.info/districts/" },
        ]}
      />
      <DistrictsSection />
    </div>
  );
}
