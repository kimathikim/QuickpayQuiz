import React from 'react';
import Box from '@mui/material/Box';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { formatCurrency } from '@/lib/utils';

interface CurrencyDisplayProps extends TypographyProps {
    amount: number;
    currencySymbol?: string;
}

export default function CurrencyDisplay({ amount, currencySymbol = '$', sx, ...props }: CurrencyDisplayProps) {
    const { integer, fraction } = formatCurrency(amount);

    return (
        <Typography component="span" fontWeight="bold" color="text.primary" sx={{ display: 'inline-flex', alignItems: 'baseline', ...sx }} {...props}>
            <Box component="span" sx={{ mr: 0.5, fontSize: '0.9em' }}>{currencySymbol}</Box>
            {integer}
            <Box component="span" sx={{ color: 'text.secondary' }}>.{fraction}</Box>
        </Typography>
    );
}
