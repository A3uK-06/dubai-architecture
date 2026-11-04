import fs from 'fs';

let s = fs.readFileSync('scripts/generate-full-localization.mjs', 'utf8');
s = s.split('\n').filter(line => !line.trim().startsWith('es:')).join('\n');
fs.writeFileSync('scripts/generate-full-localization.mjs', s, 'utf8');

let s2 = fs.readFileSync('src/data/localizedContent.ts', 'utf8');
s2 = s2.split('\n').filter(line => !line.trim().startsWith('es:')).join('\n');
fs.writeFileSync('src/data/localizedContent.ts', s2, 'utf8');

console.log('Cleaned es from both files successfully!');
