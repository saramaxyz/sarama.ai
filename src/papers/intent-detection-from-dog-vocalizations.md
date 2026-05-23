---
layout: layouts/page
activeNav: research
prefix: "../"
footerInner: true
permalink: /papers/intent-detection-from-dog-vocalizations.html
title: Intent Detection from Dog Vocalizations | Sarama
description: A Sarama working paper on bark segmentation, MFCC-based fingerprinting, repertoire cardinality discovery, and context prediction in Canis familiaris.
ogDescription: A pipeline for bark segmentation, MFCC-based fingerprinting, repertoire cardinality discovery, and context prediction.
ogType: article
canonical: https://sarama.ai/papers/intent-detection-from-dog-vocalizations.html
pageStyle: paper
extraScripts:
  - vendor/mermaid.min.js
  - assets/paper-mermaid.js
jsonLd:
  "@context": https://schema.org
  "@type": ScholarlyArticle
  headline: Intent detection from dog vocalizations
  name: Intent detection from dog vocalizations
  datePublished: "2024-07-19"
  inLanguage: en
  url: https://sarama.ai/papers/intent-detection-from-dog-vocalizations.html
  author:
    - { "@type": Person, name: "Peter C. Bermant", affiliation: { "@type": Organization, name: "Sarama Inc" } }
    - { "@type": Person, name: "Praful Mathur", affiliation: { "@type": Organization, name: "Sarama Inc" } }
  publisher:
    "@type": Organization
    name: Sarama
    url: https://sarama.ai/
    logo: https://sarama.ai/brand/logo.svg
  abstract: A pipeline that extracts dog vocalizations, segments each extraction into individual signals, and recovers per-individual repertoire elements.
  keywords: "bioacoustics, dog vocalization, bark classification, MFCC, repertoire detection, animal communication"
toc:
  - { id: abstract, label: Abstract }
  - { id: introduction, label: Introduction }
  - { id: pipelines, label: Pipelines }
  - { id: categories, label: Categories }
  - { id: methods, label: Methods }
  - { id: results, label: Results }
  - { id: discussion, label: Discussion }
  - { id: data, label: Data }
  - { id: references, label: References }
  - { id: authors, label: Authors }
---

<section class="paper-head" id="main">
<div class="container">
<div class="crumbs"><a href="../research.html">Research</a><span class="sep">/</span><span>Working Paper</span></div>
<span class="paper-type">Working Paper · 2024</span>
<h1 class="paper-title">Intent detection from dog vocalizations</h1>
<div class="authors">Peter C. Bermant, Praful Mathur</div>
<div class="affiliation">Sarama Inc, San Francisco, CA 94107</div>
<div class="meta-row">
<a href="#abstract" class="primary">Abstract</a>
<a href="#methods">Methods</a>
<a href="#data">Data</a>
<span>v1 · 19 July 2024</span>
</div>
</div>
</section>

<div class="container">
<div class="paper-grid">
<aside class="toc" id="toc">
<div class="toc-label">Contents</div>
<ol>
{%- for item in toc %}
<li><a href="#{{ item.id }}">{{ item.label }}</a></li>
{%- endfor %}
</ol>
</aside>

<article class="paper-body">

<section id="abstract">
<h2>Abstract</h2>

<p class="abstract">Historically, animal communication has been out of reach due to the inability to understand the constituent parts of their speech signals. Recently, through efforts of dissecting codas in sperm whales, applying human speech models to dog vocalizations, and other efforts with dolphins, parrots, and other species, we are rapidly identifying clear signal markers in animal bioacoustics. We have similarly developed a pipeline to extract dog vocalizations, segment each extraction into individual signals, and for each signal we devised a system to extract repertoire elements.</p>

</section>

<section id="introduction">
<h2>Introduction</h2>

Repertoire detection in animal vocalizations is a new and active field of development involving splitting audio into units of speech and then clustering based on similarity. Most of the efforts in this space have revolved around detecting phonemes in human speech. There are some early attempts at determining units in animal vocalization, including automated bark classification and contextual and combinatorial structure in sperm whale vocalisations.

Our approach to dog repertoire detection uses a custom framework to process dog barks and vocalizations. YAMNet operates on a sliding window basis. Successive windows that contain positive dog bark detections are concatenated to yield bark sequence segments containing one or more dog sounds.

The segments are converted to Mel-Frequency Cepstral Coefficient (MFCC)-based feature vectors, which are used as input in ML models such as KNNs and SVMs that output predictions for dog identity and bark context: playful, agitation, or lonely. The same feature vectors enable fingerprinting by finding the nearest labeled neighbor in the user database.

Additionally, we build a threshold-based energy detector to obtain fine-grained bark segments for each bark in the sequence segment. This provides the ability to count user barks. We also rely on an unsupervised KMeans-based approach to determine dog repertoire cardinality: the number of unique call types for a given dog.

Ground truth is established through iterative feedback from users. By observing routines in a specific dog's behavior across repeated app usage, and by requesting user feedback on audio vocalizations paired with video, we generate labels from a mix of Video LLMs and acoustic models that the system can train against over time.

