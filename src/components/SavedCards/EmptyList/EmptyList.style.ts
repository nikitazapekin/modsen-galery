import styled, { css } from "styled-components"
export const EmptyListWrapper = styled.section`
  max-width: 684px;
  margin: 0 auto;
  margin-top: 74px;
`

export const EmptyListTitle = styled.h1`
  font-weight: 700;
  font-size: 64px;
  text-transform: capitalize;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.lexend};
`

export const EmptyListTitleBlack = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
`
export const EmptyListTitleOrange = styled.span`
  color: ${({ theme }) => theme.colors.orangeExplicit};
`
