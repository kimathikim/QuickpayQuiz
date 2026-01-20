import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BoltIcon from '@mui/icons-material/Bolt';

export default function InvoicePreviewHeader() {
    return (
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
    );
}
