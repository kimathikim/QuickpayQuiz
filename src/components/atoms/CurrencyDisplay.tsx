import React from 'react';
import Box from '@mui/material/Box';
import Typography, { TypographyProps } from '@mui/material/Typography';

interface CurrencyDisplayProps extends TypographyProps {
    amount: number;
    currencySymbol?: string;
}

export default function CurrencyDisplay({ amount, currencySymbol = '$', sx, ...props }: CurrencyDisplayProps) {
    const formatted = amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const [integerPart, decimalPart] = formatted.split('.');

    return (
        <Typography component="span" fontWeight="bold" color="text.primary" sx={{ display: 'inline-flex', alignItems: 'baseline', ...sx }} {...props}>
            <Box component="span" sx={{ mr: 0.5, fontSize: '0.9em' }}>{currencySymbol}</Box>
            {integerPart}
            <Box component="span" sx={{ color: 'text.secondary' }}>.{decimalPart}</Box>
        </Typography>
    );
}
