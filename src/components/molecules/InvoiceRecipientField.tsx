import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import CustomDropdownIcon from '@/components/atoms/CustomDropdownIcon';
import { CreateInvoiceSchemaType } from '@/lib/schemas';

interface InvoiceRecipientFieldProps {
    control: Control<CreateInvoiceSchemaType>;
    errors: FieldErrors<CreateInvoiceSchemaType>;
}

export default function InvoiceRecipientField({ control, errors }: InvoiceRecipientFieldProps) {
    return (
        <Box sx={{
            mb: 3,
            p: 2,
            bgcolor: '#F5F7FF',
            borderRadius: 2,
            border: '1px solid',
            borderColor: '#E3F2FD'
        }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontWeight: 500 }}>Recipient Email</Typography>
            <Controller
                name="recipientEmail"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        select
                        fullWidth
                        size="small"
                        placeholder="Select recipient"
                        error={!!errors.recipientEmail}
                        helperText={errors.recipientEmail?.message}
                        SelectProps={{
                            IconComponent: () => (
                                <Box sx={{ position: 'absolute', right: 0, display: 'flex', alignItems: 'center' }}>
                                    <CustomDropdownIcon />
                                </Box>
                            ),
                            sx: { paddingRight: '40px' }
                        }}
                        sx={{
                            bgcolor: 'white',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 1,
                                '& fieldset': { borderColor: errors.recipientEmail ? 'error.main' : '#e0e0e0' },
                                '&:hover fieldset': { borderColor: errors.recipientEmail ? 'error.main' : '#bdbdbd' },
                                '&.Mui-focused fieldset': { borderColor: errors.recipientEmail ? 'error.main' : 'primary.main' }
                            }
                        }}
                    >
                        <MenuItem value="Alex Parkinson (alex@email.com)">
                            <Typography variant="body2" component="span" color="text.primary">Alex Parkinson</Typography>
                            <Typography variant="body2" component="span" color="text.secondary" sx={{ ml: 0.5 }}>(alex@email.com)</Typography>
                        </MenuItem>
                        <MenuItem value="John Doe (john@email.com)">
                            <Typography variant="body2" component="span" color="text.primary">John Doe</Typography>
                            <Typography variant="body2" component="span" color="text.secondary" sx={{ ml: 0.5 }}>(john@email.com)</Typography>
                        </MenuItem>
                    </TextField>
                )}
            />
        </Box>
    );
}
