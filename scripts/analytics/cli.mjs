#!/usr/bin/env node

/**
 * Unified Analytics CLI for AI Agent & Developer
 * Integrates:
 * 1. Google Search Console (GSC)
 * 2. Google Analytics 4 (GA4)
 * 3. Microsoft Clarity
 */

import fs from "node:fs";
import path from "node:path";
import { loadServiceAccount } from "./lib/auth.mjs";
import { getGscSites, queryGscSearchAnalytics } from "./lib/gsc.mjs";
import { getGa4Properties, runGa4Report, runGa4RealtimeReport } from "./lib/ga4.mjs";
import { getClarityLiveInsights } from "./lib/clarity.mjs";

// Load .env.local if present
function loadEnv() {
  const envPath = path.resolve(process.cwd(), ".env.local");
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, "utf8").split("\n");
    for (const line of lines) {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let val = match[2] || "";
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
        if (!process.env[key]) {
          process.env[key] = val.trim();
        }
      }
    }
  }
}
loadEnv();

const args = process.argv.slice(2);
const isVerify = args.includes("--verify");
const isGsc = args.includes("--gsc");
const isGa4 = args.includes("--ga4");
const isClarity = args.includes("--clarity");
const isJson = args.includes("--json");
const isAll = args.includes("--all") || (!isVerify && !isGsc && !isGa4 && !isClarity);

const daysArgIdx = args.indexOf("--days");
const days = daysArgIdx !== -1 && args[daysArgIdx + 1] ? Number(args[daysArgIdx + 1]) : 7;

async function runVerify() {
  console.log("================================================================================");
  console.log("🔍 [ANALYTICS INTEGRATION AUDIT & STATUS CHECK]");
  console.log("================================================================================\n");

  const sa = loadServiceAccount();
  console.log("1. 🔑 Google Service Account:");
  if (sa) {
    console.log(`   ✅ File found: service_account.json`);
    console.log(`   📧 Client Email: ${sa.client_email}`);
    console.log(`   🏗️ Project ID:   ${sa.project_id}`);
  } else {
    console.log(`   ❌ service_account.json not found!`);
  }

  console.log("\n2. 🌐 Google Search Console (GSC):");
  if (!sa) {
    console.log("   ⚠️ Requires service_account.json");
  } else {
    try {
      const sites = await getGscSites();
      console.log(`   ✅ Connected! Found ${sites.length} accessible site(s):`);
      sites.forEach((s) => console.log(`      - ${s.siteUrl} (${s.permissionLevel})`));
    } catch (e) {
      console.log(`   ⚠️ GSC API Status: ${e.message}`);
      if (e.message.includes("SERVICE_DISABLED") || e.message.includes("has not been used in project")) {
        console.log("      👉 Need to enable Google Search Console API in Google Cloud Console.");
      } else if (e.message.includes("403") || e.message.includes("Forbidden")) {
        console.log(`      👉 Need to add "${sa.client_email}" to Search Console users with Full or Read permissions.`);
      }
    }
  }

  console.log("\n3. 📊 Google Analytics 4 (GA4):");
  console.log(`   Measurement ID (Web Stream): ${process.env.NEXT_PUBLIC_GA_ID || "Not set"}`);
  console.log(`   Numeric Property ID:        ${process.env.GA4_PROPERTY_ID || "Not set (set GA4_PROPERTY_ID in .env.local)"}`);
  if (!sa) {
    console.log("   ⚠️ Requires service_account.json");
  } else {
    try {
      const props = await getGa4Properties();
      console.log(`   ✅ Connected to GA4 Admin! Accessible properties:`);
      props.forEach((p) => console.log(`      - ${p.displayName} (Property ID: ${p.propertyId})`));
    } catch (e) {
      console.log(`   ⚠️ GA4 Admin API: ${e.message}`);
    }

    if (process.env.GA4_PROPERTY_ID) {
      try {
        const report = await runGa4Report({ propertyId: process.env.GA4_PROPERTY_ID, limit: 1 });
        console.log(`   ✅ GA4 Data API working! Active users: ${report.totals.activeUsers || 0}`);
      } catch (e) {
        console.log(`   ⚠️ GA4 Data API: ${e.message}`);
      }
    }
  }

  console.log("\n4. 🖱️ Microsoft Clarity:");
  console.log(`   Project ID: ${process.env.NEXT_PUBLIC_CLARITY_ID || "Not set"}`);
  if (!process.env.CLARITY_API_TOKEN) {
    console.log("   ⚠️ CLARITY_API_TOKEN is not set in .env.local");
    console.log("      👉 Generate token in: https://clarity.microsoft.com/ -> Settings -> Data Export");
  } else {
    try {
      const clarity = await getClarityLiveInsights({ numOfDays: 1 });
      console.log(`   ✅ Connected! Live insights received successfully.`);
    } catch (e) {
      console.log(`   ⚠️ Clarity API Error: ${e.message}`);
    }
  }

  console.log("\n================================================================================");
}

