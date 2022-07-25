import { FC } from 'react'
import styled from 'styled-components'

const StyledSignIn = styled.div`
  display: flex;
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5) 100%,
    rgba(0, 0, 0, 0.5) 100%
  );

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    width: 360px;
    max-height: 80vh;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.main};
    left: 50%;
    top: 50%;
    border-radius: 20px;
    height: 300px;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 24px;

      input {
        line-height: 30px;
        border: none;
        margin-top: 24px;
        padding-left: 12px;
      }
    }
  }
`

const SignIn: FC = () => {
  return (
    <StyledSignIn>
      <div className="container">
        <h3>Sign In</h3>
        <form>
          <input type="text" placeholder="Login" />
          <input type="password" placeholder="Password" />
        </form>
      </div>
    </StyledSignIn>
  )
}

export default SignIn
