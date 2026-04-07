import { useAppContext } from '../store/AppContext';

export function Method() {
    const { setCurrentView } = useAppContext();

    return (
        <div className="method-container" style={{ maxWidth: '900px', margin: '2rem auto', padding: '4rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', color: '#111111', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>CDD Methodology</h2>
                <button onClick={() => setCurrentView('welcome')} className="btn-secondary">Close</button>
            </div>

            <p style={{ fontSize: '1.1rem', color: '#444444', marginBottom: '4rem', lineHeight: '1.6' }}>
                This application was designed using Capability-Driven Development (CDD). Notice how capability and governance requirements, rather than automation goals, shaped the interface and architecture.
            </p>

            <section style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111111', fontWeight: 800, borderBottom: '2px solid #111111', paddingBottom: '0.75rem', marginBottom: '2rem' }}>A. Capability Intent</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1.25rem', color: '#444444' }}><strong style={{ color: '#111111' }}>Traceability:</strong> Make the lineage of a decision inspectable.</li>
                    <li style={{ marginBottom: '1.25rem', color: '#444444' }}><strong style={{ color: '#111111' }}>Accountability:</strong> Force unambiguous human ownership of the outcome.</li>
                    <li style={{ marginBottom: '1.25rem', color: '#444444' }}><strong style={{ color: '#111111' }}>Human Judgement Preservation:</strong> Defend human reasoning against automation bias.</li>
                    <li style={{ marginBottom: '1.25rem', color: '#444444' }}><strong style={{ color: '#111111' }}>Risk Awareness:</strong> Expose fragility and hidden assumptions.</li>
                    <li style={{ marginBottom: '1.25rem', color: '#444444' }}><strong style={{ color: '#111111' }}>Reviewability:</strong> Generate standardized governance artefacts.</li>
                    <li style={{ marginBottom: '1.25rem', color: '#444444' }}><strong style={{ color: '#111111' }}>Reflective Improvement:</strong> Trigger meta-cognition during the process.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111111', fontWeight: 800, borderBottom: '2px solid #111111', paddingBottom: '0.75rem', marginBottom: '2rem' }}>B. Design Translation</h3>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div style={{ padding: '1.5rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: '#111111' }}>Traceability → UI Structure</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#444444', lineHeight: '1.5' }}>Implemented through the dedicated AI Involvement section, explicit prompting structure, and the live Traceability Index panel protecting against incomplete records.</p>
                    </div>
                    <div style={{ padding: '1.5rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: '#111111' }}>Accountability → Decision Outcome</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#444444', lineHeight: '1.5' }}>Implemented through the strict requirement of an Accountable Decision-Maker name and role. AI cannot occupy these fields.</p>
                    </div>
                    <div style={{ padding: '1.5rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: '#111111' }}>Human Judgement → Human Interpretation Section</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#444444', lineHeight: '1.5' }}>Implemented structurally by separating what the AI produced from how the human acted upon it, including explicit space for "Disagreements with AI".</p>
                    </div>
                    <div style={{ padding: '1.5rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: '#111111' }}>Reviewability → Export Formats</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#444444', lineHeight: '1.5' }}>Implemented via static JSON schema compliance, structured Markdown generation, and CSS-native Print-to-PDF formatting (viewable in the formal Preview mode).</p>
                    </div>
                </div>
            </section>

            <section>
                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111111', fontWeight: 800, borderBottom: '2px solid #111111', paddingBottom: '0.75rem', marginBottom: '2rem' }}>C. System Outcome</h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '1rem', color: '#444444', lineHeight: '1.7' }}>
                    Unlike a typical productivity wrapper for a Large Language Model, this system treats AI output as a <em style={{ fontStyle: 'normal', fontWeight: 700, color: '#111111' }}>component</em> of a decision, not the decision itself.
                </p>
                <p style={{ marginBottom: 0, fontSize: '1rem', color: '#444444', lineHeight: '1.7' }}>
                    The architecture choice (local-first, static frontend) is an engineering manifestation of its privacy capability. Governance is embedded by design through reflective prompts and field requirements, guaranteeing that institutional reasoning doesn't degrade when AI enters the decision-making loop.
                </p>
            </section>

        </div>
    );
}
