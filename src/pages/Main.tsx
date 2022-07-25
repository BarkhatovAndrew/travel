import { FC } from 'react'
import Header from '../components/Header'
import PromoBar from '../components/PromoBar'
import PopularBlock from '../components/PopularBlock'
import PopularItemExpanded from '../components/PopularBlock/PopularItem/PopularItemExpanded'
import { useAppSelector } from '../hooks/redux'
import SignIn from '../components/signIn'

const MainPage: FC = () => {
  const isModalOpen = useAppSelector((state) => state.modalReducer.isOpen)
  return (
    <>
      <Header />
      <PromoBar />
      <PopularBlock />
      {isModalOpen && <PopularItemExpanded />}
      {/*<SignIn />*/}
    </>
  )
}

export default MainPage
