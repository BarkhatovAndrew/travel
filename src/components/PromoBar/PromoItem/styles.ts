import styled from 'styled-components'

export const StyledPromoItem = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.paddings.p4};

  .pic-text {
    position: absolute;
    top: 30px;
    left: 30px;
    background-color: #f1eff1;
    padding: ${({ theme }) => theme.paddings.p2}
      ${({ theme }) => theme.paddings.p3};
    border-radius: 20px;
  }

  .pic-block {
    position: relative;
    border-radius: 30px;
    padding: ${({ theme }) => theme.paddings.p2};
  }

  img {
    flex-shrink: 0;
    min-width: 100%;
    border-radius: 30px;
    min-height: 100%;
    max-height: 400px;
  }

  .pic-block:first-child {
    width: 65%;
  }
`
