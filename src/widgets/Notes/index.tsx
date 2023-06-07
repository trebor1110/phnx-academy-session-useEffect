import React, {FC} from 'react';
import { CheckCircleOutline } from '@mui/icons-material';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface NotesProps {
    title?: string;
    bulletPoints: string[];
}

const NotesWidget: FC<NotesProps> = ({ title, bulletPoints }) => {

    return (
        <Box display="flex" 
            flexDirection= "column" 
            padding="0.5rem" 
            borderRadius="1.5rem" 
            boxShadow="0px 2px 4px #0000001a" 
            maxWidth="100%" 
            sx={{backgroundColor:'#ffffffcc', backdropFilter:'blur(10px)'}}>
            
            <Typography variant="h4" color="primary" sx={{margin:'1rem 1rem 0.5rem 1rem'}}>
                {title ?? 'Notes'}
            </Typography>

            <List>
                {bulletPoints.map((bulletPoint, index) => (
                    <ListItem key={index}>
                        <ListItemIcon>
                            <CheckCircleOutline color="primary" />
                        </ListItemIcon> 
                        <ListItemText primary={bulletPoint} sx={{color:'#333', fontStyle:'italic', marginLeft: '-1rem'}}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default NotesWidget;