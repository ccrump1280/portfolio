import { autocompleteClasses, Box, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';
import { Button } from '../StyledComponents';

export default function Hero( {title, heroURL, isContactButton, thumbnailURL} ) {
    
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
                backgroundImage: `linear-gradient(180deg, rgba(34,34,34,0.5) 0%, rgba(34,34,34,1) 100%), url(${heroURL})`,
                backgroundSize: 'cover',
                width: '100%',
                padding: '1rem 1rem',
                paddingBottom: '3rem',
                boxSizing: 'border-box',
                height: {md:'40vh'}
            }}>
                <Box sx = {{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    width: {xs:'100%', md:'70%'},
                    margin: 'auto'
                }}>
                    <Link 
                        to={'/'} 
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                    >
                        <Typography variant="h5">Connor Crump</Typography>
                    </Link>
                    <Box sx={{display:{xs:'none', md:'flex'}}}
                    >
                        <Button as={Link} to={'/'}>Portfolio</Button>
                        <Button as={Link} to={'/about'}>About</Button>
                        <Button as={Link} to={'/contact'}>Contact</Button>
                    </Box>
                    <MenuRoundedIcon sx={{display:{xs:'block', md:'none'}}} onClick={toggleMobileMenu(true)}/>
                </Box>
                <Box sx={{mt:'3rem'}}>
                    {thumbnailURL && <img src={thumbnailURL} style={{width: '70%', borderRadius:'4px'}}/>}
                    <Typography variant="h4" sx={{
                        lineHeight: '2.2rem',
                        mb:"1.5rem",
                    }}>
                        {title}
                    </Typography>
                    {isContactButton && <Button as={Link} to={'/contact'} primary="true">Get in Touch</Button> }
                </Box>
            </Box>
        </>
    )
}