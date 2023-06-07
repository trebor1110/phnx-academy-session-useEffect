import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { HomeOutlined } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import DashboardHeaderWidget from '../../widgets/DashboardHeader';
import DashboardFooterWidget from '../../widgets/DashboardFooter';

const HealthDashboardLayout = () => {

    const theme = useTheme();
    const footerTxt = 'ISAP DEC IMC Team | Phoenix Academy | v1.0.0.1';
    const drawerLinks = [
        {id: 0, label: 'Academy', path: '/', icon: <HomeOutlined />},
        {id: 1, label: 'React Hooks', path: '/academy'}
    ];
    const navigationLinks = [
        {id: 0, label: 'Basic', path: '/academy/use-effect/basicHealthDashboard'},
        {id: 1, label: 'On Demand', path: '/academy/use-effect/onDemandHealthDashboard'},
        {id: 2, label: 'Chat', path: '/academy/use-effect/chatHealthDashboard'}
    ];

    return (
        <>
            <Container maxWidth="lg" sx={{ marginTop: '1.5rem' }} disableGutters={useMediaQuery(theme.breakpoints.down('md'))}>
                <Box>
                    <Box sx={{ position: 'fixed', left: '0', right: '0', top: '0', zIndex: 1 }}>
                        <DashboardHeaderWidget 
                            links={navigationLinks} 
                            userImg="https://mui.com/static/images/avatar/2.jpg" 
                            headerTitle="Health Dashboard"
                            drawerLinks={drawerLinks}
                        />
                    </Box>

                    <Box sx={{ marginTop: '0.5rem' }}> 
                        <Outlet />
                    </Box>
                  
                    <DashboardFooterWidget footerText={footerTxt} />
                </Box>
            </Container>
        </>
    );
};

export default HealthDashboardLayout;
