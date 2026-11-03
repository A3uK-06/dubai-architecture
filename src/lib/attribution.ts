export interface LeadAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  landing_page?: string;
  first_touch_ts?: string;
  last_touch_ts?: string;
  device?: string;
}

const STORAGE_KEY_FIRST = "dubai_arch_attr_first";
const STORAGE_KEY_LAST = "dubai_arch_attr_last";

/**
 * Parses UTM and marketing parameters from the current URL.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const hasMarketingParams =
      urlParams.has("utm_source") ||
      urlParams.has("utm_medium") ||
      urlParams.has("utm_campaign") ||
      urlParams.has("gclid") ||
      urlParams.has("fbclid");

    const now = new Date().toISOString();
    const referrer = document.referrer || "direct";

    const currentTouch: LeadAttribution = {
      utm_source: urlParams.get("utm_source") || (referrer.includes("google") ? "google" : undefined),
      utm_medium: urlParams.get("utm_medium") || (referrer.includes("google") ? "organic" : undefined),
      utm_campaign: urlParams.get("utm_campaign") || undefined,
      utm_term: urlParams.get("utm_term") || undefined,
      utm_content: urlParams.get("utm_content") || undefined,
      gclid: urlParams.get("gclid") || undefined,
      fbclid: urlParams.get("fbclid") || undefined,
      referrer: referrer,
      landing_page: window.location.href,
      last_touch_ts: now,
      device: window.innerWidth < 768 ? "mobile" : "desktop",
    };

    // Store first touch if not already saved
    if (!localStorage.getItem(STORAGE_KEY_FIRST)) {
      localStorage.setItem(
        STORAGE_KEY_FIRST,
        JSON.stringify({ ...currentTouch, first_touch_ts: now })
      );
    }

    // Always update last touch if marketing params are present or if first time
    if (hasMarketingParams || !localStorage.getItem(STORAGE_KEY_LAST)) {
      localStorage.setItem(STORAGE_KEY_LAST, JSON.stringify(currentTouch));
    }
  } catch (err) {
    console.warn("Attribution capture failed:", err);
  }
}

/**
 * Returns captured attribution data for attaching to outgoing leads.
 */
export function getAttributionData(): LeadAttribution {
  if (typeof window === "undefined") return {};

  try {
    const last = localStorage.getItem(STORAGE_KEY_LAST);
    const first = localStorage.getItem(STORAGE_KEY_FIRST);

    if (last) {
      return JSON.parse(last);
    }
    if (first) {
      return JSON.parse(first);
    }
  } catch (err) {
    console.warn("Error reading attribution data:", err);
  }

  return {
    referrer: typeof document !== "undefined" ? document.referrer : "direct",
    device: typeof window !== "undefined" && window.innerWidth < 768 ? "mobile" : "desktop",
  };
}
