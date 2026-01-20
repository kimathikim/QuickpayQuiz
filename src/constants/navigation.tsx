import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export const NAVIGATION = [
    { label: 'Home', icon: <HomeOutlinedIcon />, active: false },
    { label: 'Company', icon: <BusinessOutlinedIcon />, active: false },
    { label: 'Perks', icon: <CardGiftcardOutlinedIcon />, active: false },
    { label: 'Legal', icon: <GavelOutlinedIcon />, active: false },
    { label: 'Payments', icon: <PaymentOutlinedIcon />, active: true },
];

export const BOTTOM_NAVIGATION = [
    { label: 'Get Help', icon: <HelpOutlineOutlinedIcon />, active: false },
    { label: 'Chat with Us', icon: <ChatBubbleOutlineOutlinedIcon />, active: false },
];
