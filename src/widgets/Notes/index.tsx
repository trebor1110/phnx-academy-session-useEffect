import React, {FC} from 'react';
import { CheckCircleOutline } from '@mui/icons-material';
import {Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

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
            
            <Typography variant="h4" color="primary" sx={{margin:'10px 20px'}}>
                {title ?? 'Notes'}
            </Typography>

            <List>
                {bulletPoints.map((bulletPoint, index) => (
                    <ListItem key={index}>
                        <ListItemIcon>
                            <CheckCircleOutline color="primary" />
                        </ListItemIcon> 
                        <ListItemText primary={bulletPoint} sx={{color:'#333', fontStyle:'italic', marginLeft: '-10px'}}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default NotesWidget;
