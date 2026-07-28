export type Locale = "en" | "ro";
export type ReleaseStatus = "prelaunch" | "early-access" | "released";
export type EarlyAccessMode = "disabled" | "mailto" | "endpoint";

export interface DownloadArtifact {
  readonly available: boolean;
  readonly url?: string;
  readonly sha256?: string;
}

export interface SiteConfig {
  readonly origin: string;
  readonly basePath: string;
  readonly releaseStatus: ReleaseStatus;
  readonly earlyAccess: {
    readonly mode: EarlyAccessMode;
    readonly email?: string;
    readonly endpoint?: string;
  };
  readonly downloads: {
    readonly macos: DownloadArtifact;
    readonly windows: DownloadArtifact;
  };
  readonly noindex: boolean;
  readonly accessGate: {
    readonly enabled: boolean;
    readonly digest: string;
  };
  readonly publisher: "Time Mau";
  readonly product: "MauAI";
  readonly knowledgeProduct: "Noah Library";
  readonly contactEmail: "contact@timemau.com";
}

const normalizeBase = (base: string): string => {
  if (!base || base === "/") return "";
  return `/${base.replace(/^\/+|\/+$/g, "")}`;
};

const origin = (
  import.meta.env.PUBLIC_SITE_ORIGIN ?? "https://www.timemau.com"
).replace(/\/+$/, "");
const basePath = normalizeBase(import.meta.env.BASE_URL);
const mode = import.meta.env.PUBLIC_EARLY_ACCESS_MODE ?? "disabled";
const endpoint = import.meta.env.PUBLIC_EARLY_ACCESS_ENDPOINT?.trim();
const email = import.meta.env.PUBLIC_EARLY_ACCESS_EMAIL?.trim();
const accessGateEnabled =
  import.meta.env.PUBLIC_ACCESS_GATE_ENABLED !== "false";
const accessGateDigest =
  import.meta.env.PUBLIC_ACCESS_GATE_DIGEST?.trim() ??
  "8d3b7436d5757311f92965d575e75a1cc9294ac8fea6c779ea39553d288f5920";

if (mode === "endpoint" && (!endpoint || !endpoint.startsWith("https://"))) {
  throw new Error("Endpoint early-access mode requires an HTTPS endpoint.");
}

if (mode === "mailto" && (!email || !email.endsWith("@timemau.com"))) {
  throw new Error("Mailto early-access mode requires an approved @timemau.com address.");
}

export const siteConfig: SiteConfig = {
  origin,
  basePath,
  releaseStatus: import.meta.env.PUBLIC_RELEASE_STATUS ?? "prelaunch",
  earlyAccess: {
    mode,
    ...(email ? { email } : {}),
    ...(endpoint ? { endpoint } : {}),
  },
  downloads: {
    macos: { available: false },
    windows: { available: false },
  },
  noindex: import.meta.env.PUBLIC_NOINDEX === "true",
  accessGate: {
    enabled: accessGateEnabled,
    digest: accessGateDigest,
  },
  publisher: "Time Mau",
  product: "MauAI",
  knowledgeProduct: "Noah Library",
  contactEmail: "contact@timemau.com",
};

export const withBase = (path = "/"): string => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!siteConfig.basePath) return normalized;
  if (normalized === "/") return `${siteConfig.basePath}/`;
  return `${siteConfig.basePath}${normalized}`;
};

export const absoluteUrl = (path = "/"): string =>
  `${siteConfig.origin}${withBase(path)}`;

export const assetUrl = (path: string): string => withBase(path);
