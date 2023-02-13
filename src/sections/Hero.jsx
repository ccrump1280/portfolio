import { Button } from '../StyledComponents';
import { Box, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Hero( {title, heroURL, isContactButton, thumbnail} ) {
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = (isOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsMobileMenuOpen(isOpen);
    };

    return (
        <>  
            <MobileMenu isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            <Box sx ={{
                backgroundImage: `linear-gradient(180deg, rgba(34,34,34,0.65) 0%, rgba(34,34,34,1) 100%), url(${heroURL})`,
                backgroundSize: 'cover',
                width: '100%',
                padding: '1rem 1rem',
                paddingBottom: '3rem',
                boxSizing: 'border-box',
            }}>
                <Box sx = {{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative'
                    
                }}>
                    <Typography variant="h5">Connor Crump</Typography>
                    <Box sx={{display:{xs:'none', md:'flex'}}}>
                        <Button>Portfolio</Button>
                        <Button>About</Button>
                        <Button>Contact</Button>
                    </Box>
                    <MenuRoundedIcon sx={{display:{xs:'block', md:'none'}}} onClick={toggleMobileMenu(true)}/>
                </Box>
                <Box sx={{mt:'3rem'}}>
                    {thumbnail && <img src={thumbnail} style={{width: '70%'}}/>} 
                    <Typography variant="h4" sx={{
                        lineHeight: '2.2rem',
                        mb:"1.5rem",
                    }}>
                        {title}
                    </Typography>
                    {isContactButton && <Button primary>Get in Touch</Button> }
                </Box>
            </Box>
        </>
    )
}