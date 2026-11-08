import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DEVELOPERS, getDeveloperBySlug } from "@/data/developers";
import { BUILDINGS } from "@/data/buildings";
import SchemaOrg from "@/components/SchemaOrg";
import DeveloperDetailClient from "@/components/DeveloperDetailClient";
import { getSeoAlternates } from "@/lib/seoAlternates";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DEVELOPERS.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const developer = getDeveloperBySlug(slug);

  if (!developer) {
    return {
      title: "Developer Not Found",
    };
  }

  const title = `${developer.name} — Dubai Projects, Delivery Track Record & Portfolio`;
  const description = `Official due diligence dossier for ${developer.name}. DLD escrow account reliability, on-time delivery rate (${developer.onTimeDeliveryRate}), architectural skyscraper portfolio, and investment returns.`;
  const imageUrl = "https://dubai-architecture.info/images/hero-dubai-skyline.jpg";

  return {
    title,
    description,
    alternates: getSeoAlternates(`/developers/${developer.slug}/`),
    openGraph: {
      title,
      description,
      url: `https://dubai-architecture.info/developers/${developer.slug}/`,
      siteName: "Dubai Architecture",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: developer.name,
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

export const dynamic = "force-static";

export default async function DeveloperDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const developer = getDeveloperBySlug(slug);

  if (!developer) {
    notFound();
  }

  return (
    <>
      <SchemaOrg type="developer" developer={developer} />
      <DeveloperDetailClient initialDeveloper={developer} buildings={BUILDINGS} />
    </>
  );
}
