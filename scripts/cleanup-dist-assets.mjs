import { readdir, unlink } from "node:fs/promises";
import path from "node:path";

const assetsDir = path.resolve(process.cwd(), "dist", "assets");
const orphanPatterns = [
  /^parse-.*\.js$/,
  /^server(\.browser)?-.*\.js$/,
  /^prerender-.*\.js$/,
];

let removed = 0;

try {
  const files = await readdir(assetsDir);
  for (const file of files) {
    if (orphanPatterns.some((pattern) => pattern.test(file))) {
      await unlink(path.join(assetsDir, file));
      console.log(`Removed orphan prerender chunk: assets/${file}`);
      removed += 1;
    }
  }
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    console.log("No dist/assets directory found, skipping orphan cleanup.");
  } else {
    throw error;
  }
}

if (removed === 0) {
  console.log("No orphan prerender chunks found in dist/assets.");
}