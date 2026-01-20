import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export default function StyledOutlinedButton({ children, sx, ...props }: ButtonProps) {
    return (
        <Button
            variant="outlined"
            size="small"
            sx={{
                bgcolor: 'background.paper',
                borderColor: '#e0e0e0',
                color: 'text.secondary',
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: 1.5,
                height: 40,
                px: 2,
                '&:hover': {
                    borderColor: 'text.primary',
                    bgcolor: 'background.paper'
                },
                ...sx
            }}
            {...props}
        >
            {children}
        </Button>
    );
}
