import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");

// Ensure docs folder exists
const docsDir = path.join(rootDir, "docs");
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Legacy ID mappings to new canonical paths
const legacyMap = {
  "DUB-001": "burj-khalifa",
  "DUB-002": "emirates-towers",
  "DUB-003": "burj-al-arab",
  "DUB-004": "cayan-tower",
  "DUB-005": "museum-of-the-future",
  "DUB-006": "one-zaabeel",
  "DUB-007": "atlantis-the-royal",
  "DUB-008": "princess-tower",
  "DUB-009": "marina-101",
  "DUB-010": "address-downtown",
  "DUB-011": "almas-tower",
  "DUB-012": "index-tower",
};

const namedTraps = {
  "/index.htm": "/",
  "/index.html": "/",
  "/burj-dubai.htm": "/buildings/burj-khalifa/",
  "/burj-dubai.html": "/buildings/burj-khalifa/",
  "/burj-al-arab.htm": "/buildings/burj-al-arab/",
  "/burj-al-arab.html": "/buildings/burj-al-arab/",
  "/emirates-towers.htm": "/buildings/emirates-towers/",
  "/emirates-towers.html": "/buildings/emirates-towers/",
  "/dubai-skyscrapers.htm": "/buildings/",
  "/dubai-skyscrapers.html": "/buildings/",
  "/dubai-towers.htm": "/buildings/",
  "/dubai-towers.html": "/buildings/",
  "/architecture-dubai.htm": "/",
  "/architecture-dubai.html": "/",
};

// Generate Cloudflare Bulk Redirects CSV format:
// Source URL,Target URL,Status code,Preserve query string,Include subdomains,Subpath matching,Preserve path suffix
let csvLines = ["Source URL,Target URL,Status code,Preserve query string,Include subdomains,Subpath matching,Preserve path suffix"];

// 1. Add DUB-001 ... DUB-050
for (let i = 1; i <= 50; i++) {
  const code = `DUB-${String(i).padStart(3, "0")}`;
  const slug = legacyMap[code];
  const targetPath = slug ? `/buildings/${slug}/` : "/buildings/";

  csvLines.push(`https://dubai-architecture.info/${code}.htm,https://dubai-architecture.info${targetPath},301,true,false,false,false`);
  csvLines.push(`https://dubai-architecture.info/${code}.html,https://dubai-architecture.info${targetPath},301,true,false,false,false`);
  csvLines.push(`https://dubai-architecture.info/${code.toLowerCase()}.htm,https://dubai-architecture.info${targetPath},301,true,false,false,false`);
  csvLines.push(`https://dubai-architecture.info/${code.toLowerCase()}.html,https://dubai-architecture.info${targetPath},301,true,false,false,false`);
}

// 2. Add named traps
for (const [sourcePath, targetPath] of Object.entries(namedTraps)) {
  csvLines.push(`https://dubai-architecture.info${sourcePath},https://dubai-architecture.info${targetPath},301,true,false,false,false`);
}

const csvOutput = csvLines.join("\n");
fs.writeFileSync(path.join(docsDir, "cloudflare-bulk-redirects.csv"), csvOutput, "utf-8");

console.log(`Generated ${csvLines.length - 1} Cloudflare 301 Redirect rules in docs/cloudflare-bulk-redirects.csv`);
