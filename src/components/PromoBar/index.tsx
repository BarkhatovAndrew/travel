import { FC } from 'react'
import PromoItem from './PromoItem'
import { StyledPromoBar } from './styles'

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
