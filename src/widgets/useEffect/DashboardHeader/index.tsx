import React, {FC, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {  HomeOutlined, Menu, SchoolOutlined } from '@mui/icons-material';
import {AppBar, Box, Toolbar, IconButton, Typography, Avatar, Button, List, ListItem, ListItemIcon, ListItemText, Drawer} from '@mui/material';

const DashboardHeaderWidget: FC = () => {

    const navigate = useNavigate();
    const userImg = 'https://mui.com/static/images/avatar/2.jpg';

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="sticky" sx={{ backgroundColor: '#333'}}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Vital Signs Dashboard
                    </Typography>
                    <Button color="inherit" onClick={() => navigate('/basic')}>
                        BASIC
                    </Button>
                    <Button color="inherit" onClick={() => navigate('/on-demand')}>
                        ON DEMAND
                    </Button>
                    <Button color="inherit" onClick={() => navigate('/chat')}>
                        CHAT
                    </Button>
                    <IconButton size="medium" onClick={() => navigate('/academy')}> 
                        <Avatar alt="User Image" src={userImg} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                    <List>
                        {['HOME', 'ACADEMY'].map((text, index) => (
                            <ListItem  key={text} onClick={() => navigate(text.toLowerCase())}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <HomeOutlined /> : <SchoolOutlined />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
    
};

export default DashboardHeaderWidget;
