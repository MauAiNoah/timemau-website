import type { Locale } from "@/config/site";

export type PageKey =
  | "home"
  | "library"
  | "privacy"
  | "about"
  | "earlyAccess"
  | "download"
  | "faq"
  | "privacyPolicy"
  | "terms";

export const routes: Record<PageKey, Record<Locale, string>> = {
  home: { en: "/", ro: "/ro/" },
  library: { en: "/library/", ro: "/ro/biblioteca/" },
  privacy: { en: "/privacy/", ro: "/ro/confidentialitate/" },
  about: { en: "/about/", ro: "/ro/despre/" },
  earlyAccess: { en: "/early-access/", ro: "/ro/acces-timpuriu/" },
  download: { en: "/download/", ro: "/ro/descarcare/" },
  faq: { en: "/faq/", ro: "/ro/intrebari/" },
  privacyPolicy: {
    en: "/legal/privacy/",
    ro: "/ro/legal/confidentialitate/",
  },
  terms: { en: "/legal/terms/", ro: "/ro/legal/termeni/" },
};

export const oppositeLocale = (locale: Locale): Locale =>
  locale === "en" ? "ro" : "en";

export const equivalentRoute = (page: PageKey, locale: Locale): string =>
  routes[page][locale];
