/**
 * Persistent Owner Exclusion System
 * 
 * Stores a permanent device token (Cookie with 10-year max-age + LocalStorage).
 * Ensures that the site owner is NEVER tracked in Google Analytics or Clarity,
 * regardless of IP address, VPN changes, or Wi-Fi networks.
 */

export const OWNER_STORAGE_KEY = "da_ignore_analytics";
export const OWNER_COOKIE_NAME = "da_ignore_analytics";

export function isOwnerExcluded(): boolean {
  if (typeof window === "undefined") return false;

  try {
    // 1. Check URL parameters
    const params = new URLSearchParams(window.location.search);
    if (
      params.get("ignore_me") === "true" ||
      params.get("admin") === "true" ||
      params.get("ghost") === "true" ||
      params.get("ignore_stats") === "true"
    ) {
      setOwnerExclusion(true);
      return true;
    }

    if (params.get("ignore_me") === "false" || params.get("track_me") === "true") {
      setOwnerExclusion(false);
      return false;
    }

    // 2. Check localStorage
    if (
      localStorage.getItem(OWNER_STORAGE_KEY) === "true" ||
      localStorage.getItem("ignore_analytics") === "true" ||
      localStorage.getItem("twin_ignore_analytics") === "true"
    ) {
      return true;
    }

    // 3. Check permanent cookie stored on device disk (10-year lifespan)
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      if (cookie.startsWith(`${OWNER_COOKIE_NAME}=true`) || cookie.startsWith("ignore_analytics=true")) {
        return true;
      }
    }
  } catch (err) {
    console.warn("Owner exclusion check error:", err);
  }

  return false;
}

export function setOwnerExclusion(enable: boolean) {
  if (typeof window === "undefined") return;

  try {
    if (enable) {
      localStorage.setItem(OWNER_STORAGE_KEY, "true");
      localStorage.setItem("ignore_analytics", "true");
      // 10 years max-age (315,360,000 seconds) - saved as physical cookie file in browser profile
      document.cookie = `${OWNER_COOKIE_NAME}=true; path=/; max-age=315360000; SameSite=Lax`;
      document.cookie = `ignore_analytics=true; path=/; max-age=315360000; SameSite=Lax`;
    } else {
      localStorage.removeItem(OWNER_STORAGE_KEY);
      localStorage.removeItem("ignore_analytics");
      document.cookie = `${OWNER_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
      document.cookie = `ignore_analytics=; path=/; max-age=0; SameSite=Lax`;
    }
  } catch (err) {
    console.warn("Set owner exclusion error:", err);
  }
}
