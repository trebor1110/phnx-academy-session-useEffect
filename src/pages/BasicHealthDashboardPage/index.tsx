import React, { FC } from 'react';
import { Box } from '@mui/material';
import BasicDashBoardWidget from '../../widgets/useEffect/BasicDashboard';
import NotesWidget from '../../widgets/Notes';

const BasicHealthDashboardPage: FC = () => {

    const devNotes = [
        'useEffect is a hook that allows you to perform side effects, such as data fetching, subscriptions or connections from a function component.',
        'This hook runs after the component render is committed to the screen. It "delays" the code as the last step.',		
        'This sample default implementation is a bad practice because it re-renders every time the component changes.',
        'This sample will simulate an API call that returns every second. useEffect is used to setup the "API call" after everything is rendered. [See the code file SimpleDashBoardWidget]'
    ];

    return (
        <Box sx={{ paddingTop: '6.25rem', paddingBottom: '3.125rem' }}>
            <BasicDashBoardWidget patientCode="UT2LP0" />
            <NotesWidget title="Basic Concepts Notes" bulletPoints={devNotes}/>
        </Box>
    );
};

export default BasicHealthDashboardPage;
