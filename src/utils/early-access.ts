import type { EarlyAccessMode } from "@/config/site";

export interface EarlyAccessEnvironment {
  readonly mode: EarlyAccessMode;
  readonly email?: string;
  readonly endpoint?: string;
}

export type EarlyAccessState =
  | { readonly kind: "disabled" }
  | { readonly kind: "mailto"; readonly href: string }
  | { readonly kind: "endpoint"; readonly action: string };

export const resolveEarlyAccessState = (
  environment: EarlyAccessEnvironment,
): EarlyAccessState => {
  if (environment.mode === "disabled") return { kind: "disabled" };

  if (environment.mode === "mailto") {
    if (!environment.email || !environment.email.endsWith("@timemau.com")) {
      throw new Error("Mailto mode requires an approved @timemau.com address.");
    }
    return {
      kind: "mailto",
      href: `mailto:${environment.email}?subject=${encodeURIComponent("MauAI early access")}`,
    };
  }

  if (!environment.endpoint?.startsWith("https://")) {
    throw new Error("Endpoint mode requires an HTTPS URL.");
  }

  return { kind: "endpoint", action: environment.endpoint };
};
