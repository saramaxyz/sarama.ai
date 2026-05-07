(function () {
  const canvas = document.getElementById("waveCanvas");
  if (!canvas) return;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReducedMotion) return;

  const ctx = canvas.getContext("2d");
  let w, h;
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  let t = 0;
  function drawWave() {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = "#e06b4a";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < w; x++) {
      const y =
        h / 2 +
        Math.sin(x * 0.003 + t) * 40 +
        Math.sin(x * 0.007 + t * 1.3) * 25 +
        Math.sin(x * 0.001 + t * 0.5) * 60;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
    t += 0.008;
    requestAnimationFrame(drawWave);
  }
  drawWave();
})();
