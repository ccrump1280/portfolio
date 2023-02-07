import { Button } from '../StyledComponents';
import { Box, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function Hero( {title, imageSource, isContactButton} ) {
    let contactButton;
    if (isContactButton) {
        contactButton = <Button primary>Get in Touch</Button>;
    }else {
        contactButton = null;
    }
    return (
        <>
            <Box sx ={{
                backgroundImage: `linear-gradient(180deg, rgba(34,34,34,0.65) 0%, rgba(34,34,34,1) 100%), url(${imageSource})`,
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
                    
                }}>
                    <Typography variant="h5">Connor Crump</Typography>
                    <Box sx={{display:{xs:'none', md:'flex'}}}>
                        <Button>Portfolio</Button>
                        <Button>About</Button>
                        <Button>Contact</Button>
                    </Box>
                    <MenuRoundedIcon sx={{display:{xs:'block', md:'none'}}}/>
                </Box>
                <Box sx={{mt:'3rem'}}>
                    <Typography variant="h4" sx={{
                        lineHeight: '2.2rem',
                        mb:"1.5rem",
                    }}>
                        {title}
                    </Typography>
                    {contactButton}
                </Box>
            </Box>
        </>
    )
}