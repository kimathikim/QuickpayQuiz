import React from 'react';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function CustomDropdownIcon() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', pr: 1, pointerEvents: 'none' }}>
            <Box sx={{ width: '1px', height: 20, bgcolor: '#e0e0e0', mr: 1 }} />
            <KeyboardArrowDownIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
        </Box>
    );
}
