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
            <h2 style={{ fontSize: '1.5rem', color: '#111111', marginBottom: '0.5rem', fontWeight: 700 }}>Record Metadata</h2>
            <p style={{ color: '#444444', marginBottom: '3rem', fontSize: '0.95rem' }}>Define the core identity of this decision record.</p>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Record Title</label>
                    <input
                        type="text"
                        value={data.record_title}
                        onChange={(e) => handleChange('record_title', e.target.value)}
                        placeholder="e.g., Q3 Resource Allocation Strategy"
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Created By (Name)</label>
                        <input
                            type="text"
                            value={data.created_by_name}
                            onChange={(e) => handleChange('created_by_name', e.target.value)}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Role</label>
                        <input
                            type="text"
                            value={data.created_by_role}
                            onChange={(e) => handleChange('created_by_role', e.target.value)}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem' }}
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Organisation</label>
                        <input
                            type="text"
                            value={data.organisation}
                            onChange={(e) => handleChange('organisation', e.target.value)}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Team or Department</label>
                        <input
                            type="text"
                            value={data.team_or_department}
                            onChange={(e) => handleChange('team_or_department', e.target.value)}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
