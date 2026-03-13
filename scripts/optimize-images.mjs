import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");

const tasks = [
  { input: "1.jpg", maxWidth: 1200, quality: 72 },
  { input: "2.jpg", maxWidth: 1200, quality: 72 },
  { input: "3.jpg", maxWidth: 1200, quality: 72 },
  { input: "4.jpg", maxWidth: 1200, quality: 72 },
  { input: "5.jpg", maxWidth: 1200, quality: 72 },
  { input: "lyxphoto.jpg", maxWidth: 900, quality: 78 },
];

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  let v = bytes;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i += 1;
  }
  return `${v.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

async function optimizeOne({ input, maxWidth, quality }) {
  const inPath = path.join(publicDir, input);
  if (!fs.existsSync(inPath)) return { input, skipped: true, reason: "missing" };

  const base = input.replace(/\.(jpe?g|png)$/i, "");
  const outWebp = path.join(publicDir, `${base}.webp`);

  const before = fs.statSync(inPath).size;

  const image = sharp(inPath, { failOn: "none" });
  const meta = await image.metadata();
  const width = meta.width ?? maxWidth;
  const resizeWidth = Math.min(width, maxWidth);

  await image
    .resize({ width: resizeWidth, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(outWebp);

  const after = fs.statSync(outWebp).size;
  return { input, out: path.basename(outWebp), before, after };
}

async function main() {
  if (!fs.existsSync(publicDir)) {
    console.error("public folder not found:", publicDir);
    process.exit(1);
  }

  const results = [];
  for (const t of tasks) {
    // eslint-disable-next-line no-await-in-loop
    results.push(await optimizeOne(t));
  }

  for (const r of results) {
    if (r.skipped) {
      console.log(`[skip] ${r.input} (${r.reason})`);
    } else {
      console.log(
        `[ok] ${r.input} -> ${r.out}  ${formatBytes(r.before)} -> ${formatBytes(
          r.after
        )}`
      );
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

