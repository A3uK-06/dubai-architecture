import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\A3uK0\\.gemini\\antigravity\\brain\\33a60100-a0d6-491e-8b33-58783a1cb110';
const targetBuildings = path.resolve('public/images/buildings');
const targetDistricts = path.resolve('public/images/districts');

const mapping = [
  { prefix: 'wasl_tower', dest: path.join(targetBuildings, 'wasl-tower.jpg') },
  { prefix: 'burj_binghatti', dest: path.join(targetBuildings, 'burj-binghatti.jpg') },
  { prefix: 'ciel_tower', dest: path.join(targetBuildings, 'ciel-tower.jpg') },
  { prefix: 'franck_muller_tower', dest: path.join(targetBuildings, 'franck-muller.jpg') },
  { prefix: 'il_primo', dest: path.join(targetBuildings, 'il-primo.jpg') },
  { prefix: 'uptown_tower', dest: path.join(targetBuildings, 'uptown-tower.jpg') },
  { prefix: 'the_palm_tower', dest: path.join(targetBuildings, 'the-palm-tower.jpg') },
  { prefix: 'five_jumeirah_village', dest: path.join(targetBuildings, 'five-jumeirah-village.jpg') },
  { prefix: 'dubai_creek_residences', dest: path.join(targetBuildings, 'dubai-creek-residences.jpg') },
  { prefix: 'address_sky_view', dest: path.join(targetBuildings, 'address-sky-view.jpg') },
  { prefix: 'mercedes_benz_places', dest: path.join(targetBuildings, 'mercedes-benz-places.jpg') },
  { prefix: 'dubai_hills_district', dest: path.join(targetDistricts, 'dubai-hills.jpg') },
  { prefix: 'jvc_district', dest: path.join(targetDistricts, 'jvc.jpg') }
];

if (!fs.existsSync(brainDir)) {
  console.error(`Brain dir not found: ${brainDir}`);
  process.exit(1);
}

const files = fs.readdirSync(brainDir);
let copied = 0;

for (const item of mapping) {
  // Find matching files starting with item.prefix
  const matches = files
    .filter(f => f.startsWith(item.prefix) && f.endsWith('.jpg'))
    .sort((a, b) => b.localeCompare(a)); // pick latest

  if (matches.length > 0) {
    const src = path.join(brainDir, matches[0]);
    fs.copyFileSync(src, item.dest);
    console.log(`Copied ${matches[0]} -> ${path.relative(process.cwd(), item.dest)}`);
    copied++;
  } else {
    console.log(`Pending: ${item.prefix}`);
  }
}

console.log(`\nSuccessfully synced ${copied} of ${mapping.length} assets.`);
