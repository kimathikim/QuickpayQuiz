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
import { Invoice } from '@/types/dashboard';

export default function InvoicesTable() {
    const { invoices } = useAppSelector((state) => state.dashboard);

    const getStatusColor = (status: string): { bg: string, color: string, dot: string } => {
        switch (status) {
            case 'Pending': return { bg: 'info.light', color: 'info.main', dot: 'info.main' };
            case 'Draft': return { bg: 'warning.light', color: 'warning.main', dot: 'warning.main' };
            case 'Paid': return { bg: 'success.light', color: 'success.main', dot: 'success.main' };
            default: return { bg: 'grey.100', color: 'text.secondary', dot: 'text.secondary' };
        }
    };

    return (
        <Box sx={{ mt: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Box>
                    <Typography variant="h6" fontWeight="bold" color="text.primary">Invoices</Typography>
                    <Typography variant="body2" color="text.secondary">List of all of your recent transactions.</Typography>
                </Box>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                        bgcolor: 'primary.main',
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
                        bgcolor: 'background.paper',
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
                        bgcolor: 'background.paper',
                        borderColor: '#e0e0e0',
                        color: 'text.primary',
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
            <TableContainer sx={{ Overflow: 'visible' }}>
                <Table sx={{ minWidth: 650, borderCollapse: 'separate', borderSpacing: '0 10px' }} aria-label="invoices table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: 'text.secondary', fontWeight: 500, border: 0, pl: 3 }}>No.</TableCell>
                            <TableCell sx={{ color: 'text.secondary', fontWeight: 500, border: 0 }}>Date</TableCell>
                            <TableCell sx={{ color: 'text.secondary', fontWeight: 500, border: 0 }}>Client</TableCell>
                            <TableCell align="right" sx={{ color: 'text.secondary', fontWeight: 500, border: 0 }}>Amount</TableCell>
                            <TableCell align="right" sx={{ color: 'text.secondary', fontWeight: 500, border: 0, pr: 3 }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invoices.map((row: Invoice) => {
                            const statusStyle = getStatusColor(row.status);
                            return (
                                <TableRow
                                    key={row.id}
                                    sx={{
                                        bgcolor: 'background.paper',
                                        boxShadow: '0px 2px 4px rgba(0,0,0,0.02)',
                                        '& td:first-of-type': { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
                                        '& td:last-of-type': { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
                                        '&:hover': { boxShadow: '0px 4px 8px rgba(0,0,0,0.05)' }
                                    }}
                                >
                                    <TableCell component="th" scope="row" sx={{ fontWeight: 600, color: 'text.primary', border: 0, py: 2, pl: 3 }}>
                                        {row.invoiceNumber}
                                    </TableCell>
                                    <TableCell sx={{ color: 'text.secondary', border: 0, py: 2 }}>{row.date}</TableCell>
                                    <TableCell sx={{ color: 'text.secondary', border: 0, py: 2 }}>{row.client}</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 600, color: 'text.primary', border: 0, py: 2 }}>
                                        ${row.amount.toFixed(2)}
                                    </TableCell>
                                    <TableCell align="right" sx={{ border: 0, py: 2, pr: 3 }}>
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
