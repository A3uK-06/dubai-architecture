import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DISTRICTS } from "@/data/districts";
import DistrictDetailClient from "@/components/DistrictDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DISTRICTS.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const district = DISTRICTS.find((d) => d.slug === slug);

  if (!district) {
    return {
      title: "District Not Found",
    };
  }

  const title = `${district.name} — Architecture & Real Estate Guide, Dubai`;
  const description = `Explore ${district.name} architecture, landmark skyscraper towers, master plan overview, and rental yields (${district.averageRoi}).`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://dubai-architecture.info/districts/${district.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://dubai-architecture.info/districts/${district.slug}/`,
      siteName: "Dubai Architecture",
      type: "website",
    },
  };
}

export default async function DistrictPage({ params }: PageProps) {
  const { slug } = await params;
  const district = DISTRICTS.find((d) => d.slug === slug);

  if (!district) {
    notFound();
  }

  return <DistrictDetailClient initialDistrict={district} />;
}
