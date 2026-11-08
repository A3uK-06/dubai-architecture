import React from "react";
import type { Metadata } from "next";
import SchemaOrg from "@/components/SchemaOrg";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Dubai Architecture Archive | Est. 2006 — Structural & Heritage Encyclopedia",
  description:
    "The history, editorial mission, and structural engineering methodology of Dubai-Architecture.info. Documenting UAE skyscrapers since 2006 with open cadastral validation.",
  alternates: {
    canonical: "https://dubai-architecture.info/about/",
  },
};

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <>
      <SchemaOrg
        type="about"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "About Dubai Architecture", url: "https://dubai-architecture.info/about/" },
        ]}
      />
      <AboutClient />
    </>
  );
}
