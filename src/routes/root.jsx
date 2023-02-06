
import Hero from '../sections/Hero'
import RecentProjects from '../sections/RecentProjects'
import HomeHeroBackground from '../assets/HomeHeroBackground.jpg'

export default function Root() {
    const homeTitle = "Helping you create a beautiful store for your brand"
    return (
        <>
            <Hero title = { homeTitle } imageSource = {HomeHeroBackground} />
            <RecentProjects />
        </>
    )
}