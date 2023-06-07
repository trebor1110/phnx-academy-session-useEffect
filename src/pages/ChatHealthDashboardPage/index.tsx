import React, { FC } from 'react';
import { Box, Grid } from '@mui/material';
import BasicDashBoardWidget from '../../widgets/useEffect/BasicDashboard';
import NotesWidget from '../../widgets/Notes';

const ChatHealthDashboardPage: FC = () => {

    const devNotes = [
        'A cleanUp function runs whenever the component dismounts. It should either reset, unsubscribe, abort or close. The purpose is to make sure there will be no component leftovers.',
        'Re-mounting is a feature of React.js during DEV phase. It will try to mount each component twice to make it obvious for developers if there will be leftovers/side effect. This re-mounting can be disabled by developers and will never happen on PROD.',
        'This sample widget simulate the connection to a Chat service on mount. You will see the state of the connection by opening the Developer Tool Console.',
        'The initial code shows the bad practice of NOT using a cleanUp function. Open up the Developer Tools and you will see that "Connecting" is being logged twice.',
        'To fix the code above go to the code file and uncomment the cleanUp function [Line 43]. After the edit, refresh the page and you will see that the "Disconnected" will be called. [See the code file ChatDashboard.tsx]'
    ];

    return (
        <Box sx={{ paddingTop: '6.25rem', paddingBottom: '3.125rem' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <BasicDashBoardWidget patientCode="UT2LP0" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <NotesWidget title="Usage Reminders" bulletPoints={devNotes} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ChatHealthDashboardPage;
