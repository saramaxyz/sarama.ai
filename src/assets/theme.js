(function () {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;
  const themeLabel = document.getElementById("themeLabel");

  function readStoredTheme() {
    try {
      return window.localStorage.getItem("sarama-theme");
    } catch (err) {
      return null;
    }
  }

  function writeStoredTheme(theme) {
    try {
      window.localStorage.setItem("sarama-theme", theme);
    } catch (err) {
      // Storage can be unavailable in private browsing or locked-down embeds.
    }
  }

  const savedTheme = readStoredTheme();
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || "light";
  }
  function updateThemeLabel() {
    const isLight = currentTheme() === "light";
    if (themeLabel) themeLabel.textContent = isLight ? "Light" : "Dark";
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme",
    );
  }
  updateThemeLabel();

  themeToggle.addEventListener("click", () => {
    const next = currentTheme() === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    writeStoredTheme(next);
    updateThemeLabel();
    document.dispatchEvent(new CustomEvent("sarama:themechange", { detail: { theme: next } }));
  });
})();
