import React from 'react';
import {Stack, TextField, Tooltip} from '@mui/material';
import {ReactComponent as Add} from 'shared/assets/icons/add-circle.svg';
import {ReactComponent as Gift} from 'shared/assets/icons/gift.svg';
import {ReactComponent as Gif} from 'shared/assets/icons/gif.svg';
import {ReactComponent as Paper} from 'shared/assets/icons/paper-file.svg';
import {ReactComponent as Emoji} from 'shared/assets/icons/smile.svg';
import s from './ChatInput.module.scss';

const ChatInput = () => {
    return (
        <Stack
            height={'60px'}
            width={'90%'}
            p={'10px'}
            m={'10px 0'}
            sx={{
                backgroundColor: 'var(--bg-color-light)',
                borderRadius: '10px'
            }}
            alignItems={'center'}
            flexDirection={'row'}
            gap={2}
        >
            <Add width={40} height={40} stroke={'var(--font-color-main)'} style={{ cursor: 'pointer' }}/>
            <TextField
                variant={'outlined'}
                fullWidth
                sx={{
                    color: 'var(--font-color-main)',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 'none'
                        },
                        '&:hover fieldset': {
                            borderColor: 'none',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'none',
                        },
                    },
                    '& label': {
                        color: 'var(--font-color-main)',
                    },
                    '& .MuiOutlinedInput-input': {
                        color: 'var(--font-color-main)',
                    }
                }}
            />
            <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                <Tooltip title={'Подарок'}>
                    <Gift className={s.icon}/>
                </Tooltip>
                <Gif className={s.icon} fill={'var(--font-color-main)'}/>
                <Paper className={s.icon}/>
                <Emoji className={s.icon} />
            </Stack>
        </Stack>
    );
};

export default ChatInput;
