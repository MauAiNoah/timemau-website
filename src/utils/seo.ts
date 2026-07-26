import { absoluteUrl } from "@/config/site";
import type { Locale } from "@/config/site";
import { routes } from "@/i18n/routes";
import type { PageKey } from "@/i18n/routes";

export const websiteStructuredData = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MauAI by Time Mau",
  url: absoluteUrl(routes.home[locale]),
  inLanguage: locale,
  description:
    locale === "ro"
      ? "O bibliotecă local-first în dezvoltare, construită în jurul surselor vizibile și al cunoașterii controlate de utilizator."
      : "A local-first AI library in development, built around visible sources and user-controlled knowledge.",
  publisher: {
    "@type": "Brand",
    name: "Time Mau",
  },
});

export const breadcrumbStructuredData = (
  locale: Locale,
  page: PageKey,
  label: string,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: locale === "ro" ? "Acasă" : "Home",
      item: absoluteUrl(routes.home[locale]),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: label,
      item: absoluteUrl(routes[page][locale]),
    },
  ],
});
