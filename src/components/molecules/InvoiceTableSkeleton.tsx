import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function InvoiceTableSkeleton() {
    return (
        <>
            {[...Array(5)].map((_, index) => (
                <TableRow
                    key={index}
                    sx={{
                        bgcolor: 'white',
                        '& td': { border: 0 },
                        borderRadius: 2,
                        overflow: 'hidden'
                    }}
                >
                    <TableCell sx={{ pl: 3, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                        <Skeleton variant="text" width={80} />
                    </TableCell>
                    <TableCell>
                        <Skeleton variant="text" width={100} />
                    </TableCell>
                    <TableCell>
                        <Skeleton variant="text" width={150} />
                    </TableCell>
                    <TableCell align="right">
                        <Skeleton variant="text" width={80} sx={{ ml: 'auto' }} />
                    </TableCell>
                    <TableCell align="right" sx={{ pr: 3, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Skeleton variant="rounded" width={70} height={24} />
                        </Box>
                    </TableCell>
                </TableRow>
            ))}
        </>
    );
}
