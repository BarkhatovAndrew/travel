import { FC } from 'react'
import { StyledFooter } from './styles'

const Footer: FC = () => {
  return (
    <StyledFooter>
      <div className="left">
        <p>@2022 Booking, Inc</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Sitemap</p>
        <p>Destinations</p>
      </div>
      <div className="right">
        <p>English</p>
        <p>USD</p>
        <p>Support & Resources</p>
      </div>
    </StyledFooter>
  )
}

export default Footer
