import React from "react";
import type { Metadata } from "next";
import SchemaOrg from "@/components/SchemaOrg";
import EditorialPolicyClient from "@/components/EditorialPolicyClient";

export const metadata: Metadata = {
  title: "Editorial Policy & Due Diligence Standards | Dubai Architecture",
  description:
    "Our editorial standards, technical fact-checking protocols, conflict of interest safeguards, and independent structural audit methodology.",
  alternates: {
    canonical: "https://dubai-architecture.info/editorial-policy/",
  },
};

export const dynamic = "force-static";

export default function EditorialPolicyPage() {
  return (
    <>
      <SchemaOrg
        type="policy"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Editorial Policy", url: "https://dubai-architecture.info/editorial-policy/" },
        ]}
      />
      <EditorialPolicyClient />
    </>
  );
}
