import React from 'react';
import s from './Settings.module.scss';
import {Stack, TextField, Tooltip, Typography} from '@mui/material';
import {ReactComponent as Hashtag} from 'shared/assets/icons/hash.svg';
import {ReactComponent as BellDisabled} from 'shared/assets/icons/bell-disabled.svg';
import {ReactComponent as Pin} from 'shared/assets/icons/pin.svg';
import {ReactComponent as Users} from 'shared/assets/icons/users.svg';
import {ReactComponent as Email} from 'shared/assets/icons/email.svg';
import {ReactComponent as Help} from 'shared/assets/icons/help.svg';

const Settings = () => {
    return (
        <Stack className={s.Settings} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack flexDirection={'row'} alignItems={'center'}>
                <Hashtag width={20} height={20} stroke={'var(--font-color-main)'}/>
                <Typography variant={'h4'} color={'var(--font-color-main)'} ml={1}>welcome</Typography>
            </Stack>
            <Stack flexDirection={'row'} alignItems={'center'} gap={2} mr={2}>
                <Stack flexDirection={'row'} gap={1}>
                    <Tooltip title={'Ветки'}>
                        <Hashtag width={20} height={20} stroke={'var(--font-color-main)'} style={{ cursor: 'pointer' }}/>
                    </Tooltip>
                    <Tooltip title={'Параметры уведомлений'}>
                        <BellDisabled width={20} height={20} stroke={'var(--font-color-main)'} style={{ cursor: 'pointer' }}/>
                    </Tooltip>
                    <Tooltip title={'Закрепленные сообщения'}>
                        <Pin width={20} height={20} stroke={'var(--font-color-main)'} style={{ cursor: 'pointer' }}/>
                    </Tooltip>
                    <Tooltip title={'Пользователи'}>
                        <Users width={20} height={20} stroke={'var(--font-color-main)'} style={{ cursor: 'pointer' }}/>
                    </Tooltip>
                </Stack>
                <TextField
                    variant={'outlined'}
                    label={'Поиск'}
                    size={'small'}
                    sx={{
                        color: 'var(--font-color-main)',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'var(--font-color-main)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'var(--blue-color)',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'var(--blue-color)',
                            },
                        },
                        '& label': {
                            color: 'var(--font-color-main)',
                        },
                    }}
                />
                <Stack flexDirection={'row'} gap={1}>
                    <Tooltip title={'Ветки'}>
                        <Email width={20} height={20} stroke={'var(--font-color-main)'} style={{ cursor: 'pointer' }}/>
                    </Tooltip>
                    <Tooltip title={'Параметры уведомлений'}>
                        <Help width={20} height={20} stroke={'var(--font-color-main)'} style={{ cursor: 'pointer' }}/>
                    </Tooltip>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Settings;
