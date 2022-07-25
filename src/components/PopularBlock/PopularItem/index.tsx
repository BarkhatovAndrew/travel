import { FC, useEffect } from 'react'
import { IHouse } from '../../../models/IHouse'
import { AiFillHeart, AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { StyledPopularItem } from './styles'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { housesSlice } from '../../../store/reducers/housesSlice'
import { modalSlice } from '../../../store/reducers/modalSlice'
import { MouseEvent } from 'react'

interface IProps {
  house: IHouse
}

const PopularItem: FC<IProps> = ({ house }) => {
  const dispatch = useAppDispatch()
  const houses = useAppSelector((state) => state.housesReducer.houses)

  const openModal = () => {
    dispatch(modalSlice.actions.openModal(house))
  }

  const likeHandler = (event: MouseEvent<SVGAElement>) => {
    event.stopPropagation()
    dispatch(housesSlice.actions.likeHouse(house.id))
  }

  useEffect(() => {
    localStorage.setItem(
      'liked_houses',
      JSON.stringify(houses.filter((item) => item.liked).map((item) => item.id))
    )
  }, [houses])

  return (
    <StyledPopularItem onClick={openModal}>
      <img
        src={require(`../../../assets/house-imgs/${house.img}.jpg`)}
        alt={house.title}
      />
      {house.liked ? (
        <AiFillHeart className="like" onClick={likeHandler} />
      ) : (
        <AiOutlineHeart className="like" onClick={likeHandler} />
      )}

      <div className="description">
        <div className="row">
          <h4>{house.title}</h4>
          <span>
            {house.rating}
            <AiFillStar />
          </span>
        </div>
        <div className="row">${house.price}/night</div>
      </div>
    </StyledPopularItem>
  )
}

export default PopularItem
