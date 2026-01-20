import { Invoice } from './types';

import { Client } from '@/types/dashboard';

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

export const CLIENTS: Client[] = [
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
];

export const USER_NAME = "Jonnathan Doe";
