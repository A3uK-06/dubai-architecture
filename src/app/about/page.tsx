import React from "react";
import type { Metadata } from "next";
import SchemaOrg from "@/components/SchemaOrg";
import AboutClient from "@/components/AboutClient";
import { getSeoAlternates } from "@/lib/seoAlternates";

export const metadata: Metadata = {
  title: "About Dubai Architecture Archive | Est. 2006 — Structural & Heritage Encyclopedia",
  description:
    "The history, editorial mission, and structural engineering methodology of Dubai-Architecture.info. Documenting UAE skyscrapers since 2006 with open cadastral validation.",
  alternates: getSeoAlternates("/about/"),
  openGraph: {
    title: "About Dubai Architecture Archive | Est. 2006",
    description: "Historical archive and structural engineering encyclopedia of Dubai skyscrapers since 2006.",
    url: "https://dubai-architecture.info/about/",
    siteName: "Dubai Architecture",
    type: "website",
    images: [
      {
        url: "https://dubai-architecture.info/images/hero-dubai-skyline.jpg",
        width: 1200,
        height: 630,
        alt: "About Dubai Architecture Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dubai Architecture Archive (Est. 2006)",
    description: "Historical archive and structural engineering encyclopedia of Dubai skyscrapers.",
    images: ["https://dubai-architecture.info/images/hero-dubai-skyline.jpg"],
  },
};

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <>
      <SchemaOrg
        type="about"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "About Dubai Architecture", url: "https://dubai-architecture.info/about/" },
        ]}
      />
      <AboutClient />
    </>
  );
}
