import fs from 'fs';

const locFile = fs.readFileSync('src/data/localizedContent.ts', 'utf8');
const bFile = fs.readFileSync('src/data/buildings.ts', 'utf8');
const dFile = fs.readFileSync('src/data/districts.ts', 'utf8');

const bIds = [...bFile.matchAll(/id:\s*["']([^"']+)["']/g)].map(m => m[1]);
const dIds = [...dFile.matchAll(/id:\s*["']([^"']+)["']/g)].map(m => m[1]);

console.log('Total buildings in buildings.ts:', bIds.length);
console.log('Total districts in districts.ts:', dIds.length);

// Check which buildings are in LOCALIZED_BUILDINGS_RU
const ruBlock = locFile.slice(locFile.indexOf('LOCALIZED_BUILDINGS_RU'), locFile.indexOf('LOCALIZED_BUILDINGS_AR'));
const arBlock = locFile.slice(locFile.indexOf('LOCALIZED_BUILDINGS_AR'), locFile.indexOf('LOCALIZED_DISTRICTS_RU'));
const ruDistBlock = locFile.slice(locFile.indexOf('LOCALIZED_DISTRICTS_RU'), locFile.indexOf('LOCALIZED_DISTRICTS_AR'));
const arDistBlock = locFile.slice(locFile.indexOf('LOCALIZED_DISTRICTS_AR'));

const ruBuildings = bIds.filter(id => ruBlock.includes(`"${id}":`));
const arBuildings = bIds.filter(id => arBlock.includes(`"${id}":`));
const ruDistricts = dIds.filter(id => ruDistBlock.includes(`"${id}":`));
const arDistricts = dIds.filter(id => arDistBlock.includes(`"${id}":`));

console.log('RU localized buildings count:', ruBuildings.length, 'of', bIds.length);
console.log('AR localized buildings count:', arBuildings.length, 'of', bIds.length);
console.log('Missing in RU:', bIds.filter(id => !ruBuildings.includes(id)));

console.log('RU localized districts count:', ruDistricts.length, 'of', dIds.length);
console.log('AR localized districts count:', arDistricts.length, 'of', dIds.length);
console.log('Missing in RU districts:', dIds.filter(id => !ruDistricts.includes(id)));
