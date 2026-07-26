import { access, readFile, readdir, stat } from "node:fs/promises";
import { dirname, extname, join, normalize, relative } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const dist = join(root, "dist");
const origin = (
  process.env.PUBLIC_SITE_ORIGIN ?? "https://www.timemau.com"
).replace(/\/+$/, "");
const configuredBase = process.env.PUBLIC_BASE_PATH ?? "/";
const base =
  !configuredBase || configuredBase === "/"
    ? ""
    : `/${configuredBase.replace(/^\/+|\/+$/g, "")}`;

const routePairs = [
  ["/", "/ro/"],
  ["/library/", "/ro/biblioteca/"],
  ["/privacy/", "/ro/confidentialitate/"],
  ["/about/", "/ro/despre/"],
  ["/early-access/", "/ro/acces-timpuriu/"],
  ["/download/", "/ro/descarcare/"],
  ["/faq/", "/ro/intrebari/"],
  ["/legal/privacy/", "/ro/legal/confidentialitate/"],
  ["/legal/terms/", "/ro/legal/termeni/"],
];

const failures = [];
const htmlFiles = [];

async function walk(path) {
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const target = join(path, entry.name);
    if (entry.isDirectory()) await walk(target);
    else if (entry.name.endsWith(".html")) htmlFiles.push(target);
  }
}

const routeFile = (route) =>
  route === "/" ? join(dist, "index.html") : join(dist, route, "index.html");

const extract = (html, regex) => [...html.matchAll(regex)].map((match) => match[1]);

for (const [english, romanian] of routePairs) {
  for (const route of [english, romanian]) {
    try {
      await access(routeFile(route));
    } catch {
      failures.push(`Missing route output: ${route}`);
    }
  }
}

try {
  await access(join(dist, "404.html"));
} catch {
  failures.push("Missing branded 404.html");
}

