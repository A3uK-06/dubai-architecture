import React from "react";
import type { Metadata } from "next";
import SchemaOrg from "@/components/SchemaOrg";
import DevelopersClient from "@/components/DevelopersClient";

export const metadata: Metadata = {
  title: "Top Dubai Real Estate Developers | Institutional Reliability & Projects Guide",
  description:
    "Comprehensive guide to Dubai's top master developers (Emaar, Sobha, Nakheel, Omniyat, Binghatti, Meraas). DLD escrow ratings, on-time delivery track records, and architectural portfolios.",
  alternates: {
    canonical: "https://dubai-architecture.info/developers/",
  },
};

export const dynamic = "force-static";

export default function DevelopersPage() {
  return (
    <>
      <SchemaOrg
        type="breadcrumbs"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Master Developers", url: "https://dubai-architecture.info/developers/" },
        ]}
      />
      <DevelopersClient />
    </>
  );
}
