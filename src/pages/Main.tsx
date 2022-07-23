import { FC } from 'react'
import Header from '../components/Header'
import PromoBar from '../components/PromoBar'
import PopularBlock from '../components/PopularBlock'
import PopularItemExpanded from '../components/PopularBlock/PopularItem/PopularItemExpanded'

const MainPage: FC = () => {
  return (
    <>
      <Header />
      <PromoBar />
      <PopularBlock />
      {/*<PopularItemExpanded />*/}
    </>
  )
}

export default MainPage
