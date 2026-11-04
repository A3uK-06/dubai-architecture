import React from "react";
import type { Metadata } from "next";
import DistrictsSection from "@/components/DistrictsSection";

export const metadata: Metadata = {
  title: "Dubai Districts Directory — Master Communities",
  description:
    "Comprehensive guide to Dubai's prime architectural districts: Downtown Dubai, Dubai Marina, DIFC, Palm Jumeirah, Business Bay, JLT, Creek Harbour, and JVC.",
  alternates: {
    canonical: "https://dubai-architecture.info/districts/",
  },
};

export default function DistrictsPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      <DistrictsSection />
    </div>
  );
}
