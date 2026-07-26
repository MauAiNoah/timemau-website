import { createHash, webcrypto } from "node:crypto";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";

const gateScript = readFileSync(
  new URL("../public/scripts/access-gate.js", import.meta.url),
  "utf8",
);
const fixturePassword = "correct-review-fixture";
const fixtureDigest = createHash("sha256")
  .update(fixturePassword)
  .digest("hex");

class FakeElement {
  hidden = false;
  dataset: Record<string, string> = {};
  textContent = "";
  value = "";
  focused = false;
  children = new Map<string, FakeElement>();
  listener?: (event: { preventDefault: () => void }) => Promise<void>;

  querySelector(selector: string) {
    return this.children.get(selector) ?? null;
  }

  addEventListener(
    _type: string,
    listener: (event: { preventDefault: () => void }) => Promise<void>,
  ) {
    this.listener = listener;
  }

  focus() {
    this.focused = true;
  }
}

class FakeInput extends FakeElement {}

const createStorage = () => {
  const values = new Map<string, string>();
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => values.set(key, value),
  };
};

const runGate = (
  storage: ReturnType<typeof createStorage>,
  locale: "en" | "ro" = "en",
) => {
  const gate = new FakeElement();
  const shell = new FakeElement();
  const form = new FakeElement();
  const input = new FakeInput();
  const error = new FakeElement();
  const main = new FakeElement();
  const classes = new Set<string>();

  gate.dataset = { digest: fixtureDigest, locale };
  gate.children.set("form", form);
  gate.children.set("input[type='password']", input);
  gate.children.set("[data-access-error]", error);
  shell.hidden = true;
  shell.children.set("main", main);

  const document = {
    querySelector: (selector: string) =>
      selector === "[data-access-gate]" ? gate : shell,
    documentElement: {
      classList: {
        add: (name: string) => classes.add(name),
        remove: (name: string) => classes.delete(name),
      },
    },
  };

  runInNewContext(gateScript, {
    document,
    HTMLElement: FakeElement,
    HTMLInputElement: FakeInput,
    sessionStorage: storage,
    TextEncoder,
    crypto: webcrypto,
    Uint8Array,
  });

  return {
    gate,
    shell,
    input,
    error,
    main,
    classes,
    submit: async (value: string) => {
      input.value = value;
      await form.listener?.({ preventDefault: () => undefined });
    },
  };
};

describe("password review gate", () => {
  it("rejects an incorrect value with localized feedback", async () => {
    const page = runGate(createStorage(), "ro");

    await page.submit("incorrect-review-fixture");

    expect(page.gate.hidden).toBe(false);
    expect(page.shell.hidden).toBe(true);
    expect(page.error.textContent).toMatch(/nu este corectă/i);
    expect(page.input.value).toBe("");
    expect(page.input.focused).toBe(true);
  });

  it("unlocks for the matching SHA-256 digest", async () => {
    const page = runGate(createStorage());

    await page.submit(fixturePassword);

    expect(page.gate.hidden).toBe(true);
    expect(page.shell.hidden).toBe(false);
    expect(page.error.textContent).toBe("");
    expect(page.main.focused).toBe(true);
    expect(page.classes.has("access-locked")).toBe(false);
  });

  it("restores unlock state only from the same tab storage", async () => {
    const sameTabStorage = createStorage();
    const firstLoad = runGate(sameTabStorage);
    await firstLoad.submit(fixturePassword);

    const reload = runGate(sameTabStorage);
    const separateTab = runGate(createStorage());

    expect(reload.gate.hidden).toBe(true);
    expect(reload.shell.hidden).toBe(false);
    expect(separateTab.gate.hidden).toBe(false);
    expect(separateTab.shell.hidden).toBe(true);
  });
});
