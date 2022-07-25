import { FC } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { modalSlice } from '../../../../store/reducers/modalSlice'
import { AiFillStar } from 'react-icons/ai'

const StyledExpanded = styled(motion.div)`
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5) 100%,
    rgba(0, 0, 0, 0.5) 100%
  );

  .container {
    display: flex;
    flex-direction: column;
    width: 50vw;
    max-height: 80vh;
    background-color: white;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.main};
    left: 50%;
    top: 50%;
    overflow-y: scroll;
    border-radius: 20px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    h2 {
      background-color: #1a1a1a;
      padding: 4px 8px;
      margin: 20px;
      position: absolute;
      font-weight: bolder;
      color: white;
      font-size: 40px;
    }

    h3 {
      margin: 8px 32px;
    }

    .info {
      display: flex;
      align-items: center;
      margin: 16px 32px;
      font-size: 24px;
      justify-content: space-between;
    }

    .description {
      margin: 0 32px 32px;
      font-size: 18px;
    }

    svg {
      color: orange;
    }
  }
`

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
