import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import GetAppIcon from '@mui/icons-material/GetApp';
import BoltIcon from '@mui/icons-material/Bolt';

interface InvoiceItem {
    name: string;
    qty: number;
    price: number;
}

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
}

export default function InvoicePreviewModal({ open, onClose, data }: InvoicePreviewModalProps) {
    const totalAmount = data.items.reduce((sum, item) => sum + (item.qty * item.price), 0);

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
                {/* Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                    <Box>
                        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>#AL2545</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: 1, textTransform: 'uppercase' }}>LEGAL CONSULTING</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1, mb: 1 }}>
                            <Box sx={{ width: 24, height: 24, bgcolor: 'primary.main', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <BoltIcon sx={{ fontSize: 16 }} />
                            </Box>
                            <Typography variant="h6" fontWeight="bold">public note</Typography>
                        </Box>
                        <Typography variant="caption" color="text.secondary" display="block">340 S LEMON AVE #3696</Typography>
                        <Typography variant="caption" color="text.secondary" display="block">Walnut, California</Typography>
                        <Typography variant="caption" color="text.secondary" display="block">United States 91789</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 8, mb: 4 }}>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Issued on</Typography>
                        <Typography variant="body2" fontWeight="600">{new Date(data.issuedOn || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary" display="block">Due on</Typography>
                        <Typography variant="body2" fontWeight="600">{new Date(data.dueOn || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</Typography>
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="caption" color="text.secondary" display="block">Invoice for</Typography>
                    <Typography variant="body1" fontWeight="600">Alex Parkinson</Typography>
                    <Typography variant="caption" color="text.secondary" display="block">3897 Hickory St, Salt Lake City</Typography>
                    <Typography variant="caption" color="text.secondary" display="block">Utah, United States 84104</Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', borderBottom: '1px solid #eee', pb: 1, mb: 2 }}>
                        <Typography variant="caption" color="text.secondary" sx={{ flex: 3 }}>Item</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ flex: 1, textAlign: 'center' }}>Qty</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ flex: 1, textAlign: 'right' }}>Price</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ flex: 1, textAlign: 'right' }}>Total</Typography>
                    </Box>

                    {data.items.map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', py: 1, mb: 1 }}>
                            <Typography variant="body2" fontWeight="500" sx={{ flex: 3 }}>{item.name || 'Item Name'}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ flex: 1, textAlign: 'center' }}>{item.qty}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ flex: 1, textAlign: 'right' }}>${item.price}</Typography>
                            <Typography variant="body2" fontWeight="600" sx={{ flex: 1, textAlign: 'right' }}>${(item.qty * item.price).toLocaleString()}</Typography>
                        </Box>
                    ))}

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mr: 4 }}>Total Amount</Typography>
                        <Typography variant="h5" fontWeight="bold">${totalAmount.toLocaleString()}</Typography>
                    </Box>
                </Box>

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
