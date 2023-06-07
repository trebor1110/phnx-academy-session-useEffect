import React, { FC } from 'react';
import { Box , Grid} from '@mui/material';
import NotesWidget from '../../widgets/Notes';
import OnDemandDashBoardWidgetProps from '../../widgets/useEffect/OnDemandDashboard';

const OnDemandHealthDashboardPage: FC = () => {

    const devNotes = [
        'This sample uses a parameterized useEffect hook. [Toggle the Refresh Button to see the effect.]',
        'Users can supply either an empty array parameter[] or a dependency array.',
        'The empty array parameter[] means that the useEffect function will only run on mount.',
        'This widget sample showcase the use of a dependency array [isRefreshing]. This will run not only on mount but also every time there is an update on the variable isRefreshing. [See the code file OnDemandDashboard.tsx]'
    ];

    return (
        <Box sx={{ paddingTop: '6.25rem', paddingBottom: '3.125rem' }}>
            <Grid container spacing={1}>
                <Grid item sm={6} xs={12}>
                    <OnDemandDashBoardWidgetProps patientCode= "UT3WUF" />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <OnDemandDashBoardWidgetProps patientCode="UT2LP0"/>
                </Grid>
            </Grid>
            <NotesWidget title="Paremeter Notes" bulletPoints={devNotes}/>
        </Box>
    );
};

export default OnDemandHealthDashboardPage;