import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import { join, parse } from "node:path";

const INPUT_DIR = "photos-raw";
const OUTPUT_DIR = "public/photos";
const WIDTH = 800;
const HEIGHT = 600;

const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".tiff"]);

async function resizePhotos() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter((f) =>
    SUPPORTED_EXTENSIONS.has(parse(f).ext.toLowerCase())
  );

  if (imageFiles.length === 0) {
    console.log(`No images found in ${INPUT_DIR}/`);
    console.log("Drop your photos into that folder and run this script again.");
    return;
  }

  console.log(`Resizing ${imageFiles.length} image(s) to ${WIDTH}x${HEIGHT}...`);

  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    const { name } = parse(file);
    const outputPath = join(OUTPUT_DIR, `${name}.jpg`);

    await sharp(inputPath)
      .resize(WIDTH, HEIGHT, { fit: "cover", position: "center" })
      .jpeg({ quality: 85 })
      .toFile(outputPath);

    console.log(`  ✔ ${file} → ${outputPath}`);
  }

  console.log("Done!");
}

resizePhotos().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
