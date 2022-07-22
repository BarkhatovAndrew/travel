import { RiHotelLine } from 'react-icons/ri'
import { TbPlane } from 'react-icons/tb'
import { AiOutlineCar } from 'react-icons/ai'
import { ReactNode } from 'react'

interface ITab {
  id: 0 | 1 | 2
  title: string
  icon: ReactNode
}

export const tabs: ITab[] = [
  {
    id: 0,
    title: 'Hotel',
    icon: <RiHotelLine />,
  },
  {
    id: 1,
    title: 'Flight',
    icon: <TbPlane />,
  },
  {
    id: 2,
    title: 'Car Rental',
    icon: <AiOutlineCar />,
  },
]
