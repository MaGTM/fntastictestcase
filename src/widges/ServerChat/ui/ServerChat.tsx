import React from 'react';
import s from './ServerChat.module.scss';
import {Stack} from '@mui/material';
import TextChannel from './components/TextChannel/TextChannel';
import VoiceChannel from './components/VoiceChannel/VoiceChannel';

export interface IChannel {
    id: number,
    title: string,
    isActive: boolean
}

export interface ICategory {
    id: number,
    type: 'text' | 'voice',
    categoryTitle: string,
    channels: IChannel[]
}

const data: ICategory[] = [
    {
        id: 1,
        type: 'text',
        categoryTitle: 'Текстовые каналы один',
        channels: [
            {
                id: 1,
                title: 'welcome',
                isActive: true
            },
            {
                id: 2,
                title: 'rules',
                isActive: false
            },
        ]
    },
    {
        id: 2,
        type: 'voice',
        categoryTitle: 'Для общения',
        channels: [
            {
                id: 1,
                title: 'Комната 1',
                isActive: false
            },
            {
                id: 2,
                title: 'Комната 2',
                isActive: false
            },
        ]
    },
    {
        id: 3,
        type: 'voice',
        categoryTitle: 'Для администрации',
        channels: [
            {
                id: 1,
                title: 'Комната 1',
                isActive: false
            },
            {
                id: 2,
                title: 'Комната 2',
                isActive: false
            },
        ]
    }
]

const ServerChat = () => {
        return (
        <Stack
            className={s.ServerChat}
            flexDirection={'column'}
            width={300}
            pl={1}
        >
            {
                data.map(item => item.type === 'text' ?
                    <TextChannel key={item.id} data={item}/> :
                    <VoiceChannel key={item.id} data={item}/>)
            }
        </Stack>
    );
};

export default ServerChat;
