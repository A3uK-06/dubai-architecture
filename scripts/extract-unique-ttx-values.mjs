import fs from 'fs';

const bFile = fs.readFileSync('src/data/buildings.ts', 'utf8');
const dFile = fs.readFileSync('src/data/districts.ts', 'utf8');

function extractKeys(text, fieldName) {
  const regex = new RegExp(`${fieldName}:\\s*["']([^"']+)["']`, 'g');
  const matches = [...text.matchAll(regex)].map(m => m[1]);
  return [...new Set(matches)];
}

console.log('=== BUILDINGS UNIQUE TECHNICAL STRINGS ===');
const fields = [
  'bedrockType',
  'lateralSystem',
  'dampingMechanism',
  'concreteStrengthGrade',
  'glazingType',
  'bmuCleaningSystem',
  'cleaningCycleDays',
  'zoningStrategy',
  'peakWaitingSeconds',
  'coolingProvider',
  'chillerBilling',
  'acousticRatingDb',
  'columnImpact',
  'balconyUsability',
  'urbanIntegration'
];

const bUnique = {};
for (const f of fields) {
  bUnique[f] = extractKeys(bFile, f);
  console.log(`${f}: ${bUnique[f].length} unique values`);
}

console.log('\n=== DISTRICTS UNIQUE STRINGS ===');
const distFields = [
  'urbanConcept',
  'walkabilityScore',
  'chillerType',
  'stormwaterResilience',
  'targetTenantProfile'
];
for (const f of distFields) {
  const vals = extractKeys(dFile, f);
  console.log(`${f}: ${vals.length} unique values`);
}
