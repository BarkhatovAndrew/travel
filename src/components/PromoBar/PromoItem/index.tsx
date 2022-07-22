import { FC } from 'react'
import { promoPictures } from '../../../utils/pictures'
import { StyledPromoItem } from './styles'

const PromoItem: FC = () => {
  return (
    <StyledPromoItem>
      {promoPictures.map(({ pic, alt }) => (
        <div className="pic-block" key={alt}>
          <img src={pic} alt={alt} />
          <div className="pic-text">
            <p>{alt}</p>
          </div>
        </div>
      ))}
    </StyledPromoItem>
  )
}

export default PromoItem
