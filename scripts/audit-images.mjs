import fs from 'fs';
import path from 'path';

const buildingsFile = fs.readFileSync('./src/data/buildings.ts', 'utf8');
const districtsFile = fs.readFileSync('./src/data/districts.ts', 'utf8');

const buildingImages = [...buildingsFile.matchAll(/image:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const districtImages = [...districtsFile.matchAll(/image:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

console.log(`=== Checking Buildings Images (${buildingImages.length}) ===`);
let missingCount = 0;
for (const img of buildingImages) {
  const fullPath = path.join('./public', img.replace(/^\//, ''));
  if (!fs.existsSync(fullPath)) {
    console.log('MISSING building image:', img);
    missingCount++;
  } else {
    const stat = fs.statSync(fullPath);
    if (stat.size < 1000) {
      console.log('CORRUPT building image (<1KB):', img, stat.size);
      missingCount++;
    }
  }
}

console.log(`=== Checking Districts Images (${districtImages.length}) ===`);
for (const img of districtImages) {
  const fullPath = path.join('./public', img.replace(/^\//, ''));
  if (!fs.existsSync(fullPath)) {
    console.log('MISSING district image:', img);
    missingCount++;
  } else {
    const stat = fs.statSync(fullPath);
    if (stat.size < 1000) {
      console.log('CORRUPT district image (<1KB):', img, stat.size);
      missingCount++;
    }
  }
}

console.log(`Total missing or corrupt in data files: ${missingCount}`);

console.log('\n=== Checking Image References Across src/ Directory ===');
let srcMissing = 0;
function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (/\.(tsx|ts|jsx|js)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = [...content.matchAll(/['"](\/images\/[^'"]+)['"]/g)].map(m => m[1]);
      for (const imgPath of matches) {
        const fileOnDisk = path.join('public', imgPath.replace(/^\//, ''));
        if (!fs.existsSync(fileOnDisk)) {
          console.log(`FILE: ${fullPath} references missing image: ${imgPath}`);
          srcMissing++;
        }
      }
    }
  }
}

scanDirectory('src');
console.log(`Total missing image references in src: ${srcMissing}`);

