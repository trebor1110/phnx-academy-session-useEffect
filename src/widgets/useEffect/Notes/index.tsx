import React, {FC} from 'react';
import { CheckCircleOutline } from '@mui/icons-material';
import {AppBar, Box, Toolbar, IconButton, Typography} from '@mui/material';
import styles from './notes.module.css';

interface NotesProps {
    notes: string[];
}

const NotesWidget: FC<NotesProps> = ({ notes }) => {

    return (
        <Box display="flex" 
            flexDirection= "column" 
            padding="10px" 
            margin="20px auto" 
            borderRadius="15px" 
            boxShadow="0px 2px 4px #0000001a" 
            maxWidth="100%" 
            sx={{backgroundColor:'#ffffffcc', backdropFilter:'blur(10px)'}}>
            
            <Typography variant="h4" color="primary" sx={{margin:'10px 20px'}}>Developer Notes</Typography>
            
            <ul>
                {notes.map((note, index) => (
                    <li key={index} className={styles.noteItem}>
                        <CheckCircleOutline className={styles.noteIcon} /> <Typography fontStyle="italic">{note}</Typography>
                    </li>
                ))}
            </ul>

        </Box>
    );

};

export default NotesWidget;
