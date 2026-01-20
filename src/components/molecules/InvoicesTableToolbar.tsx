import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import StyledOutlinedButton from '@/components/atoms/StyledOutlinedButton';
import CustomDropdownIcon from '@/components/atoms/CustomDropdownIcon';

interface InvoicesTableToolbarProps {
    filterStatus: string;
    onFilterChange: (status: string) => void;
}

export default function InvoicesTableToolbar({ filterStatus, onFilterChange }: InvoicesTableToolbarProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (status?: string) => {
        if (status) {
            onFilterChange(status);
        }
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
                placeholder="Search an Invoice"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                    bgcolor: 'background.paper',
                    '& .MuiOutlinedInput-root': { borderRadius: 1.5 }
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon color="action" />
                        </InputAdornment>
                    ),
                }}
            />
            <StyledOutlinedButton
                onClick={handleClick}
                sx={{
                    minWidth: 140,
                    justifyContent: 'space-between',
                }}
            >
                {filterStatus === 'All' ? 'Show all' : filterStatus}
                <CustomDropdownIcon />
            </StyledOutlinedButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={() => handleClose('All')}>All</MenuItem>
                <MenuItem onClick={() => handleClose('Paid')}>Paid</MenuItem>
                <MenuItem onClick={() => handleClose('Pending')}>Pending</MenuItem>
                <MenuItem onClick={() => handleClose('Draft')}>Draft</MenuItem>
            </Menu>
        </Box>
    );
}
