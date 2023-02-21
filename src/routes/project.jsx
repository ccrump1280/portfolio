import { PROJECT_DATA, CATEGORY_DATA } from '../projects';
import { useParams } from 'react-router-dom';
import Hero from '../sections/Hero'
import { Typography, Box } from '@mui/material';
import ThumbnailGrid from '../sections/ThumbnailGrid';

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
            <Box 
                sx={{
                    margin: '30px auto',
                    width: {xs:'100%', sm:'65%'}
                }}
            >
                <Typography variant="body1">{projectData.content.description}</Typography>
                {projectData.content.sections.map((section) => (
                    <Box key={section.id}>
                        <Typography variant="h5" sx={{color: '#3EB489'}}>{section.header}</Typography>
                        <Typography variant="body1">{section.body}</Typography>
                        {section.imageURLs && 
                            <Box id={`${section.id}-images`}>
                                {section.imageURLs.map((imageURL)=>(
                                    <img 
                                        src={imageURL} 
                                        style={{
                                            borderRadius: '4px',
                                            maxWidth: '350px',
                                            width: '90%'
                                        }}
                                        key={imageURL}
                                    />
                                ))}
                            </Box>
                        }
                    </Box>
                ))}
            </Box>
            <ThumbnailGrid category={CATEGORY_DATA['recent']}/>
        </>
    )
}