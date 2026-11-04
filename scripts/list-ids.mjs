import fs from 'fs';

const bFile = fs.readFileSync('src/data/buildings.ts', 'utf8');
const dFile = fs.readFileSync('src/data/districts.ts', 'utf8');

const bIds = [...bFile.matchAll(/id:\s*["']([^"']+)["']/g)].map(m => m[1]);
const dIds = [...dFile.matchAll(/id:\s*["']([^"']+)["']/g)].map(m => m[1]);

console.log('BUILDINGS:', JSON.stringify(bIds, null, 2));
console.log('DISTRICTS:', JSON.stringify(dIds, null, 2));
