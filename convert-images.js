import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = './public/products';
const tempDir = './public/products_temp';

async function optimizeImages() {
  // Create temp dir
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.webp', '.png', '.jpg', '.jpeg', '.avif'].includes(ext)) {
      const inputPath = path.join(inputDir, file);
      const stat = fs.statSync(inputPath);
      const sizeKB = stat.size / 1024;

      // Skip if already small
      if (sizeKB < 100) {
        fs.copyFileSync(inputPath, path.join(tempDir, file));
        continue;
      }

      const outputPath = path.join(tempDir, file);

      try {
        let pipeline = sharp(inputPath);

        // Resize to appropriate web dimensions
        pipeline = pipeline.resize(700, null, { withoutEnlargement: true });

        // Compress
        if (ext === '.webp') {
          pipeline = pipeline.webp({ quality: 75, effort: 6 });
        } else {
          pipeline = pipeline.webp({ quality: 75 });
        }

        await pipeline.toFile(outputPath);
        console.log(`Optimized ${file}: ${sizeKB.toFixed(1)}KB -> ${(fs.statSync(outputPath).size / 1024).toFixed(1)}KB`);
      } catch (error) {
        console.error(`Error optimizing ${file}:`, error);
        // Copy original if error
        fs.copyFileSync(inputPath, outputPath);
      }
    }
  }

  // Overwrite original files
  const tempFiles = fs.readdirSync(tempDir);
  for (const file of tempFiles) {
    const tempPath = path.join(tempDir, file);
    const origPath = path.join(inputDir, file);
    fs.copyFileSync(tempPath, origPath);
  }
  fs.rmSync(tempDir, { recursive: true, force: true });

  console.log('Image optimization complete. Original images backed up in products_backup.');
}

optimizeImages();