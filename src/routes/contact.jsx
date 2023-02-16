import Hero from '../sections/Hero';
import { useRef } from 'react';
import { Input, Button, TextArea } from '../StyledComponents';
import { Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';

export default function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    }
    const mediaMatch = window.matchMedia('(min-width: 600px)');
    const [matches, setMatches] = useState(mediaMatch.matches);
  
    useEffect(() => {
      const handler = e => setMatches(e.matches);
      mediaMatch.addEventListener("change", handler);
      return () => mediaMatch.removeEventListener("change", handler);
    });

    return (
        <>
            <Hero title="Reach out! Let's start something together." heroURL= '/public/assets/home-hero-background.jpg' />
            <form ref={form} onSubmit={sendEmail} id="contact-form" style={styles.form(matches)}>
                <Typography variant="body2">Name</Typography>
                <Input type="text" name="user_name" placeholder="Enter your name" />
                <Typography variant="body2" >Email</Typography>
                <Input type="text" name="user_email" placeholder="Enter your email adress" />
                <Typography variant="body2" >Message</Typography>
                <TextArea name="message" rows="8" placeholder="Example Text"></TextArea>
                <Button primary="true" type="submit" form="contact-form" value="Submit" style={{marginTop:'0.5rem'}}>Submit</Button>
            </form>
        </>
    )
}
const styles = {
    form: isMatch => ({
        width: isMatch ? '70%' : '95%',
        textAlign: 'left',
        margin: 'auto'
    })
}