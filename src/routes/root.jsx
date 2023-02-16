
import Hero from '../sections/Hero';
import ThumbnailGrid from '../sections/ThumbnailGrid';
import { CATEGORY_DATA } from '../projects';
import {useEffect, useState} from 'react';
import { Box } from '@mui/material';
import { Button } from '../StyledComponents';

export default function Root() {
    const homeTitle = "Helping create a beautiful store for your brand"
    const mediaMatch = window.matchMedia('(min-width: 900px)');
    const [matches, setMatches] = useState(mediaMatch.matches);
    const [category, setCategory] = useState('recent');
  
    useEffect(() => {
      const handler = e => setMatches(e.matches);
      mediaMatch.addEventListener("change", handler);
      return () => mediaMatch.removeEventListener("change", handler);
    });
    return (
        <>
            <Hero title = { homeTitle } heroURL ={matches ? '/assets/home-hero-background-desktop.jpg' : '/assets/home-hero-background.jpg'} isContactButton = { true } />
            <Box 
                sx={{
                    display: {xs:'none', sm:'flex'},
                    margin: '2rem auto',
                    width: '90%',
                    maxWidth: '900px'
                }}
            > 
                <Button primary='true' onClick={()=>setCategory('shopify')}>Shopify Stores</Button>
                <Button primary='true' onClick={()=>setCategory('react')}>React Apps & Dynamic JS</Button>
                <Button primary='true' onClick={()=>setCategory('frontend')}>Front End Development</Button>
                <Button primary='true' onClick={()=>setCategory('recent')}>Recent Projects</Button>
            </Box>
            <ThumbnailGrid projectData={CATEGORY_DATA[category]} />
        </>
    )
}