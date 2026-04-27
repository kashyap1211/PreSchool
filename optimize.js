import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const bannerPath = path.resolve('src/assets/Images/Banner.jpg');
const bannerMobilePath = path.resolve('src/assets/Images/Banner1.jpg');

async function optimize() {
   if (fs.existsSync(bannerPath)) {
      await sharp(bannerPath)
         .resize(1920)
         .webp({ quality: 80 })
         .toFile(path.resolve('src/assets/Images/Banner.webp'));
      console.log('Optimized Banner.webp');
   }

   if (fs.existsSync(bannerMobilePath)) {
      await sharp(bannerMobilePath)
         .resize(800)
         .webp({ quality: 80 })
         .toFile(path.resolve('src/assets/Images/Banner1.webp'));
      console.log('Optimized Banner1.webp');
   }
}

optimize().catch(console.error);
