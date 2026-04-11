import type { DecisionRecord } from '../types/schema';

export interface AuditField {
    section: keyof DecisionRecord;
    field: string;
    label: string;
}

export const GOLDEN_FIELDS: AuditField[] = [
    { section: 'Metadata', field: 'record_title', label: 'Record Title' },
    { section: 'DecisionContext', field: 'problem_or_question', label: 'Problem/Question' },
    { section: 'DecisionContext', field: 'impact_level', label: 'Criticality Level' },
    { section: 'DecisionOutcome', field: 'final_decision', label: 'Final Decision' },
    { section: 'DecisionOutcome', field: 'rationale', label: 'Rationale' },
    { section: 'DecisionOutcome', field: 'accountable_decision_maker', label: 'Accountable Decision Maker' },
    { section: 'AIInvolvement', field: 'ai_used', label: 'AI Use Declaration' },
    { section: 'AIInvolvement', field: 'reliance_level', label: 'AI Reliance Level' }
];

export function calculateAuditScore(record: DecisionRecord): number {
    let score = 0;
    const totalFields = GOLDEN_FIELDS.length;

    GOLDEN_FIELDS.forEach(item => {
        const section = record[item.section] as unknown as Record<string, string | boolean>;
        const value = section[item.field];
        if (typeof value === 'boolean') {
            score++; // If it's a boolean (like ai_used), we count it as completed
        } else if (value && (value as string).trim() !== '') {
            score++;
        }
    });

    return Math.round((score / totalFields) * 100);
}

export function getMissingRequiredFields(record: DecisionRecord): string[] {
    return GOLDEN_FIELDS
        .filter(item => {
            const section = record[item.section] as unknown as Record<string, unknown>;
            const value = section[item.field] as string;
            if (typeof value === 'boolean') return false;
            return !value || value.trim() === '';
        })
        .map(item => item.label);
}
