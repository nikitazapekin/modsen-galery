import styled from "styled-components"

import { media } from "@/styles/Breakpoints"

export const LetsFindTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: 700;
  font-size: 96px;
  text-transform: capitalize;
  -webkit-text-stroke: ${({ theme }) => theme.borders.textBorder};
  text-stroke: ${({ theme }) => theme.borders.textBorder};
  paint-order: stroke fill;
  text-align: center;
  max-width: 764px;
  position: relative;
  z-index: 3;

  color: ${({ theme }) => theme.colors.white};

  ${media.tablets`
  font-size: 64px;
     `}
  ${media.mobiles`
       font-size: 48px;
     `}
`
export const LetsFindTitleOrange = styled.span`
  color: ${({ theme }) => theme.colors.orangeExplicit};
`
export const LetsFindTitleWhite = styled.span`
  color: ${({ theme }) => theme.colors.white};
`
