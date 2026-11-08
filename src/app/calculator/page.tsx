import React from "react";
import type { Metadata } from "next";
import RoiCalculator from "@/components/RoiCalculator";
import SchemaOrg from "@/components/SchemaOrg";
import { getSeoAlternates } from "@/lib/seoAlternates";

export const metadata: Metadata = {
  title: "Dubai Real Estate ROI & Rental Yield Calculator",
  description:
    "Calculate net rental yield, maintenance fees, and 5-year capital appreciation for Dubai skyscrapers in USD, AED, EUR, GBP, and RUB.",
  alternates: getSeoAlternates("/calculator/"),
  openGraph: {
    title: "Dubai Real Estate ROI & Rental Yield Calculator",
    description: "Calculate net rental yield, service charges, and appreciation across Dubai towers.",
    url: "https://dubai-architecture.info/calculator/",
    siteName: "Dubai Architecture",
    type: "website",
    images: [
      {
        url: "https://dubai-architecture.info/images/hero-dubai-skyline.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai ROI Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Real Estate ROI & Rental Yield Calculator",
    description: "Calculate net rental yields and capital appreciation across Dubai towers.",
    images: ["https://dubai-architecture.info/images/hero-dubai-skyline.jpg"],
  },
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      <SchemaOrg type="calculator" />
      <RoiCalculator />
    </div>
  );
}
