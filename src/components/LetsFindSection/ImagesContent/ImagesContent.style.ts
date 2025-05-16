import styled, { css } from "styled-components"
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
`
export const SearchWrapper = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  max-width: 808px;
  margin-top: 87px;
`
export const SearchInput = styled.input`
  width: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 19px 19px 18px 54px;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
`
export const SearchIcon = styled.img`
  position: absolute;
  padding: 18px 0 18px 25px;
`
