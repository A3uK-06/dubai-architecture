import { LANGUAGES, LanguageCode } from "@/i18n/languages";

const BASE_URL = "https://dubai-architecture.info";

/**
 * Returns hreflang alternates for all TOP-10 supported languages + x-default
 * EN: https://dubai-architecture.info/path/
 * Others: https://dubai-architecture.info/[lang]/path/
 */
export function getSeoAlternates(subpath: string = "/") {
  let normalized = subpath.trim();
  if (!normalized.startsWith("/")) normalized = "/" + normalized;
  if (normalized !== "/" && !normalized.endsWith("/")) normalized = normalized + "/";

  const cleanSub = normalized === "/" ? "/" : normalized;
  const canonical = `${BASE_URL}${cleanSub}`;

  const languages: Record<string, string> = {
    en: canonical,
    "x-default": canonical,
  };

  for (const code of Object.keys(LANGUAGES) as LanguageCode[]) {
    if (code !== "en") {
      languages[code] = `${BASE_URL}/${code}${cleanSub === "/" ? "/" : cleanSub}`;
    }
  }

  return {
    canonical,
    languages,
  };
}
