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
                } catch {
                    alert('Failed to parse JSON file');
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="preview-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

            {/* Non-printable action bar */}
            <div className="preview-actions no-print" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '3rem', 
                padding: '1.25rem', 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
                <button onClick={() => setCurrentView('workspace')} className="btn-secondary">← Back to Edit</button>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
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
            <div className="formal-report printable-area" style={{ 
                backgroundColor: 'white', 
                padding: '5rem 4rem', 
                borderRadius: '2px', 
                border: '1px solid #111111', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
                <style>
                    {`
            @media print {
              body * { visibility: hidden; }
              .printable-area, .printable-area * { visibility: visible; }
              .printable-area { position: absolute; left: 0; top: 0; width: 100%; border: none; box-shadow: none; padding: 0 !important; }
              .no-print { display: none !important; }
            }
            .report-section { margin-bottom: 3.5rem; }
            .report-section h2 { 
                font-size: 1rem;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                border-bottom: 2px solid #111111; 
                padding-bottom: 0.5rem; 
                margin-bottom: 2rem; 
                color: #111111; 
                font-weight: 800;
            }
            .report-field { margin-bottom: 2rem; }
            .report-label { 
                font-weight: 700; 
                color: #666666; 
                display: block; 
                font-size: 0.75rem; 
                text-transform: uppercase; 
                letter-spacing: 0.05em;
                margin-bottom: 0.5rem;
            }
            .report-value { 
                font-size: 1.1rem; 
                color: #111111; 
                white-space: pre-wrap; 
                line-height: 1.6;
            }
            .metadata-badge {
                font-size: 0.75rem;
                font-weight: 600;
                color: #444444;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
          `}
                </style>

                <div style={{ textAlign: 'left', marginBottom: '5rem', paddingBottom: '3rem', borderBottom: '1px solid #e5e7eb' }}>
                    <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <span style={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em', color: '#111111' }}>CLOUDPEDAGOGY</span>
                            <div style={{ fontSize: '0.8rem', color: '#666666', marginTop: '0.25rem' }}>Decision Support Systems</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div className="metadata-badge">RECORD ID: {record.Metadata.record_id.substring(0, 8).toUpperCase()}</div>
                            <div style={{ fontSize: '0.8rem', color: '#666666', marginTop: '0.25rem' }}>{new Date(record.Metadata.date_created).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                        </div>
                    </div>
                    
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: '1.1', color: '#111111' }}>
                        {record.Metadata.record_title || 'Untitled Decision Record'}
                    </h1>
                    <div style={{ display: 'flex', gap: '3rem' }}>
                        <div className="report-field" style={{ marginBottom: 0 }}>
                            <span className="report-label">OWNER</span>
                            <div style={{ fontSize: '1rem', fontWeight: 600 }}>{record.Metadata.created_by_name || '—'}</div>
                        </div>
                        <div className="report-field" style={{ marginBottom: 0 }}>
                            <span className="report-label">STATUS</span>
                            <div style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase' }}>{record.Metadata.status}</div>
                        </div>
                    </div>
                </div>

                <div className="report-section">
                    <h2>01. Decision Context</h2>
                    <div className="report-field">
                        <span className="report-label">Scope & Nature</span>
                        <div className="report-value">{record.DecisionContext.decision_context_summary || '—'}</div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Core Problem / Question</span>
                        <div className="report-value">{record.DecisionContext.problem_or_question || '—'}</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div className="report-field">
                            <span className="report-label">Classification</span>
                            <div className="report-value" style={{ textTransform: 'capitalize' }}>{record.DecisionContext.decision_type || '—'}</div>
                        </div>
                        <div className="report-field">
                            <span className="report-label">Institutional Impact</span>
                            <div className="report-value" style={{ textTransform: 'capitalize' }}>{record.DecisionContext.impact_level || '—'}</div>
                        </div>
                    </div>
                </div>

                <div className="report-section">
                    <h2>02. AI Involvement</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '1rem' }}>
                        <div className="report-field">
                            <span className="report-label">System Specification</span>
                            <div className="report-value">{record.AIInvolvement.ai_system_name || '—'}</div>
                        </div>
                        <div className="report-field">
                            <span className="report-label">Level of Reliance</span>
                            <div className="report-value" style={{ textTransform: 'capitalize' }}>{record.AIInvolvement.reliance_level || '—'}</div>
                        </div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Operational Purpose</span>
                        <div className="report-value">{record.AIInvolvement.ai_purpose || '—'}</div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Methodology / Prompting Logic</span>
                        <div className="report-value">{record.AIInvolvement.prompt_summary || '—'}</div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">System Output Summary</span>
                        <div className="report-value">{record.AIInvolvement.ai_output_summary || '—'}</div>
                    </div>
                </div>

                <div className="report-section">
                    <h2>03. Human Interpretation</h2>
                    <div className="report-field">
                        <span className="report-label">Analytical Interpretation</span>
                        <div className="report-value">{record.HumanInterpretation.interpretation_summary || '—'}</div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Independent Expertise Applied</span>
                        <div className="report-value">{record.HumanInterpretation.contextual_knowledge_applied || '—'}</div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Modifications & Governance Overrides</span>
                        <div className="report-value">
                            {record.HumanInterpretation.modifications_or_corrections ? `Corrections: ${record.HumanInterpretation.modifications_or_corrections}\n` : ''}
                            {record.HumanInterpretation.disagreements_with_ai ? `Disagreements: ${record.HumanInterpretation.disagreements_with_ai}` : ''}
                            {!record.HumanInterpretation.modifications_or_corrections && !record.HumanInterpretation.disagreements_with_ai && '—'}
                        </div>
                    </div>
                </div>

                <div className="report-section">
                    <h2>04. Assumptions & Risks</h2>
                    <div className="report-field">
                        <span className="report-label">Underlying Assumptions</span>
                        <div className="report-value">
                            {record.AssumptionsAndLimitations.data_assumptions ? `Data: ${record.AssumptionsAndLimitations.data_assumptions}\n` : ''}
                            {record.AssumptionsAndLimitations.model_limitations ? `Model: ${record.AssumptionsAndLimitations.model_limitations}` : ''}
                            {!record.AssumptionsAndLimitations.data_assumptions && !record.AssumptionsAndLimitations.model_limitations && '—'}
                        </div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Identified Risks & Safeguards</span>
                        <div className="report-value">
                            {record.RisksAndSafeguards.operational_risk ? `Operational Risk: ${record.RisksAndSafeguards.operational_risk}\n` : ''}
                            {record.RisksAndSafeguards.bias_risk ? `Bias Risk: ${record.RisksAndSafeguards.bias_risk}\n` : ''}
                            {record.RisksAndSafeguards.mitigation_strategies ? `Mitigations: ${record.RisksAndSafeguards.mitigation_strategies}` : ''}
                            {!record.RisksAndSafeguards.operational_risk && !record.RisksAndSafeguards.bias_risk && !record.RisksAndSafeguards.mitigation_strategies && '—'}
                        </div>
                    </div>
                </div>

                <div className="report-section">
                    <h2>05. Capability & Governance (Optional)</h2>
                    <div className="report-field">
                        <span className="report-label">Capability Development Notes</span>
                        <div className="report-value">{record.CapabilityGovernance?.capabilityNotes || '—'}</div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Additional Governance Notes</span>
                        <div className="report-value">{record.CapabilityGovernance?.governanceNotes || '—'}</div>
                    </div>
                </div>

                <div className="report-section" style={{ 
                    backgroundColor: '#ffffff', 
                    padding: '3rem', 
                    borderRadius: '2px', 
                    border: '4px solid #111111',
                    marginTop: '5rem'
                }}>
                    <h2 style={{ borderBottom: 'none', marginBottom: '2.5rem', paddingBottom: 0 }}>06. Final Decision Outcome</h2>
                    <div className="report-field">
                        <span className="report-label">Formal Decision</span>
                        <div className="report-value" style={{ fontWeight: 800, fontSize: '1.4rem' }}>{record.DecisionOutcome.final_decision || '—'}</div>
                    </div>
                    <div className="report-field">
                        <span className="report-label">Final Rationale</span>
                        <div className="report-value">{record.DecisionOutcome.rationale || '—'}</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid #111111' }}>
                        <div className="report-field" style={{ marginBottom: 0 }}>
                            <span className="report-label">ACCOUNTABLE DECISION-MAKER</span>
                            <div className="report-value" style={{ fontWeight: 700 }}>{record.DecisionOutcome.accountable_decision_maker || '—'}</div>
                        </div>
                        <div className="report-field" style={{ marginBottom: 0 }}>
                            <span className="report-label">OFFICIAL ROLE</span>
                            <div className="report-value">{record.DecisionOutcome.accountable_role || '—'}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
