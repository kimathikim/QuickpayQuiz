'use client';
import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { NAVIGATION, BOTTOM_NAVIGATION } from '@/constants/navigation';

import { useAppDispatch } from '@/store/hooks';
import { fetchClients } from '@/store/Dashboard/dashboardSlice';

export default function Sidebar() {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(fetchClients());
    }, [dispatch]);

    return (
        <Box
            component="aside"
            sx={{
                width: 280,
                height: '100vh',
                bgcolor: 'primary.main',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                py: 4,
                position: 'fixed',
                left: 0,
                top: 0,
            }}
        >

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


            <List sx={{ px: 0 }}>
                {NAVIGATION.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ mb: 0 }}>
                        <ListItemButton
                            sx={{
                                borderRadius: 0, // Full width flat edge
                                py: 1.5,
                                pl: 4, // Align with logo
                                bgcolor: item.active ? 'rgba(0, 0, 0, 0.2)' : 'transparent', // Darker active state
                                position: 'relative',
                                '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.1)' },
                                '&::before': item.active ? {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: 4,
                                    bgcolor: 'white', // White indicator bar
                                    borderTopRightRadius: 4,
                                    borderBottomRightRadius: 4
                                } : {}
                            }}
                        >
                            <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: '0.9rem',
                                    fontWeight: item.active ? 700 : 500,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}

                <Box sx={{ pl: 9, mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography sx={{ opacity: 0.8, fontSize: '0.9rem', cursor: 'pointer', fontWeight: 500, '&:hover': { opacity: 1 } }}>Settings</Typography>
                    <Typography sx={{ opacity: 0.8, fontSize: '0.9rem', cursor: 'pointer', fontWeight: 500, '&:hover': { opacity: 1 } }}>Clients</Typography>
                </Box>
            </List>

            <Box sx={{ flexGrow: 1 }} />

            <List sx={{ px: 0, pb: 2 }}>
                {BOTTOM_NAVIGATION.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ mb: 0 }}>
                        <ListItemButton
                            sx={{
                                borderRadius: 0,
                                py: 1.5,
                                pl: 4,
                                '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.1)' },
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
                                    letterSpacing: '1px'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
