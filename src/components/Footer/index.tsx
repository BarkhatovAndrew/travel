import { FC } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
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
