import Sidebar from "@/components/Sidebar";
import Box from "@mui/material/Box";
import TopHeader from "@/components/Header";
import TotalReceivedCard from "@/components/Dashboard/TotalReceivedCard";
import QuickPayNoteCard from "@/components/Dashboard/QuickPayNoteCard";
import InvoicesTable from "@/components/Dashboard/InvoicesTable";

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, ml: '280px', p: 5, bgcolor: '#F5F6FA', minHeight: '100vh' }}>
        <TopHeader />

        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mr: 12 }}>
          <Box sx={{ flex: 1, minWidth: '300px' }}>
            <TotalReceivedCard />
          </Box>
          <Box sx={{ flex: 1, minWidth: '300px' }}>
            <QuickPayNoteCard />
          </Box>
        </Box>

        <InvoicesTable />
      </Box>
    </Box>
  );
}
