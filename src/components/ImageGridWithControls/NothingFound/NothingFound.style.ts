import styled from "styled-components"

import { media } from "@/styles/Breakpoints"

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
  position: relative;
  ${media.mobiles`
         font-size: 48px;
     transform: translateY(20px);
       `}
`
export const NothingFoundTextBlack = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
`
export const NothingFoundTextOrange = styled.span`
  color: ${({ theme }) => theme.colors.orangeExplicit};
`
