import React, { FC } from 'react';
import { Box } from '@mui/material';
import LearningModule from '../../shared/ui/LearningModule';
import LearningCard from '../../shared/ui/LearningCard';


const useStateCards = [
    {
        header: 'useState Basics',
        img: '/assets/card_sample.jpg',
        body: 'Basics of useState hook. How to add to the functional component and update the state of the component.',
        link: '/academy/use-state/example-one'
    },
    {
        header: 'useState Basics (Counter)',
        img: '/assets/card_sample.jpg',
        body: 'Basics counter with help of useState hook.',
        link: '/academy/use-state/example-two'
    },
];

const useEffectsCard = [
    {
        header: 'Functional Component lifecycle',
        img: '/assets/card_sample.jpg',
        body: 'Basics of useState hook. How to add to the functional component and update the state of the component.',
        link: '/academy/use-effect/fc-lifecycle'
    },
    {
        header: 'Health Dashboard (AutoUpdate Version)',
        img: '/assets/card_sample.jpg',
        body: 'What is useEffect hook? Basic use of the useEffect hook.',
        link: '/academy/use-effect/basicHealthDashboard'
    }
];

const WelcomeWidget: FC = () => {

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
                <LearningModule header="useState show case" >
                    {useStateCards.map(( el, index ) => {
                        return <LearningCard key={index} header={el.header} img={el.img} body={el.body} link={el.link} />;
                    })}
                </LearningModule>
                <LearningModule header="useReducer show case" >Coming Soon....</LearningModule>
                <LearningModule header="useEffect show case" >
                    {
                        useEffectsCard.map(( el, index ) => {
                            return <LearningCard key={index} header={el.header} img={el.img} body={el.body} link={el.link} />;
                        })}
                </LearningModule>
            </Box>
        </>
    );
};

export default WelcomeWidget;