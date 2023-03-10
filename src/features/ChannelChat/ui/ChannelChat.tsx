import React from 'react';
import s from './ChannelChat.module.scss';
import {Stack} from '@mui/material';
import ChatWindow from './components/ChatWindow/ChatWindow';
import ChatInput from './components/ChatInput/ChatInput';

const ChannelChat = () => {
    return (
        <Stack className={s.ChannelChat} flexDirection={'column'} alignItems={'center'}>
            <ChatWindow />
            <ChatInput />
        </Stack>
    );
};

export default ChannelChat;
