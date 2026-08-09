---
layout: page
title: CLIP-CC-Bench — Paragraph-Level Video Description Evaluation
description: A benchmark and evaluation suite for long-form, paragraph-level video description in video–language models. <strong>Presented at EvalMG @ ACM SIGIR 2026.</strong>
img: assets/img/3_clipcc_pipeline.png
importance: 2
category: current
related_publications: false
---

**Venue:** EvalMG 2026, Melbourne — 2nd Workshop on Evaluation for Multimodal Generation, co-located with ACM SIGIR 2026 (long paper, presented).
**Role:** Co-first author — Mukhtiar Ali, Harsh Dubey, and Sugam Mishra contributed equally.
**Paper:** [arXiv:2608.04302](https://arxiv.org/abs/2608.04302) · **Leaderboard:** [project page](https://multimodal-intelligence-lab.github.io/CLIP-CC-Bench/)
**Code:** [Multimodal-Intelligence-Lab/CLIP-CC-Bench](https://github.com/Multimodal-Intelligence-Lab/CLIP-CC-Bench) · **Dataset:** [CLIP-CC](https://github.com/Multimodal-Intelligence-Lab/CLIP-CC) · [HuggingFace](https://huggingface.co/datasets/IVSL-SDSU/Clip-CC)

Benchmarking video–language models has largely focused on short clips scored with single-sentence metrics, which leaves an open question: can current systems actually produce accurate long-form, paragraph-level descriptions? CLIP-CC-Bench is built to answer that.

The evaluation suite is built from **5 hours of movie content segmented into 200 clips of roughly 90 seconds**, each paired with an expert-written paragraph-style reference. Rather than trusting a single scorer, it uses an **ensemble of five state-of-the-art LLM-based embedding models as judges**, which raises reliability and mitigates single-model bias. Each judge applies two complementary methods: **coarse-grained semantic matching** (paragraph-level cosine similarity) and **fine-grained semantic matching** (sentence-to-sentence alignment), combined into a per-judge HM-CF score and aggregated across judges by **Borda count**.

We evaluate **17 state-of-the-art video–language models**, reporting both Borda-aggregated rankings and average scores, and quantify the protocol's own reliability through inter-judge agreement and bootstrap ranking stability. VideoLLaMA3 leads the current leaderboard (Borda 80, mean HM-CF 0.67), followed by mPLUG-Owl3 and LLaVA-OneVision. Standardized evaluation scripts, model outputs, and aggregation tools are released for reproducibility.

<div class="row mt-3 justify-content-center">
  <div class="col-sm-12">
    <img class="img-fluid rounded" src="{{ '/assets/img/3_clipcc_pipeline.png' | relative_url }}" alt="CLIP-CC-Bench overview: dataset construction, five embedding judges applying coarse- and fine-grained semantic matching, and Borda-aggregated VLM leaderboard" loading="lazy" />
    <p class="text-center mt-2"><em>CLIP-CC-Bench end to end — dataset curation, per-judge coarse- and fine-grained matching, and Borda aggregation into the VLM leaderboard.</em></p>
  </div>
</div>

<div class="row mt-3 justify-content-center">
  <div class="col-sm-10">
    <img class="img-fluid rounded" src="{{ '/assets/img/3_clipcc_dataset_anim.webp' | relative_url }}" alt="CLIP-CC dataset overview" loading="lazy" />
    <p class="text-center mt-2"><em>The CLIP-CC dataset — 200 narrated movie clips, curated in three steps.</em></p>
  </div>
</div>
