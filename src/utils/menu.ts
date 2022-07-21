export interface IMenu {
  title: string;
  url: string;
}

export const menu: IMenu[] = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Places',
    url: '/places'
  },
  {
    title: 'Help',
    url: '/help'
  }
]
