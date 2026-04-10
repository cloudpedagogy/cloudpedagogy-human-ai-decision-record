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
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-sm)', fontWeight: 700 }}>Record Metadata</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-body)' }}>Define the core identity of this decision record.</p>

            <div style={{ display: 'grid', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                <div>
                    <label style={{ display: 'block', fontSize: 'var(--font-size-meta)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--color-text-primary)' }}>Record Title</label>
                    <input
                        type="text"
                        value={data.record_title}
                        onChange={(e) => handleChange('record_title', e.target.value)}
                        placeholder="e.g., Q3 Resource Allocation Strategy"
                        style={{ width: '100%', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-default)', fontSize: 'var(--font-size-meta)' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: 'var(--font-size-meta)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--color-text-primary)' }}>Created By (Name)</label>
                        <input
                            type="text"
                            value={data.created_by_name}
                            onChange={(e) => handleChange('created_by_name', e.target.value)}
                            style={{ width: '100%', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-default)', fontSize: 'var(--font-size-meta)' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: 'var(--font-size-meta)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--color-text-primary)' }}>Role</label>
                        <input
                            type="text"
                            value={data.created_by_role}
                            onChange={(e) => handleChange('created_by_role', e.target.value)}
                            style={{ width: '100%', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-default)', fontSize: 'var(--font-size-meta)' }}
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: 'var(--font-size-meta)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--color-text-primary)' }}>Organisation</label>
                        <input
                            type="text"
                            value={data.organisation}
                            onChange={(e) => handleChange('organisation', e.target.value)}
                            style={{ width: '100%', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-default)', fontSize: 'var(--font-size-meta)' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: 'var(--font-size-meta)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--color-text-primary)' }}>Team or Department</label>
                        <input
                            type="text"
                            value={data.team_or_department}
                            onChange={(e) => handleChange('team_or_department', e.target.value)}
                            style={{ width: '100%', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-default)', fontSize: 'var(--font-size-meta)' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
