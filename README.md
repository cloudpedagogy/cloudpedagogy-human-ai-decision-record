# CloudPedagogy Human-AI Decision Record Tool



## Overview
A static, local-first web application designed as a governance instrument for recording, reviewing, and auditing decisions influenced by AI.

This application belongs to the Human-AI Governance Engineering area of the CloudPedagogy ecosystem. It serves as a proof-of-concept for Capability-Driven Development (CDD), demonstrating how software can be designed to intrinsically support transparent, accountable, traceable, and defensible human-AI decision-making.

## Why it Exists
When AI is used in professional workflows, a common governance problem arises: there is often no durable record of how the AI influenced an outcome. AI involvement becomes invisible, human responsibility is blurred, assumptions remain hidden, risks are poorly documented, and review becomes difficult.

This tool solves that problem by producing a **Human-AI Decision Record**.

## Who is it For
Professionals, individuals, and organizations who need to ensure their AI-supported decisions remain transparent, traceable, accountable, and defensible.

## 🌐 Live Link

👉 http://cloudpedagogy-human-ai-decision-record.s3-website.eu-west-2.amazonaws.com/


## 🖼️ Screenshot

![Human-AI Decision Record Tool Screenshot](./assets/screenshot.png)



---
## How to Run It

The application runs entirely in the browser but requires a local setup to run.

### 1. Install dependencies

Run the following command to install the required packages:

```bash
npm install
```

### 2. Start the application

```bash
npm run dev
```

Once running, your terminal will display a local URL (often http://localhost:5173).  
Open this in your browser to use the application.

---

## Build

To create a production version of the application:

```bash
npm run build
```

This generates static files in the `dist/` folder.

---

## Deployment

This is a static web application.

To deploy it, upload the contents of the `dist/` folder to any static hosting platform (e.g., AWS S3, GitHub Pages, Netlify).

The application requires:
- no backend  
- no database  
- no server-side APIs  

---

## Privacy

- Runs entirely in the browser  
- No backend required  
- No data is transmitted or stored externally (unless explicitly stated)
---
## Relation to Human-AI Governance Engineering & CDD
This tool is a concrete application within the domain of Human-AI Governance Engineering. It visibly operationalizes the principle that "decisions influenced by AI should remain transparent, traceable, and accountable."

Unlike typical AI capabilities, which focus on developing human competence, this tool is designed entirely through **Capability-Driven Development (CDD)**—a design method that builds systems deeply rooted in capability and governance requirements rather than mere user convenience.

## 📄 License

Part of the CloudPedagogy ecosystem. Open-source under the MIT License.
