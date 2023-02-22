import Hero from '../sections/Hero';
import { useRef } from 'react';
import { Input, Button, TextArea } from '../StyledComponents';
import { Typography, Box } from '@mui/material';
import {useEffect, useState} from 'react';

export default function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    }

    const tablet = window.matchMedia('(min-width: 600px)');
    const desktop = window.matchMedia('(min-width: 900px)');
    const [isTablet, setIsTablet] = useState(tablet.matches);
    const [isDesktop, setIsDesktop] = useState(desktop.matches);
  
    useEffect(() => {
      const handler = e => setIsTablet(e.matches);
      tablet.addEventListener("change", handler);
      return () => tablet.removeEventListener("change", handler);
    });

    useEffect(() => {
        const handler = e => setIsDesktop(e.matches);
        desktop.addEventListener("change", handler);
        return () => desktop.removeEventListener("change", handler);
      });

    return (
        <Box sx={{mb:'2rem'}}>
            <Hero title="Reach out! Let's start something together." heroURL= {isDesktop ? '/assets/home-hero-background-desktop.jpg' : '/assets/home-hero-background.jpg'} />
            <form ref={form} onSubmit={sendEmail} id="contact-form" style={styles.form(isTablet)}>
                <Typography variant="body2">Name</Typography>
                <Input type="text" name="user_name" placeholder="Enter your name" />
                <Typography variant="body2" >Email</Typography>
                <Input type="text" name="user_email" placeholder="Enter your email adress" />
                <Typography variant="body2" >Message</Typography>
                <TextArea name="message" rows="8" placeholder="Example Text"></TextArea>
                <Button primary="true" type="submit" form="contact-form" value="Submit" style={{marginTop:'0.5rem'}}>Submit</Button>
            </form>
        </Box>
    )
}
const styles = {
    form: isTablet => ({
        width: isTablet ? '70%' : '95%',
        maxWidth: '700px',
        textAlign: 'left',
        margin: 'auto'
    })
}