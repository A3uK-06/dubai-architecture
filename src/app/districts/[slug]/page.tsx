import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DISTRICTS } from "@/data/districts";
import DistrictDetailClient from "@/components/DistrictDetailClient";
import { getSeoAlternates } from "@/lib/seoAlternates";

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
  const imageUrl = district.image.startsWith("http")
    ? district.image
    : `https://dubai-architecture.info${district.image}`;

  return {
    title,
    description,
    alternates: getSeoAlternates(`/districts/${district.slug}/`),
    openGraph: {
      title,
      description,
      url: `https://dubai-architecture.info/districts/${district.slug}/`,
      siteName: "Dubai Architecture",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: district.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
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
