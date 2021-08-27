interface IPath {
    id: string;
    path: string;
    label: string;
}

export const availablePaths: IPath[] = [
    {
        id: 'home',
        path: '/',
        label: 'HOME',
    },
    {
        id: 'coffee',
        path: '/coffee',
        label: 'COFFEE',
    },
    {
        id: 'visit',
        path: '/visit',
        label: 'VISIT',
    },
    {
        id: 'menus',
        path: '/menus',
        label: 'U.S MENUS',
    },
    {
        id: 'about',
        path: '/about',
        label: 'ABOUT',
    },

]

