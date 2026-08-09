---
layout: page
title: Trustworthy Multimodal Learning for Wearable Physiological Sensing
description: Uncertainty-aware feature modulation and post-hoc reliability auditing for multimodal physiological fusion. <strong>Under review at Knowledge-Based Systems (KBS).</strong>
img: assets/img/4_physiofusion_architecture.png
importance: 3
category: current
related_publications: false
---

**Venue:** Knowledge-Based Systems (KBS) journal — under review.
**Role:** Second author (Conceptualization, Investigation, Writing – review & editing). Seungpil Choi is first author; Eungjoo Lee is corresponding author.

Wearable physiological monitoring is increasingly used for stress and affect recognition — driver-state tracking, daily-life stress — but fusing heterogeneous sensor streams stays fragile: individual channels degrade or fail without warning, and most fusion models give no signal that anything went wrong.

This work pairs **uncertainty-aware feature modulation** with a **post-hoc trustworthiness auditing** mechanism. Modality-specific Transformer encoders are first aligned through auxiliary classification and mutual distillation, so the resulting representations support stable uncertainty estimation. Noise-perturbation sensitivity scores then down-weight unreliable modalities before a multimodal Transformer produces the fused prediction, with cyclic optimization and an EMA parameter update regularizing training dynamics.

At inference, the auditing scheme measures **epistemic honesty under progressive sensor corruption** and quantifies **modality reliance under channel dropout** — a sensor-level diagnostic of when and why the model's outputs should be trusted. Across WESAD and AffectiveROAD the method reaches accuracy and F1 competitive with the compared approaches while additionally auditing its own uncertainty behavior; on WESAD, where sensor corruption is resolvable, it also spreads its reliance more evenly across sensors and responds more honestly to input degradation.

<div class="row mt-3 justify-content-center">
  <div class="col-sm-12">
    <img class="img-fluid rounded" src="{{ '/assets/img/4_physiofusion_architecture.png' | relative_url }}" alt="Uncertainty-aware multimodal physiological fusion architecture with reliability auditing" loading="lazy" />
    <p class="text-center mt-2"><em>Uncertainty-aware feature modulation with post-hoc reliability auditing.</em></p>
  </div>
</div>
