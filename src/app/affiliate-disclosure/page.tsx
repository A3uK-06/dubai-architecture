import React from "react";
import type { Metadata } from "next";
import SchemaOrg from "@/components/SchemaOrg";
import AffiliateDisclosureClient from "@/components/AffiliateDisclosureClient";

export const metadata: Metadata = {
  title: "Affiliate & RERA Brokerage Disclosure | Dubai Architecture",
  description:
    "Official disclosure of our accredited brokerage network (Metropolitan Premium Properties & Whitewill), RERA compliance, DLD escrow protocols, and user terms.",
  alternates: {
    canonical: "https://dubai-architecture.info/affiliate-disclosure/",
  },
};

export const dynamic = "force-static";

export default function AffiliateDisclosurePage() {
  return (
    <>
      <SchemaOrg
        type="policy"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Affiliate & Brokerage Disclosure", url: "https://dubai-architecture.info/affiliate-disclosure/" },
        ]}
      />
      <AffiliateDisclosureClient />
    </>
  );
}
