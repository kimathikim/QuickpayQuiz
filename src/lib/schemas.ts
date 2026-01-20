import { z } from 'zod';

export const InvoiceItemSchema = z.object({
    name: z.string().min(1, 'Item name is required'),
    qty: z.number().min(1, 'Qty must be at least 1'),
    price: z.number().min(0, 'Price must be non-negative'),
});

export const CreateInvoiceSchema = z.object({
    recipientEmail: z.string().min(1, 'Recipient email is required').refine((val) => {
        const match = val.match(/\(([^)]+)\)/);
        if (!match) return false;
        return z.string().email().safeParse(match[1]).success;
    }, 'Invalid email format'),
    projectDescription: z.string().min(3, 'Description must be at least 3 characters'),
    issuedOn: z.string().refine((val) => !isNaN(Date.parse(val)), 'Invalid date'),
    dueOn: z.string().refine((val) => !isNaN(Date.parse(val)), 'Invalid date'),
    isRecurring: z.boolean(),
    items: z.array(InvoiceItemSchema).min(1, 'At least one item is required'),
    notes: z.string().optional(),
}).refine((data) => {
    const issued = new Date(data.issuedOn);
    const due = new Date(data.dueOn);
    return due >= issued;
}, {
    message: "Due date must be after issued date",
    path: ["dueOn"],
});

export type CreateInvoiceSchemaType = z.infer<typeof CreateInvoiceSchema>;
