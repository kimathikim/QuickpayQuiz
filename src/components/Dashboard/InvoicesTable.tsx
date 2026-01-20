'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import { useAppSelector } from '@/store/hooks';
import { Invoice } from '@/store/Dashboard/dashboardSlice';

export default function InvoicesTable() {
    const { invoices } = useAppSelector((state) => state.dashboard);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Pending': return { bg: '#E3F2FD', color: '#2196F3', dot: '#2196F3' };
            case 'Draft': return { bg: '#FFF3E0', color: '#FF9800', dot: '#FF9800' };
            case 'Paid': return { bg: '#E8F5E9', color: '#4CAF50', dot: '#4CAF50' };
            default: return { bg: '#F5F5F5', color: '#9E9E9E', dot: '#9E9E9E' };
        }
    };

    return (
        <Box sx={{ mt: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Box>
                    <Typography variant="h6" fontWeight="bold" color="#333">Invoices</Typography>
                    <Typography variant="body2" color="text.secondary">List of all of your recent transactions.</Typography>
                </Box>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                        bgcolor: '#2173F2',
                        fontWeight: 600,
                        px: 3,
                        boxShadow: '0px 4px 10px rgba(33, 115, 242, 0.2)'
                    }}
                >
                    New Invoice
                </Button>
            </Box>

            {/* Controls */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <TextField
                    placeholder="Search an Invoice"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{
                        bgcolor: 'white',
                        '& .MuiOutlinedInput-root': { borderRadius: 1.5 }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="action" />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    variant="outlined"
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{
                        bgcolor: 'white',
                        borderColor: '#e0e0e0',
                        color: '#333',
                        textTransform: 'none',
                        minWidth: 120,
                        justifyContent: 'space-between',
                        borderRadius: 1.5
                    }}
                >
                    Show all
                </Button>
            </Box>

            {/* Table */}
            <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 'none' }}>
                <Table sx={{ minWidth: 650 }} aria-label="invoices table">
                    <TableHead sx={{ bgcolor: '#FAFAFA' }}>
                        <TableRow>
                            <TableCell sx={{ color: '#888', fontWeight: 500 }}>No.</TableCell>
                            <TableCell sx={{ color: '#888', fontWeight: 500 }}>Date</TableCell>
                            <TableCell sx={{ color: '#888', fontWeight: 500 }}>Client</TableCell>
                            <TableCell align="right" sx={{ color: '#888', fontWeight: 500 }}>Amount</TableCell>
                            <TableCell align="right" sx={{ color: '#888', fontWeight: 500 }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invoices.map((row: Invoice) => {
                            const statusStyle = getStatusColor(row.status);
                            return (
                                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{ fontWeight: 600, color: '#555' }}>
                                        {row.invoiceNumber}
                                    </TableCell>
                                    <TableCell sx={{ color: '#555' }}>{row.date}</TableCell>
                                    <TableCell sx={{ color: '#555' }}>{row.client}</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 600, color: '#555' }}>
                                        ${row.amount.toFixed(2)}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Box sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            bgcolor: statusStyle.bg,
                                            color: statusStyle.color,
                                            px: 1.5,
                                            py: 0.5,
                                            borderRadius: 4,
                                            fontWeight: 600,
                                            fontSize: '0.75rem'
                                        }}>
                                            <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: statusStyle.dot }} />
                                            {row.status}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
