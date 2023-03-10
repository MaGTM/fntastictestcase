import React from 'react';
import s from './ServerUsers.module.scss';
import {Stack} from '@mui/material';
import RoleCategory from './components/RoleCategory/RoleCategory';

interface IMember {
    id: number,
    name: string
}

export interface IRole {
    id: number,
    roleName: string,
    members: IMember[]
}

const data: IRole[] = [
    {
        id: 1,
        roleName: 'Администрация',
        members: [
            {
                id: 1,
                name: 'Григорий'
            },
            {
                id: 2,
                name: 'Александр'
            },
            {
                id: 3,
                name: 'Пётр'
            },
            {
                id: 4,
                name: 'Валентина'
            },
        ]
    },
    {
        id: 2,
        roleName: 'Пользователь',
        members: [
            {
                id: 1,
                name: 'Екатерина'
            },
            {
                id: 2,
                name: 'Василий'
            }
        ]
    }
];

const ServerUsers = () => {
    return (
        <Stack className={s.ServerUsers} p={2} gap={3}>
            {
                data.map(item => <RoleCategory key={item.id} item={item}/>)
            }
        </Stack>
    );
};

export default ServerUsers;
