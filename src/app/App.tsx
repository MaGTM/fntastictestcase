import React from 'react';
import './styles/style.scss'
import {AppRouter} from './providers/router';
import {Sidebar} from 'widges/Sidebar';
import {Box} from '@mui/material';

const App = () => {
    return (
        <div className={'App'}>
            <Sidebar />
            <Box className={'page-wrapper'}>
                <AppRouter />
            </Box>
        </div>
    );
};

export default App;
