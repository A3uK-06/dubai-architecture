import type { MetadataRoute } from "next";
import { BUILDINGS } from "@/data/buildings";
import { DISTRICTS } from "@/data/districts";
import { LANGUAGES } from "@/i18n/languages";

const BASE_URL = "https://dubai-architecture.info";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const langCodes = Object.keys(LANGUAGES);

  const getAlternates = (path: string) => {
    const languages: Record<string, string> = {};
    for (const code of langCodes) {
      languages[code] = `${BASE_URL}${path}?lang=${code}`;
    }
    return { languages };
  };

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
      alternates: getAlternates("/"),
    },
    {
      url: `${BASE_URL}/buildings/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
      alternates: getAlternates("/buildings/"),
    },
    {
      url: `${BASE_URL}/districts/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: getAlternates("/districts/"),
    },
    {
      url: `${BASE_URL}/calculator/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: getAlternates("/calculator/"),
    },
    {
      url: `${BASE_URL}/golden-visa/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: getAlternates("/golden-visa/"),
    },
    {
      url: `${BASE_URL}/methodology/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: getAlternates("/methodology/"),
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: getAlternates("/about/"),
    },
    {
      url: `${BASE_URL}/editorial-policy/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: getAlternates("/editorial-policy/"),
    },
    {
      url: `${BASE_URL}/affiliate-disclosure/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: getAlternates("/affiliate-disclosure/"),
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: getAlternates("/contact/"),
    },
  ];

  const buildingPages: MetadataRoute.Sitemap = BUILDINGS.map((building) => ({
    url: `${BASE_URL}/buildings/${building.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: building.featured ? 0.9 : 0.8,
    alternates: getAlternates(`/buildings/${building.slug}/`),
  }));

  const districtPages: MetadataRoute.Sitemap = DISTRICTS.map((district) => ({
    url: `${BASE_URL}/districts/${district.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
    alternates: getAlternates(`/districts/${district.slug}/`),
  }));

  return [...staticPages, ...buildingPages, ...districtPages];
}
