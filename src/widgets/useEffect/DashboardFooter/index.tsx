import React, {FC} from 'react';
import {Typography} from '@mui/material';

const DashboardFooterWidget: FC = () => {

    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center', position: 'fixed', bottom: '0', left: '0', right: '0' }}>
            <Typography variant="subtitle2">Phoenix Academy | v1.0.0.0 | ISAP DEC IMC Team</Typography>
        </footer>
    );

};

export default DashboardFooterWidget;
