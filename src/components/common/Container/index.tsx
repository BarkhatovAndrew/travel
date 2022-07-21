import styled from 'styled-components'
import { FC, ReactNode } from 'react'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: 1280px;

  @media (max-width: 1280px) {
    width: 900px;
  }
`

interface IProps {
  children: ReactNode
}

const Container: FC<IProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
