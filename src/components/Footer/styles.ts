import styled from 'styled-components'

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #d2d2d2;
  padding: 12px 0;

  .left,
  .right {
    display: flex;
    margin: 0 50px;

    p {
      margin: 0 8px;
      color: ${({ theme }) => theme.colors.main};
    }
  }
`
