import { getGoogleAccessToken } from "./auth.mjs";

const SCOPES = [
  "https://www.googleapis.com/auth/analytics.readonly",
];

/**
 * Discovers accessible GA4 properties via Admin API
 */
export async function getGa4Properties() {
  const token = await getGoogleAccessToken(SCOPES);
  const res = await fetch("https://analyticsadmin.googleapis.com/v1beta/accountSummaries", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`GA4 Admin API Error (${res.status}): ${err.error?.message || res.statusText}`);
  }

  const data = await res.json();
  const properties = [];
  for (const acc of data.accountSummaries || []) {
    for (const prop of acc.propertySummaries || []) {
      properties.push({
        account: acc.account,
        displayName: prop.displayName,
        property: prop.property, // e.g. properties/123456789
        propertyId: prop.property.replace("properties/", ""),
      });
    }
  }
  return properties;
}

/**
 * Runs a standard GA4 report
 */
export async function runGa4Report({
  propertyId = process.env.GA4_PROPERTY_ID,
  startDate = "7daysAgo",
  endDate = "today",
  dimensions = [{ name: "pagePath" }],
  metrics = [
    { name: "activeUsers" },
    { name: "sessions" },
    { name: "screenPageViews" },
    { name: "averageSessionDuration" },
    { name: "bounceRate" },
  ],
  limit = 25,
  orderBys,
} = {}) {
  if (!propertyId) {
    throw new Error("Missing GA4_PROPERTY_ID in environment or function args (e.g. GA4_PROPERTY_ID=123456789)");
  }

  const token = await getGoogleAccessToken(SCOPES);
  const cleanPropId = propertyId.replace(/^properties\//, "");

  const metricNames = new Set(metrics.map((m) => m.name));
  let safeOrderBys = orderBys;
  if (!safeOrderBys && metrics.length > 0) {
    const defaultMetric = metricNames.has("screenPageViews") ? "screenPageViews" : metrics[0].name;
    safeOrderBys = [{ metric: { metricName: defaultMetric }, desc: true }];
  }

  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${cleanPropId}:runReport`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dateRanges: [{ startDate, endDate }],
      dimensions,
      metrics,
      limit,
      orderBys: safeOrderBys,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`GA4 Data Report Error (${res.status}): ${err.error?.message || res.statusText}`);
  }

  const data = await res.json();
  const dimensionHeaders = (data.dimensionHeaders || []).map((h) => h.name);
  const metricHeaders = (data.metricHeaders || []).map((h) => h.name);

  const rows = (data.rows || []).map((r) => {
    const rowObj = {};
    dimensionHeaders.forEach((name, i) => {
      rowObj[name] = r.dimensionValues[i]?.value;
    });
    metricHeaders.forEach((name, i) => {
      rowObj[name] = Number(r.metricValues[i]?.value) || 0;
    });
    return rowObj;
  });

  const totals = {};
  if (data.totals && data.totals[0]) {
    metricHeaders.forEach((name, i) => {
      totals[name] = Number(data.totals[0].metricValues[i]?.value) || 0;
    });
  }

  return {
    propertyId: cleanPropId,
    startDate,
    endDate,
    rowCount: data.rowCount || 0,
    totals,
    rows,
  };
}

/**
 * Runs a realtime GA4 report (last 30 minutes)
 */
export async function runGa4RealtimeReport({
  propertyId = process.env.GA4_PROPERTY_ID,
  dimensions = [{ name: "unifiedScreenName" }],
  metrics = [{ name: "activeUsers" }],
  limit = 10,
} = {}) {
  if (!propertyId) {
    throw new Error("Missing GA4_PROPERTY_ID in environment or function args");
  }

  const token = await getGoogleAccessToken(SCOPES);
  const cleanPropId = propertyId.replace(/^properties\//, "");

  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${cleanPropId}:runRealtimeReport`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dimensions,
      metrics,
      limit,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`GA4 Realtime Report Error (${res.status}): ${err.error?.message || res.statusText}`);
  }

  const data = await res.json();
  const dimensionHeaders = (data.dimensionHeaders || []).map((h) => h.name);
  const metricHeaders = (data.metricHeaders || []).map((h) => h.name);

  const rows = (data.rows || []).map((r) => {
    const rowObj = {};
    dimensionHeaders.forEach((name, i) => {
      rowObj[name] = r.dimensionValues[i]?.value;
    });
    metricHeaders.forEach((name, i) => {
      rowObj[name] = Number(r.metricValues[i]?.value) || 0;
    });
    return rowObj;
  });

  const totals = {};
  if (data.totals && data.totals[0]) {
    metricHeaders.forEach((name, i) => {
      totals[name] = Number(data.totals[0].metricValues[i]?.value) || 0;
    });
  }

  return {
    propertyId: cleanPropId,
    rowCount: data.rowCount || 0,
    totals,
    rows,
  };
}
