import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: 1280px;

  @media (max-width: 1280px) {
    width: 900px;
  }
`
