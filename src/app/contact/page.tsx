import React from "react";
import type { Metadata } from "next";
import SchemaOrg from "@/components/SchemaOrg";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Editorial & Research Office | Dubai Architecture",
  description:
    "Contact the Dubai Architecture editorial board, structural research desk, and press office. Submit architectural documentation or inquire about verified tower allocations.",
  alternates: {
    canonical: "https://dubai-architecture.info/contact/",
  },
};

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <>
      <SchemaOrg
        type="contact"
        breadcrumbs={[
          { name: "Home", url: "https://dubai-architecture.info/" },
          { name: "Contact Office", url: "https://dubai-architecture.info/contact/" },
        ]}
      />
      <ContactClient />
    </>
  );
}
