import { cpSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * Vendor sources live outside `public/` under `vendor-*` names so Vite does not
 * treat `lib/` at the project root as an ESM graph (Bootstrap/Isotope UMD uses
 * `require("jquery")` which Vite would try to resolve).
 */
function mirrorToPublic(sourceDirName, destSubdir) {
  const from = join(root, sourceDirName);
  const to = join(root, "public", destSubdir);
  if (!existsSync(from)) {
    console.warn(`sync-assets: skip — missing ${sourceDirName}/`);
    return;
  }
  cpSync(from, to, { recursive: true, force: true });
}

mirrorToPublic("vendor-lib", "lib");
mirrorToPublic("css", "css");
mirrorToPublic("js", "js");
mirrorToPublic("fonts", "fonts");
mirrorToPublic("contactform", "contactform");

const fromImages = join(root, "images");
const toImages = join(root, "public", "images");
if (existsSync(fromImages)) {
  cpSync(fromImages, toImages, { recursive: true, force: true });
} else {
  console.warn("sync-assets: skip — no images/ folder at repo root");
}

const pdfs = [
  "elastic.pdf",
  "joshua_ocallaghan.pdf",
  "portfolio1.pdf",
  "portfolio2.pdf",
  "portfolio3.pdf",
  "tech_writing.pdf"
];

for (const name of pdfs) {
  const from = join(root, name);
  const to = join(root, "public", name);
  if (existsSync(from)) {
    cpSync(from, to);
  }
}

const redirects = join(root, "_redirects");
if (existsSync(redirects)) {
  cpSync(redirects, join(root, "public", "_redirects"));
}
