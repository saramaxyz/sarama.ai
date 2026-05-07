(function () {
  const t = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (!t || !menu) return;

  function close() {
    document.body.classList.remove("nav-open");
    t.setAttribute("aria-expanded", "false");
    t.setAttribute("aria-label", "Open menu");
  }
  t.setAttribute("aria-label", "Open menu");
  t.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    t.setAttribute("aria-expanded", open ? "true" : "false");
    t.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) close();
  });
})();
