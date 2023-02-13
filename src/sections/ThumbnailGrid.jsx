import { Box, Typography, Grid } from '@mui/material';
import CoffeeKitThumbnail from '../assets/coffee-kit-thumbnail.jpg';
import { Link } from 'react-router-dom';

export default function ThumbnailGrid({projectData}){

    return (
        <>
            <Box sx={{padding: "0 1rem"}}>
                <Typography variant='h5' sx={{mb:"2rem"}}>Latest Work</Typography>
                <Grid container spacing={1}>
                    {projectData.projects.map((project) => (
                        <Grid item xs={12} md={4} key={project.id}>
                            <Link to={project.route}>
                                <img
                                    src={project.thumbnailURL}
                                    width='100%'
                                    style={{borderRadius: "4px"}}
                                />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}
