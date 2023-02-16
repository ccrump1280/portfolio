import { Box, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { PROJECT_DATA } from '../projects';

export default function ThumbnailGrid({projectData}){

    return (
        <>
            <Box sx={{padding: "0 2rem"}}>
                <Typography variant='h5' sx={{mb:"2rem"}}>Latest Work</Typography>
                <Grid container spacing={2}>
                    {projectData.projects.map((projectId) => {
                        const project = PROJECT_DATA[projectId];
                        return (
                            <Grid item xs={12} sm={4} key={projectId}>
                                <Link to={`/project/${projectId}`}>
                                    <img
                                        src={project.thumbnailURL}
                                        width='100%'
                                        style={{borderRadius: "4px"}}
                                    />
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </>
    )
}
