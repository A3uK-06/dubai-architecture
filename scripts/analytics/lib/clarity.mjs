/**
 * Microsoft Clarity Data Export API Client
 * Docs: https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-data-export-api
 */

/**
 * Fetches Live Insights from Microsoft Clarity Export API
 * @param {number} numOfDays Number of days (1, 2, or 3)
 * @param {string} token Clarity API access token
 */
export async function getClarityLiveInsights({
  numOfDays = 1,
  token = process.env.CLARITY_API_TOKEN,
} = {}) {
  if (!token) {
    throw new Error(
      "Missing CLARITY_API_TOKEN. Generate it in Microsoft Clarity -> Settings -> Data Export -> Generate new API token, and set CLARITY_API_TOKEN in .env.local"
    );
  }

  // Validate numOfDays (Clarity API only accepts 1, 2, or 3)
  const days = Math.min(Math.max(Number(numOfDays) || 1, 1), 3);

  const url = `https://www.clarity.ms/export-data/api/v1/project-live-insights?numOfDays=${days}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Microsoft Clarity API Error (${res.status}): ${errText}`);
  }

  const data = await res.json();
  return {
    numOfDays: days,
    data,
  };
}
