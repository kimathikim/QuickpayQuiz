import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import GetAppIcon from '@mui/icons-material/GetApp';
import BoltIcon from '@mui/icons-material/Bolt';
import InvoicePreviewHeader from '@/components/molecules/InvoicePreviewHeader';
import InvoicePreviewDetails from '@/components/molecules/InvoicePreviewDetails';
import InvoicePreviewItems from '@/components/molecules/InvoicePreviewItems';

interface InvoiceItem {
    name: string;
    qty: number;
    price: number;
}

import { Client } from '@/types/dashboard';

interface InvoicePreviewModalProps {
    open: boolean;
    onClose: () => void;
    data: {
        recipientEmail: string;
        projectDescription: string;
        issuedOn: string;
        dueOn: string;
        items: InvoiceItem[];
        notes?: string;
    };
    client?: Client;
}

export default function InvoicePreviewModal({ open, onClose, data, client }: InvoicePreviewModalProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: { borderRadius: 3, maxWidth: 600 }
            }}
        >
            <DialogContent sx={{ p: 5 }}>
                <InvoicePreviewHeader />

                <InvoicePreviewDetails data={data} client={client} />

                <InvoicePreviewItems items={data.items} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>Here we can write a additional notes for the client to get a better understanding of this invoice.</Typography>
                    {data.notes && <Typography variant="body2">{data.notes}</Typography>}
                </Box>
                <Box sx={{ bgcolor: '#F5F7FF', p: 2, borderRadius: 2, display: 'flex', gap: 2, alignItems: 'center', mb: 8 }}>
                    <Box sx={{ color: 'primary.main' }}>
                        <BoltIcon fontSize="small" />
                    </Box>
                    <Typography variant="caption" color="text.secondary">Dont worry, client will be get a hosted payment field here to make payment with any credit card, debit card or bank transfer.</Typography>
                </Box>

                <Divider sx={{ mb: 3 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Button startIcon={<GetAppIcon />} sx={{ fontWeight: 700, fontSize: '0.75rem', color: 'primary.main', mb: 0.5 }}>DOWNLOAD INVOICE</Button>
                        <Typography variant="caption" color="text.secondary" display="block">You can update your logo and brand color in <Box component="span" sx={{ color: 'primary.main', cursor: 'pointer' }}>payment settings</Box></Typography>
                    </Box>
                    <Button variant="outlined" onClick={onClose} sx={{ borderColor: '#e0e0e0', color: 'text.secondary', fontWeight: 600 }}>CLOSE</Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
