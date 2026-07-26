import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_ORIGIN ?? "https://www.timemau.com";
const base = process.env.PUBLIC_BASE_PATH ?? "/";
const reviewProtected =
  process.env.PUBLIC_ACCESS_GATE_ENABLED !== "false" ||
  process.env.PUBLIC_NOINDEX === "true";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  integrations: reviewProtected
    ? []
    : [
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
