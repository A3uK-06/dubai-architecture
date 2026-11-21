import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const DIRS = [
  'public/images',
  'public/images/buildings',
  'public/images/districts',
];

const DATA_FILES = [
  'src/data/buildings.ts',
  'src/data/districts.ts',
];

async function optimizeImages() {
  console.log('🚀 Starting Automated Image Optimization...');
  let totalOriginalBytes = 0;
  let totalWebpBytes = 0;
  let convertedCount = 0;
  let optimizedJpgCount = 0;

  for (const dir of DIRS) {
    if (!fs.existsSync(dir)) continue;
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isFile()) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

      const fullPath = path.join(dir, entry.name);
      const baseName = path.basename(entry.name, ext);
      const webpPath = path.join(dir, `${baseName}.webp`);

      const srcStat = fs.statSync(fullPath);
      totalOriginalBytes += srcStat.size;

      let needWebp = false;
      if (!fs.existsSync(webpPath)) {
        needWebp = true;
      } else {
        const webpStat = fs.statSync(webpPath);
        if (webpStat.mtimeMs < srcStat.mtimeMs || webpStat.size < 1000) {
          needWebp = true;
        }
      }

      if (needWebp) {
        try {
          const pipeline = sharp(fullPath).rotate();
          await pipeline
            .resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 82, effort: 5 })
            .toFile(webpPath);

          const webpStat = fs.statSync(webpPath);
          totalWebpBytes += webpStat.size;
          convertedCount++;
          console.log(`  [WebP] ${entry.name} (${(srcStat.size / 1024).toFixed(0)} KB) -> ${baseName}.webp (${(webpStat.size / 1024).toFixed(0)} KB)`);
        } catch (err) {
          console.error(`  ❌ Error converting ${fullPath} to WebP:`, err.message);
        }
      } else {
        const webpStat = fs.statSync(webpPath);
        totalWebpBytes += webpStat.size;
      }

      // Also ensure the JPEG is reasonable size (< 250 KB) for social/og:image scrapers
      if (srcStat.size > 250 * 1024 || entry.name === 'hero-dubai-skyline.jpg') {
        try {
          const tempJpg = path.join(dir, `${baseName}.tmp.jpg`);
          await sharp(fullPath)
            .rotate()
            .resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: 82, mozjpeg: true })
            .toFile(tempJpg);

          const tempStat = fs.statSync(tempJpg);
          if (tempStat.size < srcStat.size || entry.name === 'hero-dubai-skyline.jpg') {
            fs.renameSync(tempJpg, fullPath);
            optimizedJpgCount++;
            console.log(`  [Optimized JPG] ${entry.name}: ${(srcStat.size / 1024).toFixed(0)} KB -> ${(tempStat.size / 1024).toFixed(0)} KB`);
          } else {
            fs.unlinkSync(tempJpg);
          }
        } catch (err) {
          console.error(`  ❌ Error optimizing JPG ${fullPath}:`, err.message);
        }
      }
    }
  }

  // Auto-update data files to point to .webp
  let updatedRefs = 0;
  for (const dataFile of DATA_FILES) {
    if (!fs.existsSync(dataFile)) continue;
    let content = fs.readFileSync(dataFile, 'utf-8');
    let modified = false;

    // Match image: "/images/buildings/name.jpg" or "/images/districts/name.jpg"
    const regex = /(image:\s*['"]\/images\/(buildings|districts)\/)([^'"]+)\.(jpg|jpeg|png)(['"])/g;
    content = content.replace(regex, (match, prefix, folder, name, oldExt, suffix) => {
      const webpFile = path.join('public', 'images', folder, `${name}.webp`);
      if (fs.existsSync(webpFile)) {
        modified = true;
        updatedRefs++;
        return `${prefix}${name}.webp${suffix}`;
      }
      return match;
    });

    if (modified) {
      fs.writeFileSync(dataFile, content, 'utf-8');
      console.log(`  📝 Updated image references to .webp in ${dataFile}`);
    }
  }

  console.log('\n=== Image Optimization Summary ===');
  console.log(`Converted to WebP: ${convertedCount} images`);
  console.log(`Optimized fallback JPGs: ${optimizedJpgCount} images`);
  console.log(`Data references updated to .webp: ${updatedRefs}`);
  console.log(`Total original size: ${(totalOriginalBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total WebP size: ${(totalWebpBytes / (1024 * 1024)).toFixed(2)} MB`);
  const savings = totalOriginalBytes > 0 ? (((totalOriginalBytes - totalWebpBytes) / totalOriginalBytes) * 100).toFixed(1) : 0;
  console.log(`Savings: ${savings}% 🎉\n`);
}

optimizeImages().catch((err) => {
  console.error('Fatal optimization error:', err);
  process.exit(1);
});
