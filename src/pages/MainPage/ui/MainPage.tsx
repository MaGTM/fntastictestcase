import React from 'react';
import s from './MainPage.module.scss';
import {ServerChat} from 'widges/ServerChat';
import {ServerHeader} from 'widges/ServerHeader';
import {ChannelChat} from 'features/ChannelChat';
import {ServerUsers} from 'widges/ServerUsers';


const MainPage= () => {
    return (
        <div className={s.MainPage}>
            <ServerHeader />
            <ServerChat />
            <ChannelChat />
            <ServerUsers />
        </div>
    );
};

export default MainPage;
