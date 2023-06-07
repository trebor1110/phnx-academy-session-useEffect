import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import {ThemeProvider} from '@mui/material/styles';
import {CacheProvider} from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from './createEmotionCache';
import router from './router';
import theme from './theme/dark';
import { ReduxProvider, setupStore } from '../app-store';
// import { useAppSelector } from '../app-store';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


const queryClient = new QueryClient();
const store = setupStore();

function App() {
    // const profile = useAppSelector(actions => actions.profileReducer.profile);
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <CacheProvider value={clientSideEmotionCache}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <RouterProvider router={router}/>
                    </ThemeProvider>
                </CacheProvider>
            </Provider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;
