# CDD Evidence: Translating Capability to Design

This document details how the intrinsic capability requirements of Human-AI Governance shaped the software structure of the Decision Record Tool.

## 1. Capability Intent & Architecture Result
**Requirement:** The system must be safe for institutional use involving sensitive human decision-making that cannot risk data leakage.
**Design Result:** **Local-First Architecture.** The tool compiles to a static frontend. There is no database, no authentication layer, and no backend API. This guarantees that privacy and security are not just policies, but architectural facts.

## 2. Field Groups & Their Origins
The distinct sections of the application interface are not arbitrary productivity domains; they map directly to governance capabilities:

### Traceability → AI Involvement + Exports + Metadata
We require Traceability to understand where and how an AI influenced a decision. 
**Design Result:** 
- The **AI Involvement** section explicitly captures the system name, purpose, and prompt summary.
- The **Metadata** ensures the record has a clear creation boundary and version history.
- The **Traceability Index** actively scores the presence of these necessary trail components.

### Accountability → Final Decision Outcome
We require absolute clarity on who owns the decision, regardless of AI involvement.
**Design Result:**
- The **Decision Outcome** section forces the user to declare an `accountable_decision_maker` and `accountable_role`.
- AI is structurally incapable of populating these fields.

### Human Judgement Preservation → Human Interpretation
We require evidence that the human actively evaluated, rather than passively accepted, the AI output.
**Design Result:**
- The **Human Interpretation** section demands documentation of contextual knowledge applied, modifications made, and explicit disagreements with the AI.

### Risk Awareness → Assumptions and Limitations + Risks and Safeguards
We require visibility of the fragility and boundaries of the AI's contribution.
**Design Result:**
- Explicit sections for **Assumptions and Limitations** (e.g., data assumptions, model limitations) and **Risks and Safeguards** (e.g., bias risk, operational risk). These fields interrupt automatic trust in the AI output.

### Reviewability → Traceability Index + Exports + Review Fields
We require the record to be useful long after the decision is made.
**Design Result:**
- The **Traceability Index** prevents the creation of "empty" governance records by showing readiness for export.
- **Exports** (JSON, Markdown, Print) ensure the output can be injected into any institutional governance system (Git, Document Management Systems, Committee physical papers).

### Reflective Improvement → Reflection Prompts + Lessons Learned
We require the application to encourage better future practice, not just compliance.
**Design Result:**
- In-line **Reflection Prompts** guide the user's thinking during data entry.
- A dedicated **Review & Reflection** field group captures meta-learning about the workflow itself.
