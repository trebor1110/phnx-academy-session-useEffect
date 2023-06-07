import React, { FC } from 'react';
import { Box } from '@mui/material';
import LearningModule from '../../shared/ui/LearningModule';
import LearningCard from '../../shared/ui/LearningCard';


const useStateCards = [
    {
        header: 'React Hooks',
        img: '/assets/card_sample.jpg',
        body: 'Everything you need to know about react hooks',
        link: '/academy'
    },
];

const WelcomeWidget: FC = () => {

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
                <LearningModule header="Phoenix Academy" >
                    {useStateCards.map(( el, index ) => {
                        return <LearningCard key={index} header={el.header} img={el.img} body={el.body} link={el.link} />;
                    })}
                </LearningModule>
            </Box>
        </>
    );
};

export default WelcomeWidget;