import { media } from "@/styles/Breakpoints"
import styled from "styled-components"
export const EmptyListWrapper = styled.section`
  max-width: 684px;
  margin: 0 auto;
  margin-top: 74px;

  ${media.tablets`
  margin-top: 70px;
             `}
`

export const EmptyListTitle = styled.h1`
  font-weight: 700;
  font-size: 64px;
  text-transform: capitalize;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.lexend};
  ${media.tablets`
   font-size: 32px;
             `}
`

export const EmptyListTitleBlack = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
`
export const EmptyListTitleOrange = styled.span`
  color: ${({ theme }) => theme.colors.orangeExplicit};
`
