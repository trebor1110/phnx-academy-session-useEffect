import React, { useState, useEffect, FC } from 'react';
import { VitalSigns } from '../interface/VitalSigns';
import { MonitorHeartOutlined, BloodtypeOutlined, ThermostatAutoOutlined } from '@mui/icons-material/';
import { Box, Typography, Card, Grid } from '@mui/material';

interface BasicDashBoardWidgetProps {
    patientCode: string;
}

const BasicDashBoardWidget: FC<BasicDashBoardWidgetProps> = ({patientCode}) => {

    const [vitalSigns, setVitalSigns] = useState<VitalSigns>({
        heartRate: 0,
        bloodPressure: '0/0',
        temperature: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setVitalSigns({
                heartRate: Math.floor(Math.random() * 100),
                bloodPressure: `${Math.floor(Math.random() * 100)}/${Math.floor(Math.random() * 100)}`,
                temperature: Math.floor(Math.random() * 100),
            });
        }, 1000);

        return () => clearInterval(interval);
    });

    const vitalSignItems = [
        {
            label: 'Heart Rate',
            value: `${vitalSigns.heartRate} beats per minute`,
            IconComponent: MonitorHeartOutlined,
        },
        {
            label: 'Blood Pressure',
            value: `${vitalSigns.bloodPressure} mmHg`,
            IconComponent: BloodtypeOutlined,
        },
        {
            label: 'Temperature',
            value: `${vitalSigns.temperature} Fahrenheit`,
            IconComponent: ThermostatAutoOutlined,
        },
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.25rem', bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', maxWidth: '25rem', margin: '0 auto', marginBottom: '3rem' }}>
            <Card sx={{ marginBottom: '1.75rem', padding: '0.75rem 1.25rem', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', width: '100%', bgcolor: '#ff4757' }}>
                <Typography variant="h5" component="h2" align="center" sx={{ color: '#FFF', padding: '0.65rem', fontWeight:'bold'}}>
                    Patient Code : {patientCode}
                </Typography>
            </Card>
            <Grid container spacing={3} sx={{marginBottom:'0.5rem'}}>
                {vitalSignItems.map((item, index) => (
                    <Grid item xs={12} key={index}>
                        <Card sx={{  backgroundColor:'#fff', display: 'flex', alignItems: 'center', marginBottom: '0rem', padding: '0.75rem 1.5rem', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', width: '100%' }}>
                            <item.IconComponent sx={{ fontSize: '2rem', marginRight: '0.65rem', color: 'red' }} />
                            <Typography variant="body1" component="div" sx={{ color: '#1274AC', fontWeight: 'bold' }}>
                                {item.label}:
                                <span style={{ marginLeft: '0.5rem', color: 'darkgray', fontWeight: 'bold' }}>{item.value}</span>
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BasicDashBoardWidget;