
import Hero from '../sections/Hero'
import RecentProjects from '../sections/RecentProjects'
import HomeHeroBackground from '../assets/home-hero-background.jpg'

export default function Root() {
    const homeTitle = "Helping create a beautiful store for your brand"
    return (
        <>
            <Hero title = { homeTitle } imageSource = {HomeHeroBackground} isContactButton = { true } />
            <RecentProjects />
        </>
    )
}