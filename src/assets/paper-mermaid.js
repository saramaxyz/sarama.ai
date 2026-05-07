(function () {
  function themeValue(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  async function renderMermaid() {
    if (!window.mermaid) return;
    document.querySelectorAll(".mermaid").forEach((diagram) => {
      if (!diagram.dataset.source) {
        diagram.dataset.source = diagram.textContent;
      } else {
        diagram.removeAttribute("data-processed");
        diagram.textContent = diagram.dataset.source;
      }
    });
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: "base",
      flowchart: {
        useMaxWidth: true,
        htmlLabels: false,
        curve: "basis",
        nodeSpacing: 42,
        rankSpacing: 64,
      },
      themeVariables: {
        background: themeValue("--surface"),
        primaryColor: themeValue("--surface-2"),
        primaryTextColor: themeValue("--text"),
        primaryBorderColor: themeValue("--border"),
        lineColor: themeValue("--text-muted"),
        edgeLabelBackground: themeValue("--surface"),
        fontFamily: themeValue("--font-ui"),
        fontSize: "18px",
      },
    });
    await mermaid.run({ querySelector: ".mermaid" });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderMermaid);
  } else {
    renderMermaid();
  }
  document.addEventListener("sarama:themechange", renderMermaid);
})();
