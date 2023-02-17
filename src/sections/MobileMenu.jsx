import { Drawer, Box, List, ListItem, ListItemText } from '@mui/material';
import { Button } from '../StyledComponents';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useContext } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../main';

export default function MobileMenu( {isMobileMenuOpen, toggleMobileMenu} ) {
    const { category, setCategory } = useContext(CategoryContext);
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
                        boxSizing: 'border-box'
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
                        <ListItem onClick={handleClick}>
                            <Button>
                                <ListItemText primary="Portfolio"/>
                            </Button>
                            {tabOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={tabOpen} timeout="auto" unmountOnExit>
                            <List sx={{ml:"24px"}}>
                                <ListItem  
                                    onClick={toggleMobileMenu(false)}
                                >
                                    <Button as={Link} to={'/'}>
                                        <ListItemText primary="Shopify Stores" onClick={() => setCategory('shopify')}/>
                                    </Button>
                                </ListItem>
                                <ListItem 
                                    onClick={toggleMobileMenu(false)}
                                >
                                    <Button as={Link} to={'/'}>
                                        <ListItemText primary="React Apps" onClick={() => setCategory('react')} />
                                    </Button>
                                </ListItem>
                                <ListItem 
                                    onClick={toggleMobileMenu(false)}
                                >
                                    <Button as={Link} to={'/'}>
                                        <ListItemText primary="Front End Development" onClick={() => setCategory('frontend')}/>
                                    </Button>
                                </ListItem>
                                <ListItem 
                                    onClick={toggleMobileMenu(false)}
                                >
                                    <Button as={Link} to={'/'}>
                                        <ListItemText primary="Recent Projects" onClick={() => setCategory('recent')}/>
                                    </Button>
                                </ListItem>        
                            </List>
                        </Collapse>
                        <ListItem onClick={toggleMobileMenu(false)}>
                            <Button as={Link} to={'/about'}>
                                <ListItemText primary="About"/>
                            </Button>
                        </ListItem>
                        <ListItem onClick={toggleMobileMenu(false)}>
                            <Button as={Link} to={'/contact'}>
                                <ListItemText primary="Contact"/>
                            </Button>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}