import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { AppBar, Box, Toolbar, IconButton, Typography, Avatar, Button } from '@mui/material';
import DashboardDrawerWidget from '../DashboardDrawer';

interface Link {
    id: number;
    label: string;
    path: string;
    icon?: React.ReactNode;
}

interface DashboardHeaderWidgetProps {
    links: Link[];
    userImg: string;
    headerTitle?: string;
    drawerLinks: Link[];  
}

const DashboardHeaderWidget: FC<DashboardHeaderWidgetProps> = ({links, userImg, headerTitle, drawerLinks}) => {

    const navigate = useNavigate();

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
                        {headerTitle ?? 'Dashboard'}
                    </Typography>
                    {links.map((link) => (
                        <Button color="inherit" onClick={() => navigate(link.path)} key={link.id}>
                            {link.label}
                        </Button>
                    ))}
                    <IconButton size="medium" onClick={() => navigate('/')}> 
                        <Avatar alt="User Image" src={userImg} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <DashboardDrawerWidget 
                drawerOpen={drawerOpen} 
                toggleDrawer={toggleDrawer}
                drawerItems={drawerLinks}
            />
        </Box>
    );
};

export default DashboardHeaderWidget;