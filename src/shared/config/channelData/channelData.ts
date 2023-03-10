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

export const data: ICategory[] = [
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
