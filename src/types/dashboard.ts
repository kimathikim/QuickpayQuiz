export interface Invoice {
    id: string;
    invoiceNumber: string;
    date: string;
    client: string;
    amount: number;
    status: 'Pending' | 'Draft' | 'Paid';
}
