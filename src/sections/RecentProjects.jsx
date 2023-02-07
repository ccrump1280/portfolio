import { Box, Typography, Grid } from '@mui/material';
import CoffeeKitThumbnail from '../assets/coffee-kit-thumbnail.jpg'

export default function RecentProjects(){

    return (
        <Box sx={{padding: "0 1rem"}}>
            <Typography variant='h5' sx={{mb:"2rem"}}>Latest Projects</Typography>
            <Grid container spacing={1}>
                {RECENT_PROJECTS.map((item) => (
                    <Grid item xs={12} md={4}>
                        <img
                            src={item.img}
                            width='100%'
                            style={{borderRadius: "4px"}}
                        />
                    </Grid>
                ))}
            </ Grid>
        </ Box>
    )
}
    const RECENT_PROJECTS = [
        {
            id: 'coffee-kit',
            img: CoffeeKitThumbnail,
        }
    ]