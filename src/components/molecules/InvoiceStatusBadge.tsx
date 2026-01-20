import React from 'react';
import Box from '@mui/material/Box';

interface InvoiceStatusBadgeProps {
    status: string;
}

const getStatusColor = (status: string): { bg: string, color: string, dot: string } => {
    switch (status) {
        case 'Pending': return { bg: 'info.light', color: 'info.main', dot: 'info.main' };
        case 'Draft': return { bg: 'warning.light', color: 'warning.main', dot: 'warning.main' };
        case 'Paid': return { bg: 'success.light', color: 'success.main', dot: 'success.main' };
        default: return { bg: 'grey.100', color: 'text.secondary', dot: 'text.secondary' };
    }
};

export default function InvoiceStatusBadge({ status }: InvoiceStatusBadgeProps) {
    const statusStyle = getStatusColor(status);

    return (
        <Box sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            bgcolor: statusStyle.bg,
            color: statusStyle.color,
            px: 1.5,
            py: 0.5,
            borderRadius: 4,
            fontWeight: 600,
            fontSize: '0.75rem'
        }}>
            <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: statusStyle.dot }} />
            {status}
        </Box>
    );
}
