document.addEventListener("keydown", (event) => {
  const summary = event.target.closest?.("summary");
  const details = summary?.parentElement;

  if (!(summary instanceof HTMLElement) || !(details instanceof HTMLDetailsElement)) {
    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    details.open = !details.open;
  }

  if (event.key === "Escape" && details.open) {
    event.preventDefault();
    details.open = false;
    summary.focus();
  }
});