</section>

<section id="pipelines">
<h2>Communication Pipelines</h2>

The system blends video and audio models that can detect and determine aspects of dog meaning. Visual context, daily routines, and user feedback are modeled alongside acoustic signals.

<figure class="pipeline" role="img" aria-labelledby="pipeline-cap">
<div class="mermaid-shell">
<pre class="mermaid" aria-label="Dog vocalization processing pipeline">
flowchart TD
  A["Audio Recording"] --> B["YAMNet Detection"]
  B -->|Human Voice| C["Whisper Transcription"]
  B -->|Dog Barks| D["Segmentation"]
  C -->|Text Embeddings| E["Multi-Modal ML Model"]
  D -->|Acoustic Embeddings| E
  D -->|Context Labels| F["Context Prediction Model"]
  D -->|MFCC| G["MFCC Embeddings"]
  D -->|OpenAI Embeddings| H["Context Distributions"]
  D --> I["Energy Detector"]
  G --> F
  G --> P["ID Prediction Model"]
  F --> K["Predicted Context"]
  P --> L["Predicted ID"]
  H -->|Pairwise Similarity| M["Fingerprinting"]
  I --> N["Repertoire Cardinality"]
  I --> O["Bark Counter"]
  class A source;
  class E,K,L,M,N,O output;
</pre>
</div>
<figcaption id="pipeline-cap">Figure 1 · YAMNet-driven segmentation feeds parallel acoustic, contextual, and energy-based predictors.</figcaption>
</figure>

</section>

<section id="categories">
<h2>Vocalization Categories</h2>

We created pipelines that understand emotional context, repertoire analysis of barks, individual ID from acoustic signatures, associations to actions, and other variables that play into intent.

We have also derived several categories of vocalizations:

1. Health-related signals, such as "ouch" or "in duress."
2. Attention-seeking signals, such as "look over here" or "I am near what I want."
3. Reactive vocalizations, such as responses to a doorbell or skateboard.
4. Intent-driven vocalizations, such as hunting-dog barks that differ by encountered species.

</section>

<section id="methods">
<h2>Methods</h2>

### Dog Bark Embeddings

Segmented barks are converted to power mel-spectrograms with a 50 ms FFT size and 10 ms hop length. We obtain 20 MFCC features from the power mel-spectrograms and pool them over time using mean, standard deviation, minimum, and maximum, resulting in a handcrafted 80-dimensional feature embedding.

### Dog Bark Similarity

The current approach uses nearest-neighbor selection based on a similarity metric computed using MFCC features: 96% for L1 distance and 93% for cosine similarity in the source draft. For a given dog, new bark segments are converted to MFCC feature vectors; the similarity metric is computed across the existing MFCC database; and the nearest neighbor is selected to fingerprint the new bark and extract context information.

The previous approach used nearest-neighbor selection based on cosine similarity with PANNs/YAMNet embeddings.

</section>

<section id="results">
<h2>Results</h2>

A two-dimensional projection of the MFCC-based bark embeddings reveals well-separated clusters per dog, with sub-clusters that correspond to distinct call types within an individual's repertoire. This separation supports both the fingerprinting (per-dog identification) and repertoire cardinality estimates produced by the unsupervised KMeans pass.

Results are organized around the continuous feedback loop: users provide feedback to the system, and the machine-learning systems are improved against that feedback over time.

</section>

<section id="discussion">
<h2>Discussion</h2>

This paper articulates an approach that allows a continuous feedback loop from users into the model pipeline. The system depends on preprocessing steps that separate bark detection, segmentation, feature extraction, similarity search, and context estimation.

We also believe there is an inaccuracy in how the Dr Dolittle competition presents this work. It runs counter to language research to assume that a new language between animals and people will emerge spontaneously. Even when new languages are added within LLMs, the current state of the art primes the system with a dictionary alongside a few hundred sample translations (see arXiv:2402.18025). We expect a similar pattern for expanding animal cognition through language development — a field that has been spearheaded largely outside of academic labs and in public. Without this adjustment, the competition risks not only failing to reach interesting forms of communication but setting itself up for failure.

</section>

<section id="data">
<h2>Data Availability</h2>

The dataset uses the McCowan and Yin bark dataset.

</section>

<section id="references">
<h2>References</h2>

1. Sperm whale vocalisations.
2. [2402.18025] Hire a Linguist!: Learning Endangered Languages with In-Context Linguistic Descriptions.
3. ORCA-SPY enables killer whale sound source simulation, detection, classification, and localization using an integrated deep-learning-based segmentation.

</section>

<section id="authors">
<h2>Author Information</h2>

Sarama Inc, San Francisco, CA 94107.

Peter C. Bermant and Praful Mathur.

All aspects of the work, including task setting, data processing, machine learning, article writing, and figure making, are performed by P.C.B. or P.M.

Correspondence to Peter C. Bermant.

</section>

</article>
</div>
</div>
