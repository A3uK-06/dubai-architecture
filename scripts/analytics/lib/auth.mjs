import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const tokenCache = new Map();

export const DEFAULT_SCOPES = [
  "https://www.googleapis.com/auth/webmasters.readonly",
  "https://www.googleapis.com/auth/analytics.readonly",
  "https://www.googleapis.com/auth/indexing",
];

/**
 * Loads service account JSON from file or env
 */
export function loadServiceAccount() {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY || process.env.GOOGLE_INDEXING_KEY) {
    const raw = (process.env.GOOGLE_SERVICE_ACCOUNT_KEY || process.env.GOOGLE_INDEXING_KEY).trim();
    try {
      if (raw.startsWith("{")) return JSON.parse(raw);
      return JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
    } catch (e) {
      console.warn("⚠️ Failed to parse Google Service Account from env:", e.message);
    }
  }

  const candidateFiles = [
    "service_account.json",
    "google-indexing-credentials.json",
    "scripts/service_account.json",
  ];

  for (const file of candidateFiles) {
    const fullPath = path.resolve(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      try {
        return JSON.parse(fs.readFileSync(fullPath, "utf8"));
      } catch (e) {
        console.warn(`⚠️ Failed to parse ${file}:`, e.message);
      }
    }
  }

  return null;
}

/**
 * Creates RS256 signed JWT for Google OAuth2
 */
function createJwt(clientEmail, privateKey, scopes) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    scope: Array.isArray(scopes) ? scopes.join(" ") : scopes,
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

/**
 * Retrieves valid Google OAuth2 access token for requested scopes
 */
export async function getGoogleAccessToken(scopes = DEFAULT_SCOPES) {
  const scopeList = Array.isArray(scopes) ? [...scopes].sort() : [scopes];
  const cacheKey = scopeList.join(" ");
  const now = Math.floor(Date.now() / 1000);

  const cached = tokenCache.get(cacheKey);
  if (cached && cached.expiry > now + 60) {
    return cached.token;
  }

  const sa = loadServiceAccount();
  if (!sa || !sa.client_email || !sa.private_key) {
    throw new Error("Missing service_account.json with client_email and private_key");
  }

  const jwt = createJwt(sa.client_email, sa.private_key, scopeList);
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
  const token = data.access_token;
  const expiry = now + (data.expires_in || 3600);

  tokenCache.set(cacheKey, { token, expiry });
  return token;
}
