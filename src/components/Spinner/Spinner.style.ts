import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const SpinnerStyled = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid ${({ theme }) => theme.colors.darkGray};
  border-bottom-color: ${({ theme }) => theme.colors.orangeExplicit};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotate} 0.8s linear infinite;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
