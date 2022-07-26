import { FC } from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { modalSlice } from '../../../../store/reducers/modalSlice'
import { AiFillStar } from 'react-icons/ai'
import { StyledExpanded } from './styles'
import { GrClose } from 'react-icons/gr'

const PopularItemExpanded: FC = () => {
  const dispatch = useAppDispatch()
  const house = useAppSelector((state) => state.modalReducer.content)

  const closeModal = (event: any) => {
    if (event.target === event.currentTarget) {
      dispatch(modalSlice.actions.closeModal())
    }
  }
  return (
    <StyledExpanded onClick={closeModal}>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>{house!.title}</h2>
        <GrClose className="close" onClick={closeModal} />
        <img
          src={require(`../../../../assets/house-imgs/${house!.img}.jpg`)}
          alt={house!.title}
        />
        <div className="info">
          <p>${house!.price}/night</p>
          <p>{new Array(Math.round(house!.rating)).fill(<AiFillStar />)}</p>
        </div>
        <h3>Description:</h3>
        <p className="description">{house!.description}</p>
      </motion.div>
    </StyledExpanded>
  )
}

export default PopularItemExpanded
