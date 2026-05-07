(function () {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;
  const themeLabel = document.getElementById("themeLabel");
  const savedTheme = localStorage.getItem("sarama-theme");
  if (savedTheme) {
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
    localStorage.setItem("sarama-theme", next);
    updateThemeLabel();
    document.dispatchEvent(new CustomEvent("sarama:themechange", { detail: { theme: next } }));
  });
})();
