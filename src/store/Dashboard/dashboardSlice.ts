import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Invoice } from '@/types/dashboard';

interface DashboardState {
    totalReceived: number;
    pendingAmount: number;
    draftAmount: number;
    growthPercentage: number;
    invoices: Invoice[];
}

const initialState: DashboardState = {
    totalReceived: 84254.58,
    pendingAmount: 1254.50,
    draftAmount: 0.00,
    growthPercentage: 10,
    invoices: [
        {
            id: '1',
            invoiceNumber: '#BCS101',
            date: 'Jun 21, 2020',
            client: 'Alexander Parkinson',
            amount: 1254.50,
            status: 'Pending',
        },
        {
            id: '2',
            invoiceNumber: '#CDF254',
            date: 'May 16, 2020',
            client: 'Intuitive Holdings Pvt. Ltd.',
            amount: 654.25,
            status: 'Draft',
        },
        {
            id: '3',
            invoiceNumber: '#SWE254',
            date: 'Apr 12, 2020',
            client: 'Thomas Lee',
            amount: 2547.32,
            status: 'Paid',
        },
        {
            id: '4',
            invoiceNumber: '#SWE254',
            date: 'Apr 12, 2020',
            client: 'Thomas Lee',
            amount: 2547.32,
            status: 'Paid',
        },
    ],
};

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
});

export const { addInvoice } = dashboardSlice.actions;

export default dashboardSlice.reducer;
