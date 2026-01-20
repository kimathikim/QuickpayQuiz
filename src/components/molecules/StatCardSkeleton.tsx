import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function StatCardSkeleton() {
    return (
        <Box
            sx={{
                bgcolor: 'white',
                borderRadius: 2,
                p: 3,
                border: '1px solid #e0e0e0'
            }}
        >
            <Skeleton variant="text" width={120} height={20} sx={{ mb: 2 }} />
            <Skeleton variant="text" width={150} height={40} sx={{ mb: 1 }} />
            <Skeleton variant="text" width={80} height={16} />
        </Box>
    );
}
