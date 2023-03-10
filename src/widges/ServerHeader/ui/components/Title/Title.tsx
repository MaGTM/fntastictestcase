import React, {useState} from 'react';
import s from './Title.module.scss';
import { ReactComponent as Arrow } from 'shared/assets/icons/arrow.svg';
import {Divider, Stack} from '@mui/material';
import {classNames} from '../../../../../shared/lib';

const Title = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={s.Title}>
            <Stack
                onClick={() => setIsOpen(!isOpen)}
                flexDirection={'row'}
                justifyContent={'space-between'}
                width={'100%'}
                height={'100%'}
                alignItems={'center'}
                p={'0 20px'}
                sx={{
                    backgroundColor: 'var(--bg-color-chat-side)',
                    transition: 'all var(--animation-time) ease',
                    cursor: 'pointer',
                    '&:hover': {
                        filter: 'brightness(1.3)',
                    }
                }}
            >
                <h1>Сервер один</h1>
                <Arrow
                    id={s.arrow}
                    className={isOpen ? s.active : ''}
                />
            </Stack>
            <Stack
                flexDirection={'column'}
                position={'absolute'}
                sx={{
                    backgroundColor: 'var(--black-color)',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    mt: '10px',
                    borderRadius: '10px',
                    p: '10px'
                }}
                width={'90%'}
                className={classNames(s.settings, {[s.active]: isOpen}, [])}
            >
                <div className={s.setting}>
                    <p>Буст сервера</p>
                </div>
                <Divider color={'#EFEFEFFF'} />
                <div className={s.setting}>
                    <p>Пригласить людей</p>
                </div>
                <Divider color={'#EFEFEFFF'} />
                <div className={s.setting}>
                    <p>Параметры уведомлений</p>
                </div>
                <div className={s.setting}>
                    <p>Настройки конфиденциальности</p>
                </div>
                <Divider color={'#EFEFEFFF'}/>
                <div className={s.setting}>
                    <p>Настр. профиль сервера</p>
                </div>
                <div className={s.setting}>
                    <p>Скрыть заглушенные кана...</p>
                </div>
                <Divider color={'#EFEFEFFF'} />
                <div className={s.setting}>
                    <p>Покинуть сервер</p>
                </div>
            </Stack>
        </div>
    );
};

export default Title;
