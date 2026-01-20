'use client';
import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: inter.style.fontFamily,
    },
    palette: {
        primary: {
            main: '#2173F2', // Blue from the image startglobal
        },
        background: {
            default: '#F5F6FA', // Light grey background
            paper: '#FFFFFF',
        },
        text: {
            primary: '#1A1A1A',
            secondary: '#888888',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                    fontWeight: 600,
                },
            },
            defaultProps: {
                disableElevation: true,
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.02)',
                },
            },
        },
    },
});

export default theme;
