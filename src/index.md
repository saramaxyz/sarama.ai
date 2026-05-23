---
layout: layouts/page
activeNav: home
prefix: ""
permalink: /index.html
title: Interspecies Communication Lab | Sarama
description: Sarama is an interspecies communication lab. We listen to Canis familiaris, our family dogs, and to the species after them.
canonical: https://sarama.ai/
pageStyle: index
waveform: true
extraScripts:
  - assets/index-page.js
jsonLd:
  "@context": https://schema.org
  "@type": Organization
  name: Sarama
  url: https://sarama.ai/
  logo: https://sarama.ai/brand/logo.svg
  description: Interspecies communication AI research lab building multimodal, longitudinal models of non-human behavior.
  address:
    "@type": PostalAddress
    addressLocality: San Francisco
    addressRegion: CA
    addressCountry: US
  sameAs: []
capabilities:
  - { icon: Vocalization, h: "Repertoire, not dictionary", p: "YAMNet-based segmentation, MFCC embeddings, and unsupervised clustering to recover per-dog vocal repertoires, not a universal bark-to-English lookup." }
  - { icon: Multimodal, h: "Audio, video, motion, physiology", p: "Time-aligned signals on a single device: directional microphone, on-device visual features, IMU, and physiological proxies. Meaning lives in the joint distribution." }
  - { icon: Individual, h: "Per-dog causal baselines", p: "Acoustic fingerprinting, individual-ID models, and routine-aware context. Reliable interpretation of one dog is built from that dog's history, not a generic prior." }
  - { icon: Edge, h: "On-device feature extraction", p: "Inference compressed to ARM Cortex-M class hardware. Devices transmit features, not raw audio or video, so household-scale data collection is ethically tractable." }
  - { icon: "Feedback Loop", h: "Dog parents as soft labels", p: "The earlier app taught us labels reflect dog parent expectation, not dog meaning. Ground truth now comes from sensor-grounded signals; dog parent feedback is treated as soft, biased prior." }
  - { icon: "Open Science", h: "Negative results in public", p: "The pivot from bark-labeling to sensor-grounded modeling is on the record. We publish methods, datasets, and what didn't work, because the science isn't settled." }
signals:
  - { label: Mood, glyph: "◆", base: "92", jitter: "3", color: warm }
  - { label: Stress, glyph: "◆", base: "87", jitter: "4", color: warm }
  - { label: Pain, glyph: "▲", base: "79", jitter: "5", color: gold }
  - { label: Respiratory, glyph: "▲", base: "84", jitter: "3", color: gold }
  - { label: Sleep, glyph: "■", base: "91", jitter: "2", color: muted }
  - { label: Activity, glyph: "■", base: "95", jitter: "2", color: muted }
---

<section class="hero" id="main">
<div class="container">
<h1>An AI research lab for<br /><strong>interspecies communication.</strong><span class="hero-spacer"></span>Our first instrument is <strong>a dog collar.</strong></h1>
<p class="hero-lede">Sarama studies non-human communication at consumer scale. We spent years decoding whales and dolphins. We still could not understand our own dogs. The collar is the unlock. The lab is the point.</p>
<div class="hero-actions">
<a href="questionnaire.html" class="primary">Join the Waitlist</a>
<a href="contact.html" class="secondary">Talk to us</a>
</div>
<div class="hero-wave" id="heroWave"></div>
</div>
</section>

<section class="manifesto" id="manifesto">
<div class="container">
<div class="section-label">Thesis</div>
<p>Animal communication has been bottlenecked <span class="dim">by data, not by AI.</span> No bark means the same thing across all dogs in all contexts. Meaning is <span class="highlight">contextual, causal, and individual.</span> The path forward is <span class="highlight">multimodal, longitudinal, naturalistic data</span> from tens of thousands of animals living their normal lives.</p>
</div>
</section>

<section class="capabilities" id="capabilities">
<div class="container">
<div class="section-label">Program</div>
<h2>The instrument is the data engine.</h2>
<div class="cap-grid">
{%- for cap in capabilities %}
<div class="cap-card">
<div class="cap-icon">{{ cap.icon }}</div>
<h3>{{ cap.h }}</h3>
<p>{{ cap.p }}</p>
</div>
{%- endfor %}
</div>
</div>
</section>

<section class="signal">
<div class="container">
<div class="section-label">What we detect</div>
<h2>Early infrastructure for interspecies communication.</h2>
<div class="signal-bars" id="signalBars">
{%- for s in signals %}
<div class="signal-bar" data-base="{{ s.base }}" data-jitter="{{ s.jitter }}">
<span class="bar-label"><span aria-hidden="true">{{ s.glyph }} </span>{{ s.label }}</span>
<div class="bar-track"><div class="bar-fill {{ s.color }}"></div></div>
<span class="bar-value">{{ s.base }}%</span>
</div>
{%- endfor %}
</div>
<div class="signal-prediction" id="signalPrediction">
<span class="pred-key">Prediction</span>
<span class="pred-arrow">→</span>
<span class="pred-val" id="signalPredVal">calm, settled posture · low cortisol proxy · resting respiration steady</span>
</div>
</div>
</section>

<section class="cta" id="contact">
<div class="container">
<h2>The instrument leaves the lab.</h2>
<p>Tens of thousands of collars entering ordinary homes is the first place where interspecies communication becomes empirical. Dogs first. Methodology general.</p>
<div class="cta-links">
<a href="questionnaire.html" class="primary">Request access</a>
<a href="research.html" class="secondary">Read our research</a>
<a href="contact.html" class="secondary">Talk to us</a>
</div>
</div>
</section>
