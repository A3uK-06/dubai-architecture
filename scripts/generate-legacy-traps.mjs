import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "..", "public");

// Legacy ID mappings to new canonical paths
const legacyMap = {
  "DUB-001": { slug: "burj-khalifa", name: "Burj Khalifa" },
  "DUB-002": { slug: "emirates-towers", name: "Emirates Towers" },
  "DUB-003": { slug: "burj-al-arab", name: "Burj Al Arab Jumeirah" },
  "DUB-004": { slug: "cayan-tower", name: "Cayan Tower" },
  "DUB-005": { slug: "museum-of-the-future", name: "Museum of the Future" },
  "DUB-006": { slug: "one-zaabeel", name: "One Za'abeel" },
  "DUB-007": { slug: "atlantis-the-royal", name: "Atlantis The Royal" },
  "DUB-008": { slug: "princess-tower", name: "Princess Tower" },
  "DUB-009": { slug: "marina-101", name: "Marina 101" },
  "DUB-010": { slug: "address-downtown", name: "Address Downtown" },
  "DUB-011": { slug: "almas-tower", name: "Almas Tower" },
  "DUB-012": { slug: "index-tower", name: "The Index Tower" },
};

function generateTrapHtml(targetSlug, targetName) {
  const targetUrl = targetSlug ? `/buildings/${targetSlug}/` : "/";
  const fullCanonical = `https://dubai-architecture.info${targetUrl}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${targetName} — Dubai Architecture Historical Archive (2006)</title>
  <meta name="robots" content="index, follow">
  <meta http-equiv="refresh" content="0; url=${targetUrl}">
  <link rel="canonical" href="${fullCanonical}">
  <script>
    window.location.replace("${targetUrl}");
  </script>
  <style>
    body {
      background-color: #09090b;
      color: #f4f4f5;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 1rem;
      text-align: center;
    }
    .card {
      background: #18181b;
      border: 1px solid rgba(245, 158, 11, 0.3);
      border-radius: 1rem;
      padding: 2.5rem;
      max-width: 520px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
    h1 {
      color: #fbbf24;
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }
    p {
      color: #a1a1aa;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    a {
      display: inline-block;
      margin-top: 1.25rem;
      padding: 0.75rem 1.5rem;
      background: #f59e0b;
      color: #09090b;
      font-weight: 600;
      text-decoration: none;
      border-radius: 0.5rem;
    }
    a:hover {
      background: #d97706;
    }
  </style>
</head>
<body>
  <div class="card">
    <div style="font-size: 0.75rem; color: #fbbf24; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem;">
      Historical Architectural Archive (Since 2006)
    </div>
    <h1>${targetName}</h1>
    <p>This historical entry has been updated in the modern Dubai Architecture encyclopedia.</p>
    <a href="${targetUrl}">Continue to Architectural Profile &rarr;</a>
  </div>
</body>
</html>`;
}

// Generate DUB-001.htm ... DUB-050.htm and .html
for (let i = 1; i <= 50; i++) {
  const code = `DUB-${String(i).padStart(3, "0")}`;
  const mapped = legacyMap[code] || {
    slug: "",
    name: "Dubai Skyscrapers Catalog",
  };

  const html = generateTrapHtml(mapped.slug, mapped.name);

  fs.writeFileSync(path.join(publicDir, `${code}.htm`), html, "utf-8");
  fs.writeFileSync(path.join(publicDir, `${code}.html`), html, "utf-8");
}

// Generate Historical Photo Galleries (DUB-GAL1.htm ... DUB-GAL10.htm and .html)
for (let i = 1; i <= 10; i++) {
  const code = `DUB-GAL${i}`;
  const html = generateTrapHtml("buildings", `Dubai Architecture Photo Gallery ${i}`);
  // Point canonical and redirect directly to /buildings/
  const galleryHtml = html
    .replace(/\/buildings\/buildings\//g, "/buildings/")
    .replace(/\/buildings\//g, "/buildings/");

  fs.writeFileSync(path.join(publicDir, `${code}.htm`), galleryHtml, "utf-8");
  fs.writeFileSync(path.join(publicDir, `${code}.html`), galleryHtml, "utf-8");
}

// Named legacy URLs from early 2000s web archive
const namedTraps = {
  "index.htm": { slug: "", name: "Dubai Architecture Home" },
  "burj-dubai.htm": { slug: "burj-khalifa", name: "Burj Khalifa (Burj Dubai)" },
  "burj-al-arab.htm": { slug: "burj-al-arab", name: "Burj Al Arab" },
  "emirates-towers.htm": { slug: "emirates-towers", name: "Emirates Towers" },
  "dubai-skyscrapers.htm": { slug: "", name: "Dubai Skyscrapers Directory" },
  "dubai-towers.htm": { slug: "", name: "Dubai Towers Directory" },
  "architecture-dubai.htm": { slug: "", name: "Dubai Architecture Encyclopedia" },
  "gallery.htm": { slug: "", name: "Dubai Architecture Gallery" },
  "gallery.html": { slug: "", name: "Dubai Architecture Gallery" },
  "photos.htm": { slug: "", name: "Dubai Skyscrapers Photos" },
  "photos.html": { slug: "", name: "Dubai Skyscrapers Photos" },
  "dubai-gallery.htm": { slug: "", name: "Dubai Architecture Gallery" },
  "dubai-gallery.html": { slug: "", name: "Dubai Architecture Gallery" },
};

for (const [filename, info] of Object.entries(namedTraps)) {
  const html = generateTrapHtml(info.slug, info.name);
  fs.writeFileSync(path.join(publicDir, filename), html, "utf-8");
}

console.log("Successfully generated all legacy trap redirects in public/ directory.");
