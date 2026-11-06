import fs from 'fs';

// Quick inspect of districts.ts
const content = fs.readFileSync('src/data/districts.ts', 'utf8');

// Simple regex extraction or node import
console.log("Length of districts.ts:", content.length);
