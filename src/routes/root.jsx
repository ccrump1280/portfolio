
import Hero from '../sections/Hero';
import ThumbnailGrid from '../sections/ThumbnailGrid';
import { CATEGORY_DATA } from '../projects';
import {useEffect, useState} from 'react';

export default function Root() {
    const homeTitle = "Helping create a beautiful store for your brand"
    const mediaMatch = window.matchMedia('(min-width: 900px)');
    const [matches, setMatches] = useState(mediaMatch.matches);
  
    useEffect(() => {
      const handler = e => setMatches(e.matches);
      mediaMatch.addEventListener("change", handler);
      return () => mediaMatch.removeEventListener("change", handler);
    });
    return (
        <>
            <Hero title = { homeTitle } heroURL ={matches ? '/assets/home-hero-background-desktop.jpg' : '/assets/home-hero-background.jpg'} isContactButton = { true } />
            <ThumbnailGrid projectData={CATEGORY_DATA['recent']} />
        </>
    )
}