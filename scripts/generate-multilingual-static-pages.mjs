#!/usr/bin/env node

/**
 * Multilingual Static Pages Generator for GitHub Pages SEO
 * 
 * Generates crawlable, static HTML pages in language subdirectories (/ru/, /ar/, /zh/, /de/, /fr/)
 * with localized <title>, <meta description>, <html lang="..." dir="...">, canonical tags,
 * and pre-hydrated localized text content.
 * 
 * Ensures Google, Yandex, Bing, and Baidu index all foreign language queries for Dubai real estate.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");
const outDir = path.join(rootDir, "out");

const TARGET_LANGS = [
  { code: "ru", name: "Russian", dir: "ltr" },
  { code: "ar", name: "Arabic", dir: "rtl" },
  { code: "zh", name: "Chinese", dir: "ltr" },
  { code: "de", name: "German", dir: "ltr" },
  { code: "fr", name: "French", dir: "ltr" },
];

async function main() {
  if (!fs.existsSync(outDir)) {
    console.error("❌ 'out' directory not found. Please run 'next build' first.");
    process.exit(1);
  }

  console.log("🌍 Starting Multilingual Static Pages Generation for SEO...");

  // Import project data
  const { BUILDINGS } = await import("../src/data/buildings.ts");
  const { DISTRICTS } = await import("../src/data/districts.ts");
  const { DEVELOPERS } = await import("../src/data/developers.ts");
  const locContent = await import("../src/data/localizedContent.ts");

  const staticRoutes = [
    "",
    "buildings",
    "districts",
    "developers",
    "calculator",
    "golden-visa",
    "methodology",
    "about",
    "contact",
    "editorial-policy",
    "affiliate-disclosure",
  ];

  let generatedPagesCount = 0;

  for (const lang of TARGET_LANGS) {
    const langCode = lang.code;
    const isRtl = lang.dir === "rtl";

    // 1. Process Static Pages
    for (const route of staticRoutes) {
      const srcHtmlPath = route === "" 
        ? path.join(outDir, "index.html") 
        : path.join(outDir, route, "index.html");

      if (!fs.existsSync(srcHtmlPath)) continue;

      let html = fs.readFileSync(srcHtmlPath, "utf-8");

      // Replace html lang & dir
      html = html.replace(/<html[^>]*>/, `<html lang="${langCode}" dir="${lang.dir}">`);

      // Pre-inject localStorage so React hydrates instantly in this language
      const langScript = `<script>try{localStorage.setItem('dubai_arch_lang','${langCode}');document.documentElement.lang='${langCode}';document.documentElement.dir='${lang.dir}';}catch(e){}</script>`;
      html = html.replace("<head>", `<head>${langScript}`);

      // Update canonical
      const targetCanonical = `https://dubai-architecture.info/${langCode}/${route ? route + "/" : ""}`;
      html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${targetCanonical}">`);

      // Write destination
      const destDir = route === "" 
        ? path.join(outDir, langCode) 
        : path.join(outDir, langCode, route);

      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(path.join(destDir, "index.html"), html, "utf-8");
      generatedPagesCount++;
    }

    // 2. Process Buildings
    const buildingsDictName = `LOCALIZED_BUILDINGS_${langCode.toUpperCase()}`;
    const locBuildings = locContent[buildingsDictName] || {};

    for (const b of BUILDINGS) {
      const srcHtmlPath = path.join(outDir, "buildings", b.slug, "index.html");
      if (!fs.existsSync(srcHtmlPath)) continue;

      let html = fs.readFileSync(srcHtmlPath, "utf-8");
      const loc = locBuildings[b.slug] || {};

      html = html.replace(/<html[^>]*>/, `<html lang="${langCode}" dir="${lang.dir}">`);
      const langScript = `<script>try{localStorage.setItem('dubai_arch_lang','${langCode}');document.documentElement.lang='${langCode}';document.documentElement.dir='${lang.dir}';}catch(e){}</script>`;
      html = html.replace("<head>", `<head>${langScript}`);

      // Canonical
      const targetCanonical = `https://dubai-architecture.info/${langCode}/buildings/${b.slug}/`;
      html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${targetCanonical}">`);

      // Localized title & description if available
      if (loc.name) {
        const localizedTitle = `${loc.name} (${b.heightMeters}m) — Dubai Architecture & Investment`;
        html = html.replace(/<title>.*?<\/title>/, `<title>${localizedTitle}</title>`);
      }
      if (loc.description) {
        html = html.replace(/<meta name="description" content=".*?"\/>/, `<meta name="description" content="${loc.description.replace(/"/g, '&quot;')}" />`);
      }

      const destDir = path.join(outDir, langCode, "buildings", b.slug);
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(path.join(destDir, "index.html"), html, "utf-8");
      generatedPagesCount++;
    }

    // 3. Process Districts
    const districtsDictName = `LOCALIZED_DISTRICTS_${langCode.toUpperCase()}`;
    const locDistricts = locContent[districtsDictName] || {};

    for (const d of DISTRICTS) {
      const srcHtmlPath = path.join(outDir, "districts", d.slug, "index.html");
      if (!fs.existsSync(srcHtmlPath)) continue;

      let html = fs.readFileSync(srcHtmlPath, "utf-8");
      const loc = locDistricts[d.slug] || {};

      html = html.replace(/<html[^>]*>/, `<html lang="${langCode}" dir="${lang.dir}">`);
      const langScript = `<script>try{localStorage.setItem('dubai_arch_lang','${langCode}');document.documentElement.lang='${langCode}';document.documentElement.dir='${lang.dir}';}catch(e){}</script>`;
      html = html.replace("<head>", `<head>${langScript}`);

      const targetCanonical = `https://dubai-architecture.info/${langCode}/districts/${d.slug}/`;
      html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${targetCanonical}">`);

      if (loc.name) {
        const localizedTitle = `${loc.name} — Dubai Districts Architecture & Yields`;
        html = html.replace(/<title>.*?<\/title>/, `<title>${localizedTitle}</title>`);
      }

      const destDir = path.join(outDir, langCode, "districts", d.slug);
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(path.join(destDir, "index.html"), html, "utf-8");
      generatedPagesCount++;
    }

    // 4. Process Developers
    for (const dev of DEVELOPERS) {
      const srcHtmlPath = path.join(outDir, "developers", dev.slug, "index.html");
      if (!fs.existsSync(srcHtmlPath)) continue;

      let html = fs.readFileSync(srcHtmlPath, "utf-8");

      html = html.replace(/<html[^>]*>/, `<html lang="${langCode}" dir="${lang.dir}">`);
      const langScript = `<script>try{localStorage.setItem('dubai_arch_lang','${langCode}');document.documentElement.lang='${langCode}';document.documentElement.dir='${lang.dir}';}catch(e){}</script>`;
      html = html.replace("<head>", `<head>${langScript}`);

      const targetCanonical = `https://dubai-architecture.info/${langCode}/developers/${dev.slug}/`;
      html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${targetCanonical}">`);

      const destDir = path.join(outDir, langCode, "developers", dev.slug);
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(path.join(destDir, "index.html"), html, "utf-8");
      generatedPagesCount++;
    }
  }

  // 5. Append all localized URLs to out/sitemap.xml if exists
  const sitemapPath = path.join(outDir, "sitemap.xml");
  if (fs.existsSync(sitemapPath)) {
    console.log("🗺️ Appending multilingual URLs to out/sitemap.xml...");
    let sitemapXml = fs.readFileSync(sitemapPath, "utf-8");
    const lastUrlIndex = sitemapXml.lastIndexOf("</url>");
    if (lastUrlIndex !== -1) {
      const today = new Date().toISOString().split("T")[0];
      const extraUrlsXml = [];

      for (const lang of TARGET_LANGS) {
        for (const route of staticRoutes) {
          const locUrl = `https://dubai-architecture.info/${lang.code}/${route ? route + "/" : ""}`;
          extraUrlsXml.push(`  <url>\n    <loc>${locUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`);
        }
        for (const b of BUILDINGS) {
          const locUrl = `https://dubai-architecture.info/${lang.code}/buildings/${b.slug}/`;
          extraUrlsXml.push(`  <url>\n    <loc>${locUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`);
        }
        for (const d of DISTRICTS) {
          const locUrl = `https://dubai-architecture.info/${lang.code}/districts/${d.slug}/`;
          extraUrlsXml.push(`  <url>\n    <loc>${locUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`);
        }
        for (const dev of DEVELOPERS) {
          const locUrl = `https://dubai-architecture.info/${lang.code}/developers/${dev.slug}/`;
          extraUrlsXml.push(`  <url>\n    <loc>${locUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`);
        }
      }

      sitemapXml = sitemapXml.replace("</urlset>", extraUrlsXml.join("\n") + "\n</urlset>");
      fs.writeFileSync(sitemapPath, sitemapXml, "utf-8");
      console.log(`🗺️ Added ${extraUrlsXml.length} localized URLs into out/sitemap.xml!`);
    }
  }

  console.log(`✅ Successfully generated ${generatedPagesCount} static multilingual HTML pages across 5 languages!`);
}

main().catch((err) => {
  console.error("❌ Error in multilingual generator:", err);
  process.exit(1);
});
