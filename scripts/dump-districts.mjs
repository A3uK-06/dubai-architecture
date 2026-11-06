import fs from 'fs';
import { DISTRICTS } from '../src/data/districts.ts';

fs.writeFileSync('scripts/districts-source.json', JSON.stringify(DISTRICTS, null, 2), 'utf8');
console.log('Saved scripts/districts-source.json with', DISTRICTS.length, 'districts');
