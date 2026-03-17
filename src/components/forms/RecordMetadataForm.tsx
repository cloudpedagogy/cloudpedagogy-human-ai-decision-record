import { useAppContext } from '../../store/AppContext';
import type { RecordMetadata } from '../../types/schema';

export function RecordMetadataForm() {
    const { record, updateRecord } = useAppContext();
    const data = record.Metadata;

    const handleChange = (field: keyof RecordMetadata, value: string) => {
        updateRecord('Metadata', field as string, value);
    };

    return (
        <div className="form-section">
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Record Metadata</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Define the core identity of this decision record.</p>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Record Title *</label>
                    <input
                        type="text"
                        value={data.record_title}
                        onChange={(e) => handleChange('record_title', e.target.value)}
                        placeholder="e.g., Q3 Resource Allocation Strategy"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Created By (Name)</label>
                        <input
                            type="text"
                            value={data.created_by_name}
                            onChange={(e) => handleChange('created_by_name', e.target.value)}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Role</label>
                        <input
                            type="text"
                            value={data.created_by_role}
                            onChange={(e) => handleChange('created_by_role', e.target.value)}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Organisation</label>
                        <input
                            type="text"
                            value={data.organisation}
                            onChange={(e) => handleChange('organisation', e.target.value)}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Team or Department</label>
                        <input
                            type="text"
                            value={data.team_or_department}
                            onChange={(e) => handleChange('team_or_department', e.target.value)}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
