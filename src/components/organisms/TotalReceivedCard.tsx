'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

export default function TotalReceivedCard() {
    const { totalReceived, pendingAmount, growthPercentage } = useAppSelector((state: RootState) => state.dashboard);

    return (
        <Paper sx={{ p: 3, flex: 1, height: '100%', minHeight: 210, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 3, boxShadow: '0px 4px 20px rgba(0,0,0,0.02)' }}>
            <Box>
                <Typography variant="overline" color="text.secondary" fontWeight="600" letterSpacing={1.5} sx={{ fontSize: '0.7rem' }}>
                    TOTAL RECEIVED
                </Typography>

                <Typography variant="h3" fontWeight="bold" sx={{ color: 'text.primary', mt: 1, mb: 1, fontSize: '2.5rem', display: 'flex', alignItems: 'flex-start', lineHeight: 1 }}>
                    <Box component="span" sx={{ fontSize: '1.5rem', color: 'text.secondary', mr: 0.5, mt: 0.5 }}>$</Box>
                    {totalReceived.toLocaleString('en-US', { minimumFractionDigits: 2 }).split('.')[0]}<Box component="span" sx={{ color: 'text.secondary', fontSize: '2.5rem' }}>.{totalReceived.toLocaleString('en-US', { minimumFractionDigits: 2 }).split('.')[1]}</Box>
                </Typography>

                <Box sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    bgcolor: '#E8F5E9',
                    color: '#2E7D32',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontWeight: 700,
                    fontSize: '0.75rem'
                }}>
                    +{growthPercentage}% since last month
                </Box>
            </Box>

            <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                    <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main', fontWeight: 600 }}>
                        <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main' }} />
                        Pending
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" color="text.primary" sx={{ pl: 2, lineHeight: 1 }}>
                        ${pendingAmount.toFixed(2).split('.')[0]}<Box component="span" sx={{ color: 'text.secondary' }}>.{pendingAmount.toFixed(2).split('.')[1]}</Box>
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#FFB74D', fontWeight: 600 }}>
                        <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#FFB74D' }} />
                        In drafts
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" color="text.primary" sx={{ pl: 2, lineHeight: 1 }}>
                        $00<Box component="span" sx={{ color: 'text.secondary' }}>.00</Box>
                    </Typography>
                </Box>
            </Box>
        </Paper>

    );
}
