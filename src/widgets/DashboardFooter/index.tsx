import React from 'react';
import { Typography, Box } from '@mui/material';

interface DashboardFooterWidgetProps {
    footerText: string;
}

const DashboardFooterWidget: React.FC<DashboardFooterWidgetProps> = ({ footerText }) => {
    return (
        <Box sx={{
            backgroundColor: '#333',
            color: '#fff',
            padding: '20px',
            textAlign: 'center',
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
        }}>
            <Typography variant="subtitle2">
                {footerText}
            </Typography>
        </Box>
    );
};

export default DashboardFooterWidget;
