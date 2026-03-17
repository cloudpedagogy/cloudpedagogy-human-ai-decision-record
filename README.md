# CloudPedagogy Human-AI Decision Record Tool

## Overview
A static, local-first web application designed as a governance instrument for recording, reviewing, and auditing decisions influenced by AI.

This application belongs to the Human-AI Governance Engineering area of the CloudPedagogy ecosystem. It serves as a proof-of-concept for Capability-Driven Development (CDD), demonstrating how software can be designed to intrinsically support transparent, accountable, traceable, and defensible human-AI decision-making.

## Why it Exists
When AI is used in professional workflows, a common governance problem arises: there is often no durable record of how the AI influenced an outcome. AI involvement becomes invisible, human responsibility is blurred, assumptions remain hidden, risks are poorly documented, and review becomes difficult.

This tool solves that problem by producing a **Human-AI Decision Record**.

## Who is it For
Professionals, individuals, and organizations who need to ensure their AI-supported decisions remain transparent, traceable, accountable, and defensible.

## How to Run it
The application is entirely static:
1. Clone the repository.
2. Run `npm install` and then `npm run dev` for local development.
3. Or simply build the static files via `npm run build` and serve them using any static file server. It requires no backend, no database, and no server-side APIs.

## Export Formats
The tool allows you to export completed decision records in multiple formats for your governance workflows:
- **JSON:** Structured machine-readable format.
- **Markdown:** Readable structured documentation.
- **Print-to-PDF:** A clean formal report format generated natively via the browser.

## Privacy & Local-First Design
All processing happens entirely in the browser. 
- No decision data is sent anywhere by default.
- Records remain strictly local unless explicitly exported by the user.
- The tool is designed to be completely safe for privacy-sensitive professional use.

## Relation to Human-AI Governance Engineering & CDD
This tool is a concrete application within the domain of Human-AI Governance Engineering. It visibly operationalizes the principle that "decisions influenced by AI should remain transparent, traceable, and accountable."

Unlike typical AI capabilities, which focus on developing human competence, this tool is designed entirely through **Capability-Driven Development (CDD)**—a design method that builds systems deeply rooted in capability and governance requirements rather than mere user convenience.
