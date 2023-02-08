import { CATEGORY_DATA, PROJECT_DATA } from '../projects'
import { useLoaderData } from "react-router-dom"

export async function loader({params}) {
    return params;
}

export default function Project() {
    const params = useLoaderData();
    const categoryData = CATEGORY_DATA[params.categoryId];
    const project = PROJECT_DATA[params.projectId];

    return (
        <>
            <Hero title={project.title} />
        </>
    )
}