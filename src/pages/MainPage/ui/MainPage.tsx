import React from 'react';
import s from './MainPage.module.scss';
import {ServerChat} from 'widges/ServerChat';


const MainPage= () => {
    return (
        <div className={s.MainPage}>
            <ServerChat />
        </div>
    );
};

export default MainPage;
