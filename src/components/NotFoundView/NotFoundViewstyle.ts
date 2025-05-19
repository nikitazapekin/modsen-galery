import { media } from "@/pages/Breakpoints"
import styled from "styled-components"

export const NotFoundWrapper = styled.section`
  width: 100%;
`

export const Container = styled.div`
  max-width: ${({ theme }) => theme.container + 40}px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 684px;
`

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0px;
  align-items: center;
  margin-top: 80px;

  ${media.tablets`
margin-top: 86px;
   `}
`
export const LogoTitle = styled.h1`
  font-weight: 400;
  font-size: 128px;

  color: ${({ theme }) => theme.colors.orangeExplicit};
  font-family: ${({ theme }) => theme.fonts.signika};
`
export const LogoSubTitle = styled.h2`
  font-weight: 400;
  font-size: 48px;
  transform: translateY(-30px);
  color: ${({ theme }) => theme.colors.orangeExplicit};
  font-family: ${({ theme }) => theme.fonts.signika};
`

export const ContentText = styled.h3`
  font-weight: 700;
  font-size: 64px;
  text-transform: capitalize;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.lexend};
  margin-bottom: 80px;
  ${media.tablets`
         font-size: 32px;
         `}
`
export const ContentTextBlack = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
`

export const ContentTextOrange = styled.span`
  color: ${({ theme }) => theme.colors.orangeExplicit};
`
