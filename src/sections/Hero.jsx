import { Box, Typography, Fade } from '@mui/material';
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
            <Fade in={true} timeout={1200}>
            <Box sx ={{
                backgroundImage: `linear-gradient(180deg, rgba(34,34,34,0.5) 0%, rgba(34,34,34,1) 100%), url(${heroURL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                padding: '1rem 1rem',
                marginBottom: '2rem',
                boxSizing: 'border-box',
                minHeight: {xs:'400px', sm:'500px'},
                position: 'relative'
            }}>
                <Box sx = {{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    width: {xs:'100%', sm:'80%'},
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
                    <Box sx={{display:{xs:'none', sm:'flex'}}}
                    >
                        <Button as={Link} to={'/'}>Portfolio</Button>
                        <Button as={Link} to={'/about'}>About</Button>
                        <Button as={Link} to={'/contact'}>Contact</Button>
                    </Box>
                    <MenuRoundedIcon sx={{display:{xs:'block', sm:'none'}}} onClick={toggleMobileMenu(true)}/>
                </Box>
                <Box 
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translateX(-50%) translateY(-50%)',
                        width: '80%'
                    }}
                >
                    {thumbnailURL && <img 
                        src={thumbnailURL} 
                        style={{
                            width:'65%',
                            maxWidth: "400px", 
                            borderRadius:'4px',
                            marginTop: '15px'
                        }}
                    />}
                    {title && <Typography variant="h4" sx={{
                        lineHeight: '2.2rem',
                        mb:"1.5rem",
                    }}>
                        {title}
                    </Typography>}
                    {isContactButton && <Button as={Link} to={'/contact'} primary="true">Get in Touch</Button> }
                </Box>
            </Box>
            </Fade>
            
        </>
    )
}