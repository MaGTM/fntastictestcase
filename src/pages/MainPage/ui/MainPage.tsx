import React from 'react';
import s from './MainPage.module.scss';
import {ServerChat} from 'widges/ServerChat';
import {ServerHeader} from 'widges/ServerHeader';
import {ChannelChat} from 'features/ChannelChat';


const MainPage= () => {
    return (
        <div className={s.MainPage}>
            <ServerHeader />
            <ServerChat />
            <ChannelChat />
        </div>
    );
};

export default MainPage;
