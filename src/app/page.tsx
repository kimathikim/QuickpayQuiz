'use client';
import { useState } from "react";
import Sidebar from "@/components/organisms/Sidebar";
import Box from "@mui/material/Box";
import TopHeader from "@/components/organisms/Header";
import TotalReceivedCard from "@/components/organisms/TotalReceivedCard";
import QuickPayNoteCard from "@/components/organisms/QuickPayNoteCard";
import InvoicesTable from "@/components/organisms/InvoicesTable";
import CreateInvoiceDrawer from '@/components/organisms/CreateInvoiceDrawer';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', bgcolor: 'primary.main', minHeight: '100vh' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: '280px',
          p: 5,
          bgcolor: '#F5F6FA',
          minHeight: '100vh',
          borderTopLeftRadius: 32,
          borderBottomLeftRadius: 32,
          overflow: 'hidden'
        }}
      >
        <TopHeader />

        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mr: 12 }}>
          <TotalReceivedCard />
          <QuickPayNoteCard />
        </Box>

        <Box sx={{ mr: 12 }}>
          <InvoicesTable onNewInvoice={() => setIsDrawerOpen(true)} />
        </Box>
      </Box>

      <CreateInvoiceDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </Box>
  );
}
