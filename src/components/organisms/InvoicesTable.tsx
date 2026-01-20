'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppSelector } from '@/store/hooks';
import { Invoice } from '@/types/dashboard';
import InvoiceTableRow from '@/components/molecules/InvoiceTableRow';
import InvoicesTableToolbar from '@/components/molecules/InvoicesTableToolbar';
import InvoiceTableSkeleton from '@/components/molecules/InvoiceTableSkeleton';

interface InvoicesTableProps {
    onNewInvoice?: () => void;
}

export default function InvoicesTable({ onNewInvoice }: InvoicesTableProps) {
    const { invoices, isLoadingInvoices } = useAppSelector((state) => state.dashboard);
    const [filterStatus, setFilterStatus] = useState<string>('All');
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleFilterChange = (status: string) => {
        setFilterStatus(status);
    };

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const filteredInvoices = invoices.filter(invoice => {
        const matchesStatus = filterStatus === 'All' || invoice.status === filterStatus;
        const matchesSearch = invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
            invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    return (
        <Box sx={{ mt: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Box>
                    <Typography variant="h6" fontWeight="bold" color="text.primary">Invoices</Typography>
                    <Typography variant="body2" color="text.secondary">List of all of your recent transactions.</Typography>
                </Box>
                <Button
                    variant="contained"
                    onClick={onNewInvoice}
                    sx={{
                        bgcolor: 'primary.main',
                        fontWeight: 700,
                        px: 3,
                        boxShadow: '0px 4px 10px rgba(33, 115, 242, 0.2)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}
                >
                    + New Invoice
                </Button>
            </Box>

            <InvoicesTableToolbar
                filterStatus={filterStatus}
                onFilterChange={handleFilterChange}
                onSearch={handleSearch}
            />

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
                        {isLoadingInvoices ? (
                            <InvoiceTableSkeleton />
                        ) : (
                            filteredInvoices.map((row: Invoice) => (
                                <InvoiceTableRow key={row.id} invoice={row} />
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
