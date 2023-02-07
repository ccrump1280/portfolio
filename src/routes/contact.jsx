import Hero from '../sections/Hero'
import { useRef } from 'react'
import HomeHeroBackground from '../assets/home-hero-background.jpg'
import { Input, Button, TextArea } from '../StyledComponents'
import { Typography } from '@mui/material'

export default function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <Hero title="Reach out! Let's start something together." imageSource= { HomeHeroBackground } />
            <form ref={form} onSubmit={sendEmail} id="contact-form" style={{
                padding: "1rem",
                textAlign: "left"
            }}>
                <Typography variant="body1" sx={{margin: "0"}}>Name</Typography>
                <Input type="text" name="user_name" placeholder="Enter your name" />
                <Typography variant="body1" sx={{margin: "0"}} >Email</Typography>
                <Input type="text" name="user_email" placeholder="Enter your email adress" />
                <Typography variant="body1" sx={{margin: "0"}} >Message</Typography>
                <TextArea name="message" rows="8" placeholder="Example Text"></TextArea>
            </form>
            <Button primary type="submit" form="contact-form" value="Submit">Submit</Button>
        </>
    )
}