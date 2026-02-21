---
layout: page
title: "Spherical GelSight Tactile Sensor"
description: Designed and fabricated a novel spherical tactile sensor with a calibration pipeline and photometric stereo reconstruction. Patent filed.
img: assets/img/gelsight_thumb.jpg
importance: 2
category: research
related_publications: true
---

<!-- TODO: Add a photo of the sensor -->
<!-- Example:
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gelsight_sensor.jpg" title="Spherical GelSight tactile sensor" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The spherical GelSight tactile sensor prototype.
</div>
-->

## Overview

This project, also at the [RoboTouch Lab](https://publish.illinois.edu/robotouch-lab/), develops a spherical tactile sensor based on the GelSight principle. Unlike conventional flat GelSight sensors that can only sense contact on one face, the spherical geometry enables omnidirectional contact sensing. A patent has been filed for the sensor design, and a conference paper is being prepared for submission to IROS.

## Sensor Design

The sensor consists of a spherical elastomer shell with an embedded camera and structured illumination. When an object presses against the elastomer surface, the resulting deformation is captured by the camera. The key design challenge is that the spherical geometry introduces optical distortion and non-uniform illumination that don't exist in the flat-sensor case.

**Mold design and silicone casting.** I designed the molds for casting the spherical elastomer membrane. Getting consistent wall thickness and surface finish across the full sphere required multiple iterations of the mold geometry and casting process. Controlling bubble formation and cure uniformity in a closed mold is harder than in open flat molds.

**PCB integration.** The sensor's illumination LEDs and camera module are mounted on a custom PCB inside the sphere. Fitting the electronics inside the constrained volume while maintaining uniform illumination required careful layout.

<!-- TODO: Add fabrication process images -->
<!-- Example:
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gelsight_mold.jpg" title="Mold design" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gelsight_casting.jpg" title="Silicone casting" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gelsight_pcb.jpg" title="PCB integration" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Mold design for the spherical elastomer. Center: Silicone casting process. Right: PCB with illumination LEDs.
</div>
-->

## Calibration and Reconstruction

**Calibration procedure.** The spherical geometry means the mapping from pixel coordinates to surface normals varies across the sensor surface. I developed a calibration procedure using known contact geometries to map the illumination response at each point on the sphere.

**Image reconstruction pipeline.** The reconstruction pipeline (Python + OpenCV) uses photometric stereo to estimate surface normals from the captured images, then integrates the normals to recover contact geometry. The spherical case requires handling the curved baseline geometry, which standard flat-sensor pipelines don't account for.

<!-- TODO: Add reconstruction result images -->
<!-- Example:
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/gelsight_reconstruction.jpg" title="Contact geometry reconstruction" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example contact geometry reconstruction from the spherical GelSight sensor.
</div>
-->

## Fabrication Repeatability

A significant part of this work was establishing a repeatable fabrication process. Early prototypes had inconsistent elastomer properties and illumination quality. I documented each step of the process — mixing ratios, cure times, demolding procedure, LED alignment — to make the build process reproducible. This documentation forms the basis of the fabrication section in the paper.

## Outcomes

- **Patent filed** for the spherical sensor design
- **Conference paper** in preparation for IROS (IEEE/RSJ International Conference on Intelligent Robots and Systems)
- Established a documented, repeatable fabrication and calibration process
