import { assetUrl } from "@/config/site";

export const prerender = true;

export function GET() {
  return new Response(
    JSON.stringify({
      name: "MauAI by Time Mau",
      short_name: "MauAI",
      description:
        "A local-first AI library in development, built around visible sources and user-controlled knowledge.",
      start_url: assetUrl("/"),
      scope: assetUrl("/"),
      display: "standalone",
      background_color: "#F7F4ED",
      theme_color: "#F7F4ED",
      icons: [
        {
          src: assetUrl("/assets/icons/icon-192.png"),
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: assetUrl("/assets/icons/icon-512.png"),
          sizes: "512x512",
          type: "image/png",
        },
      ],
    }),
    {
      headers: {
        "Content-Type": "application/manifest+json; charset=utf-8",
      },
    },
  );
}
