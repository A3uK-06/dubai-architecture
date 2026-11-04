import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BUILDINGS } from "@/data/buildings";
import BuildingDetailClient from "@/components/BuildingDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BUILDINGS.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const building = BUILDINGS.find((b) => b.slug === slug);

  if (!building) {
    return {
      title: "Building Not Found",
    };
  }

  const title = `${building.name} (${building.heightMeters}m) — Architectural Profile & Investment`;
  const description = `Complete structural architecture profile, engineering specifications, developer info, and luxury investment allocations for ${building.name} in ${building.district}, Dubai.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://dubai-architecture.info/buildings/${building.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://dubai-architecture.info/buildings/${building.slug}/`,
      siteName: "Dubai Architecture",
      type: "article",
    },
  };
}

export default async function BuildingPage({ params }: PageProps) {
  const { slug } = await params;
  const building = BUILDINGS.find((b) => b.slug === slug);

  if (!building) {
    notFound();
  }

  return <BuildingDetailClient initialBuilding={building} />;
}
