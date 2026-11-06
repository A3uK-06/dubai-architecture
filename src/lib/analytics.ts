import { isOwnerExcluded } from "./ownerExclusion";

/**
 * Google Analytics 4 event tracking helper
 */
export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;

  // If visitor is the verified site owner, completely suppress all event telemetry
  if (isOwnerExcluded()) {
    return;
  }

  try {
    const win = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
    if (typeof win.gtag === "function") {
      win.gtag("event", eventName, params);
    } else if (Array.isArray(win.dataLayer)) {
      win.dataLayer.push({ event: eventName, ...params });
    }
  } catch (err) {
    console.warn("Analytics event error:", err);
  }
}
