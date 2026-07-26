import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const sourceRoots = ["src", "public", ".github"];
const textExtensions = new Set([
  ".astro",
  ".css",
  ".html",
  ".js",
  ".json",
  ".mjs",
  ".svg",
  ".ts",
  ".txt",
  ".yml",
]);

const files = [];

async function walk(path) {
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const target = join(path, entry.name);
    if (entry.isDirectory()) {
      await walk(target);
    } else if (textExtensions.has(extname(entry.name))) {
      files.push(target);
    }
  }
}

for (const directory of sourceRoots) {
  await walk(fileURLToPath(new URL(`../${directory}/`, import.meta.url)));
}

const forbiddenMarketing = [
  /\brevolutionary\b/i,
  /\bhallucination-free\b/i,
  /\bperfect accuracy\b/i,
  /\bbest AI\b/i,
  /\bAGI\b/,
  /\bguaranteed correct\b/i,
  /\bmilitary-grade\b/i,
];
const forbiddenIntegrations = [
  /googletagmanager/i,
  /google-analytics/i,
  /connect\.facebook\.net/i,
  /hotjar/i,
  /recaptcha/i,
  /fonts\.googleapis\.com/i,
];
const forbiddenPublicLeaks = [
  /\/Users\/mau\//,
  /SET_ME_BEFORE_LAUNCH/,
  /example@gmail\.com/i,
];

const failures = [];

for (const file of files) {
  const body = await readFile(file, "utf8");
  for (const pattern of [
    ...forbiddenMarketing,
    ...forbiddenIntegrations,
    ...forbiddenPublicLeaks,
  ]) {
    if (pattern.test(body)) {
      failures.push(`${file.replace(root, "")}: ${pattern}`);
    }
  }
}

if (failures.length) {
  console.error(`Content lint failed:\n${failures.join("\n")}`);
  process.exit(1);
}

console.log(
  `Content lint passed across ${files.length} public source and workflow files.`,
);
