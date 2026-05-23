---
layout: layouts/page
activeNav: contact
prefix: ""
footerInner: true
permalink: /contact.html
title: Research & Beta Collaborations | Contact Sarama
description: Reach Sarama Research for beta enrollment, veterinary partnerships, press, careers, or research collaborations on interspecies communication.
canonical: https://sarama.ai/contact.html
pageStyle: contact
status:
  - { key: Alpha, num: "100", unit: dogs, status: "in field" }
  - { key: Beta, num: "1,000", unit: dogs, status: "production" }
  - {
      key: "Early release",
      num: "20,000",
      unit: dogs,
      status: "enrollment",
      active: true,
      accent: true,
    }
  - {
      key: "Commercial release",
      num: "50,000",
      unit: dogs,
      status: "planned",
    }
---

<section class="page-head" id="main">
<div class="container">
<div class="page-label">Contact</div>
<h1>Talk to <em>us.</em></h1>
<p class="page-lede">Research collaborations, beta enrollment, press, careers, or veterinary partnerships, send a note and a real person on the team will read it.</p>
</div>
</section>

<div class="container">
<div class="contact-grid">

<div class="info-block">
<div class="info-label">Email</div>
<h3>Reach the team directly.</h3>
<p>Pick the closest mailbox and a real person will respond.</p>
<a href="mailto:hello@sarama.xyz" style="display: inline-block">→ hello@sarama.xyz</a><br />
<a href="mailto:invest@sarama.xyz" style="display: inline-block">→ invest@sarama.xyz</a><br />
<a href="mailto:support@sarama.xyz" style="display: inline-block">→ support@sarama.xyz</a>
</div>

<div class="info-block">
<div class="info-label">Research</div>
<h3>Read our work.</h3>
<p>Preprints, working papers, field notes, and position pieces from the lab.</p>
<a href="research.html">→ Browse publications</a>
</div>

<div class="info-block">
<div class="info-label">Beta</div>
<h3>Enroll your dog.</h3>
<p>Currently enrolling our 10,000-dog Q3 cohort, scaling to 50,000 in Q4 2026. Help us build the first systems for mutual understanding.</p>
<a href="questionnaire.html">→ Request access</a>
</div>

<div class="info-block">
<div class="info-label">Lab</div>
<h3>Sarama Research</h3>
<div class="status-card">
{%- for row in status %}
<div class="status-row">
<span class="key">{{ row.key }}</span>
{%- if row.valWide %}
<span class="val-wide">{{ row.valWide }}</span>
{%- else %}
<span class="right"><span class="num{% if row.accent %} accent{% endif %}">{{ row.num }}</span><span class="unit{% if row.accent %} accent{% endif %}">{{ row.unit }}</span><span class="status{% if row.active %} active{% endif %}">{{ row.status }}</span></span>
{%- endif %}
</div>
{%- endfor %}
</div>
</div>

</div>
</div>
