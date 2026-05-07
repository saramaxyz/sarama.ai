---
layout: layouts/page
activeNav: research
prefix: ""
footerInner: true
permalink: /research.html
title: Bioacoustics &amp; Animal Communication Research | Sarama
description: Peer-reviewed and working papers from Sarama on bioacoustics, dog vocalization repertoires, sperm whale codas, and self-supervised animal-sound learning.
canonical: https://sarama.ai/research.html
pageStyle: research
pubs:
  - title: Intent detection from dog vocalizations
    href: papers/intent-detection-from-dog-vocalizations.html
    authors: Peter C. Bermant, Praful Mathur
    venue: "Sarama Inc · Working paper · A pipeline for bark segmentation, MFCC-based fingerprinting, repertoire cardinality discovery, and context prediction with iterative user feedback as soft ground truth."
    type: Working Paper
    links:
      - { href: "papers/intent-detection-from-dog-vocalizations.html", label: HTML }
  - title: Bioacoustic event detection with self-supervised contrastive learning
    href: https://www.biorxiv.org/content/10.1101/2022.10.12.511740
    external: true
    authors: Peter C. Bermant, Leandra Brickson, Alexander J. Titus
    venue: "bioRxiv · Self-supervised contrastive representations for detecting bioacoustic events across taxa, reducing the labeled-data burden that has bottlenecked the field."
    type: Preprint
    links:
      - { href: "https://www.biorxiv.org/content/10.1101/2022.10.12.511740", label: bioRxiv, external: true }
  - title: "BioCPPNet: automatic bioacoustic source separation with deep neural networks"
    href: https://www.nature.com/articles/s41598-021-02790-2
    external: true
    authors: Peter C. Bermant
    venue: "Scientific Reports · A deep network for separating overlapping bioacoustic sources, applied to macaque, dolphin, and Egyptian fruit bat vocalizations."
    type: Journal
    links:
      - { href: "https://www.nature.com/articles/s41598-021-02790-2", label: Nature, external: true }
  - title: Deep machine learning techniques for the detection and classification of sperm whale bioacoustics
    href: https://www.nature.com/articles/s41598-019-48909-4
    external: true
    authors: Peter C. Bermant, Michael M. Bronstein, Robert J. Wood, Shane Gero, David F. Gruber
    venue: "Scientific Reports · CNN echolocation-click detection at 99.5% accuracy and recurrent classification of 23 and 43 coda types from the Dominica and Eastern Tropical Pacific datasets. Foundational to the modern Project CETI program."
    type: Journal
    links:
      - { href: "https://www.nature.com/articles/s41598-019-48909-4", label: Nature, external: true }
---

<section class="page-head" id="main">
<div class="container">
<h1>Publications from Sarama Team</h1>
</div>
</section>

<section class="pubs">
<div class="container">
{%- for pub in pubs %}
<article class="pub">
<div class="pub-body">
<h3><a href="{{ pub.href }}"{% if pub.external %} target="_blank" rel="noopener"{% endif %}>{{ pub.title }}</a></h3>
<div class="pub-authors">{{ pub.authors }}</div>
<div class="pub-venue">{{ pub.venue }}</div>
</div>
<div class="pub-meta">
<div class="pub-type">{{ pub.type }}</div>
<div class="pub-links">
{%- for link in pub.links %}
<a href="{{ link.href }}"{% if link.external %} target="_blank" rel="noopener"{% endif %}>{{ link.label }}</a>
{%- endfor %}
</div>
</div>
</article>
{%- endfor %}
</div>
</section>
