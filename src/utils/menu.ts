export interface IMenu {
  title: string
  url: string
}

export const menu: IMenu[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Favorites',
    url: '/favorites',
  },
  {
    title: 'Help',
    url: '/help',
  },
]
