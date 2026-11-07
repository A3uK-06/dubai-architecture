import fs from 'fs';
import path from 'path';

const outDir = path.resolve('out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Read districts and buildings slugs
const districtsContent = fs.readFileSync('src/data/districts.ts', 'utf-8');
const buildingContent = fs.readFileSync('src/data/buildings.ts', 'utf-8');
const devContent = fs.readFileSync('src/data/developers.ts', 'utf-8');

const districtSlugs = [...districtsContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
const buildingSlugs = [...buildingContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
const devSlugs = [...devContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);

const staticPages = ['calculator', 'golden-visa', 'buildings', 'districts', 'methodology', 'developers', 'about', 'contact', 'editorial-policy', 'affiliate-disclosure'];

for (const p of staticPages) {
  const dir = path.join(outDir, p);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

for (const d of districtSlugs) {
  const dir = path.join(outDir, 'districts', d);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

for (const b of buildingSlugs) {
  const dir = path.join(outDir, 'buildings', b);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

for (const dev of devSlugs) {
  const dir = path.join(outDir, 'developers', dev);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

console.log(`Pre-created ${districtSlugs.length} district, ${buildingSlugs.length} building, and ${devSlugs.length} developer out directories.`);
