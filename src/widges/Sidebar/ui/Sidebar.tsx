import React from 'react';
import s from './Sidebar.module.scss';
import {Badge, Box, Stack, Tooltip} from '@mui/material';
import { ReactComponent as DiscordLogo } from 'shared/assets/icons/discord.svg';
import { ReactComponent as AddServer } from 'shared/assets/icons/plus.svg';
import { ReactComponent as FindServer } from 'shared/assets/icons/compas.svg';
import firstServer from 'shared/assets/images/firstServer.png';
import secondServer from 'shared/assets/images/secondLogo.jpg';
import {classNames} from 'shared/lib';

const data = [
    {
        id: 1,
        img: firstServer,
        badgeContent: 5,
        title: 'Сервер Один'
    },
    {
        id: 2,
        img: secondServer,
        badgeContent: 0,
        title: 'Второй Сервер'
    },
]

const Sidebar = () => {

    return (
        <Stack
            className={s.Sidebar}
            flexDirection={'column'}
            alignItems={'center'}
            height={'100vh'}
            p={'20px 0'}
        >
            <Box
                className={s.mainElementContainer}
            >
                <Tooltip
                    title={'Личные сообщения'}
                    arrow
                    placement={'right'}
                >
                    <Box
                        className={classNames(s.icon, {}, [s.mainIcon])}
                    >
                        <DiscordLogo style={{ fill: 'white' }} width={60} height={60}/>
                    </Box>
                </Tooltip>
            </Box>
            <Stack
                flexDirection={'column'}
                alignItems={'center'}
                gap={'20px'}
            >
                {
                    data.map(item => {
                        return (
                            <Tooltip
                                title={item.title}
                                arrow
                                placement={'right'}
                                key={item.id}
                            >
                                <Badge
                                    badgeContent={item.badgeContent}
                                    color={'error'}
                                    sx={{ '& .MuiBadge-badge': {
                                            top: '100%'
                                        }
                                    }}
                                >
                                    <Box className={s.icon}>
                                        <img src={item.img} alt={'server'} />
                                    </Box>
                                </Badge>
                            </Tooltip>
                        )
                    })
                }
                <Tooltip
                    title={'Добавьте сервер'}
                    arrow
                    placement={'right'}
                >
                    <Box className={classNames(s.icon, {}, [s.additionalIcon])}>
                        <AddServer />
                    </Box>
                </Tooltip>
                <Tooltip
                    title={'Исследуйте'}
                    arrow
                    placement={'right'}
                >
                    <Box className={classNames(s.icon, {}, [s.additionalIcon])}>
                        <FindServer />
                    </Box>
                </Tooltip>
            </Stack>
        </Stack>
    );
};

export default Sidebar;
