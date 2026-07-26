import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const isDevelopment = process.argv.includes("dev");
const site = process.env.PUBLIC_SITE_ORIGIN ?? "https://mauainoah.github.io";
const base =
  process.env.PUBLIC_BASE_PATH ??
  (isDevelopment ? "/" : "/timemau-website");

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404/"),
    }),
  ],
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
