'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StyledOutlinedButton from '@/components/atoms/StyledOutlinedButton';
import { USER_NAME } from '../../../constants';

export default function TopHeader() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, pr: 2 }}>
            <Typography variant="h6" fontWeight="700" color="text.primary" sx={{ fontSize: '1.25rem' }}>
                Payments
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <StyledOutlinedButton
                    sx={{
                        width: 40,
                        justifyContent: 'center',
                        px: 0,
                    }}
                >
                    <NotificationsNoneOutlinedIcon fontSize="small" />
                </StyledOutlinedButton>

                <StyledOutlinedButton
                    sx={{
                        gap: 1.5,
                        pl: 0.75,
                        pr: 1.5,
                        py: 0.75,
                        width: 'auto',
                        justifyContent: 'flex-start'
                    }}
                >
                    <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem', bgcolor: '#F5F7FF', color: 'primary.main' }}>{USER_NAME.split(' ').map((n: string) => n[0]).join('')}</Avatar>
                    <Typography variant="body2" fontWeight="500" color="text.primary" sx={{ fontSize: '0.85rem', textTransform: 'none' }}>{USER_NAME}</Typography>
                    <KeyboardArrowDownIcon color="action" sx={{ fontSize: 18 }} />
                </StyledOutlinedButton>
            </Box>
        </Box>
    );
}
