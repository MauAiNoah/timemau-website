/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_ORIGIN?: string;
  readonly PUBLIC_BASE_PATH?: string;
  readonly PUBLIC_RELEASE_STATUS?: "prelaunch" | "early-access" | "released";
  readonly PUBLIC_EARLY_ACCESS_MODE?: "disabled" | "mailto" | "endpoint";
  readonly PUBLIC_EARLY_ACCESS_EMAIL?: string;
  readonly PUBLIC_EARLY_ACCESS_ENDPOINT?: string;
  readonly PUBLIC_NOINDEX?: "true" | "false";
  readonly PUBLIC_ACCESS_GATE_ENABLED?: "true" | "false";
  readonly PUBLIC_ACCESS_GATE_DIGEST?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
