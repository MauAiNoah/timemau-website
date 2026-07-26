import { describe, expect, it } from "vitest";
import { resolveEarlyAccessState } from "../src/utils/early-access";
import { routes } from "../src/i18n/routes";

describe("early-access transport", () => {
  it("defaults safely to a disabled state", () => {
    expect(resolveEarlyAccessState({ mode: "disabled" })).toEqual({
      kind: "disabled",
    });
  });

  it("accepts only approved mailto addresses", () => {
    expect(
      resolveEarlyAccessState({
        mode: "mailto",
        email: "contact@timemau.com",
      }),
    ).toMatchObject({ kind: "mailto" });

    expect(() =>
      resolveEarlyAccessState({
        mode: "mailto",
        email: "invented@example.com",
      }),
    ).toThrow(/approved/);
  });

  it("accepts only HTTPS endpoints", () => {
    expect(
      resolveEarlyAccessState({
        mode: "endpoint",
        endpoint: "https://forms.example.test/mauai",
      }),
    ).toEqual({
      kind: "endpoint",
      action: "https://forms.example.test/mauai",
    });

    expect(() =>
      resolveEarlyAccessState({
        mode: "endpoint",
        endpoint: "http://forms.example.test/mauai",
      }),
    ).toThrow(/HTTPS/);
  });
});

describe("localized route contract", () => {
  it("has a unique English and Romanian route for every page", () => {
    const english = new Set<string>();
    const romanian = new Set<string>();

    for (const pair of Object.values(routes)) {
      expect(pair.en).toMatch(/^\/$|^\/.+\/$/);
      expect(pair.ro).toMatch(/^\/ro\/.*\/$|^\/ro\/$/);
      english.add(pair.en);
      romanian.add(pair.ro);
    }

    expect(english.size).toBe(Object.keys(routes).length);
    expect(romanian.size).toBe(Object.keys(routes).length);
  });
});