async function runGscReport() {
  console.log(`\n--- 🔎 GOOGLE SEARCH CONSOLE REPORT (Last ${days} days) ---`);
  const siteUrl = process.env.GSC_SITE_URL || "sc-domain:dubai-architecture.info";
  try {
    const data = await queryGscSearchAnalytics({
      siteUrl,
      dimensions: ["query"],
      rowLimit: 15,
    });
    console.log(`Site: ${data.siteUrl} (${data.startDate} to ${data.endDate})`);
    if (data.rows.length === 0) {
      console.log("No query data returned for this period.");
    } else {
      console.table(
        data.rows.map((r) => ({
          Query: r.keys[0],
          Clicks: r.clicks,
          Impressions: r.impressions,
          CTR: (r.ctr * 100).toFixed(1) + "%",
          Position: r.position.toFixed(1),
        }))
      );
    }

    const pagesData = await queryGscSearchAnalytics({
      siteUrl,
      dimensions: ["page"],
      rowLimit: 10,
    });
    console.log(`\nTop Landing Pages (Search):`);
    if (pagesData.rows.length === 0) {
      console.log("No page data returned for this period.");
    } else {
      console.table(
        pagesData.rows.map((r) => ({
          Page: r.keys[0].replace("https://dubai-architecture.info", ""),
          Clicks: r.clicks,
          Impressions: r.impressions,
          CTR: (r.ctr * 100).toFixed(1) + "%",
          Position: r.position.toFixed(1),
        }))
      );
    }
  } catch (e) {
    console.error(`❌ GSC Error: ${e.message}`);
  }
}

async function runGa4DataReport() {
  console.log(`\n--- 📊 GOOGLE ANALYTICS 4 REPORT (Last ${days} days) ---`);
  const propertyId = process.env.GA4_PROPERTY_ID;
  if (!propertyId) {
    console.log("⚠️ Set GA4_PROPERTY_ID in .env.local to query GA4 Data API.");
    return;
  }

  try {
    const report = await runGa4Report({
      propertyId,
      startDate: `${days}daysAgo`,
      endDate: "today",
      dimensions: [{ name: "pagePath" }],
      metrics: [
        { name: "activeUsers" },
        { name: "sessions" },
        { name: "screenPageViews" },
        { name: "averageSessionDuration" },
        { name: "bounceRate" },
      ],
      limit: 15,
    });

    console.log(`Total Active Users: ${report.totals.activeUsers || 0} | Total Sessions: ${report.totals.sessions || 0} | Pageviews: ${report.totals.screenPageViews || 0}`);
    console.table(
      report.rows.map((r) => ({
        Page: r.pagePath,
        Users: r.activeUsers,
        Sessions: r.sessions,
        Views: r.screenPageViews,
        "Avg Time (s)": Math.round(r.averageSessionDuration),
        "Bounce Rate": (r.bounceRate * 100).toFixed(1) + "%",
      }))
    );

    // Channels / Source breakdown
    const sourceReport = await runGa4Report({
      propertyId,
      startDate: `${days}daysAgo`,
      endDate: "today",
      dimensions: [{ name: "sessionDefaultChannelGroup" }],
      metrics: [{ name: "sessions" }, { name: "activeUsers" }],
      limit: 10,
    });
    console.log("\nTraffic Acquisition by Channel:");
    console.table(
      sourceReport.rows.map((r) => ({
        Channel: r.sessionDefaultChannelGroup,
        Sessions: r.sessions,
        Users: r.activeUsers,
      }))
    );
  } catch (e) {
    console.error(`❌ GA4 Error: ${e.message}`);
  }
}

async function runClarityReport() {
  console.log(`\n--- 🖱️ MICROSOFT CLARITY REPORT ---`);
  if (!process.env.CLARITY_API_TOKEN) {
    console.log("⚠️ Set CLARITY_API_TOKEN in .env.local to query Clarity Data API.");
    return;
  }

  try {
    const clarity = await getClarityLiveInsights({ numOfDays: Math.min(days, 3) });
    const metrics = clarity.data || [];

    if (isJson) {
      console.log(JSON.stringify(metrics, null, 2));
      return;
    }

    const getMetric = (name) => metrics.find((m) => m.metricName === name)?.information || [];
    const traffic = getMetric("Traffic")[0] || {};
    const deadClicks = getMetric("DeadClickCount")[0] || {};
    const rageClicks = getMetric("RageClickCount")[0] || {};
    const errors = getMetric("ScriptErrorCount")[0] || {};
    const scroll = getMetric("ScrollDepth")[0] || {};

    console.log(`Live Insights (Last ${clarity.numOfDays} day(s)):`);
    console.log(`Total Sessions: ${traffic.totalSessionCount || 0} | Distinct Users: ${traffic.distinctUserCount || 0} | Bots: ${traffic.totalBotSessionCount || 0}`);
    console.log(`UX Health: Rage Clicks: ${rageClicks.sessionsWithMetricPercentage || 0}% | Dead Clicks: ${deadClicks.sessionsWithMetricPercentage || 0}% | JS Errors: ${errors.sessionsWithMetricPercentage || 0}% | Avg Scroll: ${scroll.averageScrollDepth ? scroll.averageScrollDepth.toFixed(1) + "%" : "N/A"}`);

    const popularPages = getMetric("PopularPages");
    if (popularPages.length > 0) {
      console.log("\nPopular Pages (Clarity):");
      console.table(popularPages.map((p) => ({ URL: p.url, Visits: p.visitsCount })));
    }

    const countries = getMetric("Country");
    if (countries.length > 0) {
      console.log("\nVisitors by Country:");
      console.table(countries.map((c) => ({ Country: c.name, Sessions: c.sessionsCount })));
    }

    const devices = getMetric("Device");
    if (devices.length > 0) {
      console.log("\nVisitors by Device:");
      console.table(devices.map((d) => ({ Device: d.name, Sessions: d.sessionsCount })));
    }
  } catch (e) {
    console.error(`❌ Clarity Error: ${e.message}`);
  }
}

async function main() {
  if (isVerify) {
    await runVerify();
    return;
  }

  if (isAll || isGsc) await runGscReport();
  if (isAll || isGa4) await runGa4DataReport();
  if (isAll || isClarity) await runClarityReport();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
