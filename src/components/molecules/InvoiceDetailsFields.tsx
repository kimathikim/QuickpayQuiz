import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { UseFormRegister, Control, Controller, FieldErrors } from 'react-hook-form';
import { CreateInvoiceSchemaType } from '@/lib/schemas';

interface InvoiceDetailsFieldsProps {
    register: UseFormRegister<CreateInvoiceSchemaType>;
    control: Control<CreateInvoiceSchemaType>;
    errors: FieldErrors<CreateInvoiceSchemaType>;
}

export default function InvoiceDetailsFields({ register, control, errors }: InvoiceDetailsFieldsProps) {
    return (
        <>
            <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Project / Description</Typography>
                <TextField
                    {...register('projectDescription')}
                    fullWidth
                    size="small"
                    placeholder="Project / Description"
                    error={!!errors.projectDescription}
                    helperText={errors.projectDescription?.message}
                    sx={{ bgcolor: '#F9FAFB' }}
                />
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Issued on</Typography>
                    <TextField
                        {...register('issuedOn')}
                        type="date"
                        fullWidth
                        size="small"
                        error={!!errors.issuedOn}
                        helperText={errors.issuedOn?.message}
                        sx={{ bgcolor: '#F9FAFB' }}
                    />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Due on</Typography>
                    <TextField
                        {...register('dueOn')}
                        type="date"
                        fullWidth
                        size="small"
                        error={!!errors.dueOn}
                        helperText={errors.dueOn?.message}
                        sx={{ bgcolor: '#F9FAFB' }}
                    />
                </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
                <FormControlLabel
                    control={
                        <Controller
                            name="isRecurring"
                            control={control}
                            render={({ field }) => <Checkbox {...field} checked={field.value} />}
                        />
                    }
                    label={<Typography variant="body2" fontWeight="500">This is a recurring invoice (monthly)</Typography>}
                />
            </Box>
        </>
    );
}
