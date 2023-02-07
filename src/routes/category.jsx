import Hero from '../sections/Hero'
import { useLoaderData } from "react-router-dom"
import HomeHeroBackground from "../assets/home-hero-background.jpg"


export async function loader({ params }) {
    return ALL_PROJECTS[`${params.categoryId}`];
}

export default function Category() {
    const category = useLoaderData();
    const categoryTitle = `All ${category.title} Projects`;
    return (
        <>
            <Hero title={categoryTitle} imageSource={HomeHeroBackground}/>
        </>
    )
}

const ALL_PROJECTS = {
    react: {
        title: "React App",
        projects: {
            
        }
    },
    shopify: {
        title: "Shopify Store"
    }
}