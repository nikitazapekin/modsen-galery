import { media } from "@/pages/Breakpoints"
import styled from "styled-components"
export const HeaderWrapper = styled.header`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.gradients.grayGradient};
  padding: 21px 12px 22px 17px;
  position: relative;
  z-index: 5;
`
export const LogoPicture = styled.picture`
  cursor: pointer;
`
export const LogoSourse = styled.source``
export const LogoImg = styled.img``
export const Container = styled.div`
  max-width: ${({ theme }) => theme.container + 29}px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoImage = styled.img`
  cursor: pointer;
`
export const HeaderNav = styled.nav`
  display: flex;
`
export const HeaderList = styled.ul`
  display: flex;
  column-gap: 44px;

  ${media.ipad`
   column-gap: 20px;
   `}
  ${media.tablets`
 display: none
   `}
`
export const BurgerIconImage = styled.img`
  cursor: pointer;
  display: none;
  ${media.tablets`
 display: block
   `}
`
