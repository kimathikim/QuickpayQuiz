import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Invoice, Client } from '@/types/dashboard';
import { supabase } from '@/lib/supabaseClient';

export interface DashboardState {
    totalReceived: number;
    pendingAmount: number;
    draftAmount: number;
    growthPercentage: number;
    invoices: Invoice[];
    clients: Client[];
}

export const initialState: DashboardState = {
    totalReceived: 0,
    pendingAmount: 0,
    draftAmount: 0,
    growthPercentage: 10,
    invoices: [],
    clients: []
};

export const fetchClients = createAsyncThunk(
    'dashboard/fetchClients',
    async () => {
        const { data, error } = await supabase
            .from('clients')
            .select('*');
        if (error) throw error;
        return data as Client[];
    }
);

export const fetchInvoices = createAsyncThunk(
    'dashboard/fetchInvoices',
    async () => {
        const { data, error } = await supabase
            .from('invoices')
            .select('*')
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data.map((inv: any) => ({
            id: inv.id,
            invoiceNumber: inv.invoice_number,
            date: inv.date,
            client: inv.client,
            amount: inv.amount,
            status: inv.status
        })) as Invoice[];
    }
);

export const createInvoice = createAsyncThunk(
    'dashboard/createInvoice',
    async (invoiceData: Omit<Invoice, 'id'>) => {
        const dbData = {
            invoice_number: invoiceData.invoiceNumber,
            date: invoiceData.date,
            client: invoiceData.client,
            amount: invoiceData.amount,
            status: invoiceData.status
        };

        const { data, error } = await supabase
            .from('invoices')
            .insert([dbData])
            .select()
            .single();

        if (error) throw error;

        return {
            id: data.id,
            invoiceNumber: data.invoice_number,
            date: data.date,
            client: data.client,
            amount: data.amount,
            status: data.status
        } as Invoice;
    }
);

// Helper to calculate totals
const calculateTotals = (invoices: Invoice[]) => {
    return {
        totalReceived: invoices
            .filter(inv => inv.status === 'Paid')
            .reduce((sum, inv) => sum + inv.amount, 0),
        pendingAmount: invoices
            .filter(inv => inv.status === 'Pending')
            .reduce((sum, inv) => sum + inv.amount, 0),
        draftAmount: invoices
            .filter(inv => inv.status === 'Draft')
            .reduce((sum, inv) => sum + inv.amount, 0),
    };
};

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchClients.fulfilled, (state, action) => {
            state.clients = action.payload;
        });
        builder.addCase(fetchInvoices.fulfilled, (state, action) => {
            state.invoices = action.payload;
            const totals = calculateTotals(state.invoices);
            state.totalReceived = totals.totalReceived;
            state.pendingAmount = totals.pendingAmount;
            state.draftAmount = totals.draftAmount;
        });
        builder.addCase(createInvoice.fulfilled, (state, action) => {
            state.invoices.unshift(action.payload);
            const totals = calculateTotals(state.invoices);
            state.totalReceived = totals.totalReceived;
            state.pendingAmount = totals.pendingAmount;
            state.draftAmount = totals.draftAmount;
        });
    },
});

export default dashboardSlice.reducer;
