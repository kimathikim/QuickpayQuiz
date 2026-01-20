import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Invoice, Client } from '@/types/dashboard';

export interface DashboardState {
    totalReceived: number;
    pendingAmount: number;
    draftAmount: number;
    growthPercentage: number;
    invoices: Invoice[];
    clients: Client[];
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
    clients: [
        {
            id: '1',
            name: 'Alex Parkinson',
            email: 'alex@email.com',
            address: '3897 Hickory St',
            city: 'Salt Lake City, Utah',
            country: 'United States',
            zip: '84104'
        },
        {
            id: '2',
            name: 'John Doe',
            email: 'john@email.com',
            address: '123 Main St',
            city: 'San Francisco, California',
            country: 'United States',
            zip: '94105'
        },
        {
            id: '3',
            name: 'Thomas Lee',
            email: 'thomas@email.com',
            address: '456 Market St',
            city: 'Seattle, Washington',
            country: 'United States',
            zip: '98101'
        }
    ]
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
