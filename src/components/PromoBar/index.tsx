import { FC } from 'react'
import styled from 'styled-components'
import PromoItem from './PromoItem'

const StyledPromoBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.main};
    margin-left: ${({ theme }) => theme.paddings.p5};
    margin-top: ${({ theme }) => theme.paddings.p5};
  }

  h6 {
    font-size: 12px;
    font-weight: 300;
    color: grey;
    margin-left: ${({ theme }) => theme.paddings.p5};
  }
`

const PromoBar: FC = () => {
  return (
    <StyledPromoBar>
      <h2>Search a best place</h2>
      <h6>Popular destinations open to visitors</h6>
      <PromoItem />
    </StyledPromoBar>
  )
}

export default PromoBar
