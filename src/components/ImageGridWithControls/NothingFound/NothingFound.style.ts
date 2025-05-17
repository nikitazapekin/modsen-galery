import styled, { css } from "styled-components"

export const NothingFoundText = styled.h1`
  width: 100%;
  height: auto;
  font-weight: 700;
  font-size: 64px;
  text-transform: capitalize;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.lexend};
  max-width: 684px;
  margin: 0 auto;
`
export const NothingFoundTextBlack = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
`
export const NothingFoundTextOrange = styled.span`
  color: ${({ theme }) => theme.colors.orangeExplicit};
`
