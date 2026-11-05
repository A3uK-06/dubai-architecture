import fs from 'fs';

const content = fs.readFileSync('src/data/localizedContent.ts', 'utf-8');

// Strip TypeScript annotations
const cleaned = content
  .replace(/import\s+[^;]+;/g, '')
  .replace(/export\s+interface\s+[\s\S]*?\n\}/g, '')
  .replace(/export\s+const\s+([A-Z0-9_]+)\s*:[^=]+=/g, 'export const $1 =')
  .replace(/export\s+function[\s\S]*$/, '');

fs.writeFileSync('scripts/parsed-ru-ar.mjs', cleaned, 'utf-8');
console.log('Saved parsed-ru-ar.mjs cleanly');
