
import Hero from '../sections/Hero'
import ThumbnailGrid from '../sections/ThumbnailGrid'
import HomeHeroBackground from '/public/assets/home-hero-background.jpg'
import { CATEGORY_DATA } from '../projects'

export default function Root() {
    const homeTitle = "Helping create a beautiful store for your brand"
    return (
        <>
            <Hero title = { homeTitle } heroURL = {HomeHeroBackground} isContactButton = { true } />
            <ThumbnailGrid projectData={CATEGORY_DATA['recent']} />
        </>
    )
}