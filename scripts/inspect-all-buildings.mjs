import fs from 'fs';

const bFile = fs.readFileSync('src/data/buildings.ts', 'utf8');
const dFile = fs.readFileSync('src/data/districts.ts', 'utf8');

function parseBuildings() {
  const blocks = bFile.split(/\{\s*id:\s*["']/);
  const items = [];
  for (let i = 1; i < blocks.length; i++) {
    const b = blocks[i];
    const id = b.split(/["']/)[0];
    const nameMatch = b.match(/name:\s*["']([^"']+)["']/);
    const imgMatch = b.match(/image:\s*["']([^"']+)["']/);
    const descMatch = b.match(/description:\s*["']([^"']+)["']/);
    items.push({
      id,
      name: nameMatch ? nameMatch[1] : '',
      image: imgMatch ? imgMatch[1] : '',
      desc: descMatch ? descMatch[1] : ''
    });
  }
  return items;
}

function parseDistricts() {
  const blocks = dFile.split(/\{\s*id:\s*["']/);
  const items = [];
  for (let i = 1; i < blocks.length; i++) {
    const b = blocks[i];
    const id = b.split(/["']/)[0];
    const nameMatch = b.match(/name:\s*["']([^"']+)["']/);
    const imgMatch = b.match(/image:\s*["']([^"']+)["']/);
    const descMatch = b.match(/description:\s*["']([^"']+)["']/);
    items.push({
      id,
      name: nameMatch ? nameMatch[1] : '',
      image: imgMatch ? imgMatch[1] : '',
      desc: descMatch ? descMatch[1] : ''
    });
  }
  return items;
}

const buildings = parseBuildings();
const districts = parseDistricts();

console.log(`=== ALL BUILDINGS (${buildings.length}) ===`);
buildings.forEach((b, i) => {
  console.log(`${i + 1}. [${b.id}] "${b.name}" -> ${b.image}`);
});

console.log(`\n=== ALL DISTRICTS (${districts.length}) ===`);
districts.forEach((d, i) => {
  console.log(`${i + 1}. [${d.id}] "${d.name}" -> ${d.image}`);
});
