# Design Principles

The Human-AI Decision Record Tool is governed by the following core design principles, directly flowing from Capability-Driven Development:

1. **Human Judgement First:** Human reasoning must remain central to the decision-making process. The system forces explicit articulation of human interpretation, preventing AI outputs from being treated as self-validating.
2. **Explicit AI Involvement:** Any interaction with AI must be visible and bounded, distinctly separating what the machine produced from what the human decided.
3. **Accountability by Design:** The final outcome requires an explicit accountable decision-maker and role. The software does not permit ambiguous "institutional" ownership of automated outputs.
4. **Reviewability by Default:** The tool's output is structured explicitly to allow downstream review, auditing, and quality assurance. This drives the implementation of robust JSON, Markdown, and Print-to-PDF export capabilities.
5. **Risk Visibility:** Risks and assumptions are lifted out of the subtext and mandated as explicit fields. Mitigations and safeguards are required contextual components of the decision.
6. **Privacy-Preserving Local-First Architecture:** Because the tool handles sensitive, professional decision contexts, all data processing, storage, and validation occur locally in the physical browser environment. There is no server-side persistence or shadowy telemetry.
7. **Exportable Governance Artefacts:** The primary value of the software is the creation of a durable governance trail. The UI exists strictly to facilitate the creation of this structured, exportable artefact.
