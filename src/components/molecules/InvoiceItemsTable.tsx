import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import { UseFormRegister, Control, FieldErrors, UseFieldArrayReturn, UseFormWatch } from 'react-hook-form';
import { CreateInvoiceSchemaType } from '@/lib/schemas';
import { formatCurrency } from '@/lib/utils';

interface InvoiceItemsTableProps {
    register: UseFormRegister<CreateInvoiceSchemaType>;
    errors: FieldErrors<CreateInvoiceSchemaType>;
    fields: UseFieldArrayReturn<CreateInvoiceSchemaType, "items", "id">['fields'];
    append: UseFieldArrayReturn<CreateInvoiceSchemaType, "items", "id">['append'];
    remove: UseFieldArrayReturn<CreateInvoiceSchemaType, "items", "id">['remove'];
    watch: UseFormWatch<CreateInvoiceSchemaType>;
}

export default function InvoiceItemsTable({ register, errors, fields, append, remove, watch }: InvoiceItemsTableProps) {
    const watchedItems = watch('items');
    const totalAmount = watchedItems.reduce((sum, item) => sum + (item.qty * item.price), 0);

    return (
        <>
            <Box sx={{ mb: 1 }}>
                <Box sx={{ display: 'flex', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ flex: 3 }}>Item</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flex: 1, textAlign: 'center' }}>Qty</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flex: 1, textAlign: 'right' }}>Price</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flex: 1, textAlign: 'right', pr: 4 }}>Total</Typography>
                </Box>

                {fields.map((field, index) => (
                    <Box key={field.id} sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
                        <TextField
                            {...register(`items.${index}.name`)}
                            size="small"
                            fullWidth
                            error={!!errors.items?.[index]?.name}
                            helperText={errors.items?.[index]?.name?.message}
                            sx={{ flex: 3, bgcolor: '#F9FAFB' }}
                        />
                        <TextField
                            {...register(`items.${index}.qty`, { valueAsNumber: true })}
                            type="number"
                            size="small"
                            error={!!errors.items?.[index]?.qty}
                            sx={{
                                flex: 1,
                                bgcolor: '#F9FAFB',
                                '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                                    '-webkit-appearance': 'none',
                                    margin: 0,
                                },
                                '& input[type=number]': {
                                    '-moz-appearance': 'textfield',
                                },
                            }}
                            inputProps={{ style: { textAlign: 'center' } }}
                        />
                        <TextField
                            {...register(`items.${index}.price`, { valueAsNumber: true })}
                            type="number"
                            size="small"
                            error={!!errors.items?.[index]?.price}
                            sx={{
                                flex: 1,
                                bgcolor: '#F9FAFB',
                                '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                                    '-webkit-appearance': 'none',
                                    margin: 0,
                                },
                                '& input[type=number]': {
                                    '-moz-appearance': 'textfield',
                                },
                            }}
                            inputProps={{ style: { textAlign: 'right' } }}
                        />
                        <Typography sx={{ flex: 1, textAlign: 'right', fontWeight: 'bold' }}>
                            ${formatCurrency(watchedItems[index]?.qty * watchedItems[index]?.price || 0).full}
                        </Typography>
                        <IconButton size="small" onClick={() => remove(index)}>
                            <MoreHorizIcon fontSize="small" />
                        </IconButton>
                    </Box>
                ))}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Button
                    startIcon={<AddIcon />}
                    onClick={() => append({ name: '', qty: 0, price: 0 })}
                    sx={{ fontWeight: 700, fontSize: '0.75rem' }}
                >
                    ADD ITEM
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mr: 5 }}>
                    <Typography color="text.secondary" fontWeight="600">Total</Typography>
                    <Typography variant="h6" fontWeight="bold">${formatCurrency(totalAmount).full}</Typography>
                </Box>
            </Box>
        </>
    );
}
