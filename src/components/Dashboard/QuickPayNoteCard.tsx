'use client';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import BoltIcon from '@mui/icons-material/Bolt';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import IconButton from '@mui/material/IconButton';

export default function QuickPayNoteCard() {
  return (
    <Paper sx={{ p: 3, flex: 1, height: '100%', borderRadius: 3, display: 'flex', flexDirection: 'column', gap: 2, boxShadow: '0px 4px 20px rgba(0,0,0,0.02)' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{
            width: 32,
            height: 32,
            bgcolor: 'primary.main',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            <BoltIcon fontSize="small" />
          </Box>
          <Typography variant="body1" fontWeight="600" color="text.secondary">
            quickpay.to/
            <Box component="span" sx={{ color: 'text.primary' }}>publicnote</Box>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size="small" sx={{ color: 'primary.main' }}>
            <EditOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: 'primary.main' }}>
            <ContentCopyOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{
        bgcolor: '#F5F7FF', // Light blue background
        p: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        flex: 1
      }}>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          Quickpay lets you receive payments on the fly. You can generate invoice or share the payment link to request the payment.
        </Typography>
        <Link component="button" variant="caption" fontWeight="700" color="primary" underline="none" sx={{ textAlign: 'left', letterSpacing: 0.5 }}>
          LEARN MORE
        </Link>
      </Box>
    </Paper>
  );
}
