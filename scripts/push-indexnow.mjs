#!/usr/bin/env node

/**
 * Microsoft Bing / IndexNow Protocol Dispatcher
 * 
 * Instantly submits all URLs from sitemap.xml to Microsoft Bing, Microsoft Copilot,
 * ChatGPT (SearchBot), Yandex, and Seznam via IndexNow API.
 */

import fs from "node:fs";
import path from "node:path";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "c8d5e1f7a2404b909477e6fbb291a108";
const HOST = "dubai-architecture.info";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

function extractUrlsFromSitemap() {
  const candidates = [
    path.resolve(process.cwd(), "out/sitemap.xml"),
    path.resolve(process.cwd(), "public/sitemap.xml"),
  ];

  let xml = null;
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      xml = fs.readFileSync(p, "utf8");
      break;
    }
  }

  if (!xml) return [];

  const locMatches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
  const urls = locMatches
    .map((m) => m.replace(/<\/?loc>/g, "").trim())
    .filter((u) => u.startsWith("http"));

  return Array.from(new Set(urls));
}

async function submitToIndexNow(urls) {
  console.log(`🌐 Submitting ${urls.length} URLs to Microsoft Bing & Copilot (IndexNow)...`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  // Endpoints: api.indexnow.org automatically propagates to Bing, Yandex, Seznam, Naver
  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`📡 Sending to ${endpoint}...`);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (res.status === 200 || res.status === 202) {
        console.log(`✅ [${res.status}] Success! Bing & partner engines queued URLs for instant crawling.`);
        return true;
      } else {
        const text = await res.text();
        console.warn(`⚠️ [${res.status}] ${endpoint} response: ${text || "No details"}`);
      }
    } catch (err) {
      console.warn(`❌ Error connecting to ${endpoint}:`, err.message);
    }
  }

  return false;
}

async function main() {
  console.log("🔍 Checking IndexNow configuration for Microsoft Bing...");

  const urls = extractUrlsFromSitemap();
  if (urls.length === 0) {
    console.warn("⚠️ No URLs found in sitemap.xml. Ensure 'npm run build' has run.");
    return;
  }

  await submitToIndexNow(urls);
}

main().catch((err) => {
  console.error("IndexNow script error:", err);
});
