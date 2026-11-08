import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DEVELOPERS, getDeveloperBySlug } from "@/data/developers";
import { BUILDINGS } from "@/data/buildings";
import SchemaOrg from "@/components/SchemaOrg";
import DeveloperDetailClient from "@/components/DeveloperDetailClient";

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

  return {
    title,
    description,
    alternates: {
      canonical: `https://dubai-architecture.info/developers/${developer.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://dubai-architecture.info/developers/${developer.slug}/`,
      siteName: "Dubai Architecture",
      type: "article",
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
      <SchemaOrg
        type="breadcrumbs"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Developers", url: "https://dubai-architecture.info/developers/" },
          { name: developer.name, url: `https://dubai-architecture.info/developers/${developer.slug}/` },
        ]}
      />
      <DeveloperDetailClient initialDeveloper={developer} buildings={BUILDINGS} />
    </>
  );
}
