import styled from 'styled-components'

export const StyledPromoBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.main};
    margin-left: ${({ theme }) => theme.paddings.p5};
    margin-top: 64px;
  }

  h6 {
    font-size: 12px;
    font-weight: 300;
    color: grey;
    margin-left: ${({ theme }) => theme.paddings.p5};
  }
`
