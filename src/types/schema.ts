import { generateUUID } from '../utils/idUtils';

export interface RecordMetadata {
    record_id: string;
    record_title: string;
    version: string;
    status: 'draft' | 'final';
    date_created: string;
    date_modified: string;
    created_by_name: string;
    created_by_role: string;
    organisation: string;
    team_or_department: string;
    workflow_step_id?: string;
}

export interface DecisionContext {
    decision_context_summary: string;
    problem_or_question: string;
    decision_type: 'policy' | 'operational' | 'academic' | 'research' | 'clinical' | 'admin' | 'governance' | 'other' | '';
    organisational_context: string;
    decision_scope: string;
    impact_level: 'low' | 'medium' | 'high' | 'critical' | '';
    stakeholders_affected: string;
    urgency: string;
}

export interface AIInvolvement {
    ai_used: boolean;
    ai_system_name: string;
    ai_system_type: string;
    ai_purpose: string;
    prompt_summary: string;
    ai_output_summary: string;
    reliance_level: 'low' | 'moderate' | 'high' | '';
    ai_use_date: string;
    reliability_notes: string;
}

export interface HumanInterpretation {
    interpretation_summary: string;
    contextual_knowledge_applied: string;
    modifications_or_corrections: string;
    disagreements_with_ai: string;
    alternative_interpretations: string;
    uncertainty_notes: string;
}

export interface AssumptionsAndLimitations {
    data_assumptions: string;
    model_limitations: string;
    contextual_uncertainties: string;
    external_constraints: string;
    missing_information: string;
    confidence_limitations: string;
}

export interface RisksAndSafeguards {
    bias_risk: string;
    operational_risk: string;
    reputational_risk: string;
    governance_risk: string;
    legal_or_policy_risk: string;
    ethical_concerns: string;
    privacy_concerns: string;
    mitigation_strategies: string;
    safeguards_applied: string;
    escalation_required: boolean;
    escalation_notes: string;
}

export interface DecisionOutcome {
    final_decision: string;
    rationale: string;
    accountable_decision_maker: string;
    accountable_role: string;
    approval_required: boolean;
    approver_name_or_role: string;
    implementation_considerations: string;
    follow_up_actions: string;
    review_date: string;
    review_trigger: string;
}

export interface Reflection {
    lessons_learned: string;
    workflow_improvements: string;
    reflection_notes: string;
}

export interface DecisionRecord {
    Metadata: RecordMetadata;
    DecisionContext: DecisionContext;
    AIInvolvement: AIInvolvement;
    HumanInterpretation: HumanInterpretation;
    AssumptionsAndLimitations: AssumptionsAndLimitations;
    RisksAndSafeguards: RisksAndSafeguards;
    DecisionOutcome: DecisionOutcome;
    Reflection: Reflection;
}

export const initialDecisionRecord: DecisionRecord = {
    Metadata: {
        record_id: generateUUID(),
        record_title: '',
        version: '1.0',
        status: 'draft',
        date_created: new Date().toISOString(),
        date_modified: new Date().toISOString(),
        created_by_name: '',
        created_by_role: '',
        organisation: '',
        team_or_department: '',
        workflow_step_id: ''
    },
    DecisionContext: {
        decision_context_summary: '',
        problem_or_question: '',
        decision_type: '',
        organisational_context: '',
        decision_scope: '',
        impact_level: '',
        stakeholders_affected: '',
        urgency: ''
    },
    AIInvolvement: {
        ai_used: true,
        ai_system_name: '',
        ai_system_type: '',
        ai_purpose: '',
        prompt_summary: '',
        ai_output_summary: '',
        reliance_level: '',
        ai_use_date: '',
        reliability_notes: ''
    },
    HumanInterpretation: {
        interpretation_summary: '',
        contextual_knowledge_applied: '',
        modifications_or_corrections: '',
        disagreements_with_ai: '',
        alternative_interpretations: '',
        uncertainty_notes: ''
    },
    AssumptionsAndLimitations: {
        data_assumptions: '',
        model_limitations: '',
        contextual_uncertainties: '',
        external_constraints: '',
        missing_information: '',
        confidence_limitations: ''
    },
    RisksAndSafeguards: {
        bias_risk: '',
        operational_risk: '',
        reputational_risk: '',
        governance_risk: '',
        legal_or_policy_risk: '',
        ethical_concerns: '',
        privacy_concerns: '',
        mitigation_strategies: '',
        safeguards_applied: '',
        escalation_required: false,
        escalation_notes: ''
    },
    DecisionOutcome: {
        final_decision: '',
        rationale: '',
        accountable_decision_maker: '',
        accountable_role: '',
        approval_required: false,
        approver_name_or_role: '',
        implementation_considerations: '',
        follow_up_actions: '',
        review_date: '',
        review_trigger: ''
    },
    Reflection: {
        lessons_learned: '',
        workflow_improvements: '',
        reflection_notes: ''
    }
};
