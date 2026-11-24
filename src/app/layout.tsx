import type { Metadata, Viewport } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./compiled-tailwind.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Tracker from "@/components/Tracker";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getSeoAlternates } from "@/lib/seoAlternates";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F172A" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
};

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
  alternates: getSeoAlternates("/"),
  openGraph: {
    title: "Dubai Architecture | Historical Skyscrapers Encyclopedia",
    description:
      "Documenting Dubai's iconic skyline since 2006. Architectural engineering meets luxury investment opportunities.",
    url: "https://dubai-architecture.info/",
    siteName: "Dubai Architecture",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dubai-architecture.info/images/hero-dubai-skyline.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Architecture Skyline Encyclopedia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Architecture | Skyscrapers Encyclopedia",
    description: "Documenting Dubai's skyline since 2006.",
    images: ["https://dubai-architecture.info/images/hero-dubai-skyline.jpg"],
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

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${manrope.variable} ${montserrat.variable}`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-P5QVMKMB" />
        <script
          id="google-tag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
        <script
          id="suppress-pwa-install"
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();});`,
          }}
        />
        <meta name="theme-color" content="#0F172A" />
        <meta name="msapplication-TileColor" content="#0F172A" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon-48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon-96.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
