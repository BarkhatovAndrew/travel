import { FC } from 'react'
import { promoPictures } from '../../../utils/pictures'
import { StyledPromoItem } from './styles'
import { Link } from 'react-router-dom'

const PromoItem: FC = () => {
  return (
    <StyledPromoItem animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      {promoPictures.map(({ pic, alt, url }) => (
        <Link to={url}>
          <div className="pic-block" key={alt}>
            <img src={pic} alt={alt} />
            <div className="pic-text">
              <p>{alt}</p>
            </div>
          </div>
        </Link>
      ))}
    </StyledPromoItem>
  )
}

export default PromoItem
