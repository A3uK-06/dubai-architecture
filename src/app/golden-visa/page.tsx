import React from "react";
import type { Metadata } from "next";
import GoldenVisaWidget from "@/components/GoldenVisaWidget";

export const metadata: Metadata = {
  title: "UAE 10-Year Golden Visa via Real Estate — Qualification Guide",
  description:
    "Check your eligibility for the UAE 10-Year Golden Visa by investing in Dubai real estate from 2,000,000 AED ($545,000 USD). 100% foreign ownership, 0% taxes.",
  alternates: {
    canonical: "https://dubai-architecture.info/golden-visa/",
  },
};

export default function GoldenVisaPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      <GoldenVisaWidget />
    </div>
  );
}
