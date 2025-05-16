import styled, { css } from "styled-components"

export const LetsFindSectionWrapper = styled.section<{ $isActive?: boolean }>`
  width: 100%;

  position: relative;
  height: 421px;
`

export const Container = styled.div`
  max-width: ${({ theme }) => theme.container}px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PreviewImage = styled.img`
  width: 100%;
  object-fit: fill;
  height: 100%;
`
export const LetsFindContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  height: 100%;
  padding: 98px 0px 97px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

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

  color: ${({ theme }) => theme.colors.white};
`
export const LetsFindTitleOrange = styled.span`
  color: ${({ theme }) => theme.colors.orangeExplicit};
`
export const LetsFindTitleWhite = styled.span`
  color: ${({ theme }) => theme.colors.white};
`

/* git commit -m "feat: add site Lets find section"
export const HeaderItemText = styled.p<{ $isActive?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: 400;
  font-size: 24px;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.orange : theme.colors.white)};
`
 */
