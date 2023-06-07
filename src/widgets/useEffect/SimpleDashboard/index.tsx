import React, { useState, useEffect, FC } from 'react';
import { VitalSigns } from '../interface/VitalSigns';
import { MonitorHeartOutlined, BloodtypeOutlined, ThermostatAutoOutlined } from '@mui/icons-material/';
import styles  from './baseDashboard.module.css';

const SimpleDashBoardWidget: FC = () => {

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

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>Patient Code : UT2LP0</h2>
            </div>
            <div className={styles.vitalSignContainer}>
                <MonitorHeartOutlined className={styles.vitalSignIcon} />
                <div>
                    <strong className={styles.vitalSignLabel}>Heart Rate:</strong>
                    <span className={styles.vitalSignResult}>{vitalSigns.heartRate} beats per minute</span>
                </div>
            </div>
            <div className={styles.vitalSignContainer}>
                <BloodtypeOutlined className={styles.vitalSignIcon} />
                <div>
                    <strong className={styles.vitalSignLabel}>Blood Pressure:</strong>
                    <span className={styles.vitalSignResult}>{vitalSigns.bloodPressure} mmHg</span>
                </div>
            </div>
            <div className={styles.vitalSignContainer}>
                <ThermostatAutoOutlined className={styles.vitalSignIcon} />
                <div>
                    <strong className={styles.vitalSignLabel}>Temperature:</strong>
                    <span className={styles.vitalSignResult}>{vitalSigns.temperature} Fahrenheit</span>
                </div>
            </div>
        </div>
    );
};

export default SimpleDashBoardWidget;