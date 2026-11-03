import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.join(__dirname, "..", "out");

if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
  fs.writeFileSync(path.join(outDir, "CNAME"), "dubai-architecture.info\n");
  console.log("Successfully ensured out/.nojekyll and out/CNAME for GitHub Pages.");
}
