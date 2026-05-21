import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// OGP image
const ogSvg = readFileSync(resolve(root, "public/og-image.svg"), "utf8");
const ogPng = new Resvg(ogSvg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
writeFileSync(resolve(root, "public/og-image.png"), ogPng);
console.log("✓ public/og-image.png を生成しました");

// Favicon
const favSvg = readFileSync(resolve(root, "public/favicon.svg"), "utf8");
const favPng = new Resvg(favSvg, { fitTo: { mode: "width", value: 512 } }).render().asPng();
writeFileSync(resolve(root, "public/favicon.png"), favPng);
console.log("✓ public/favicon.png を生成しました");
