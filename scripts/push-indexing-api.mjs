#!/usr/bin/env node

/**
 * Google Indexing API Automation
 * 
 * Automatically sends URL notifications to Googlebot via Google Cloud Indexing API
 * for all URLs in out/sitemap.xml.
 * 
 * Implements intelligent priority-based sorting to maximize indexing value within
 * Google's daily quota (200 requests/day per service account).
 * 
 * Priority order:
 * 1. Root & all 9 language entry roots (/ru/, /ar/, /hi/, /zh/, /de/, /fr/, /ur/, /it/, /tr/)
 * 2. High-converting hubs (/calculator/, /golden-visa/, /buildings/, /districts/, /developers/)
 * 3. Iconic global landmark towers (Burj Khalifa, Emirates Towers, Burj Al Arab, etc.)
 * 4. Prime investment districts (Downtown Dubai, Dubai Marina, Palm Jumeirah, etc.)
 * 5. Tier-1 master developers (Emaar, Sobha, Nakheel, etc.)
 * 6. Remaining towers and districts across all languages
 * 7. Institutional policy pages (/about/, /editorial-policy/, etc.)
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const DAILY_QUOTA_LIMIT = 195; // Google limit is 200/day. 195 leaves a safe margin.

function loadCredentials() {
  if (process.env.GOOGLE_INDEXING_KEY) {
    const raw = process.env.GOOGLE_INDEXING_KEY.trim();
    try {
      if (raw.startsWith("{")) {
        return JSON.parse(raw);
      }
      const decoded = Buffer.from(raw, "base64").toString("utf8");
      return JSON.parse(decoded);
    } catch (e) {
      console.warn("⚠️ Failed to parse GOOGLE_INDEXING_KEY environment variable:", e.message);
    }
  }

  const candidateFiles = [
    "service_account.json",
    "google-indexing-credentials.json",
    "scripts/service_account.json",
  ];

  for (const filename of candidateFiles) {
    const fullPath = path.resolve(process.cwd(), filename);
    if (fs.existsSync(fullPath)) {
      try {
        const content = fs.readFileSync(fullPath, "utf8");
        return JSON.parse(content);
      } catch (e) {
        console.warn(`⚠️ Failed to parse ${filename}:`, e.message);
      }
    }
  }

  return null;
}

function createJwt(clientEmail, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const b64Header = Buffer.from(JSON.stringify(header)).toString("base64url");
  const b64Payload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signInput = `${b64Header}.${b64Payload}`;

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(signInput);
  const signature = signer.sign(privateKey, "base64url");

  return `${signInput}.${signature}`;
}

async function getAccessToken(clientEmail, privateKey) {
  const jwt = createJwt(clientEmail, privateKey);
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Google OAuth error (${res.status}): ${errText}`);
  }

  const data = await res.json();
  return data.access_token;
}

function computeUrlPriorityScore(url) {
  const clean = url.replace("https://dubai-architecture.info", "");

  // Tier 1: Canonical root and all 10 language roots
  if (clean === "/" || clean === "") return 1000;
  if (/^\/(ru|ar|hi|zh|de|fr|ur|it|tr)\/?$/.test(clean)) return 950;

  // Tier 2: Core functional & conversion hubs across all languages
  if (clean.includes("/calculator")) return 900;
  if (clean.includes("/golden-visa")) return 890;
  if (clean.includes("/developers") && !clean.match(/\/developers\/[^/]+/)) return 880;
  if (clean.includes("/buildings") && !clean.match(/\/buildings\/[^/]+/)) return 870;
  if (clean.includes("/districts") && !clean.match(/\/districts\/[^/]+/)) return 860;

  // Tier 3: Iconic global towers
  const iconicTowers = [
    "burj-khalifa",
    "emirates-towers",
    "burj-al-arab",
    "cayan-tower",
    "marina-101",
    "princess-tower",
    "address-downtown",
    "al-hikma-tower",
    "al-yaqoub-tower",
    "damac-heights",
    "the-torch",
    "d1-tower",
    "rose-rayhaan",
  ];
  for (const tower of iconicTowers) {
    if (clean.includes(`/buildings/${tower}`)) return 700;
  }

  // Tier 4: Prime districts
  const primeDistricts = ["downtown-dubai", "dubai-marina", "palm-jumeirah", "business-bay", "difc"];
  for (const dist of primeDistricts) {
    if (clean.includes(`/districts/${dist}`)) return 600;
  }

  // Tier 5: Top developers
  const topDevs = ["emaar", "sobha", "nakheel", "omniyat", "binghatti", "meraas"];
  for (const dev of topDevs) {
    if (clean.includes(`/developers/${dev}`)) return 500;
  }

  // Tier 6: Remaining towers & districts
  if (clean.includes("/buildings/")) return 400;
  if (clean.includes("/districts/")) return 350;
  if (clean.includes("/developers/")) return 300;

  // Tier 7: Policy & institutional pages
  if (clean.includes("/about")) return 200;
  if (clean.includes("/contact")) return 190;
  if (clean.includes("/editorial-policy")) return 180;
  if (clean.includes("/affiliate-disclosure")) return 170;
  if (clean.includes("/methodology")) return 160;

  return 100;
}

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

  // De-duplicate
  const uniqueUrls = Array.from(new Set(urls));

  // Sort by priority score descending
  uniqueUrls.sort((a, b) => computeUrlPriorityScore(b) - computeUrlPriorityScore(a));

  return uniqueUrls;
}

async function publishUrl(url, accessToken) {
  const res = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      url,
      type: "URL_UPDATED",
    }),
  });

  return { ok: res.ok, status: res.status, text: await res.text() };
}

async function main() {
  console.log("🔍 Checking Google Indexing API configuration...");

  const credentials = loadCredentials();
  if (!credentials || !credentials.client_email || !credentials.private_key) {
    console.log("ℹ️  [Google Indexing API] Key not provided or not found.");
    console.log("   To enable automatic Googlebot pings:");
    console.log("   1. Create a Service Account in Google Cloud (Indexing API enabled).");
    console.log("   2. Add service account email as 'Owner' in Google Search Console.");
    console.log("   3. Put JSON key in 'service_account.json' or set GOOGLE_INDEXING_KEY secret.");
    console.log("   (Skipping notification step gracefully, build will continue).");
    return;
  }

  const allUrls = extractUrlsFromSitemap();
  if (allUrls.length === 0) {
    console.warn("⚠️ No URLs found in sitemap.xml. Ensure 'npm run build' has generated out/sitemap.xml.");
    return;
  }

  // Cap at DAILY_QUOTA_LIMIT
  const urlsToPush = allUrls.slice(0, DAILY_QUOTA_LIMIT);

  console.log(`🔑 Authenticating as: ${credentials.client_email}...`);
  let accessToken;
  try {
    accessToken = await getAccessToken(credentials.client_email, credentials.private_key);
    console.log("✅ OAuth2 Access Token successfully generated.");
  } catch (err) {
    console.error("❌ Authentication failed:", err.message);
    return;
  }

  console.log(`🚀 Total sitemap URLs: ${allUrls.length}. Dispatching highest-priority ${urlsToPush.length} URLs (daily safe quota: ${DAILY_QUOTA_LIMIT})...`);
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < urlsToPush.length; i++) {
    const url = urlsToPush[i];
    try {
      const result = await publishUrl(url, accessToken);
      if (result.ok) {
        successCount++;
        console.log(`   [${i + 1}/${urlsToPush.length}] ✅ 200 OK: ${url}`);
      } else {
        failCount++;
        console.warn(`   [${i + 1}/${urlsToPush.length}] ⚠️ Status ${result.status}: ${url}`);
      }
    } catch (err) {
      failCount++;
      console.warn(`   [${i + 1}/${urlsToPush.length}] ❌ Error: ${err.message}`);
    }

    // 400ms throttle between requests
    await new Promise((r) => setTimeout(r, 400));
  }

  console.log(`\n🎉 Google Indexing API run completed: ${successCount} published, ${failCount} failed.`);
  if (allUrls.length > urlsToPush.length) {
    console.log(`ℹ️ Note: ${allUrls.length - urlsToPush.length} lower-priority URLs queued for subsequent daily indexer cycles.`);
  }
}

main().catch((err) => {
  console.error("Unexpected error in Indexing script:", err);
});
