import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");
const outDir = path.join(rootDir, "out");

if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
  fs.writeFileSync(path.join(outDir, "CNAME"), "dubai-architecture.info\n");
  console.log("Successfully ensured out/.nojekyll and out/CNAME for GitHub Pages.");

  // Generate Multilingual Static Pages for Google/Yandex indexation
  try {
    console.log("Generating static multilingual subdirectories (ru, ar, hi, zh, de, fr, ur, it, tr)...");
    execSync("npx tsx scripts/generate-multilingual-static-pages.mjs", {
      cwd: rootDir,
      stdio: "inherit",
    });
  } catch (err) {
    console.error("Warning: Failed to generate multilingual static pages:", err.message);
  }

  // Generate Partitioned Sitemap Index and sub-sitemaps
  try {
    console.log("Generating partitioned sitemap index and sub-sitemaps...");
    execSync("npx tsx scripts/generate-sitemaps.mjs", {
      cwd: rootDir,
      stdio: "inherit",
    });
  } catch (err) {
    console.error("Warning: Failed to generate sitemaps:", err.message);
  }

  // Ensure official Google tag is placed immediately after <head> across all HTML pages
  try {
    const googleTag = `<script async src="https://www.googletagmanager.com/gtm.js?id=GTM-P5QVMKMB"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());</script>`;
    function injectTagInDir(dir) {
      const files = fs.readdirSync(dir, { withFileTypes: true });
      for (const f of files) {
        const full = path.join(dir, f.name);
        if (f.isDirectory()) {
          injectTagInDir(full);
        } else if (f.name.endsWith(".html")) {
          let c = fs.readFileSync(full, "utf8");
          if (c.includes("<head>") && !c.includes("gtm.js?id=GTM-P5QVMKMB")) {
            c = c.replace("<head>", `<head>${googleTag}`);
            fs.writeFileSync(full, c, "utf8");
          }
        }
      }
    }
    injectTagInDir(outDir);
    console.log("Successfully ensured official Google tag is placed immediately after <head> in all pages.");
  } catch (err) {
    console.error("Warning: Tag injection error:", err.message);
  }
}

