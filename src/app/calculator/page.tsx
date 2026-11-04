import React from "react";
import type { Metadata } from "next";
import RoiCalculator from "@/components/RoiCalculator";

export const metadata: Metadata = {
  title: "Dubai Real Estate ROI & Rental Yield Calculator",
  description:
    "Calculate net rental yield, maintenance fees, and 5-year capital appreciation for Dubai skyscrapers in USD, AED, EUR, GBP, and RUB.",
  alternates: {
    canonical: "https://dubai-architecture.info/calculator/",
  },
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      <RoiCalculator />
    </div>
  );
}
