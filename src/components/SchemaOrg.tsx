import React from "react";
import { Building } from "@/data/buildings";

interface SchemaOrgProps {
  type?: "website" | "building" | "catalog";
  building?: Building;
}

export default function SchemaOrg({ type = "website", building }: SchemaOrgProps) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://dubai-architecture.info/#website",
        url: "https://dubai-architecture.info/",
        name: "Dubai Architecture",
        alternateName: "Dubai Architecture & Skyscrapers Encyclopedia",
        description:
          "Historical encyclopedia of Dubai skyscrapers and architectural heritage since 2006, connecting investors with premium property allocations.",
        inLanguage: ["en", "ru", "ar", "hi", "zh", "de", "fr", "ur", "it", "tr"],
        potentialAction: {
          "@type": "SearchAction",
          target: "https://dubai-architecture.info/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://dubai-architecture.info/#organization",
        name: "Dubai Architecture",
        url: "https://dubai-architecture.info/",
        foundingDate: "2006",
        sameAs: [
          "https://en.wikipedia.org/wiki/Architecture_of_Dubai",
        ],
      },
    ],
  };

  const buildingSchema = building
    ? {
        "@context": "https://schema.org",
        "@type": "LandmarksOrHistoricalBuildings",
        name: building.name,
        description: building.description,
        url: `https://dubai-architecture.info/buildings/${building.slug}/`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        architect: {
          "@type": "Person",
          name: building.architect,
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Height (Meters)",
            value: building.heightMeters,
          },
          {
            "@type": "PropertyValue",
            name: "Floors",
            value: building.floors,
          },
          {
            "@type": "PropertyValue",
            name: "Year Built",
            value: building.yearBuilt,
          },
          {
            "@type": "PropertyValue",
            name: "Developer",
            value: building.developer,
          },
        ],
      }
    : null;

  const schemaToRender = type === "building" && buildingSchema ? buildingSchema : websiteSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToRender) }}
    />
  );
}
