import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import CustomDropdownIcon from '@/components/atoms/CustomDropdownIcon';
import InvoicePreviewModal from './InvoicePreviewModal';

interface InvoiceItem {
    name: string;
    qty: number;
    price: number;
}

interface CreateInvoiceFormValues {
    recipientEmail: string;
    projectDescription: string;
    issuedOn: string;
    dueOn: string;
    isRecurring: boolean;
    items: InvoiceItem[];
    notes: string;
}

interface CreateInvoiceDrawerProps {
    open: boolean;
    onClose: () => void;
}

export default function CreateInvoiceDrawer({ open, onClose }: CreateInvoiceDrawerProps) {
    const { control, handleSubmit, watch, register } = useForm<CreateInvoiceFormValues>({
        defaultValues: {
            recipientEmail: '',
            projectDescription: '',
            issuedOn: '2020-10-25',
            dueOn: '2020-11-04',
            isRecurring: true,
            items: [{ name: '', qty: 0, price: 0 }],
            notes: ''
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });

    const [previewOpen, setPreviewOpen] = React.useState(false);

    const watchedItems = watch('items');
    const totalAmount = watchedItems.reduce((sum, item) => sum + (item.qty * item.price), 0);

    const onSubmit = (data: CreateInvoiceFormValues) => {
        console.log(data);
        onClose();
    };

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: '100%',
                    maxWidth: 600,
                    p: 0,
                    borderRadius: 0,
                    boxShadow: '-10px 0 40px rgba(0,0,0,0.1)'
                }
            }}
            ModalProps={{
                BackdropProps: {
                    sx: {
                        backgroundColor: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            }}
        >
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" fontWeight="bold">Create new invoice</Typography>
                    <IconButton onClick={onClose} size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ p: 4, flexGrow: 1, overflowY: 'auto' }}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                        <Typography variant="h5" fontWeight="bold" color="text.primary">#AL2545</Typography>
                        <Button
                            startIcon={<ContentCopyIcon sx={{ fontSize: 16 }} />}
                            sx={{ color: 'primary.main', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase' }}
                        >
                            Copy Payment Link
                        </Button>
                    </Box>

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
                                            '& fieldset': { borderColor: '#e0e0e0' },
                                            '&:hover fieldset': { borderColor: '#bdbdbd' },
                                            '&.Mui-focused fieldset': { borderColor: 'primary.main' }
                                        }
                                    }}
                                >
                                    <MenuItem value="alex">
                                        <Typography variant="body2" component="span" color="text.primary">Alex Parkinson</Typography>
                                        <Typography variant="body2" component="span" color="text.secondary" sx={{ ml: 0.5 }}>(alex@email.com)</Typography>
                                    </MenuItem>
                                    <MenuItem value="john">
                                        <Typography variant="body2" component="span" color="text.primary">John Doe</Typography>
                                        <Typography variant="body2" component="span" color="text.secondary" sx={{ ml: 0.5 }}>(john@email.com)</Typography>
                                    </MenuItem>
                                </TextField>
                            )}
                        />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Project / Description</Typography>
                        <TextField
                            {...register('projectDescription')}
                            fullWidth
                            size="small"
                            placeholder="Project / Description"
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
                                    sx={{ flex: 3, bgcolor: '#F9FAFB' }}
                                />
                                <TextField
                                    {...register(`items.${index}.qty`, { valueAsNumber: true })}
                                    type="number"
                                    size="small"
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
                                    ${(watchedItems[index]?.qty * watchedItems[index]?.price || 0).toLocaleString()}
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
                            <Typography variant="h6" fontWeight="bold">${totalAmount.toLocaleString()}</Typography>
                        </Box>
                    </Box>

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
                </Box>

                <Box sx={{ p: 3, borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button
                        onClick={() => setPreviewOpen(true)}
                        sx={{ color: 'primary.main', fontWeight: 700, fontSize: '0.8rem' }}
                    >
                        PREVIEW
                    </Button>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button variant="outlined" sx={{ color: 'text.secondary', borderColor: '#e0e0e0', fontWeight: 600 }}>SAVE AS DRAFT</Button>
                        <Button variant="contained" type="submit" sx={{ bgcolor: 'primary.main', fontWeight: 700, px: 4 }}>SEND</Button>
                    </Box>
                </Box>
            </Box>
            <InvoicePreviewModal
                open={previewOpen}
                onClose={() => setPreviewOpen(false)}
                data={watch()}
            />
        </Drawer >
    );
}
