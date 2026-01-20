export interface Invoice {
    id: string;
    invoiceNumber: string;
    date: string;
    client: string;
    amount: number;
    status: 'Pending' | 'Draft' | 'Paid';
}

export interface Client {
    id: string;
    name: string;
    email: string;
    address: string;
    city: string;
    country: string;
    zip: string;
}
