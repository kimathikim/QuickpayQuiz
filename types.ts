import React from 'react';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  client: string;
  amount: number;
  status: 'Pending' | 'Draft' | 'Paid';
}

export interface NavItem {
  label: string;
  icon: React.ComponentType<any>;
  active?: boolean;
  subItems?: string[];
  href?: string;
}