await walk(dist);

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const routeLabel = relative(dist, file);
  const htmlLang = html.match(/<html lang="([^"]+)"/)?.[1];
  const isRomanian = routeLabel.startsWith("ro/");

  if (htmlLang !== (isRomanian ? "ro" : "en")) {
    failures.push(`${routeLabel}: incorrect html lang`);
  }

  const h1Count = (html.match(/<h1(?:\s|>)/g) ?? []).length;
  if (h1Count !== 1) failures.push(`${routeLabel}: expected one h1, found ${h1Count}`);

  for (const required of [
    /<title>[^<]+<\/title>/,
    /<meta name="description" content="[^"]+"/,
    /<link rel="canonical" href="[^"]+"/,
    /hreflang="en"/,
    /hreflang="ro"/,
    /hreflang="x-default"/,
    /property="og:title"/,
    /property="og:description"/,
    /property="og:image"/,
  ]) {
    if (!required.test(html)) failures.push(`${routeLabel}: missing ${required}`);
  }

  if (!/name="robots" content="noindex, nofollow"/.test(html)) {
    failures.push(`${routeLabel}: review-gated build must be noindex`);
  }

  if (
    !/data-access-gate/.test(html) ||
    !/data-digest="[a-f0-9]{64}"/.test(html) ||
    !/type="password"/.test(html) ||
    !/\/scripts\/access-gate\.js/.test(html)
  ) {
    failures.push(`${routeLabel}: protected review gate is incomplete`);
  }

  if (/\/timemau-website\//.test(html)) {
    failures.push(`${routeLabel}: stale project-site base path remains`);
  }

  if (!/rel="manifest" href="\/site\.webmanifest"/.test(html)) {
    failures.push(`${routeLabel}: root web manifest link is missing`);
  }

  if (!/href="mailto:contact@timemau\.com"/.test(html)) {
    failures.push(`${routeLabel}: official contact address is missing`);
  }

  const ids = extract(html, /\sid="([^"]+)"/g);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) {
    failures.push(`${routeLabel}: duplicate ids ${[...new Set(duplicates)].join(", ")}`);
  }

  for (const image of html.matchAll(/<img\b([^>]+)>/g)) {
    if (!/\salt="[^"]*"/.test(image[1])) {
      failures.push(`${routeLabel}: image without alt attribute`);
    }
    if (!/\swidth="\d+"/.test(image[1]) || !/\sheight="\d+"/.test(image[1])) {
      failures.push(`${routeLabel}: image without explicit dimensions`);
    }
  }

  const links = [
    ...extract(html, /(?:href|src)="([^"]+)"/g),
    ...extract(html, /srcset="([^"]+)"/g).flatMap((set) =>
      set.split(",").map((candidate) => candidate.trim().split(/\s+/)[0]),
    ),
  ];

  for (const link of links) {
    if (
      link.startsWith("#") ||
      link.startsWith("mailto:") ||
      link.startsWith("https://") ||
      link.startsWith("data:")
    ) {
      continue;
    }

    if (base && link.startsWith("/") && !link.startsWith(`${base}/`)) {
      failures.push(`${routeLabel}: root-only URL bypasses base path: ${link}`);
      continue;
    }

    if (!link.startsWith(`${base}/`)) continue;
    const projectPath = link.slice(base.length).split(/[?#]/)[0];
    let target = join(dist, projectPath);
    if (projectPath.endsWith("/")) target = join(target, "index.html");

    try {
      const targetStat = await stat(target);
      if (targetStat.isDirectory()) await access(join(target, "index.html"));
    } catch {
      failures.push(`${routeLabel}: broken internal asset or link ${link}`);
    }
  }

  for (const scriptBody of extract(
    html,
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    try {
      JSON.parse(scriptBody);
    } catch {
      failures.push(`${routeLabel}: invalid JSON-LD`);
    }
  }

  if (
    /googletagmanager|google-analytics|facebook\.net|hotjar|recaptcha|fonts\.googleapis/i.test(
      html,
    )
  ) {
    failures.push(`${routeLabel}: forbidden external tracker or font`);
  }
}

for (const [english, romanian] of routePairs) {
  const enHtml = await readFile(routeFile(english), "utf8");
  const roHtml = await readFile(routeFile(romanian), "utf8");
  const expectedEn = `${origin}${base}${english}`;
  const expectedRo = `${origin}${base}${romanian}`;

  if (!enHtml.includes(`rel="canonical" href="${expectedEn}"`)) {
    failures.push(`${english}: incorrect canonical`);
  }
  if (!enHtml.includes(`hreflang="ro" href="${expectedRo}"`)) {
    failures.push(`${english}: incorrect Romanian alternate`);
  }
  if (!roHtml.includes(`rel="canonical" href="${expectedRo}"`)) {
    failures.push(`${romanian}: incorrect canonical`);
  }
  if (!roHtml.includes(`hreflang="en" href="${expectedEn}"`)) {
    failures.push(`${romanian}: incorrect English alternate`);
  }
}

const robots = await readFile(join(dist, "robots.txt"), "utf8");
if (
  !robots.includes("Disallow: /") ||
  robots.includes("Allow: /") ||
  robots.includes("Sitemap:")
) {
  failures.push("robots.txt does not fully block the protected review build");
}

const distEntries = await readdir(dist);
if (distEntries.some((entry) => entry.startsWith("sitemap"))) {
  failures.push("Protected review build must not publish a sitemap");
}

const manifest = JSON.parse(
  await readFile(join(dist, "site.webmanifest"), "utf8"),
);
if (
  manifest.start_url !== `${base}/` ||
  manifest.scope !== `${base}/` ||
  manifest.icons?.length !== 2 ||
  manifest.icons?.some((icon) => !icon.src.startsWith(`${base}/assets/icons/`))
) {
  failures.push("Web manifest is not rooted at the configured base path");
}

const earlyAccess = await readFile(routeFile("/early-access/"), "utf8");
if (!earlyAccess.includes("The form is being prepared.")) {
  failures.push("Early-access disabled state is missing");
}
if (/<form[^>]+action=/.test(earlyAccess)) {
  failures.push("Disabled early-access page contains a submission action");
}

const download = await readFile(routeFile("/download/"), "utf8");
if (/href="[^"]+\.(dmg|exe|msi|pkg|zip)"/i.test(download)) {
  failures.push("Pre-release download page exposes an artifact URL");
}

if (failures.length) {
  console.error(`Static validation failed:\n${failures.join("\n")}`);
  process.exit(1);
}

console.log(
  `Static validation passed: ${htmlFiles.length} HTML files, 18 localized routes, 404, custom-domain metadata, root links/assets/manifest, password gate, noindex, robots, sitemap exclusion, and disabled product states.`,
);
