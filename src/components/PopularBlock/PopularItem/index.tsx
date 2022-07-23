import { FC, useState } from 'react'
import { IHouse } from '../../../models/IHouse'
import { AiFillHeart, AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { StyledPopularItem } from './styles'

interface IProps {
  house: IHouse
}

const PopularItem: FC<IProps> = ({ house }) => {
  const [like, setLike] = useState<boolean>(false)

  const likeHandler = () => {
    setLike(!like)
  }

  return (
    <StyledPopularItem>
      <img
        src={require(`../../../assets/house-imgs/${house.img}.jpg`)}
        alt={house.title}
      />
      {like ? (
        <AiFillHeart className="like" onClick={() => likeHandler()} />
      ) : (
        <AiOutlineHeart className="like" onClick={() => likeHandler()} />
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
