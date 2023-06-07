import React, {FC} from 'react';
import SimpleDashboardWidget from '../../widgets/useEffect/SimpleDashboard';
import DashboardHeaderWidget from '../../widgets/useEffect/DashboardHeader';
import DashboardFooterWidget from '../../widgets/DashboardFooter';
import NotesWidget from '../../widgets/Notes';
import {Box} from '@mui/material';

const BasicHealthDashboardPage: FC = () => {

    const devNotes = [
        'useEffect is a hook that allows you to perform side effects, such as data fetching, subscriptions or connections from a function component.',
        'This hook runs after the component render is committed to the screen. It "delays" the code as the last step.',		
        'This sample default implementation is a bad practice because it re-renders every time the component changes.',
        'This sample will simulate an API call that returns every second. useEffect is used to setup the "API call" after everything is rendered. [See the code file SimpleDashBoardWidget]'
    ];

    const footerTxt = 'ISAP DEC IMC Team | Phoenix Academy | v1.0.0.1';

    return (
        <Box>
            <Box sx={{ position: 'fixed', left: '0', right: '0', top: '0' }}>
                <DashboardHeaderWidget />
            </Box>
            
            <div style={{ paddingTop: '100px', paddingBottom: '50px' }}>
                <SimpleDashboardWidget />
                <NotesWidget title="Developer Notes" bulletPoints={devNotes}/>
            </div>

            <DashboardFooterWidget footerText={footerTxt} />
        </Box>
    );
};

export default BasicHealthDashboardPage;
