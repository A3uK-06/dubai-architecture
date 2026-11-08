import React from "react";
import { Building } from "@/data/buildings";
import { District } from "@/data/districts";
import { Developer } from "@/data/developers";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

interface SchemaOrgProps {
  type?: "website" | "building" | "district" | "developer" | "calculator" | "golden-visa" | "breadcrumbs" | "about" | "contact" | "policy";
  building?: Building;
  district?: District;
  developer?: Developer;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQItem[];
}

const BASE_URL = "https://dubai-architecture.info";

export default function SchemaOrg({
  type = "website",
  building,
  district,
  developer,
  breadcrumbs,
  faq,
}: SchemaOrgProps) {
  // 1. Global Website & Organization Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: `${BASE_URL}/`,
        name: "Dubai Architecture",
        alternateName: "Dubai Architecture & Skyscrapers Encyclopedia",
        description:
          "Historical encyclopedia of Dubai skyscrapers and architectural heritage since 2006, connecting investors with premium property allocations.",
        inLanguage: ["en", "ru", "ar", "hi", "zh", "de", "fr", "ur", "it", "tr"],
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE_URL}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Dubai Architecture",
        url: `${BASE_URL}/`,
        foundingDate: "2006",
        logo: `${BASE_URL}/icon.svg`,
        sameAs: [
          "https://en.wikipedia.org/wiki/Architecture_of_Dubai",
          "https://en.wikipedia.org/wiki/List_of_tallest_buildings_in_Dubai",
        ],
        knowsAbout: [
          "Dubai Architecture & Structural Engineering",
          "High-Rise Construction & Wind Damping Systems",
          "Dubai Land Department Open Data & Transaction Registers",
          "UAE Golden Visa Property Investment Criteria",
          "RERA Real Estate Brokerage Compliance"
        ],
        publishingPrinciples: "https://dubai-architecture.info/#methodology",
      },
    ],
  };

  // 2. Building Landmark Schema + Breadcrumbs
  const getBuildingSchema = () => {
    if (!building) return null;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LandmarksOrHistoricalBuildings",
          "@id": `${BASE_URL}/buildings/${building.slug}/#landmark`,
          name: building.name,
          description: building.description,
          url: `${BASE_URL}/buildings/${building.slug}/`,
          image: building.image ? `${BASE_URL}${building.image}` : undefined,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressRegion: "Dubai",
            addressCountry: "AE",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.2048,
            longitude: 55.2708,
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
              unitCode: "MTR",
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
            {
              "@type": "PropertyValue",
              name: "Estimated Investment Yield",
              value: building.investmentYield,
            },
            {
              "@type": "PropertyValue",
              name: "Annual Service Charge (AED/sq.ft)",
              value: building.operatingSpecs?.annualServiceChargeAedSqFt || 20,
            },
            {
              "@type": "PropertyValue",
              name: "District Cooling Infrastructure",
              value: building.operatingSpecs?.chillerBilling || "Empower Metered",
            },
          ],
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/buildings/${building.slug}/#breadcrumbs`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${BASE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Skyscrapers",
              item: `${BASE_URL}/buildings/`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: building.name,
              item: `${BASE_URL}/buildings/${building.slug}/`,
            },
          ],
        },
      ],
    };
  };

  // 3. District / Neighborhood Schema + Breadcrumbs
  const getDistrictSchema = () => {
    if (!district) return null;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Place",
          additionalType: "https://schema.org/AdministrativeArea",
          "@id": `${BASE_URL}/districts/${district.slug}/#place`,
          name: district.name,
          description: district.description || district.overview,
          url: `${BASE_URL}/districts/${district.slug}/`,
          image: district.image ? `${BASE_URL}${district.image}` : undefined,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressRegion: "Dubai",
            addressCountry: "AE",
          },
          containedInPlace: {
            "@type": "City",
            name: "Dubai",
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Master Developer",
              value: district.developer,
            },
            {
              "@type": "PropertyValue",
              name: "Average ROI",
              value: district.averageRoi,
            },
            {
              "@type": "PropertyValue",
              name: "Key Landmark Towers",
              value: district.keyLandmarks?.join(", ") || "",
            },
          ],
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/districts/${district.slug}/#breadcrumbs`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${BASE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Dubai Districts",
              item: `${BASE_URL}/districts/`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: district.name,
              item: `${BASE_URL}/districts/${district.slug}/`,
            },
          ],
        },
      ],
    };
  };

  // 3.5 Developer Schema + Breadcrumbs
  const getDeveloperSchema = () => {
    if (!developer) return null;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["Organization", "RealEstateAgent"],
          "@id": `${BASE_URL}/developers/${developer.slug}/#organization`,
          name: developer.name,
          alternateName: developer.shortName,
          description: developer.description,
          url: `${BASE_URL}/developers/${developer.slug}/`,
          sameAs: [developer.website],
          foundingDate: developer.foundingYear.toString(),
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "AE",
            streetAddress: developer.headquarters,
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "DLD Escrow Rating",
              value: developer.dldEscrowRating,
            },
            {
              "@type": "PropertyValue",
              name: "Tier",
              value: developer.tier,
            },
            {
              "@type": "PropertyValue",
              name: "On-Time Delivery Rate",
              value: developer.onTimeDeliveryRate,
            },
            {
              "@type": "PropertyValue",
              name: "Average Net ROI",
              value: developer.averageNetRoi,
            },
            {
              "@type": "PropertyValue",
              name: "Total Projects in Dubai",
              value: developer.totalProjectsDubai,
            },
          ],
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/developers/${developer.slug}/#breadcrumbs`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${BASE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Master Developers",
              item: `${BASE_URL}/developers/`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: developer.name,
              item: `${BASE_URL}/developers/${developer.slug}/`,
            },
          ],
        },
      ],
    };
  };

  // 4. ROI Calculator Schema
  const getCalculatorSchema = () => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebApplication",
          "@id": `${BASE_URL}/calculator/#app`,
          name: "Dubai Real Estate ROI & Yield Calculator",
          url: `${BASE_URL}/calculator/`,
          applicationCategory: "FinanceApplication",
          operatingSystem: "All",
          description:
            "Calculate net rental yield, short-term vs long-term ROI, and capital appreciation for Dubai luxury residential towers and off-plan assets.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "AED",
          },
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/calculator/#breadcrumbs`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${BASE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "ROI Calculator",
              item: `${BASE_URL}/calculator/`,
            },
          ],
        },
      ],
    };
  };

  // 5. Golden Visa FAQ & Eligibility Schema
  const getGoldenVisaSchema = () => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "@id": `${BASE_URL}/golden-visa/#faq`,
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the minimum property investment for the UAE 10-Year Golden Visa?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The minimum investment requirement is 2,000,000 AED (approx. $545,000 USD). Investors can purchase one or multiple ready or off-plan properties in designated freehold areas of Dubai.",
              },
            },
            {
              "@type": "Question",
              name: "Can off-plan and mortgaged properties qualify for the Dubai Golden Visa?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, both off-plan properties from DLD-approved developers and mortgaged properties qualify once the investor's equity or payment reaches at least 2,000,000 AED.",
              },
            },
            {
              "@type": "Question",
              name: "Are family members and domestic helpers sponsored under the Golden Visa?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, the 10-year Golden Visa permits the primary holder to sponsor their spouse, children regardless of age, and domestic staff with full residency rights.",
              },
            },
            {
              "@type": "Question",
              name: "Is there a requirement to stay in the UAE continuously to keep the Golden Visa?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, Golden Visa holders are exempt from the standard rule that requires entry every 6 months. You can stay outside the UAE indefinitely without invalidating your residency.",
              },
            },
          ],
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/golden-visa/#breadcrumbs`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${BASE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "UAE Golden Visa",
              item: `${BASE_URL}/golden-visa/`,
            },
          ],
        },
      ],
    };
  };

  // 6. Generic BreadcrumbList Schema
  const getCustomBreadcrumbsSchema = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null;
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
  };

  // Choose appropriate schema based on type
  let schemaToRender: Record<string, unknown> | null = websiteSchema;

  if (type === "building") {
    schemaToRender = getBuildingSchema() || websiteSchema;
  } else if (type === "district") {
    schemaToRender = getDistrictSchema() || websiteSchema;
  } else if (type === "developer") {
    schemaToRender = getDeveloperSchema() || websiteSchema;
  } else if (type === "calculator") {
    schemaToRender = getCalculatorSchema();
  } else if (type === "golden-visa") {
    schemaToRender = getGoldenVisaSchema();
  } else if (type === "breadcrumbs") {
    schemaToRender = getCustomBreadcrumbsSchema() || websiteSchema;
  } else if (type === "about") {
    schemaToRender = {
      "@context": "https://schema.org",
      "@graph": [
        ...(breadcrumbs && breadcrumbs.length > 0 ? [getCustomBreadcrumbsSchema()] : []),
        {
          "@type": "AboutPage",
          "@id": `${BASE_URL}/about/#webpage`,
          url: `${BASE_URL}/about/`,
          name: "About Dubai Architecture Archive (Est. 2006)",
          description: "Historical archive and structural engineering encyclopedia of Dubai skyscrapers, established in 2006.",
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/#organization` },
        },
      ],
    };
  } else if (type === "contact") {
    schemaToRender = {
      "@context": "https://schema.org",
      "@graph": [
        ...(breadcrumbs && breadcrumbs.length > 0 ? [getCustomBreadcrumbsSchema()] : []),
        {
          "@type": "ContactPage",
          "@id": `${BASE_URL}/contact/#webpage`,
          url: `${BASE_URL}/contact/`,
          name: "Contact Editorial & Research Office | Dubai Architecture",
          description: "Contact the editorial, engineering research desk, and press office of Dubai Architecture.",
          isPartOf: { "@id": `${BASE_URL}/#website` },
        },
      ],
    };
  } else if (type === "policy") {
    schemaToRender = {
      "@context": "https://schema.org",
      "@graph": [
        ...(breadcrumbs && breadcrumbs.length > 0 ? [getCustomBreadcrumbsSchema()] : []),
        {
          "@type": "WebPage",
          "@id": `${BASE_URL}/#webpage`,
          isPartOf: { "@id": `${BASE_URL}/#website` },
        },
      ],
    };
  }

  // Optional extra FAQ injection
  if (faq && faq.length > 0 && schemaToRender) {
    const faqSchema = {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
    if (Array.isArray((schemaToRender as { "@graph"?: unknown[] })["@graph"])) {
      (schemaToRender as { "@graph": unknown[] })["@graph"].push(faqSchema);
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToRender) }}
    />
  );
}
