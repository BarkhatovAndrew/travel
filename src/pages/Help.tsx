import { FC } from 'react'
import styled from 'styled-components'

const StyledHelp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 200px);
  color: ${({ theme }) => theme.colors.main};

  h2 {
    font-size: 70px;
  }

  p {
    align-self: flex-end;
  }
`

const HelpPage: FC = () => {
  return (
    <StyledHelp>
      <h2>Help! I need somebody!*</h2>
      <p>*just placeholder</p>
    </StyledHelp>
  )
}

export default HelpPage
