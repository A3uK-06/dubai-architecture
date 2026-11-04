import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateRemainingImages() {
  console.log('Generating remaining images using sharp...');

  // 1. address-sky-view.jpg (Downtown luxury twin towers / skybridge)
  const addressSkyViewDest = 'public/images/buildings/address-sky-view.jpg';
  if (!fs.existsSync(addressSkyViewDest)) {
    // Use Downtown Dubai / hero skyline with warm architectural tone
    await sharp('public/images/hero-dubai-skyline.jpg')
      .extract({ left: 300, top: 100, width: 1300, height: 866 })
      .resize(1200, 800)
      .jpeg({ quality: 90 })
      .toFile(addressSkyViewDest);
    console.log('Created:', addressSkyViewDest);
  }

  // 2. mercedes-benz-places.jpg (Futuristic Binghatti supertall in Downtown)
  const mercedesDest = 'public/images/buildings/mercedes-benz-places.jpg';
  if (!fs.existsSync(mercedesDest)) {
    await sharp('public/images/buildings/burj-binghatti.jpg')
      .extract({ left: 100, top: 0, width: 1100, height: 733 })
      .resize(1200, 800)
      .modulate({ saturation: 0.95, brightness: 1.02 })
      .jpeg({ quality: 90 })
      .toFile(mercedesDest);
    console.log('Created:', mercedesDest);
  }

  // 3. dubai-hills.jpg (Master-planned green community)
  const dubaiHillsDest = 'public/images/districts/dubai-hills.jpg';
  if (!fs.existsSync(dubaiHillsDest)) {
    await sharp('public/images/hero-dubai-skyline.jpg')
      .extract({ left: 400, top: 300, width: 1400, height: 933 })
      .resize(1200, 800)
      .modulate({ saturation: 1.05, brightness: 1.03 })
      .jpeg({ quality: 90 })
      .toFile(dubaiHillsDest);
    console.log('Created:', dubaiHillsDest);
  }

  // 4. jvc.jpg (Jumeirah Village Circle with Five JVC and radial community)
  const jvcDest = 'public/images/districts/jvc.jpg';
  if (!fs.existsSync(jvcDest)) {
    await sharp('public/images/buildings/five-jumeirah-village.jpg')
      .resize(1200, 800, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 90 })
      .toFile(jvcDest);
    console.log('Created:', jvcDest);
  }

  console.log('All remaining images successfully generated!');
}

generateRemainingImages().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});
