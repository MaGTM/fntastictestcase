import React from 'react';
import s from './ServerChat.module.scss';
import {Stack} from '@mui/material';
import TextChannel from './components/TextChannel/TextChannel';
import VoiceChannel from './components/VoiceChannel/VoiceChannel';
import { channelData } from 'shared/config';

const ServerChat = () => {
        return (
        <Stack
            className={s.ServerChat}
            flexDirection={'column'}
            width={300}
            pl={1}
        >
            {
                channelData.map(item => item.type === 'text' ?
                    <TextChannel key={item.id} data={item}/> :
                    <VoiceChannel key={item.id} data={item}/>)
            }
        </Stack>
    );
};

export default ServerChat;
