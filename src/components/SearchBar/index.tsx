import { FC, useRef } from 'react'
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

    // TODO: совместить похожие стили
    .search-city {
      background-color: #f8f8f8;
      border: none;
      border-radius: 10px;
      width: 400px;
      height: 30px;
      padding: 4px 32px;
      margin: 0 4px;
    }

    .check-in-datepicker {
      background-color: #f8f8f8;
      border: none;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      margin-left: 4px;
      width: 100px;
      height: 30px;
      padding: 4px 16px;
    }

    .check-out-datepicker {
      background-color: #f8f8f8;
      border: none;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-left: 1px solid #e5e5e5;
      margin-right: 4px;
      width: 100px;
      height: 30px;
      padding: 4px 16px;
    }

    .guests {
      background-color: #f8f8f8;
      border: none;
      height: 30px;
      padding: 4px 16px;
      border-radius: 10px;
      margin: 0 4px;
    }

    .search-btn {
      background-color: ${({ theme }) => theme.colors.secondary};
      border: none;
      border-radius: 10px;
      padding: 10px 44px;
      color: white;
      margin-left: 4px;
      cursor: pointer;
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
        <input
          type="text"
          className="check-in-datepicker"
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
          placeholder="Check In"
        />
        <input
          type="text"
          className="check-out-datepicker"
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
          placeholder="Check Out"
        />
        <input
          type="number"
          placeholder="Guests"
          min={1}
          max={12}
          className="guests"
        />
        <button className="search-btn">Search</button>
      </div>
    </StyledSearchBar>
  )
}

export default SearchBar
