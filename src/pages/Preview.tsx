import { useAppContext } from '../store/AppContext';
import type { ChangeEvent } from 'react';
import { exportToJson, exportToMarkdown } from '../utils/exportUtils';

export function Preview() {
    const { record, setCurrentView, setFullRecord } = useAppContext();

    const handlePrint = () => {
        window.print();
    };

    const handleJsonUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const uploadedRecord = JSON.parse(e.target?.result as string);
                    setFullRecord(uploadedRecord);
                } catch (error) {
                    alert('Failed to parse JSON file');
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="preview-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

            {/* Non-printable action bar */}
            <div className="preview-actions no-print" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', padding: '1rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <button onClick={() => setCurrentView('workspace')} className="btn-secondary">← Back to Edit</button>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <label className="btn-secondary" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        Load JSON
                        <input type="file" accept=".json" onChange={handleJsonUpload} style={{ display: 'none' }} />
                    </label>
                    <button onClick={() => exportToJson(record)} className="btn-secondary">Export JSON</button>
                    <button onClick={() => exportToMarkdown(record)} className="btn-secondary">Export Markdown</button>
                    <button onClick={handlePrint} className="btn-primary">Print / PDF</button>
                </div>
            </div>

            {/* Printable Report */}
            <div className="formal-report printable-area" style={{ backgroundColor: 'white', padding: '4rem 3rem', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)', fontFamily: 'var(--font-family-serif)' }}>
                <style>
                    {`
            @media print {
              body * { visibility: hidden; }
              .printable-area, .printable-area * { visibility: visible; }
              .printable-area { position: absolute; left: 0; top: 0; width: 100%; border: none; box-shadow: none; padding: 0; }
              .no-print { display: none !important; }
            }
            .report-section { margin-bottom: 2.5rem; }
            .report-section h2 { border-bottom: 2px solid var(--color-primary); padding-bottom: 0.5rem; margin-bottom: 1rem; color: var(--color-primary); font-family: var(--font-family-main); }
            .report-field { margin-bottom: 1rem; }
            .report-label { font-weight: bold; color: var(--color-text-muted); display: block; font-size: 0.9rem; font-family: var(--font-family-main); text-transform: uppercase; letter-spacing: 0.5px; }
            .report-value { font-size: 1.1rem; color: var(--color-text-main); white-space: pre-wrap; }
          `}
                </style>

                <div style={{ textAlign: 'center', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '4px solid var(--color-primary)' }}>
                    <h1 style={{ fontFamily: 'var(--font-family-main)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>{record.Metadata.record_title || 'Untitled Decision Record'}</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>Human-AI Governance Record</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem', fontSize: '0.9rem', fontFamily: 'var(--font-family-main)', color: 'var(--color-text-muted)' }}>
                        <span><strong>ID:</strong> {record.Metadata.record_id}</span>
                        <span><strong>Date:</strong> {new Date(record.Metadata.date_created).toLocaleDateString()}</span>
                        <span><strong>Status:</strong> {record.Metadata.status.toUpperCase()}</span>
                    </div>
                </div>

                <div className="report-section">
                    <h2>1. Decision Context</h2>
                    <div className="report-field">
                        <span className="report-label">Summary</span>
                        <div className="report-value">{record.DecisionContext.decision_context_summary || '—'}</div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Problem / Question</span>
                        <div className="report-value">{record.DecisionContext.problem_or_question || '—'}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '4rem' }}>
                        <div className="report-field">
                            <span className="report-label">Type</span>
                            <div className="report-value" style={{ textTransform: 'capitalize' }}>{record.DecisionContext.decision_type || '—'}</div>
                        </div>
                        <div className="report-field">
                            <span className="report-label">Impact Level</span>
                            <div className="report-value" style={{ textTransform: 'capitalize' }}>{record.DecisionContext.impact_level || '—'}</div>
                        </div>
                    </div>
                </div>

                <div className="report-section">
                    <h2>2. AI Involvement</h2>
                    <div style={{ display: 'flex', gap: '4rem', marginBottom: '1rem' }}>
                        <div className="report-field">
                            <span className="report-label">System Names</span>
                            <div className="report-value">{record.AIInvolvement.ai_system_name || '—'}</div>
                        </div>
                        <div className="report-field">
                            <span className="report-label">Reliance Level</span>
                            <div className="report-value" style={{ textTransform: 'capitalize' }}>{record.AIInvolvement.reliance_level || '—'}</div>
                        </div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Purpose</span>
                        <div className="report-value">{record.AIInvolvement.ai_purpose || '—'}</div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Prompt Summary</span>
                        <div className="report-value">{record.AIInvolvement.prompt_summary || '—'}</div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">AI Output Summary</span>
                        <div className="report-value">{record.AIInvolvement.ai_output_summary || '—'}</div>
                    </div>
                </div>

                <div className="report-section">
                    <h2>3. Human Interpretation</h2>
                    <div className="report-field">
                        <span className="report-label">Interpretation</span>
                        <div className="report-value">{record.HumanInterpretation.interpretation_summary || '—'}</div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Contextual Knowledge Applied</span>
                        <div className="report-value">{record.HumanInterpretation.contextual_knowledge_applied || '—'}</div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Corrections or Disagreements</span>
                        <div className="report-value">
                            {record.HumanInterpretation.modifications_or_corrections ? `Corrections: ${record.HumanInterpretation.modifications_or_corrections}\n` : ''}
                            {record.HumanInterpretation.disagreements_with_ai ? `Disagreements: ${record.HumanInterpretation.disagreements_with_ai}` : ''}
                            {!record.HumanInterpretation.modifications_or_corrections && !record.HumanInterpretation.disagreements_with_ai && '—'}
                        </div>
                    </div>
                </div>

                <div className="report-section">
                    <h2>4. Assumptions & Risks</h2>
                    <div className="report-field">
                        <span className="report-label">Assumptions / Limitations</span>
                        <div className="report-value">
                            {record.AssumptionsAndLimitations.data_assumptions ? `Data: ${record.AssumptionsAndLimitations.data_assumptions}\n` : ''}
                            {record.AssumptionsAndLimitations.model_limitations ? `Model: ${record.AssumptionsAndLimitations.model_limitations}` : ''}
                            {!record.AssumptionsAndLimitations.data_assumptions && !record.AssumptionsAndLimitations.model_limitations && '—'}
                        </div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Risks & Mitigations</span>
                        <div className="report-value">
                            {record.RisksAndSafeguards.operational_risk ? `Operational Risk: ${record.RisksAndSafeguards.operational_risk}\n` : ''}
                            {record.RisksAndSafeguards.bias_risk ? `Bias Risk: ${record.RisksAndSafeguards.bias_risk}\n` : ''}
                            {record.RisksAndSafeguards.mitigation_strategies ? `Mitigations: ${record.RisksAndSafeguards.mitigation_strategies}` : ''}
                            {!record.RisksAndSafeguards.operational_risk && !record.RisksAndSafeguards.bias_risk && !record.RisksAndSafeguards.mitigation_strategies && '—'}
                        </div>
                    </div>
                </div>

                <div className="report-section" style={{ backgroundColor: '#f7fafc', padding: '2rem', borderRadius: '8px', border: '1px solid var(--color-primary-light)' }}>
                    <h2 style={{ borderBottom: 'none', marginBottom: '1.5rem', color: 'var(--color-primary-light)' }}>5. Final Decision Outcome</h2>
                    <div className="report-field">
                        <span className="report-label" style={{ color: 'var(--color-primary)' }}>Final Decision</span>
                        <div className="report-value" style={{ fontWeight: 'bold' }}>{record.DecisionOutcome.final_decision || '—'}</div>
                    </div>
                    <div className="report-field">
                        <span className="report-label" style={{ color: 'var(--color-primary)' }}>Rationale</span>
                        <div className="report-value">{record.DecisionOutcome.rationale || '—'}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '4rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #cbd5e0' }}>
                        <div className="report-field">
                            <span className="report-label" style={{ color: 'var(--color-primary)' }}>Accountable Decision-Maker</span>
                            <div className="report-value">{record.DecisionOutcome.accountable_decision_maker || '—'}</div>
                        </div>
                        <div className="report-field">
                            <span className="report-label" style={{ color: 'var(--color-primary)' }}>Role</span>
                            <div className="report-value">{record.DecisionOutcome.accountable_role || '—'}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
