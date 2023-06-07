import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SchoolOutlined } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText, Box, Drawer } from '@mui/material';

interface DrawerLinks {
    id: number;
    label: string;
    path: string;
    icon?: React.ReactNode;
}

interface DrawerProps {
    drawerOpen: boolean;
    toggleDrawer: (open: boolean) => () => void;
    drawerItems: DrawerLinks[];
}

const DashboardDrawerWidget: React.FC<DrawerProps> = ({ drawerOpen, toggleDrawer, drawerItems }) => {

    const navigate = useNavigate();

    return (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    {drawerItems.map((item) => (
                        <ListItem key={item.id} onClick={() => navigate(item.path)}>
                            <ListItemIcon>
                                {item.icon ?? <SchoolOutlined/>}  
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default DashboardDrawerWidget;