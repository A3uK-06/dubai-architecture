import fs from 'fs';

// Since translations.ts is TypeScript, let's check its text blocks or strip types
const trContent = fs.readFileSync('src/i18n/translations.ts', 'utf8');

const blocks = {
  en: 'const enBase: TranslationDictionary = {',
  ru: 'const ruTranslations: Partial<TranslationDictionary> = {',
  ar: 'const arTranslations: Partial<TranslationDictionary> = {',
  zh: 'const zhTranslations: Partial<TranslationDictionary> = {',
  de: 'const deTranslations: Partial<TranslationDictionary> = {',
  fr: 'const frTranslations: Partial<TranslationDictionary> = {',
};

console.log('Block checks:');
for (const [lang, needle] of Object.entries(blocks)) {
  const idx = trContent.indexOf(needle);
  console.log(`${lang}: found at index ${idx}`);
}

// Check hi, ur, it, tr blocks
for (const lang of ['hi', 'ur', 'it', 'tr']) {
  const needle = `${lang}: deepMerge(enBase, {`;
  const idx = trContent.indexOf(needle);
  console.log(`${lang}: found at index ${idx}`);
}
