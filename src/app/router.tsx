import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// layouts
import WelcomeLayout from '../layouts/Welcome';
import HealthDashboardLayout from '../layouts/HealthDashboardLayout';

// pages
import HomePage from '../pages/HomePage';
import AcademyPage from '../pages/AcademyPage';
import ReactCompoentLifecycle from '../widgets/useEffect/ReactCompoentLifecycle';
import UseStateExampleOne from '../widgets/useState/UseStateExampleOne';
import BasicHealthDashboardPage from '../pages/BasicHealthDashboardPage';
import OnDemandHealthDashboardPage from '../pages/OnDemandHealthDashboardPage';
import ChatHealthDashboardPage from '../pages/ChatHealthDashboardPage';

// under construction plug page
const router = createBrowserRouter([
    {
        path: '/',
        element: <WelcomeLayout />,
        children: [ 
            { index: true, element: <HomePage/> } 
        ]
    },
    {
        path: '/academy',
        element: <WelcomeLayout />,
        children: [ 
            {
                index: true, element: <AcademyPage/>                
            }, 
            {
                path: '/academy/use-state/example-one',
                element: <UseStateExampleOne />
            },
            {
                path: '/academy/use-state/example-two',
                element: <UseStateExampleOne />
            },
            {
                path: '/academy/use-effect/fc-lifecycle',
                element: <ReactCompoentLifecycle />

            }
        ]
    },
    {
        path: '/academy/',
        element: <HealthDashboardLayout />,
        children: [
            {
                path: '/academy/use-effect/basicHealthDashboard',
                element: <BasicHealthDashboardPage />
            },
            {
                path: '/academy/use-effect/onDemandHealthDashboard',
                element: <OnDemandHealthDashboardPage />
            },
            {
                path: '/academy/use-effect/chatHealthDashboard',
                element: <ChatHealthDashboardPage />
            }
        ]
    }
]);

export default router;