import { getGoogleAccessToken } from "./auth.mjs";

const SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"];

/**
 * Lists all sites accessible in GSC
 */
export async function getGscSites() {
  const token = await getGoogleAccessToken(SCOPES);
  const res = await fetch("https://www.googleapis.com/webmasters/v3/sites", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`GSC Sites Error (${res.status}): ${err.error?.message || res.statusText}`);
  }

  const data = await res.json();
  return data.siteEntry || [];
}

/**
 * Queries GSC search analytics for clicks, impressions, CTR, position
 */
export async function queryGscSearchAnalytics({
  siteUrl = "sc-domain:dubai-architecture.info",
  startDate,
  endDate,
  dimensions = ["query"],
  rowLimit = 25,
  type = "web",
} = {}) {
  const token = await getGoogleAccessToken(SCOPES);

  // Default to last 28 days if not provided
  if (!endDate) {
    const d = new Date();
    d.setDate(d.getDate() - 2); // GSC usually has a 2-day delay
    endDate = d.toISOString().split("T")[0];
  }
  if (!startDate) {
    const d = new Date(endDate);
    d.setDate(d.getDate() - 28);
    startDate = d.toISOString().split("T")[0];
  }

  const encodedSite = encodeURIComponent(siteUrl);
  const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      startDate,
      endDate,
      dimensions,
      rowLimit,
      type,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`GSC Query Error (${res.status}): ${err.error?.message || res.statusText}`);
  }

  const data = await res.json();
  return {
    startDate,
    endDate,
    siteUrl,
    rows: data.rows || [],
    responseAggregationType: data.responseAggregationType,
  };
}

/**
 * Inspects a specific URL in Google Search Console
 */
export async function inspectGscUrl({
  inspectionUrl,
  siteUrl = "sc-domain:dubai-architecture.info",
}) {
  const token = await getGoogleAccessToken(SCOPES);
  const res = await fetch("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inspectionUrl,
      siteUrl,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`GSC Inspect Error (${res.status}): ${err.error?.message || res.statusText}`);
  }

  const data = await res.json();
  return data.inspectionResult;
}

/**
 * Lists sitemaps submitted to GSC
 */
export async function getGscSitemaps(siteUrl = "sc-domain:dubai-architecture.info") {
  const token = await getGoogleAccessToken(SCOPES);
  const encodedSite = encodeURIComponent(siteUrl);
  const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/sitemaps`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`GSC Sitemaps Error (${res.status}): ${err.error?.message || res.statusText}`);
  }

  const data = await res.json();
  return data.sitemap || [];
}
