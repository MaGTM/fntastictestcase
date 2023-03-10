import React, {FC, useState} from 'react';
import {ICategory} from '../../ServerChat';
import {Stack, Typography} from '@mui/material';
import {ReactComponent as Arrow} from 'shared/assets/icons/arrow.svg';
import {ReactComponent as Megaphone} from 'shared/assets/icons/megaphone.svg';

interface VoiceChannelProps {
    data: ICategory;
}

const VoiceChannel: FC<VoiceChannelProps> = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Stack mt={2}>
            <Stack
                sx={{
                    color: 'var(--font-color-main)',
                    cursor: 'pointer'
                }}
                flexDirection={'row'}
                width={'100%'}
                alignItems={'center'}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Arrow
                    width={10}
                    height={10}
                    fill={'var(--font-color-main)'}
                    style={{
                        marginRight: '10px',
                        transform: isOpen ? 'rotate(-90deg)' : 'rotate(-180deg)',
                        transition: 'all var(--animation-time) ease'
                    }}
                />
                <Typography variant={'body1'} component={'h2'}>{data.categoryTitle}</Typography>
            </Stack>
            {
                isOpen &&
                <Stack gap={1} mt={1}>
                    {
                        data.channels.map(item =>
                            <Stack
                                key={item.id}
                                flexDirection={'row'}
                                alignItems={'center'}
                                ml={2}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: item.isActive ? 'var(--blue-color)' : 'var(--bg-color-chat)'
                                    },
                                    cursor: 'pointer',
                                    borderRadius: '5px 0 0 5px',
                                    backgroundColor: item.isActive ? 'var(--blue-color)' : '',
                                    color: item.isActive ? 'white' : 'var(--font-color-main)'
                                }}
                                p={'5px 2px'}
                            >
                                <Megaphone width={20} height={20} stroke={'var(--font-color-main)'}/>
                                {item.title}
                            </Stack>
                        )
                    }
                </Stack>
            }
        </Stack>
    );
};

export default VoiceChannel;
