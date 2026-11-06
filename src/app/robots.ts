import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/ghost", "/ghost/"],
      },
      // Explicit allowance for Microsoft Bing & AI Search Engines
      {
        userAgent: [
          "Bingbot",
          "msnbot",
          "BingPreview",
          "OAI-SearchBot",
          "ChatGPT-User",
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot",
        ],
        allow: "/",
        disallow: ["/ghost", "/ghost/"],
      },
    ],
    sitemap: "https://dubai-architecture.info/sitemap.xml",
    host: "https://dubai-architecture.info",
  };
}
