import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { formatDate } from '@/lib/utils';

interface InvoicePreviewDetailsProps {
    data: {
        issuedOn: string;
        dueOn: string;
        recipientEmail: string;
    }
}

export default function InvoicePreviewDetails({ data }: InvoicePreviewDetailsProps) {
    return (
        <>
            <Box sx={{ display: 'flex', gap: 8, mb: 4 }}>
                <Box>
                    <Typography variant="caption" color="text.secondary" display="block">Issued on</Typography>
                    <Typography variant="body2" fontWeight="600">{formatDate(data.issuedOn || Date.now())}</Typography>
                </Box>
                <Box>
                    <Typography variant="caption" color="text.secondary" display="block">Due on</Typography>
                    <Typography variant="body2" fontWeight="600">{formatDate(data.dueOn || Date.now())}</Typography>
                </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="caption" color="text.secondary" display="block">Invoice for</Typography>
                <Typography variant="body1" fontWeight="600">Alex Parkinson</Typography>
                <Typography variant="caption" color="text.secondary" display="block">3897 Hickory St, Salt Lake City</Typography>
                <Typography variant="caption" color="text.secondary" display="block">Utah, United States 84104</Typography>
            </Box>
        </>
    );
}
