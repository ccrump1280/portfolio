import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { StyledLink } from '../StyledComponents';
import CloseIcon from '@mui/icons-material/Close';

export default function MobileMenu( {isMobileMenuOpen, toggleDrawer} ) {

    return (
        <>
            <Drawer 
                anchor='right'
                open={isMobileMenuOpen}
                onClose={toggleDrawer(false)}    
            >
                <Box
                    sx={{
                        width:250,
                        height: '100vh',
                        backgroundColor: '#222222',
                        position: 'relative'
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}    
                >
                    <CloseIcon 
                        sx={{
                            color:'white',
                            position: 'absolute',
                            top: '10px',
                            right: '10px'
                        }}
                        onClick={toggleDrawer(false)}
                    />
                    <List>
                        <ListItem disablePadding>
                            <StyledLink to={'/'}>
                                <ListItemButton>
                                    <ListItemText primary="Portfolio"/>
                                </ListItemButton>
                            </StyledLink>
                        </ListItem>
                        <ListItem disablePadding>
                            <StyledLink to={'/about'}>
                                <ListItemButton>
                                    <ListItemText primary="About"/>
                                </ListItemButton>
                            </StyledLink>
                        </ListItem>
                        <ListItem disablePadding>
                            <StyledLink to={'/contact'}>
                                <ListItemButton>
                                    <ListItemText primary="Contact"/>
                                </ListItemButton>
                            </StyledLink>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}