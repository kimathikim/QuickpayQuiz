'use client';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function QuickPayNoteCard() {
    return (
        <Paper sx={{
            p: 3,
            flex: 1,
            minHeight: 180,
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            bgcolor: 'primary.main',
            color: 'white',
            boxShadow: '0 4px 20px rgba(33, 115, 242, 0.3)'
        }}>
            <Typography variant="overline" sx={{ opacity: 0.9, letterSpacing: 1.5, fontWeight: 600, fontSize: '0.7rem' }}>
                QUICK PAY
            </Typography>
            <Typography variant="h5" fontWeight="bold">
                Run payroll in<br />just a few clicks.
            </Typography>
            <Box sx={{ mt: 'auto' }}>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.3)',
                            transform: 'translateY(-1px)'
                        },
                        boxShadow: 'none',
                        transition: 'all 0.2s',
                        width: 'fit-content'
                    }}
                >
                    Pay Now
                </Button>
            </Box>
        </Paper>
    );
}
