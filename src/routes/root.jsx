
import Hero from '../sections/Hero'
import ThumbnailGrid from '../sections/ThumbnailGrid'
import { CATEGORY_DATA } from '../projects'

export default function Root() {
    const homeTitle = "Helping create a beautiful store for your brand"
    return (
        <>
            <Hero title = { homeTitle } heroURL = '/assets/home-hero-background.jpg' isContactButton = { true } />
            <ThumbnailGrid projectData={CATEGORY_DATA['recent']} />
        </>
    )
}