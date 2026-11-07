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
    console.log("Generating static multilingual subdirectories (/ru/, /ar/, /zh/, /de/, /fr/)...");
    execSync("npx tsx scripts/generate-multilingual-static-pages.mjs", {
      cwd: rootDir,
      stdio: "inherit",
    });
  } catch (err) {
    console.error("Warning: Failed to generate multilingual static pages:", err.message);
  }
}

