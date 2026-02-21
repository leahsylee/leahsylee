---
layout: page
title: "Self-Actuated Climbing & Inspection Robot"
description: Designed contact mechanism and implemented closed-loop control for a surface inspection robot that tracks flat, curved, and inverted surfaces.
img: assets/img/placeholder_project.jpg
importance: 1
category: research
---

{% comment %} TODO: Add a hero image — assets/img/climbing_robot_hero.jpg {% endcomment %}

## Overview

This project, conducted at the Novel Mobile Robots Lab at UIUC under Prof. Justin Yim, develops a self-actuated robot capable of climbing and inspecting surfaces — including flat, curved, and inverted geometries. My work focuses on contact mechanism design, rapid prototyping, and the closed-loop control system that keeps the robot reliably adhered to the surface during motion.

## Problem

A climbing robot needs to maintain consistent contact with a surface while moving. On flat surfaces this is straightforward, but on curved or inverted surfaces, the contact forces, angles, and adhesion conditions change continuously. The system has to detect these changes and adjust in real time.

Early testing revealed inconsistent behavior: the robot would lose contact unpredictably on certain surface geometries. The question was whether the problem was mechanical (the contact mechanism), electrical (the sensor feedback), or in the control logic.

## Approach

**Contact mechanism design and prototyping.** I create CAD models and rapid prototypes to achieve stable contact and manufacturable geometry. The design process involves iterating on the physical mechanism that presses the robot against the surface, tuning its compliance to handle changes in surface curvature.

**Test rig and system modeling.** I built a test rig and system model to size actuators and validate control performance. This isolates variables so I can test the mechanism on different surface profiles and log sensor data to identify failure modes.

**Closed-loop contact control.** I developed a closed-loop contact module using force and pressure sensor feedback to regulate contact force in real time. The robot uses vision-based tactile sensing for surface inspection while the control loop maintains stable adhesion.

{% comment %} TODO: Add images of testing setup and CAD models {% endcomment %}

## Results

After iterating on both the mechanism geometry and the control parameters, the robot achieved repeatable surface tracking across flat, curved, and inverted surfaces. The key insight was that the mechanical and control systems couldn't be designed independently — the compliance of the contact mechanism determines the dynamics the controller has to handle, and vice versa.

## Progress Report

For more detail on the mechanism design, control architecture, and test results, see the full progress report:

<a href="{{ '/assets/pdf/ClimbingBot_ProgressReport.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Climbing Bot Progress Report (PDF)</a>

## Relevance

This kind of work — diagnosing why a physical system doesn't behave as designed, isolating the root cause across mechanical and control domains, and iterating toward reliable performance — is directly relevant to vehicle testing, validation, and systems integration roles in automotive engineering.
