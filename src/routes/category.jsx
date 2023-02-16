import Hero from '../sections/Hero'
import { useLoaderData } from "react-router-dom"
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
            <Hero title={heroTitle} heroURL='/assets/home-hero-background.jpg'/>
            <ThumbnailGrid projectData={categoryData}/>
        </>
    )
}

