const gate = document.querySelector("[data-access-gate]");
const shell = document.querySelector("[data-site-shell]");

if (gate instanceof HTMLElement && shell instanceof HTMLElement) {
  const storageKey = "timemau-review-access";
  const expectedDigest = gate.dataset.digest ?? "";
  const form = gate.querySelector("form");
  const input = gate.querySelector("input[type='password']");
  const error = gate.querySelector("[data-access-error]");

  const unlock = () => {
    gate.hidden = true;
    shell.hidden = false;
    document.documentElement.classList.remove("access-locked");
    shell.querySelector("main")?.focus();
  };

  if (sessionStorage.getItem(storageKey) === expectedDigest) {
    unlock();
  } else {
    document.documentElement.classList.add("access-locked");
    gate.hidden = false;
    input?.focus();
  }

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!(input instanceof HTMLInputElement) || !(error instanceof HTMLElement)) {
      return;
    }

    const bytes = new TextEncoder().encode(input.value);
    const digestBuffer = await crypto.subtle.digest("SHA-256", bytes);
    const digest = Array.from(new Uint8Array(digestBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    if (digest === expectedDigest) {
      sessionStorage.setItem(storageKey, digest);
      input.value = "";
      error.textContent = "";
      unlock();
      return;
    }

    error.textContent =
      gate.dataset.locale === "ro"
        ? "Parola nu este corectă. Încearcă din nou."
        : "That password is not correct. Please try again.";
    input.value = "";
    input.focus();
  });
}
