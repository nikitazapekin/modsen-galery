import styled, { css } from "styled-components"

export const ErrorMessageText = styled.div`
  height: auto;
  font-weight: 400;
  font-size: 24px;
  text-transform: capitalize;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.lexend};

  margin: 0 auto;
  margin-top: 40px;
`
