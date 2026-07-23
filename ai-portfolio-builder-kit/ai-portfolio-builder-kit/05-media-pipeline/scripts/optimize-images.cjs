/**
 * optimize-images.cjs — one-off batch image optimizer (dev tool, not part of the app build).
 *
 * Reads source images from SRC and writes web-ready WebP into OUT.
 * Adapt the sections to your assets. Run:  node scripts/optimize-images.cjs
 *
 * Install once:  npm install --save-dev sharp
 *
 * This file is generic and contains no personal data. Replace the folder paths
 * and the example rules with your own. See ../image-optimization.md for the rules.
 */

const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

// ── Configure these ──────────────────────────────────────────────
const SRC = path.resolve(__dirname, '../../_source-images'); // your raw PNG/JPG
const OUT = path.resolve(__dirname, '../src/assets/works');  // where optimized WebP go
// ─────────────────────────────────────────────────────────────────

fs.mkdirSync(OUT, { recursive: true });
const files = fs.readdirSync(SRC);
const find = (re) => files.filter((f) => re.test(f)).sort();

async function report(file) {
  const kb = Math.round(fs.statSync(file).size / 1024);
  const meta = await sharp(file).metadata();
  console.log(`${path.basename(file).padEnd(30)} ${meta.width}x${meta.height}  ${kb} KB`);
  return kb;
}

async function main() {
  // ── 1. Hero with transparency: keep alpha, no crop, no blur ──
  //    Renders "bare" on the page (no frame). See figure-image recipe.
  const hero = files.find((f) => /hero/i.test(f));
  if (hero) {
    await sharp(path.join(SRC, hero))
      .resize({ width: 1200 })
      .webp({ quality: 80, alphaQuality: 100 })
      .toFile(path.join(OUT, 'hero.webp'));
  }

  // ── 2. Photo (portrait/landscape): straight convert ──
  const photo = files.find((f) => /photo/i.test(f));
  if (photo) {
    await sharp(path.join(SRC, photo))
      .webp({ quality: 82 })
      .toFile(path.join(OUT, 'photo.webp'));
  }

  // ── 3. Gallery set: generate thumb (cover crop) + full for each ──
  //    Example: files named like "gallery-before-1.png", "gallery-after-2.png"
  const gallery = find(/gallery-/i);
  for (let i = 0; i < gallery.length; i++) {
    const src = path.join(SRC, gallery[i]);
    const base = path.basename(gallery[i]).replace(/\.[^.]+$/, '');

    // full: cap width, preserve whole image
    await sharp(src).resize({ width: 1100 }).webp({ quality: 75 })
      .toFile(path.join(OUT, `${base}-full.webp`));

    // thumb: crop the top region to a consistent 4:3, then 800x600
    const meta = await sharp(src).metadata();
    const cropH = Math.min(Math.round(meta.width * 0.75), meta.height);
    await sharp(src).extract({ left: 0, top: 0, width: meta.width, height: cropH })
      .resize(800, 600).webp({ quality: 75 })
      .toFile(path.join(OUT, `${base}-thumb.webp`));
  }

  // ── Summary ──
  console.log('--- RESULTS ---');
  let total = 0;
  for (const f of fs.readdirSync(OUT).sort()) total += await report(path.join(OUT, f));
  console.log(`TOTAL: ${total} KB across ${fs.readdirSync(OUT).length} files`);
}

main().catch((e) => { console.error(e); process.exit(1); });
