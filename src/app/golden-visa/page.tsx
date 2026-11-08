import React from "react";
import type { Metadata } from "next";
import GoldenVisaWidget from "@/components/GoldenVisaWidget";
import SchemaOrg from "@/components/SchemaOrg";
import { getSeoAlternates } from "@/lib/seoAlternates";

export const metadata: Metadata = {
  title: "UAE 10-Year Golden Visa via Real Estate — Qualification Guide",
  description:
    "Check your eligibility for the UAE 10-Year Golden Visa by investing in Dubai real estate from 2,000,000 AED ($545,000 USD). 100% foreign ownership, 0% taxes.",
  alternates: getSeoAlternates("/golden-visa/"),
  openGraph: {
    title: "UAE 10-Year Golden Visa via Real Estate — Qualification Guide",
    description: "Check eligibility for UAE 10-Year Golden Visa with 2,000,000 AED investment threshold.",
    url: "https://dubai-architecture.info/golden-visa/",
    siteName: "Dubai Architecture",
    type: "website",
    images: [
      {
        url: "https://dubai-architecture.info/images/hero-dubai-skyline.jpg",
        width: 1200,
        height: 630,
        alt: "UAE Golden Visa Qualification Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE 10-Year Golden Visa via Real Estate",
    description: "Check eligibility for UAE 10-Year Golden Visa from 2,000,000 AED.",
    images: ["https://dubai-architecture.info/images/hero-dubai-skyline.jpg"],
  },
};

export default function GoldenVisaPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      <SchemaOrg type="golden-visa" />
      <GoldenVisaWidget />
    </div>
  );
}
