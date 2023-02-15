import { PROJECT_DATA } from '../projects';
import { useParams } from 'react-router-dom';
import Hero from '../sections/Hero'
import { Typography, Box } from '@mui/material';

export async function loader({params}) {
    return params.projectId;
}

export default function Project() {
    const { projectId } = useParams();
    const projectData = PROJECT_DATA[projectId];

    return (
        <>
            <Hero thumbnailURL={projectData.thumbnailURL} heroURL={projectData.heroURL}/>
            <Typography variant="h3">{projectData.title}</Typography>
            <Box>
                {projectData.content}
            </Box>
        </>
    )
}