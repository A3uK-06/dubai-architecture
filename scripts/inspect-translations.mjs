import fs from 'fs';
const tr = fs.readFileSync('src/i18n/translations.ts', 'utf8');

const ruIdx = tr.indexOf('const ruTranslations:');
const arIdx = tr.indexOf('const arTranslations:');
const ruBlock = tr.slice(ruIdx, arIdx);

console.log('ruTranslations has districtBannerTitle:', ruBlock.includes('districtBannerTitle'));
const lines = ruBlock.split('\n');
lines.filter(l => l.includes('districtBanner')).forEach(l => console.log('RU:', l.trim()));
