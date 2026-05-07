(function () {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const rows = document.querySelectorAll("#signalBars .signal-bar");
  rows.forEach((row) => {
    const base = parseFloat(row.dataset.base);
    const jitter = parseFloat(row.dataset.jitter || 3);
    const fill = row.querySelector(".bar-fill");
    const valueEl = row.querySelector(".bar-value");
    requestAnimationFrame(() => {
      fill.style.width = base + "%";
    });
    function tick() {
      const offset = (Math.random() * 2 - 1) * jitter;
      const v = Math.max(5, Math.min(99, base + offset));
      fill.style.width = v.toFixed(1) + "%";
      valueEl.textContent = v.toFixed(0) + "%";
    }
    const tickInterval = 1600 + Math.random() * 800;
    if (!prefersReducedMotion) {
      setTimeout(() => {
        tick();
        setInterval(tick, tickInterval);
      }, Math.random() * 800);
    }
  });

  const predEl = document.getElementById("signalPredVal");
  const kindEl = document.querySelector(".signal-prediction .pred-key");
  if (predEl) {
    const predictions = [
      { kind: "Detection", text: "curious-alert · low threat assessment · seeking proximity (0.81)" },
      { kind: "Symptom", text: "subclinical lameness · left forelimb · 86% confidence" },
      { kind: "Behavior", text: "transitioning from rest → alert orientation toward kitchen" },
      { kind: "Detection", text: "reunion-affiliative vocalization · contentment cluster (0.93)" },
      { kind: "Symptom", text: "early respiratory irregularity · recommend vet check within 72h" },
      { kind: "Behavior", text: "play-bow detected · social engagement with second dog" },
      { kind: "Detection", text: "inhibited-want signal · expectation of reward · low frustration" },
      { kind: "Symptom", text: "sleep fragmentation ↑ 12% vs 14-day baseline" },
      { kind: "Behavior", text: "pacing pattern, mild separation arousal, declining" },
      { kind: "Detection", text: "startle response · seeking-shelter intent · arousal decaying (0.74)" },
      { kind: "Symptom", text: "no pain markers · gait symmetry within range" },
      { kind: "Behavior", text: "self-soothing · licking forepaws · settling" },
    ];
    let i = 0;
    if (!prefersReducedMotion) {
      setInterval(() => {
        predEl.classList.add("fade");
        if (kindEl) kindEl.classList.add("fade");
        setTimeout(() => {
          i = (i + 1) % predictions.length;
          predEl.textContent = predictions[i].text;
          if (kindEl) kindEl.textContent = predictions[i].kind;
          predEl.classList.remove("fade");
          if (kindEl) kindEl.classList.remove("fade");
        }, 380);
      }, 3400);
    }
    predEl.textContent = predictions[0].text;
    if (kindEl) kindEl.textContent = predictions[0].kind;
  }

  const waveContainer = document.getElementById("heroWave");
  if (!prefersReducedMotion && waveContainer) {
    const barCount = 80;
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement("span");
      const delay = (i * 0.05).toFixed(2);
      const duration = (0.8 + Math.random() * 0.8).toFixed(2);
      bar.style.animationDelay = `${delay}s`;
      bar.style.animationDuration = `${duration}s`;
      bar.style.height = `${4 + Math.random() * 28}px`;
      waveContainer.appendChild(bar);
    }
  }
})();
