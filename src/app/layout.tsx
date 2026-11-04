import type { Metadata } from "next";
import "./compiled-tailwind.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import SchemaOrg from "@/components/SchemaOrg";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Tracker from "@/components/Tracker";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://dubai-architecture.info"),
  title: {
    default: "Dubai Architecture | Skyscrapers & Luxury Real Estate Encyclopedia",
    template: "%s | Dubai Architecture (Since 2006)",
  },
  description:
    "The historical architectural encyclopedia of Dubai skyscrapers since 2006. Engineering masterpieces, iconic towers, and premium real estate investment opportunities.",
  keywords: [
    "Dubai Architecture",
    "Dubai Skyscrapers",
    "Burj Khalifa",
    "Emirates Towers",
    "Dubai Real Estate Investment",
    "Dubai Luxury Towers",
    "UAE Golden Visa Real Estate",
    "Skyscrapers Catalog",
  ],
  alternates: {
    canonical: "https://dubai-architecture.info/",
  },
  openGraph: {
    title: "Dubai Architecture | Historical Skyscrapers Encyclopedia",
    description:
      "Documenting Dubai's iconic skyline since 2006. Architectural engineering meets luxury investment opportunities.",
    url: "https://dubai-architecture.info/",
    siteName: "Dubai Architecture",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Architecture | Skyscrapers Encyclopedia",
    description: "Documenting Dubai's skyline since 2006.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#F7F5F0] text-[#1C1917] selection:bg-[#8C6A48]/20 selection:text-[#1C1917] font-sans">
        <Providers>
          <GoogleAnalytics />
          <Tracker />
          <SchemaOrg type="website" />
          <Header />
          {children}
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
