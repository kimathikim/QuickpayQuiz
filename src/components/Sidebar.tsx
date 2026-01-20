'use client';
import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const NAVIGATION = [
    { label: 'Home', icon: <HomeOutlinedIcon />, active: false },
    { label: 'Company', icon: <BusinessOutlinedIcon />, active: false },
    { label: 'Perks', icon: <CardGiftcardOutlinedIcon />, active: false },
    { label: 'Legal', icon: <GavelOutlinedIcon />, active: false },
    { label: 'Payments', icon: <PaymentOutlinedIcon />, active: true }, // Active as per image
];

const BOTTOM_NAVIGATION = [
    { label: 'Get Help', icon: <HelpOutlineOutlinedIcon />, active: false },
    { label: 'Chat with Us', icon: <ChatBubbleOutlineOutlinedIcon />, active: false },
];

export default function Sidebar() {
    return (
        <Box
            component="aside"
            sx={{
                width: 280,
                height: '100vh',
                bgcolor: '#2173F2', // Blue sidebar
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                py: 4,
                position: 'fixed',
                left: 0,
                top: 0,
            }}
        >
            {/* Logo Area */}
            <Box sx={{ px: 4, mb: 6, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{
                    width: 32,
                    height: 32,
                    bgcolor: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2173F2',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                }}>
                    G
                </Box>
                <Typography variant="h6" fontWeight="600" sx={{ letterSpacing: 0.5 }}>
                    StartGlobal
                </Typography>
            </Box>

            {/* Main Navigation */}
            <List sx={{ px: 2 }}>
                {NAVIGATION.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                        <ListItemButton
                            sx={{
                                borderRadius: 2,
                                bgcolor: item.active ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
                            }}
                        >
                            <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: '0.9rem',
                                    fontWeight: item.active ? 600 : 500,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
                {/* Settings and Clients indented/separate */}
                <Box sx={{ pl: 9, mt: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    <Typography sx={{ opacity: 0.9, fontSize: '0.9rem', cursor: 'pointer', '&:hover': { opacity: 1 } }}>Settings</Typography>
                    <Typography sx={{ opacity: 0.9, fontSize: '0.9rem', cursor: 'pointer', '&:hover': { opacity: 1 } }}>Clients</Typography>
                </Box>
            </List>

            <Box sx={{ flexGrow: 1 }} />

            {/* Bottom Navigation */}
            <List sx={{ px: 2 }}>
                {BOTTOM_NAVIGATION.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                        <ListItemButton
                            sx={{
                                borderRadius: 2,
                                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
                            }}
                        >
                            <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
