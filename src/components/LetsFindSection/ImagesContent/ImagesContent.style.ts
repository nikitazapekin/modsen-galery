import { media } from "@/pages/Breakpoints"
import styled, { css } from "styled-components"
export const ImagesContentWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 3;
  ${media.mobiles`
        transform: translateY(-10px);
        `}
`
export const LetsFindTitleOrange = styled.span`
  color: ${({ theme }) => theme.colors.orangeExplicit};
`
export const LetsFindTitleWhite = styled.span`
  color: ${({ theme }) => theme.colors.white};
`
export const LetsFindTitleSmall = styled.h1`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: 700;
  font-size: 64px;
  text-transform: capitalize;
  text-align: center;
  -webkit-text-stroke: ${({ theme }) => theme.borders.textBorder};
  text-stroke: ${({ theme }) => theme.borders.textBorder};
  paint-order: stroke fill;
  max-width: 764px;
  color: ${({ theme }) => theme.colors.white};

  ${media.tablets`
         font-size: 48px;
       `}

  ${media.mobiles`
         font-size: 32px;
       `}
`
export const SearchWrapper = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  max-width: 808px;
  margin-top: 87px;
  ${media.tablets`
        margin-top: 26px
       `}
`
export const SearchInput = styled.input`
  width: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 19px 0px 18px 54px;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  ${media.mobiles`
  border-radius: 16px;
    font-size: 16px;
    padding: 13px 20px 13px 16px;
       `}
`
export const SearchPicture = styled.picture`
  position: absolute;
  padding: 18px 0 18px 25px;
  ${media.mobiles`
 right: 0;
 top: 0;
 padding: 9px 16px 9px 0;
       `}
`
export const SearchSourse = styled.source``
export const SearchImg = styled.img``
