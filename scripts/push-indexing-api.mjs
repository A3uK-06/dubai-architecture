#!/usr/bin/env node

/**
 * Google Indexing API Automation
 * 
 * Automatically sends URL notifications to Googlebot via Google Cloud Indexing API
 * for all URLs in out/sitemap.xml.
 * 
 * Credentials can be provided as:
 * - Environment variable: GOOGLE_INDEXING_KEY (raw JSON or base64 JSON)
 * - Local file: service_account.json or google-indexing-credentials.json
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

function loadCredentials() {
  // 1. Check environment variable
  if (process.env.GOOGLE_INDEXING_KEY) {
    const raw = process.env.GOOGLE_INDEXING_KEY.trim();
    try {
      if (raw.startsWith("{")) {
        return JSON.parse(raw);
      }
      // Try base64
      const decoded = Buffer.from(raw, "base64").toString("utf8");
      return JSON.parse(decoded);
    } catch (e) {
      console.warn("⚠️ Failed to parse GOOGLE_INDEXING_KEY environment variable:", e.message);
    }
  }

  // 2. Check local files
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
  return Array.from(new Set(urls));
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

  const urls = extractUrlsFromSitemap();
  if (urls.length === 0) {
    console.warn("⚠️ No URLs found in sitemap.xml. Ensure 'npm run build' has generated out/sitemap.xml.");
    return;
  }

  console.log(`🔑 Authenticating as: ${credentials.client_email}...`);
  let accessToken;
  try {
    accessToken = await getAccessToken(credentials.client_email, credentials.private_key);
    console.log("✅ OAuth2 Access Token successfully generated.");
  } catch (err) {
    console.error("❌ Authentication failed:", err.message);
    return;
  }

  console.log(`🚀 Dispatching ${urls.length} URLs to Google Indexing API...`);
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      const result = await publishUrl(url, accessToken);
      if (result.ok) {
        successCount++;
        console.log(`   [${i + 1}/${urls.length}] ✅ 200 OK: ${url}`);
      } else {
        failCount++;
        console.warn(`   [${i + 1}/${urls.length}] ⚠️ Status ${result.status}: ${url}`);
      }
    } catch (err) {
      failCount++;
      console.warn(`   [${i + 1}/${urls.length}] ❌ Error: ${err.message}`);
    }

    // Gentle 100ms throttle between requests
    await new Promise((r) => setTimeout(r, 100));
  }

  console.log(`\n🎉 Google Indexing API finished: ${successCount} published, ${failCount} failed.`);
}

main().catch((err) => {
  console.error("Unexpected error in Indexing script:", err);
});
