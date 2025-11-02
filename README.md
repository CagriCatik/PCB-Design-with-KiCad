# PCB Design with KiCad

[![Deploy Docusaurus](https://github.com/CagriCatik/PCB-Design-with-KiCad/actions/workflows/deploy.yml/badge.svg)](https://github.com/CagriCatik/PCB-Design-with-KiCad/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/View%20Guide-Online-brightgreen.svg)](https://cagricatik.github.io/PCB-Design-with-KiCad/)
[![KiCad Version](https://img.shields.io/badge/KiCad-9.0%2B-orange.svg)](https://www.kicad.org/)
[![Made with Docusaurus](https://img.shields.io/badge/Docs-Docusaurus-2ea44f.svg)](https://docusaurus.io/)
[![Last Commit](https://img.shields.io/github/last-commit/CagriCatik/PCB-Design-with-KiCad.svg)](https://github.com/CagriCatik/PCB-Design-with-KiCad/commits/main)
[![Build Status](https://img.shields.io/github/actions/workflow/status/CagriCatik/PCB-Design-with-KiCad/deploy.yml?branch=main)](https://github.com/CagriCatik/PCB-Design-with-KiCad/actions)

---

A complete, hands-on guide to **Printed Circuit Board (PCB) design** using **KiCad**, an open-source EDA suite.
This repository serves as an extended companion to the Udemy course ***KiCad Like a Pro* by Dr. Peter Dalmaris**, providing additional context, documentation, and project examples.

> **Read the full interactive guide:**
> [**PCB Design with KiCad Documentation**](https://cagricatik.github.io/PCB-Design-with-KiCad/)

---

## Overview

This project aims to help learners and professionals alike **master PCB design with KiCad**, from schematic design to manufacturing output. It follows a project-based learning approach, integrating both **practical exercises** and **theoretical background**.

### You Will Learn

* Complete PCB design workflow: from schematic to Gerber generation.
* Professional layout practices: routing, copper pours, silkscreen, and DRC.
* Library management: custom symbols, footprints, and 3D models.
* Efficient use of KiCad’s **Eeschema**, **Pcbnew**.
* Integration of KiCad tools into a reproducible and maintainable workflow.

---

## Course Reference

This guide complements:

* **[KiCad Like a Pro (3rd Edition)](https://www.udemy.com/course/KiCad-like-a-pro-3e/)** by Dr. Peter Dalmaris
* **[Introduction to Electronics](https://www.udemy.com/course/intro-to-electronics/)** for foundational circuit theory

Together, they provide the conceptual and practical knowledge to design, simulate, and manufacture professional-quality PCBs.

---

## Learning Modules

### 1. PCB Design Workflow

Comprehensive step-by-step instructions for single, double, and multi-layer PCBs.

### 2. Schematic Design (Eeschema)

* Symbol creation and hierarchy management
* Assigning footprints and verifying connectivity
* Generating BOM and netlists

### 3. Layout Design (Pcbnew)

* Placement, routing, and signal integrity considerations
* Applying copper fills, silkscreen details, and board outlines
* Running DRC checks and preparing Gerber outputs

### 4. Project-Based Practice

Apply what you learn through small, real-world designs:

* Power Supply PCB
* MCU Data Logger Board
* Sensor Interface Modules

---

## Repository Roadmap

* [x] Introduction
* [x] KiCad Fundamentals
* [x] Schematic Design
* [ ] PCB Layout and Routing
* [ ] Design Principles and Constraints
* [ ] Workflows and Versioning
* [ ] Symbols in Eeschema
* [ ] Footprints in Pcbnew
* [ ] Project: Power Supply
* [ ] Project: MCU Data Logger
* [ ] Recipes and Tips

---

## Local Development (Docusaurus)

This site is built using **[Docusaurus 2](https://docusaurus.io/)**.

### Requirements

* Node.js 18+
* npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/CagriCatik/PCB-Design-with-KiCad.git
cd PCB-Design-with-KiCad/webpage

# Install dependencies
npm install
```

### Local Development

Start a local dev server at `http://localhost:3000`:

```bash
npm run start
```

### Build Static Site

Generate the production-ready static site:

```bash
npm run build
```

The output will be generated in the `build/` directory.

---

## Repository Structure

```bash
PCB-Design-with-KiCad/
├── webpage/             # Docusaurus components and pages
├── projects/            # KiCad project files
├── .github/workflows/   # CI/CD deployment scripts
└── README.md
```

---

## Contributing

Contributions are encouraged!
You can:

* Fix typos or improve explanations
* Add examples or new project modules
* Suggest enhancements via [issues](https://github.com/CagriCatik/PCB-Design-with-KiCad/issues)

Fork the repo, make your changes, and open a pull request.

---

## License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.
