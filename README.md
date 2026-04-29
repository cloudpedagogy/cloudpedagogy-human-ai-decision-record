# CloudPedagogy Human-AI Decision Record Tool

## Overview
A static, local-first web application designed as a governance instrument for recording, reviewing, and auditing decisions influenced by AI.

## 🔗 Role in the CloudPedagogy Ecosystem

**Phase:** Phase 2 — Governance Pipeline

**Role:**
Records and audits individual decision-making outcomes to ensure human-AI traceability and accountability.

**Upstream Inputs:**
Workflow context and required fields from the **Governance Designer** and systemic risk signals from the **Risk Scanner**.

**Downstream Outputs:**
Generates structured decision records (JSON/Markdown) for institutional audit buckets and strategic **Maturity Assessments**.

**Does NOT:**
- Perform systemic risk audits across full workflows.
- Design governance structures or define institutional policies.


This application belongs to the Human-AI Governance Engineering area of the CloudPedagogy ecosystem. It serves as a proof-of-concept for Capability-Driven Development (CDD), demonstrating how software can be designed to intrinsically support transparent, accountable, traceable, and defensible human-AI decision-making.

## Why it Exists
When AI is used in professional workflows, a common governance problem arises: there is often no durable record of how the AI influenced an outcome. AI involvement becomes invisible, human responsibility is blurred, assumptions remain hidden, risks are poorly documented, and review becomes difficult.

This tool solves that problem by producing a **Human-AI Decision Record**.

## Who is it For
Professionals, individuals, and organizations who need to ensure their AI-supported decisions remain transparent, traceable, accountable, and defensible.

## 🌐 Live Demo

👉 http://cloudpedagogy-human-ai-decision-record.s3-website.eu-west-2.amazonaws.com/

## 🖼️ Screenshot

![Human-AI Decision Record Tool Screenshot](./assets/screenshot.png)

---

## 🧩 Core Features

### Audit Readiness Scoring
Each decision record is automatically evaluated for completeness against institutional governance requirements.
- **Golden Fields**: The score is calculated based on 8 mandatory fields (Record Title, Problem/Question, Impact Level, Final Outcome/Rationale, Accountable Role, and AI Use Declaration).
- **Dynamic Feedback**: Missing required fields reduce the audit readiness score in real-time, highlighting exactly where defensibility is weak.

### Batch Register
A local-first management system for handling multiple decision-making cycles.
- **Persistence**: Save and retrieve multiple records directly within the browser using `localStorage`.
- **Log Management**: A structured view for reviewing, editing, and deleting archived records without backend dependency.

### Governance-Ready Export
- Generate standardized **JSON** or **Markdown** reports.
- **Print-Optimized**: Formal letterhead format suitable for PDF conversion and institutional evidence bundles.

---

## 🛠️ Getting Started

### Clone the repository

```bash
git clone https://github.com/cloudpedagogy/cloudpedagogy-human-ai-decision-record.git
cd cloudpedagogy-human-ai-decision-record
```

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Once running, your terminal will display a local URL (often http://localhost:5173). Open this in your browser to use the application.

### Build for production

```bash
npm run build
```

The production build will be generated in the `dist/` directory and can be deployed to any static hosting service.

---

## 🔐 Privacy & Security

- **Fully local**: All data remains in the user's browser  
- **No backend**: No external API calls or database storage  
- **Privacy-preserving**: No tracking or data exfiltration  
- Suitable for use in sensitive organisational and governance contexts  

---

## Relation to Human-AI Governance Engineering & CDD
This tool is a concrete application within the domain of Human-AI Governance Engineering. It visibly operationalizes the principle that "decisions influenced by AI should remain transparent, traceable, and accountable."

Unlike typical AI capabilities, which focus on developing human competence, this tool is designed entirely through **Capability-Driven Development (CDD)**—a design method that builds systems deeply rooted in capability and governance requirements rather than mere user convenience.

---

## Disclaimer

This repository contains exploratory, framework-aligned tools developed for reflection, learning, and discussion.

These tools are provided **as-is** and are not production systems, audits, or compliance instruments. Outputs are indicative only and should be interpreted in context using professional judgement.

All applications are designed to run locally in the browser. No user data is collected, stored, or transmitted.

All example data and structures are synthetic and do not represent any real institution, programme, or curriculum.

---

## Licensing & Scope

This repository contains open-source software released under the MIT License.

CloudPedagogy frameworks and related materials are licensed separately and are not embedded or enforced within this software.

---

## Capability and Governance
This tool supports both AI capability development and lightweight governance.
- **Capability** is developed through structured interaction with real workflows
- **Governance** is supported through optional fields that make assumptions, risks, and decisions visible
All governance inputs are optional and designed to support — not constrain — professional judgement.

---

## About CloudPedagogy

CloudPedagogy develops open, governance-credible resources for building confident, responsible AI capability across education, research, and public service.

- Website: https://www.cloudpedagogy.com/
- Framework: https://github.com/cloudpedagogy/cloudpedagogy-ai-capability-framework
