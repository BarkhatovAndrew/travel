import styled from 'styled-components'

export const StyledPopularBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;

  h2 {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.main};
    margin-left: ${({ theme }) => theme.paddings.p5};
    margin-top: ${({ theme }) => theme.paddings.p4};
    margin-bottom: 32px;
  }

  .houses {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 32px;
  }
`
