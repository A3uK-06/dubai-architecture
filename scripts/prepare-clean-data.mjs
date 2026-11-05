import fs from 'fs';

// We can read buildings.ts and districts.ts and extract the data
const bContent = fs.readFileSync('src/data/buildings.ts', 'utf-8');
const dContent = fs.readFileSync('src/data/districts.ts', 'utf-8');

// Quick export using a temporary file with .ts extension stripped or module format
const bClean = bContent
  .replace(/import\s+[^;]+;/g, '')
  .replace(/export\s+interface\s+[\s\S]*?\n\}/g, '')
  .replace(/:\s*Building\[\]/g, '')
  .replace(/export\s+const\s+BUILDINGS\s*=/, 'export default');

fs.writeFileSync('scripts/buildings-data.mjs', bClean, 'utf-8');

const dClean = dContent
  .replace(/import\s+[^;]+;/g, '')
  .replace(/export\s+interface\s+[\s\S]*?\n\}/g, '')
  .replace(/:\s*District\[\]/g, '')
  .replace(/export\s+const\s+DISTRICTS\s*=/, 'export default');

fs.writeFileSync('scripts/districts-data.mjs', dClean, 'utf-8');

console.log('Saved clean data files.');
