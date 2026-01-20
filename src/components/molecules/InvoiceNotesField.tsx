import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { UseFormRegister } from 'react-hook-form';
import { CreateInvoiceSchemaType } from '@/lib/schemas';

interface InvoiceNotesFieldProps {
    register: UseFormRegister<CreateInvoiceSchemaType>;
}

export default function InvoiceNotesField({ register }: InvoiceNotesFieldProps) {
    return (
        <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Additional Notes</Typography>
            <TextField
                {...register('notes')}
                multiline
                rows={4}
                fullWidth
                sx={{ bgcolor: '#F9FAFB' }}
            />
        </Box>
    );
}
