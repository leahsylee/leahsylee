---
layout: page
title: "ArachnoBot — Terrain-Adaptive Robot"
description: "Built a terrain-adaptive robot with 4-bar linkage legs. 1st Place and Distinguished Robotics award at ASME Engineering Open House (200+ exhibits)."
img: assets/img/spider_robot_thumb.jpg
importance: 3
category: engineering
---

<!-- TODO: Add a photo or video of the ArachnoBot -->
<!-- Example:
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/arachnobot.jpg" title="ArachnoBot at Engineering Open House" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    ArachnoBot on display at UIUC Engineering Open House.
</div>
-->

## Overview

I designed and built a terrain-adaptive walking robot — ArachnoBot — for the University of Illinois Engineering Open House. The robot uses a 4-bar linkage mechanism for each leg, allowing it to traverse uneven surfaces without complex active control of each joint. It won **1st Place** and the **Distinguished Robotics** award at ASME, competing against 200+ exhibits.

## Mechanism Design

The 4-bar linkage converts simple rotary motion into a walking gait that naturally lifts each leg over obstacles. By tuning the link lengths and pivot locations, the foot traces a path that clears the ground during the swing phase and provides stable ground contact during the stance phase.

This approach keeps the control system simple — a single motor drives the linkage — while still producing adaptive locomotion behavior. The tradeoff is that the gait pattern is fixed by the geometry, so the robot can't dynamically adjust its stride length or height, but for the target terrain conditions it works reliably.

<!-- TODO: Add a diagram or CAD image showing the 4-bar linkage mechanism -->
<!-- Example:
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/arachnobot_linkage.jpg" title="4-bar linkage mechanism" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    4-bar linkage mechanism showing the foot trajectory path.
</div>
-->

## Demonstration

The robot was presented to over 1,000 visitors at Engineering Open House, where I explained the design rationale and demonstrated the robot's operation on different surface conditions.

<!-- TODO: Add demo photos or a short video clip if available -->
