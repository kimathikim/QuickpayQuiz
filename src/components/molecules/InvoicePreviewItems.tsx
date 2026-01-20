import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { formatCurrency } from '@/lib/utils';

interface InvoiceItem {
    name: string;
    qty: number;
    price: number;
}

interface InvoicePreviewItemsProps {
    items: InvoiceItem[];
}

export default function InvoicePreviewItems({ items }: InvoicePreviewItemsProps) {
    const totalAmount = items.reduce((sum, item) => sum + (item.qty * item.price), 0);

    return (
        <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', borderBottom: '1px solid #eee', pb: 1, mb: 2 }}>
                <Typography variant="caption" color="text.secondary" sx={{ flex: 3 }}>Item</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ flex: 1, textAlign: 'center' }}>Qty</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ flex: 1, textAlign: 'right' }}>Price</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ flex: 1, textAlign: 'right' }}>Total</Typography>
            </Box>

            {items.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', py: 1, mb: 1 }}>
                    <Typography variant="body2" fontWeight="500" sx={{ flex: 3 }}>{item.name || 'Item Name'}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flex: 1, textAlign: 'center' }}>{item.qty}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flex: 1, textAlign: 'right' }}>${formatCurrency(item.price).full}</Typography>
                    <Typography variant="body2" fontWeight="600" sx={{ flex: 1, textAlign: 'right' }}>${formatCurrency(item.qty * item.price).full}</Typography>
                </Box>
            ))}

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ mr: 4 }}>Total Amount</Typography>
                <Typography variant="h5" fontWeight="bold">${formatCurrency(totalAmount).full}</Typography>
            </Box>
        </Box>
    );
}
