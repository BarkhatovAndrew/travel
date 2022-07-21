import { FC } from 'react'
import styled from 'styled-components'
import { RiHotelLine } from 'react-icons/ri'
import { TbPlane } from 'react-icons/tb'
import { AiOutlineCar } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'

interface IButtonProps {
  active?: boolean
}

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10%;
  width: 100%;
  left: ${({ theme }) => theme.paddings.p5};

  .buttons {
    display: flex;
    align-self: flex-start;

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: none;
      padding: 12px ${({ theme }) => theme.paddings.p3};
      margin: ${({ theme }) => theme.paddings.p1};
      border-radius: 10px;

      svg {
        margin-right: 8px;
      }
    }
  }

  .search-bar-panel {
    padding: 8px 24px;
    display: flex;
    align-items: center;
    margin-top: 12px;
    border-radius: 16px;
    width: 87%;
    height: 60px;
    background-color: white;

    svg {
      position: absolute;
      left: 36px;
    }

    .search-city {
      background-color: #f8f8f8;
      border: none;
      border-radius: 10px;
      width: 400px;
      height: 30px;
      padding: 4px 32px;
    }
  }
`

const StyledButton = styled.button<IButtonProps>`
  background-color: ${(props) =>
    props.active ? props.theme.colors.secondary : 'white'};
  color: ${(props) => (props.active ? 'white' : props.theme.colors.main)};
`

const SearchBar: FC = () => {
  return (
    <StyledSearchBar>
      <div className="buttons">
        <StyledButton active>
          <RiHotelLine />
          Hotel
        </StyledButton>
        <StyledButton>
          <TbPlane />
          Flight
        </StyledButton>
        <StyledButton>
          <AiOutlineCar />
          Car Rental
        </StyledButton>
      </div>
      <div className="search-bar-panel">
        <BiSearchAlt2 />
        <input type="text" placeholder="Norway, Oslo" className="search-city" />
      </div>
    </StyledSearchBar>
  )
}

export default SearchBar
