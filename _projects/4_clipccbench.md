---
layout: page
title: CLIP-CC Bench — Long-Form Video Description Evaluation Suite
description: Dataset + evaluation pipeline for long-form paragraph-level video description using CLIP-style encoders. <strong>In preparation, targeting CVPR 2027 workshop.</strong>
img: assets/img/4.webp
importance: 4
category: current
related_publications: false
---

**Venue:** Targeting CVPR 2027 workshop.
**Role:** First author.
**Code:** [Multimodal-Intelligence-Lab/CLIP-CC-Bench](https://github.com/Multimodal-Intelligence-Lab/CLIP-CC-Bench) · **Dataset:** [CLIP-CC](https://github.com/Multimodal-Intelligence-Lab/CLIP-CC) · [HuggingFace](https://huggingface.co/datasets/IVSL-SDSU/Clip-CC)

CLIP-CC Bench provides a dataset and evaluation suite for comparing paragraph-level video description models under realistic long-form settings. The pipeline decouples retrieval-style evaluation (CLIP / VLM encoders) from generation-style evaluation, giving practitioners a clear picture of where models fail as video length and narrative complexity grow.

<div class="row mt-3 justify-content-center">
  <div class="col-sm-10">
    <img class="img-fluid rounded" src="{{ '/assets/img/4_anim.webp' | relative_url }}" alt="CLIP-CC dataset samples" loading="lazy" />
    <p class="text-center mt-2"><em>Representative samples from the CLIP-CC dataset.</em></p>
  </div>
</div>
