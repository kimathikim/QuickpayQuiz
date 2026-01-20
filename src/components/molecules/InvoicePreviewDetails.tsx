import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { formatDate } from '@/lib/utils';
import { Client } from '@/types/dashboard';

interface InvoicePreviewDetailsProps {
    data: {
        issuedOn: string;
        dueOn: string;
        recipientEmail: string;
    },
    client?: Client;
}

export default function InvoicePreviewDetails({ data, client }: InvoicePreviewDetailsProps) {
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
                {client ? (
                    <>
                        <Typography variant="body1" fontWeight="600">{client.name}</Typography>
                        <Typography variant="caption" color="text.secondary" display="block">{client.address}, {client.city}</Typography>
                        <Typography variant="caption" color="text.secondary" display="block">{client.country} {client.zip}</Typography>
                    </>
                ) : (
                    <>
                        <Typography variant="body1" fontWeight="600">Unknown Client</Typography>
                        <Typography variant="caption" color="text.secondary" display="block">{data.recipientEmail}</Typography>
                    </>
                )}
            </Box>
        </>
    );
}
