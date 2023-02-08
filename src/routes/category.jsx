import Hero from '../sections/Hero'
import { useLoaderData } from "react-router-dom"
import HomeHeroBackground from "../assets/home-hero-background.jpg"
import { CATEGORY_DATA } from '../projects'
import ThumbnailGrid from '../sections/ThumbnailGrid'

export async function loader({ params }) {
    return CATEGORY_DATA[params.categoryId];
}

export default function Category() {
    const categoryData = useLoaderData();
    const heroTitle = `All ${categoryData.title} Projects`;
    return (
        <>
            <Hero title={heroTitle} imageSource={HomeHeroBackground}/>
            <ThumbnailGrid projectData={categoryData}/>
        </>
    )
}

