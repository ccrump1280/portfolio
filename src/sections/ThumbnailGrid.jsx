import { Box, Typography, Grid, Fade } from '@mui/material';
import { Link } from 'react-router-dom';
import { PROJECT_DATA } from '../projects';

export default function ThumbnailGrid({category, exclude}){

    return (
        <>
            <Box 
                sx={{
                    padding: "0 2rem",
                    mb:'2rem'
            }}
            >
                <Typography variant='h5'>{category.title}</Typography>
                <Grid 
                    container 
                    spacing={2} 
                    sx={{
                        width:{xs:'100%', sm:'90%'},
                        maxWidth: '1000px',
                        margin: 'auto'
                    }}
                >
                    {category.projects.map((projectId) => {
                        if (projectId == exclude){
                            return;
                        }
                        const project = PROJECT_DATA[projectId];
                        return (
                            <Grid item xs={12} sm={4} key={projectId}>
                                <Link to={`/project/${projectId}`}>
                                    <Fade in={true} timeout={1000}>
                                        <img
                                            src={project.thumbnailURL}
                                            width='100%'
                                            style={{borderRadius: "4px"}}
                                        />
                                    </Fade>
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </>
    )
}
