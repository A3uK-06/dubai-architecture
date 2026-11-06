import type { Metadata } from "next";
import "./compiled-tailwind.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  verification: {
    other: {
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
        : {}),
    },
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon-48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon-96.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0F172A] selection:bg-[#8C6A48]/20 selection:text-[#0F172A] font-sans antialiased">
        <Providers>
          <GoogleAnalytics />
          <Tracker />
          <SchemaOrg type="website" />
          <Header />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
