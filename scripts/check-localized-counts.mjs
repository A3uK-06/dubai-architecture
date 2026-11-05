import fs from 'fs';

const content = fs.readFileSync('src/data/localizedContent.ts', 'utf-8');

function extractKeys(varName) {
  const regex = new RegExp(`export const ${varName}:[^{]+{([\\s\\S]*?)\\n};`);
  const match = content.match(regex);
  if (!match) return [];
  const body = match[1];
  const keys = [...body.matchAll(/\"([a-z0-9-]+)\"\s*:\s*\{/g)].map(m => m[1]);
  return keys;
}

const ruBuildings = extractKeys('LOCALIZED_BUILDINGS_RU');
const arBuildings = extractKeys('LOCALIZED_BUILDINGS_AR');
const ruDistricts = extractKeys('LOCALIZED_DISTRICTS_RU');
const arDistricts = extractKeys('LOCALIZED_DISTRICTS_AR');

console.log('RU Buildings (' + ruBuildings.length + '):', ruBuildings);
console.log('AR Buildings (' + arBuildings.length + '):', arBuildings);
console.log('RU Districts (' + ruDistricts.length + '):', ruDistricts);
console.log('AR Districts (' + arDistricts.length + '):', arDistricts);
