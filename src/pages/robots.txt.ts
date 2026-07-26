import { absoluteUrl, siteConfig } from "@/config/site";

export const prerender = true;

export function GET() {
  const gated = siteConfig.accessGate.enabled || siteConfig.noindex;
  const body = gated
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl("/sitemap-index.xml")}\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
