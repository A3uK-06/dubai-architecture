import fs from 'fs';

const bFile = fs.readFileSync('src/data/buildings.ts', 'utf8');
const dFile = fs.readFileSync('src/data/districts.ts', 'utf8');

const bImages = [...bFile.matchAll(/image:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const dImages = [...dFile.matchAll(/image:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

console.log('=== BUILDINGS IMAGES (Total: ' + bImages.length + ') ===');
const bCount = {};
for (const img of bImages) {
  bCount[img] = (bCount[img] || 0) + 1;
}
for (const [img, count] of Object.entries(bCount)) {
  if (count > 1) console.log('Duplicate building image:', img, 'count:', count);
}

console.log('=== DISTRICTS IMAGES (Total: ' + dImages.length + ') ===');
const dCount = {};
for (const img of dImages) {
  dCount[img] = (dCount[img] || 0) + 1;
}
for (const [img, count] of Object.entries(dCount)) {
  if (count > 1) console.log('Duplicate district image:', img, 'count:', count);
}

console.log('=== CROSS-DUPLICATES BETWEEN BUILDINGS & DISTRICTS ===');
let crossCount = 0;
for (const b of bImages) {
  if (dImages.includes(b)) {
    console.log('Cross-duplicate image:', b);
    crossCount++;
  }
}
if (crossCount === 0) console.log('No cross-duplicates found.');

// Also check for any identical descriptions in buildings
const bDesc = [...bFile.matchAll(/description:\s*["']([^"']+)["']/g)].map(m => m[1]);
const descCount = {};
for (const d of bDesc) {
  descCount[d] = (descCount[d] || 0) + 1;
}
console.log('=== DUPLICATE DESCRIPTIONS IN BUILDINGS ===');
for (const [d, count] of Object.entries(descCount)) {
  if (count > 1) {
    console.log(`\nDuplicate description (occurs ${count} times):`);
    console.log(`"${d}"`);
  }
}

