import Hero from '../sections/Hero'
import HomeHeroBackground from '../assets/home-hero-background.jpg'
import AvatarImage from '../assets/avatar-image.jpg'
import { Box, Typography } from '@mui/material'
import { Button } from '../StyledComponents'

export default function About(){
    return (
        <>
            <Hero title="A little about me." imageSource = {HomeHeroBackground}/>
            <img src={ AvatarImage } style={{
                borderRadius:"100%",
                width: '200px',
                }} />

            <Box sx={{mb:'2rem'}}>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc 
                    mi ipsum faucibus vitae aliquet. Proin libero nunc consequat interdum varius. Non curabitur gravida arcu ac tortor. A iaculis at erat 
                    pellentesque. Tincidunt dui ut ornare lectus sit amet. Interdum varius sit amet mattis. Consequat nisl vel pretium lectus. Purus semper eget 
                    duis at tellus at urna condimentum. Viverra mauris in aliquam sem fringilla ut. Sollicitudin ac orci phasellus egestas tellus rutrum tellus 
                    pellentesque eu.
                </Typography>
                <Typography variant="body1">
                    Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Sit amet nisl purus in mollis nunc. Quisque non tellus orci ac auctor
                    augue. Diam quam nulla porttitor massa id neque aliquam. Dolor sit amet consectetur adipiscing elit duis. Nisi vitae suscipit tellus mauris 
                    a diam maecenas. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Purus semper eget duis at tellus at urna. Vitae auctor 
                    eu augue ut lectus arcu bibendum at varius. Dolor magna eget est lorem ipsum dolor sit amet. Tellus mauris a diam maecenas sed enim ut. 
                    Lorem donec massa sapien faucibus et. Mauris cursus mattis molestie a iaculis at erat. Sit amet consectetur adipiscing elit.
                </Typography>
            </Box>
            
            <Button primary>Contact Me</Button>
        </>
    )
}