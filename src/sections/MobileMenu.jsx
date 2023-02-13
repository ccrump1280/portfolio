import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { StyledLink, Button } from '../StyledComponents';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

export default function MobileMenu( {isMobileMenuOpen, toggleMobileMenu} ) {

    const [tabOpen, setTabOpen] = useState(true);

    const handleClick = () => {
        setTabOpen(!tabOpen);
    }
    return (
        <>
            <Drawer 
                anchor='right'
                open={isMobileMenuOpen}
                onClose={toggleMobileMenu(false)}    
            >
                <Box
                    sx={{
                        width:250,
                        height: '100vh',
                        backgroundColor: '#222222',
                        position: 'relative',
                        paddingTop: '15px'
                    }}
                    role="presentation"
                    onKeyDown={toggleMobileMenu(false)}    
                >
                    <CloseIcon 
                        sx={{
                            color:'white',
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            zIndex: '1'
                        }}
                        
                        onClick={toggleMobileMenu(false)}
                    />
                    <List sx={{color: '#3EB489'}}>
                        <ListItem disablePadding  onClick={handleClick}>
                            <Button>
                                <ListItemText primary="Portfolio"/>
                            </Button>
                            {tabOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={tabOpen} timeout="auto" unmountOnExit>
                            <List disablePadding>
                                <ListItem 
                                    sx={{pl: '15px'}} 
                                    onClick={toggleMobileMenu(false)}
                                >
                                    <StyledLink to={'/category/shopify'}>
                                        <ListItemText primary="Shopify Stores"/>
                                    </StyledLink>
                                </ListItem>
                                <ListItem 
                                    sx={{pl: '15px'}}
                                    onClick={toggleMobileMenu(false)}
                                >
                                    <StyledLink to={'/category/react'}>
                                        <ListItemText primary="React Apps"/>
                                    </StyledLink>
                                </ListItem>
                                <ListItem 
                                    sx={{pl: '15px'}}
                                    onClick={toggleMobileMenu(false)}
                                >
                                    <StyledLink to={'/category/frontend'}>
                                        <ListItemText primary="Front End Development"/>
                                    </StyledLink>
                                </ListItem>        
                            </List>
                        </Collapse>
                        <ListItem disablePadding onClick={toggleMobileMenu(false)}>
                            <StyledLink to={'/about'}>
                                <ListItemText primary="About"/>
                            </StyledLink>
                        </ListItem>
                        <ListItem disablePadding onClick={toggleMobileMenu(false)}>
                            <StyledLink to={'/contact'}>
                                <ListItemText primary="Contact"/>
                            </StyledLink>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}