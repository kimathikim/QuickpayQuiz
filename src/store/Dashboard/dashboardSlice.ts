import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Invoice, Client } from '@/types/dashboard';
import { INVOICES, CLIENTS } from '../../../constants';
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
    totalReceived: 84254.58,
    pendingAmount: 1254.50,
    draftAmount: 0.00,
    growthPercentage: 10,
    invoices: INVOICES,
    clients: CLIENTS
};

export const fetchClients = createAsyncThunk(
    'dashboard/fetchClients',
    async () => {
        const { data, error } = await supabase
            .from('clients')
            .select('*');

        if (error) {
            throw error;
        }

        return data as Client[];
    }
);

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        addInvoice: (state, action: PayloadAction<Omit<Invoice, 'id' | 'invoiceNumber'>>) => {
            const newInvoice: Invoice = {
                id: Math.random().toString(36).substr(2, 9),
                invoiceNumber: `#INV${Math.floor(1000 + Math.random() * 9000)}`,
                ...action.payload,
            };

            state.invoices.unshift(newInvoice);

            // Recalculate totals
            state.totalReceived = state.invoices
                .filter(inv => inv.status === 'Paid')
                .reduce((sum, inv) => sum + inv.amount, 0);

            state.pendingAmount = state.invoices
                .filter(inv => inv.status === 'Pending')
                .reduce((sum, inv) => sum + inv.amount, 0);

            state.draftAmount = state.invoices
                .filter(inv => inv.status === 'Draft')
                .reduce((sum, inv) => sum + inv.amount, 0);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchClients.fulfilled, (state, action) => {
            state.clients = action.payload;
        });
    },
});

export const { addInvoice } = dashboardSlice.actions;

export default dashboardSlice.reducer;
