import { useAppContext } from '../store/AppContext';

export function Method() {
    const { setCurrentView } = useAppContext();

    return (
        <div className="method-container" style={{ maxWidth: '800px', margin: '2rem auto', padding: '3rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', margin: 0 }}>CDD Methodology</h2>
                <button onClick={() => setCurrentView('welcome')} className="btn-secondary">Close</button>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                This application was designed using Capability-Driven Development (CDD). Notice how capability and governance requirements, rather than automation goals, shaped the interface and architecture.
            </p>

            <section style={{ marginBottom: '3rem' }}>
                <h3 style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>A. Capability Intent</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem' }}><strong>Traceability:</strong> Make the lineage of a decision inspectable.</li>
                    <li style={{ marginBottom: '1rem' }}><strong>Accountability:</strong> Force unambiguous human ownership of the outcome.</li>
                    <li style={{ marginBottom: '1rem' }}><strong>Human Judgement Preservation:</strong> Defend human reasoning against automation bias.</li>
                    <li style={{ marginBottom: '1rem' }}><strong>Risk Awareness:</strong> Expose fragility and hidden assumptions.</li>
                    <li style={{ marginBottom: '1rem' }}><strong>Reviewability:</strong> Generate standardized governance artefacts.</li>
                    <li style={{ marginBottom: '1rem' }}><strong>Reflective Improvement:</strong> Trigger meta-cognition during the process.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h3 style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>B. Design Translation</h3>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div style={{ padding: '1.5rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-text-main)' }}>Traceability → UI Structure</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Implemented through the dedicated AI Involvement section, explicit prompting structure, and the live Traceability Index panel protecting against incomplete records.</p>
                    </div>
                    <div style={{ padding: '1.5rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-text-main)' }}>Accountability → Decision Outcome</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Implemented through the strict requirement of an Accountable Decision-Maker name and role. AI cannot occupy these fields.</p>
                    </div>
                    <div style={{ padding: '1.5rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-text-main)' }}>Human Judgement → Human Interpretation Section</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Implemented structurally by separating what the AI produced from how the human acted upon it, including explicit space for "Disagreements with AI".</p>
                    </div>
                    <div style={{ padding: '1.5rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-text-main)' }}>Reviewability → Export Formats</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Implemented via static JSON schema compliance, structured Markdown generation, and CSS-native Print-to-PDF formatting (viewable in the formal Preview mode).</p>
                    </div>
                </div>
            </section>

            <section>
                <h3 style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>C. System Outcome</h3>
                <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                    Unlike a typical productivity wrapper for a Large Language Model, this system treats AI output as a <em>component</em> of a decision, not the decision itself.
                </p>
                <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                    The architecture choice (local-first, static frontend) is an engineering manifestation of its privacy capability. Governance is embedded by design through reflective prompts and field requirements, guaranteeing that institutional reasoning doesn't degrade when AI enters the decision-making loop.
                </p>
            </section>

        </div>
    );
}
