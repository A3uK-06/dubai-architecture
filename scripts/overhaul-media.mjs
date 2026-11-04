import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const USER_AGENT = 'DubaiArchitectureInfo/1.0 (https://dubai-architecture.info/; contact@dubai-architecture.info)';

async function fetchBuffer(url) {
  console.log(`Fetching: ${url}`);
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function processImage(inputBufferOrPath, outPath, options = {}) {
  const { width = 1200, height = 900, fit = 'cover', position = 'center', crop = null } = options;
  let pipeline = sharp(inputBufferOrPath);
  if (crop) {
    pipeline = pipeline.extract(crop);
  }
  pipeline = pipeline.resize(width, height, { fit, position });
  await pipeline.jpeg({ quality: 86, mozjpeg: true }).toFile(outPath);
  const stat = fs.statSync(outPath);
  console.log(`Saved: ${outPath} (${(stat.size / 1024).toFixed(1)} KB)`);
}

async function run() {
  console.log('=== STARTING ASSET OVERHAUL ===');

  // 1. Cayan Tower (Twisting 90-degree Infinity Tower)
  if (fs.existsSync('temp_cayan.jpg')) {
    await processImage('temp_cayan.jpg', 'public/images/buildings/cayan-tower.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  }

  // 2. DAMAC Heights (335m curved blade with DAMAC logo)
  if (fs.existsSync('temp_damac_complete.jpg')) {
    await processImage('temp_damac_complete.jpg', 'public/images/buildings/damac-heights.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  }

  // 3. One Za'abeel (Twin towers with The Linx horizontal bridge)
  if (fs.existsSync('temp_one_zaabeel.jpg')) {
    await processImage('temp_one_zaabeel.jpg', 'public/images/buildings/one-zaabeel.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  }

  // 4. The Index Tower (Norman Foster - DIFC)
  if (fs.existsSync('temp_index.jpg')) {
    await processImage('temp_index.jpg', 'public/images/buildings/index-tower.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  }

  // 5. Almas Tower (Diamond-shaped JLT headquarters)
  if (fs.existsSync('temp_almas.jpg')) {
    await processImage('temp_almas.jpg', 'public/images/buildings/almas-tower.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  }

  // 6. The Opus by Zaha Hadid (Cube with fluid carved void)
  if (fs.existsSync('temp_opus.jpg')) {
    await processImage('temp_opus.jpg', 'public/images/buildings/the-opus.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  }

  // 7. Museum of the Future
  try {
    const motfBuf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/en/8/8c/Museum_of_the_future%2C_Dubai.jpeg');
    await processImage(motfBuf, 'public/images/buildings/museum-of-the-future.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('MOTF error:', e.message); }

  // 8. Atlantis The Royal
  try {
    const atlantisBuf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/commons/0/00/Atlantis_The_Royal%2C_Dubai_2.jpg');
    await processImage(atlantisBuf, 'public/images/buildings/atlantis-the-royal.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('Atlantis error:', e.message); }

  // 9. Marina 101
  try {
    const m101Buf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/commons/4/4b/Marina_101-1.jpg');
    await processImage(m101Buf, 'public/images/buildings/marina-101.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'top'
    });
  } catch(e) { console.error('Marina 101 error:', e.message); }

  // 10. Princess Tower (optimize Andres Larin photo)
  try {
    const ptBuf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/commons/4/4a/Princess_Tower_4-Dubai_UAE-Andres_Larin.jpg');
    await processImage(ptBuf, 'public/images/buildings/princess-tower.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'top'
    });
  } catch(e) { console.error('Princess Tower error:', e.message); }

  // 11. Address Downtown
  try {
    const addrBuf = await fetchBuffer('https://live.staticflickr.com/5509/10609933423_5f0cedab73_b.jpg');
    await processImage(addrBuf, 'public/images/buildings/address-downtown.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('Address Downtown error:', e.message); }

  // 12. Burj Khalifa (world tallest)
  try {
    const bkBuf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/commons/a/a6/Burj_Khalifa_%2816260269606%29.jpg');
    await processImage(bkBuf, 'public/images/buildings/burj-khalifa.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('Burj Khalifa error:', e.message); }

  // 13. Emirates Towers
  try {
    const etBuf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/commons/8/8f/Emirates_Towers_in_Dubai_at_dawn.jpg');
    await processImage(etBuf, 'public/images/buildings/emirates-towers.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('Emirates Towers error:', e.message); }

  // 14. Burj Al Arab (The Sail Hotel)
  // Ensure the actual Burj Al Arab hotel image is kept exclusively for Burj Al Arab!
  try {
    const baaBuf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec_2007.jpg/1200px-Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec_2007.jpg');
    await processImage(baaBuf, 'public/images/buildings/burj-al-arab.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('Burj Al Arab error:', e.message); }

  // 15. Dubai Creek Residences / Tower District
  try {
    const creekBuf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/commons/3/3a/Dubai_creek_harbour_skyline.jpg');
    await processImage(creekBuf, 'public/images/buildings/creek-tower-district.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('Creek error:', e.message); }

  // 16. Sobha Seahaven (Dubai Harbour)
  try {
    const seaBuf = await fetchBuffer('https://live.staticflickr.com/5513/29430582143_842d56d62b_b.jpg');
    await processImage(seaBuf, 'public/images/buildings/sobha-seahaven.jpg', {
      width: 1200,
      height: 900,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('Sobha Seahaven error:', e.message); }

  // === DISTRICTS ===
  console.log('=== UPDATING DISTRICTS ===');

  // Dubai Marina District
  try {
    const marinaBuf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1600px-Dubai_Marina_Skyline.jpg');
    await processImage(marinaBuf, 'public/images/districts/dubai-marina.jpg', {
      width: 1200,
      height: 800,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('District Marina error:', e.message); }

  // Palm Jumeirah District
  try {
    const palmBuf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Artificial_Archipelagos%2C_Dubai%2C_United_Arab_Emirates_ISS022-E-024940_lrg_%28cropped%29.jpg/1600px-Artificial_Archipelagos%2C_Dubai%2C_United_Arab_Emirates_ISS022-E-024940_lrg_%28cropped%29.jpg');
    await processImage(palmBuf, 'public/images/districts/palm-jumeirah.jpg', {
      width: 1200,
      height: 800,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('District Palm error:', e.message); }

  // DIFC District
  try {
    const difcBuf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/View_of_DIFC_from_At_The_Top_Burj_Khalifa.jpg/1600px-View_of_DIFC_from_At_The_Top_Burj_Khalifa.jpg');
    await processImage(difcBuf, 'public/images/districts/difc.jpg', {
      width: 1200,
      height: 800,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('District DIFC error:', e.message); }

  // Business Bay District
  try {
    const bbBuf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/commons/0/00/Dubai_Business_Bay.jpg');
    await processImage(bbBuf, 'public/images/districts/business-bay.jpg', {
      width: 1200,
      height: 800,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('District Business Bay error:', e.message); }

  // JLT District
  try {
    const jltBuf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aerial_View_of_Jumeirah_Lakes_Towers.jpg/1600px-Aerial_View_of_Jumeirah_Lakes_Towers.jpg');
    await processImage(jltBuf, 'public/images/districts/jumeirah-lakes-towers.jpg', {
      width: 1200,
      height: 800,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('District JLT error:', e.message); }

  // Dubai Creek Harbour District
  try {
    const creekHBuf = await fetchBuffer('https://upload.wikimedia.org/wikipedia/commons/3/3a/Dubai_creek_harbour_skyline.jpg');
    await processImage(creekHBuf, 'public/images/districts/dubai-creek-harbour.jpg', {
      width: 1200,
      height: 800,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('District Creek error:', e.message); }

  // Downtown Dubai District
  try {
    const dtBuf = await fetchBuffer('https://live.staticflickr.com/5608/15617699028_23e22d85ca_b.jpg');
    await processImage(dtBuf, 'public/images/districts/downtown-dubai.jpg', {
      width: 1200,
      height: 800,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('District Downtown error:', e.message); }

  // Dubai Harbour District
  try {
    const dhBuf = await fetchBuffer('https://live.staticflickr.com/5513/29430582143_842d56d62b_b.jpg');
    await processImage(dhBuf, 'public/images/districts/dubai-harbour.jpg', {
      width: 1200,
      height: 800,
      fit: 'cover',
      position: 'center'
    });
  } catch(e) { console.error('District Dubai Harbour error:', e.message); }

  console.log('=== OVERHAUL COMPLETE ===');
}

run();
