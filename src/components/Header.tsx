'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function TopHeader() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, pr: 2 }}>
            <Typography variant="h6" fontWeight="700" color="text.primary" sx={{ fontSize: '1.25rem' }}>
                Payments
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{
                    width: 40,
                    height: 40,
                    bgcolor: 'transparent',
                    borderRadius: 1.5,
                    border: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'text.secondary',
                    transition: 'all 0.2s',
                    '&:hover': {
                        bgcolor: 'background.paper',
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        boxShadow: '0 2px 8px rgba(33, 115, 242, 0.1)'
                    }
                }}>
                    <NotificationsNoneOutlinedIcon fontSize="small" />
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    bgcolor: 'background.paper',
                    borderRadius: 1.5,
                    border: '1px solid',
                    borderColor: 'divider',
                    pl: 0.75,
                    pr: 1.5,
                    py: 0.75,
                    cursor: 'pointer',
                    height: 40,
                    transition: 'all 0.2s',
                    '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 2px 8px rgba(33, 115, 242, 0.1)'
                    }
                }}>
                    <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem', bgcolor: '#F5F7FF', color: 'primary.main' }}>JD</Avatar>
                    <Typography variant="body2" fontWeight="500" color="text.primary" sx={{ fontSize: '0.85rem' }}>Jonnathan Doe</Typography>
                    <KeyboardArrowDownIcon color="action" sx={{ fontSize: 18 }} />
                </Box>
            </Box>
        </Box>
    );
}
