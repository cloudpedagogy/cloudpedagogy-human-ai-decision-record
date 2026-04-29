import type { DecisionRecord } from '../types/schema';
import { calculateAuditScore } from './auditUtils';

export function exportToJson(record: DecisionRecord) {
    const dataStr = JSON.stringify(record, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = `DecisionRecord_${record.Metadata.record_id.substring(0, 8)}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

export function exportToMarkdown(record: DecisionRecord) {
    const md = `
# Human-AI Decision Record
**Title:** ${record.Metadata.record_title || 'Untitled'}
**ID:** ${record.Metadata.record_id}
**Workflow Step ID:** ${record.Metadata.workflow_step_id || 'N/A'}
**Date:** ${new Date(record.Metadata.date_created).toLocaleDateString()}
**Status:** ${record.Metadata.status.toUpperCase()}
**Audit Readiness Score:** ${calculateAuditScore(record)}%


## 1. Context
**Summary:** ${record.DecisionContext.decision_context_summary}
**Problem/Question:** ${record.DecisionContext.problem_or_question}
**Type:** ${record.DecisionContext.decision_type}
**Impact:** ${record.DecisionContext.impact_level}

## 2. AI Involvement
**AI Used:** ${record.AIInvolvement.ai_used ? 'Yes' : 'No'}
**System:** ${record.AIInvolvement.ai_system_name} (${record.AIInvolvement.ai_system_type})
**Purpose:** ${record.AIInvolvement.ai_purpose}
**Prompt Summary:** ${record.AIInvolvement.prompt_summary}
**Output Summary:** ${record.AIInvolvement.ai_output_summary}
**Reliance:** ${record.AIInvolvement.reliance_level}

## 3. Human Interpretation
**Interpretation:** ${record.HumanInterpretation.interpretation_summary}
**Contextual Knowledge:** ${record.HumanInterpretation.contextual_knowledge_applied}
**Corrections Made:** ${record.HumanInterpretation.modifications_or_corrections}
**Disagreements:** ${record.HumanInterpretation.disagreements_with_ai}

## 4. Assumptions & Limitations
**Data Assumptions:** ${record.AssumptionsAndLimitations.data_assumptions}
**Model Limitations:** ${record.AssumptionsAndLimitations.model_limitations}
**Missing Info:** ${record.AssumptionsAndLimitations.missing_information}

## 5. Risks & Safeguards
**Operational Risk:** ${record.RisksAndSafeguards.operational_risk}
**Bias Risk:** ${record.RisksAndSafeguards.bias_risk}
**Legal/Governance:** ${record.RisksAndSafeguards.governance_risk}
**Mitigations Strategy:** ${record.RisksAndSafeguards.mitigation_strategies}
**Escalation Required:** ${record.RisksAndSafeguards.escalation_required ? 'Yes' : 'No'}

## 6. Decision Outcome
**Final Decision:** ${record.DecisionOutcome.final_decision}
**Rationale:** ${record.DecisionOutcome.rationale}
**Accountability:** ${record.DecisionOutcome.accountable_decision_maker} (${record.DecisionOutcome.accountable_role})
**Implementation:** ${record.DecisionOutcome.implementation_considerations}

## 7. Capability & Governance (Optional)
**Capability Notes:** ${record.CapabilityGovernance?.capabilityNotes || 'N/A'}
**Governance Notes:** ${record.CapabilityGovernance?.governanceNotes || 'N/A'}
`.trim();

    const dataUri = 'data:text/markdown;charset=utf-8,' + encodeURIComponent(md);
    const exportFileDefaultName = `DecisionRecord_${record.Metadata.record_id.substring(0, 8)}.md`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}
