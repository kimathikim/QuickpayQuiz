import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Invoice } from '@/types/dashboard';
import CurrencyDisplay from '@/components/atoms/CurrencyDisplay';
import InvoiceStatusBadge from './InvoiceStatusBadge';

interface InvoiceTableRowProps {
    invoice: Invoice;
}

export default function InvoiceTableRow({ invoice }: InvoiceTableRowProps) {
    return (
        <TableRow
            sx={{
                bgcolor: 'background.paper',
                boxShadow: '0px 2px 4px rgba(0,0,0,0.02)',
                '& td:first-of-type': { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
                '& td:last-of-type': { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
                '&:hover': { boxShadow: '0px 4px 8px rgba(0,0,0,0.05)' }
            }}
        >
            <TableCell component="th" scope="row" sx={{ fontWeight: 600, color: 'text.primary', border: 0, py: 2, pl: 3 }}>
                {invoice.invoiceNumber}
            </TableCell>
            <TableCell sx={{ color: 'text.secondary', border: 0, py: 2 }}>{invoice.date}</TableCell>
            <TableCell sx={{ color: 'text.secondary', border: 0, py: 2 }}>{invoice.client}</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600, color: 'text.primary', border: 0, py: 2 }}>
                <CurrencyDisplay amount={invoice.amount} currencySymbol="$" sx={{ justifyContent: 'flex-end', fontSize: '1rem' }} />
            </TableCell>
            <TableCell align="right" sx={{ border: 0, py: 2, pr: 3 }}>
                <InvoiceStatusBadge status={invoice.status} />
            </TableCell>
        </TableRow>
    );
}
