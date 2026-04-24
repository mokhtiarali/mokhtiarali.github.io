---
layout: page
title: VCS / VCB — Long-Form Video Description Evaluation
description: Video Comprehension Score (VCS) and Benchmark (VCB) for paragraph-level video description. <strong>In preparation, targeting CVPR 2027.</strong>
img: assets/img/3.webp
importance: 3
category: current
related_publications: false
---

**Venue:** Targeting CVPR 2027 (main conference).
**Role:** Second author.

Existing caption-evaluation metrics (BLEU, METEOR, BERTScore, CIDEr, etc.) fail on long-form paragraph-level video descriptions where narrative ordering, entity tracking, and reference resolution matter. We propose Video Comprehension Score (VCS), a metric grounded in semantic-unit alignment rather than n-gram overlap, and pair it with VCB, a benchmark suite exercising compositional and long-range comprehension failure modes.

<div class="row mt-3 justify-content-center">
  <div class="col-sm-10">
    <img class="img-fluid rounded" src="{{ '/assets/img/3_anim.webp' | relative_url }}" alt="VCS scoring illustration" loading="lazy" />
    <p class="text-center mt-2"><em>VCS scoring vs. n-gram-overlap metrics on long-form descriptions.</em></p>
  </div>
</div>
