---
layout: page
title: "Self-Actuated Climbing & Inspection Robot"
description: Designed contact mechanism and implemented closed-loop control for a surface inspection robot that tracks flat, curved, and inverted surfaces.
img: assets/img/climbing_robot_thumb.jpg
importance: 1
category: research
---

<!-- TODO: Add a photo of the climbing robot on a surface -->
<!-- Example:
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/climbing_robot_hero.jpg" title="Climbing robot on curved surface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The climbing robot maintaining contact on a curved surface during testing.
</div>
-->

## Overview

This project, conducted at the Novel Mobile Robots Lab at UIUC under Prof. Justin Yim, develops a self-actuated robot capable of climbing and inspecting surfaces — including flat, curved, and inverted geometries. My work focuses on contact mechanism design, rapid prototyping, and the closed-loop control system that keeps the robot reliably adhered to the surface during motion.

## Problem

A climbing robot needs to maintain consistent contact with a surface while moving. On flat surfaces this is straightforward, but on curved or inverted surfaces, the contact forces, angles, and adhesion conditions change continuously. The system has to detect these changes and adjust in real time.

Early testing revealed inconsistent behavior: the robot would lose contact unpredictably on certain surface geometries. The question was whether the problem was mechanical (the contact mechanism), electrical (the sensor feedback), or in the control logic.

## Approach

**Contact mechanism design and prototyping.** I create CAD models and rapid prototypes to achieve stable contact and manufacturable geometry. The design process involves iterating on the physical mechanism that presses the robot against the surface, tuning its compliance to handle changes in surface curvature.

**Test rig and system modeling.** I built a test rig and system model to size actuators and validate control performance. This isolates variables so I can test the mechanism on different surface profiles and log sensor data to identify failure modes.

**Closed-loop contact control.** I developed a closed-loop contact module using force and pressure sensor feedback to regulate contact force in real time. The robot uses vision-based tactile sensing for surface inspection while the control loop maintains stable adhesion.

<!-- TODO: Add images of the testing setup, CAD models, or sensor data plots -->
<!-- Example:
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/climbing_test_rig.jpg" title="Testing rig" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/climbing_cad.jpg" title="CAD model" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Testing rig for evaluating contact behavior on different surface geometries. Right: CAD model of the contact mechanism.
</div>
-->

## Results

After iterating on both the mechanism geometry and the control parameters, the robot achieved repeatable surface tracking across flat, curved, and inverted surfaces. The key insight was that the mechanical and control systems couldn't be designed independently — the compliance of the contact mechanism determines the dynamics the controller has to handle, and vice versa.

## Relevance

This kind of work — diagnosing why a physical system doesn't behave as designed, isolating the root cause across mechanical and control domains, and iterating toward reliable performance — is directly relevant to vehicle testing, validation, and systems integration roles in automotive engineering.
