import { FC } from 'react'
import styled from 'styled-components'
import { IHouse } from '../../../models/IHouse'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'

const StyledPopularItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  width: 30%;
  margin: 8px;
  border-radius: 10px;
  overflow: hidden;

  .like {
    position: absolute;
    right: 16px;
    top: 16px;
    background-color: white;
    width: 20px;
    height: auto;
    border-radius: 50%;
    padding: 6px;
    transition: 0.2s;
    cursor: pointer;
  }

  .like:hover {
    transform: scale(115%);
  }

  .description {
    padding: ${({ theme }) => theme.paddings.p3};
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    padding: 0 12px;

    span {
      display: flex;
      align-items: center;
    }

    svg {
      margin-left: 8px;
      color: orange;
      width: 18px;
      height: auto;
    }
  }
`

interface IProps {
  house: IHouse
}

const PopularItem: FC<IProps> = ({ house }) => {
  return (
    <StyledPopularItem>
      <img
        src={require(`../../../assets/house-imgs/${house.img}.jpg`)}
        alt={house.title}
      />
      <AiOutlineHeart className="like" />
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
