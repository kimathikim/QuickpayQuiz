import { Invoice } from './types';

export const INVOICES: Invoice[] = [
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
];

export const USER_NAME = "Jonnathan Doe";
