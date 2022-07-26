import { FC } from 'react'
import Header from '../components/Header'
import PromoBar from '../components/PromoBar'
import PopularBlock from '../components/PopularBlock'

const MainPage: FC = () => {
  return (
    <>
      <Header />
      <PromoBar />
      <PopularBlock />
    </>
  )
}

export default MainPage
