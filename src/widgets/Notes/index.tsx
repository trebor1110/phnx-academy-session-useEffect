import React, {FC} from 'react';
import { CheckCircleOutline } from '@mui/icons-material';
import {Box, Typography} from '@mui/material';
import styles from './notes.module.css';

interface NotesProps {
    title?: string;
    bulletPoints: string[];
}

const NotesWidget: FC<NotesProps> = ({ title, bulletPoints }) => {

    return (
        <Box display="flex" 
            flexDirection= "column" 
            padding="10px" 
            margin="20px auto" 
            borderRadius="15px" 
            boxShadow="0px 2px 4px #0000001a" 
            maxWidth="100%" 
            sx={{backgroundColor:'#ffffffcc', backdropFilter:'blur(10px)'}}>
            
            <Typography variant="h4" color="primary" sx={{margin:'10px 20px'}}>{title ?? 'Notes'}</Typography>
            
            <ul>
                {bulletPoints.map((bulletPoint, index) => (
                    <li key={index} className={styles.noteItem}>
                        <CheckCircleOutline className={styles.noteIcon} /> <Typography fontStyle="italic">{bulletPoint}</Typography>
                    </li>
                ))}
            </ul>

        </Box>
    );

};

export default NotesWidget;
