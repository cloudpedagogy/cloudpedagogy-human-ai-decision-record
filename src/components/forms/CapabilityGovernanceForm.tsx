import { useState } from 'react';
import { useAppContext } from '../../store/AppContext';
import type { CapabilityGovernance } from '../../types/schema';

export function CapabilityGovernanceForm() {
    const { record, updateRecord } = useAppContext();
    const [isCollapsed, setIsCollapsed] = useState(true);
    
    // Guard against missing CapabilityGovernance in state
    const data = record.CapabilityGovernance || { capabilityNotes: '', governanceNotes: '' };

    const handleChange = (field: keyof CapabilityGovernance, value: string) => {
        updateRecord('CapabilityGovernance', field as string, value);
    };

    return (
        <div style={{ 
            marginTop: '2rem', 
            borderTop: '1px solid #e5e7eb', 
            paddingTop: '1rem',
            fontSize: '0.75rem',
            color: '#666',
            textAlign: 'left'
        }}>
            {/* Lightweight capability and governance layer */}
            {/* Optional, non-blocking, and does not alter core workflow */}
            <div 
                onClick={() => setIsCollapsed(!isCollapsed)}
                style={{ 
                    cursor: 'pointer', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '0.5rem 0',
                    userSelect: 'none'
                }}
            >
                <h3 style={{ fontSize: '0.8rem', margin: 0, fontWeight: 600, color: '#444' }}>
                    Capability & Governance Notes (Optional)
                </h3>
                <span style={{ fontSize: '1rem' }}>{isCollapsed ? '⊕' : '⊖'}</span>
            </div>

            {!isCollapsed && (
                <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 600 }}>Capability Notes</label>
                        <textarea
                            value={data.capabilityNotes}
                            onChange={(e) => handleChange('capabilityNotes', e.target.value)}
                            rows={2}
                            placeholder="How this task develops human-AI capability..."
                            style={{ 
                                width: '100%', 
                                padding: '0.5rem', 
                                borderRadius: '4px', 
                                border: '1px solid #e5e7eb', 
                                fontSize: '0.75rem', 
                                backgroundColor: '#fafafa',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 600 }}>Governance Notes</label>
                        <textarea
                            value={data.governanceNotes}
                            onChange={(e) => handleChange('governanceNotes', e.target.value)}
                            rows={2}
                            placeholder="Additional governance or risk considerations..."
                            style={{ 
                                width: '100%', 
                                padding: '0.5rem', 
                                borderRadius: '4px', 
                                border: '1px solid #e5e7eb', 
                                fontSize: '0.75rem', 
                                backgroundColor: '#fafafa',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
