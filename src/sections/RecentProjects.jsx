import { Box, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function RecentProjects(){

    return (
        <>
            <Typography variant='h5'>Latest Projects</Typography>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {RECENT_PROJECTS.map((item) => (
                    <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}`}
                        srcSet={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}
    const RECENT_PROJECTS = [
        {
            id: 'coffee-kit', 
        }
    ]