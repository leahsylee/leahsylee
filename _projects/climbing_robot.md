---
layout: page
title: "Self-Actuated Climbing & Inspection Robot"
description: Designed the contact mechanism and implemented closed-loop control for a robot that tracks flat, curved, and inverted surfaces.
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

This project, conducted at the [RoboTouch Lab](https://publish.illinois.edu/robotouch-lab/) at UIUC, develops a self-actuated robot capable of climbing and inspecting surfaces — including flat, curved, and inverted geometries. My work focuses on the contact mechanism design and the closed-loop control system that keeps the robot reliably adhered to the surface during motion.

## Problem

A climbing robot needs to maintain consistent contact with a surface while moving. On flat surfaces this is straightforward, but on curved or inverted surfaces, the contact forces, angles, and adhesion conditions change continuously. The system has to detect these changes and adjust in real time.

Early testing revealed inconsistent behavior: the robot would lose contact unpredictably on certain surface geometries. The question was whether the problem was mechanical (the contact mechanism), electrical (the sensor feedback), or in the control logic.

## Approach

**Contact mechanism design.** I designed the physical mechanism that presses the robot against the surface. The geometry and compliance of this mechanism directly affect how well the robot conforms to surface curvature changes.

**Closed-loop contact control.** I implemented a control system using force and pressure sensor feedback to regulate contact force in real time. When sensor readings indicate reduced contact, the controller increases actuation force; when readings indicate excess force (which wastes energy and risks surface damage), it backs off.

**Testing and root cause analysis.** I built testing rigs to isolate variables — testing the mechanism on different surface profiles, varying control parameters, and logging sensor data to identify failure modes. The inconsistent behavior turned out to involve both a mechanical compliance issue and a control gain that was tuned for flat surfaces but caused oscillation on curved ones. Fixing it required changes on both sides.

<!-- TODO: Add images of the testing setup and sensor data plots -->
<!-- Example:
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/climbing_test_rig.jpg" title="Testing rig" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/climbing_sensor_data.jpg" title="Force sensor data" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Testing rig for evaluating contact behavior on different surface geometries. Right: Force sensor data showing before/after control tuning.
</div>
-->

## Results

After iterating on both the mechanism geometry and the control parameters, the robot achieved repeatable surface tracking across flat, curved, and inverted surfaces. The key insight was that the mechanical and control systems couldn't be designed independently — the compliance of the contact mechanism determines the dynamics the controller has to handle, and vice versa.

## Relevance

This kind of work — diagnosing why a physical system doesn't behave as designed, isolating the root cause across mechanical and control domains, and iterating toward reliable performance — is directly relevant to vehicle testing, validation, and systems integration roles in automotive engineering.
