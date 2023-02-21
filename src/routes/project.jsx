import { PROJECT_DATA, CATEGORY_DATA } from '../projects';
import { useParams } from 'react-router-dom';
import Hero from '../sections/Hero'
import { Typography, Box } from '@mui/material';
import ThumbnailGrid from '../sections/ThumbnailGrid';
import {useEffect, useState} from 'react';

export async function loader({params}) {
    return params.projectId;
}

export default function Project() {
    const { projectId } = useParams();
    const projectData = PROJECT_DATA[projectId];
    const sm = window.matchMedia('(min-width: 600px)');
    const [smMatches, setSmMatches] = useState(sm.matches);

    useEffect(() => {
        const handler = e => setSmMatches(e.matches);
        sm.addEventListener("change", handler);
        return () => sm.removeEventListener("change", handler);
    });

    return (
        <>
            <Hero thumbnailURL={projectData.thumbnailURL} heroURL={projectData.heroURL}/>
            <Typography variant="h3">{projectData.title}</Typography>
            <Box 
                sx={{
                    margin: '30px auto',
                    width: {xs:'100%', sm:'65%'},
                    maxWidth: '1000px'
                }}
            >
                <Typography variant="body1">{projectData.content.description}</Typography>
                {projectData.content.sections.map((section) => {
                    let imageURLs;
                    if (smMatches || !section.imageURLs.mobile) {
                        imageURLs = section.imageURLs.desktop;
                    }else {
                        imageURLs = section.imageURLs.mobile;
                    }
                    return (
                        <Box key={section.id}>
                            <Typography variant="h5" sx={{color: '#3EB489', mt: '2rem'}}>{section.header}</Typography>
                            <Typography variant="body1">{section.body}</Typography>
                            {imageURLs.length > 1 && 
                                <Box id={`${section.id}-images`}>
                                    {imageURLs.map((imageURL)=>(
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
                            {imageURLs.length == 1 && 
                                <img 
                                src={imageURLs[0]} 
                                style={{
                                    borderRadius: '4px',
                                    width: '90%'
                                }}
                            />
                            }
                        </Box>
                    )
                })}
            </Box>
            <ThumbnailGrid category={CATEGORY_DATA['recent']} exclude={projectId} />
        </>
    )
}