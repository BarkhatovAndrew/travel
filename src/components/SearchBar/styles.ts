import styled from 'styled-components'

export const StyledSearchBar = styled.div`
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
