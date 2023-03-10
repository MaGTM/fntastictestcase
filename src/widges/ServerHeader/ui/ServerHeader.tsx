import React from 'react';
import s from './ServerHeader.module.scss';
import Title from './components/Title/Title';
import Settings from './components/Settings/Settings';

const ServerHeader = () => {
    return (
        <div
            className={s.ServerHeader}
        >
            <Title />
            <Settings />
        </div>
    );
};

export default ServerHeader;
