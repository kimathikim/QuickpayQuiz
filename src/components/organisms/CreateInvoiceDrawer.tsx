import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useForm, useFieldArray } from 'react-hook-form';
import InvoicePreviewModal from './InvoicePreviewModal';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateInvoiceSchema, CreateInvoiceSchemaType } from '@/lib/schemas';
import { useAppDispatch } from '@/store/hooks';
import { addInvoice } from '@/store/Dashboard/dashboardSlice';

import InvoiceRecipientField from '@/components/molecules/InvoiceRecipientField';
import InvoiceDetailsFields from '@/components/molecules/InvoiceDetailsFields';
import InvoiceItemsTable from '@/components/molecules/InvoiceItemsTable';
import InvoiceNotesField from '@/components/molecules/InvoiceNotesField';

interface CreateInvoiceDrawerProps {
    open: boolean;
    onClose: () => void;
}

export default function CreateInvoiceDrawer({ open, onClose }: CreateInvoiceDrawerProps) {
    const dispatch = useAppDispatch();
    const { control, handleSubmit, watch, register, reset, formState: { errors } } = useForm<CreateInvoiceSchemaType>({
        resolver: zodResolver(CreateInvoiceSchema),
        defaultValues: {
            recipientEmail: '',
            projectDescription: '',
            issuedOn: new Date().toISOString().split('T')[0], // Default to today
            dueOn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Default +7 days
            isRecurring: true,
            items: [{ name: '', qty: 1, price: 0 }],
            notes: ''
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });

    const [previewOpen, setPreviewOpen] = React.useState(false);

    // Function to handle submission with a specific status
    const onSubmitWithStatus = (status: 'Pending' | 'Draft') => (data: CreateInvoiceSchemaType) => {
        const totalAmount = data.items.reduce((sum, item) => sum + (item.qty * item.price), 0);

        dispatch(addInvoice({
            date: new Date(data.issuedOn).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            client: data.recipientEmail.split('(')[0].trim(),
            amount: totalAmount,
            status: status,
        }));

        onClose();
        reset();
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
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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

                    <InvoiceRecipientField control={control} errors={errors} />

                    <InvoiceDetailsFields register={register} control={control} errors={errors} />

                    <InvoiceItemsTable
                        register={register}
                        errors={errors}
                        fields={fields}
                        append={append}
                        remove={remove}
                        watch={watch}
                    />

                    <InvoiceNotesField register={register} />
                </Box>

                <Box sx={{ p: 3, borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button
                        onClick={() => setPreviewOpen(true)}
                        sx={{ color: 'primary.main', fontWeight: 700, fontSize: '0.8rem' }}
                    >
                        PREVIEW
                    </Button>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="outlined"
                            onClick={handleSubmit(onSubmitWithStatus('Draft'))}
                            sx={{ color: 'text.secondary', borderColor: '#e0e0e0', fontWeight: 600 }}
                        >
                            SAVE AS DRAFT
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSubmit(onSubmitWithStatus('Pending'))}
                            sx={{ bgcolor: 'primary.main', fontWeight: 700, px: 4 }}
                        >
                            SEND
                        </Button>
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
