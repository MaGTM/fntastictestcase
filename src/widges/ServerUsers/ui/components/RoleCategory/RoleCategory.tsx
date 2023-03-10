import React, {FC} from 'react';
import {IRole} from '../../ServerUsers';
import {Stack, Typography} from '@mui/material';

interface RoleCategoryProps {
    item: IRole
}

const RoleCategory: FC<RoleCategoryProps> = ({ item }) => {
    return (
        <Stack sx={{ color: 'var(--font-color-main)' }}>
            <Stack flexDirection={'row'} alignItems={'center'}>
                <Typography>{item.roleName} - {item.members.length}</Typography>
            </Stack>
            <Stack ml={1} gap={1} mt={1}>
                {
                    item.members.map(member => {
                        return (
                            <Stack flexDirection={'row'} alignItems={'center'}>
                                <Stack
                                    sx={{
                                        backgroundColor: 'var(--blue-color)',
                                        width: 40,
                                        height: 40,
                                        borderRadius: '100%'
                                }}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    mr={1}
                                >
                                    {member.name[0]}
                                </Stack>
                                <Typography key={member.id}>{member.name}</Typography>
                            </Stack>
                        )
                    })
                }
            </Stack>
        </Stack>
    );
};

export default RoleCategory;
