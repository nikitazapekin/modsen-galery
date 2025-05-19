import styled from "styled-components"

import { media } from "@/styles/Breakpoints"

export const FooterItemWrapper = styled.div<{ maxWidth: number }>`
  display: flex;
  flex-direction: column;
  max-width: ${({ maxWidth }) => maxWidth}px;
  ${media.ipad`
    order: 1; 
  `}
`
export const FooterItemList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 17px;

  ${media.mobiles`
display: none
   `}
`

export const FooterItemTitle = styled.h3`
  font-weight: 400;
  font-size: 20px;
  line-height: 90%;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.roboto};
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 27px;
  ${media.mobiles`
  margin-bottom:0px;
   `}
`

export const FooterItemCategory = styled.span`
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  line-height: 95%;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.roboto};
`
