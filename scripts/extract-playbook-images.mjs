import fs from 'fs';
import path from 'path';

const outDir = 'extracted_playbook_images';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const buf = fs.readFileSync('uxpeak-ui-ux-playbook.pdf');
console.log('Scanning for JPEG images...');

let imgCount = 0;
let pos = 0;

while (pos < buf.length) {
  const start = buf.indexOf(Buffer.from([0xFF, 0xD8, 0xFF]), pos);
  if (start === -1) break;

  const end = buf.indexOf(Buffer.from([0xFF, 0xD9]), start + 3);
  if (end === -1) break;

  const len = end + 2 - start;
  // If the JPEG is larger than 50KB (i.e. not tiny icons or thumbnails)
  if (len > 50000) {
    imgCount++;
    const imgBuf = buf.subarray(start, end + 2);
    const filename = path.join(outDir, `page_${String(imgCount).padStart(3, '0')}.jpg`);
    fs.writeFileSync(filename, imgBuf);
    console.log(`Saved ${filename} (${Math.round(len / 1024)} KB)`);
    if (imgCount >= 30) break; // limit to first 30 major slides
  }

  pos = end + 2;
}

console.log('Total large images extracted:', imgCount);
