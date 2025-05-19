import styled from "styled-components"

import { media } from "@/styles/Breakpoints"

export const CategoryCardWrapper = styled.div`
  height: 244px;
  position: relative;
  cursor: pointer;
  ${media.tablets`
  height: 180px;
           `}
`
export const CategoryCardImage = styled.img`
  width: 100%;
  height: 100%;
`
export const CategoryCardText = styled.div`
  position: absolute;
  left: 10px;
  bottom: 20px;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  -webkit-text-stroke: ${({ theme }) => theme.borders.textBorder};
  text-stroke: ${({ theme }) => theme.borders.textBorder};
  paint-order: stroke fill;
`

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`
export const ImageWrapper = styled.div`
  height: 244px;
  position: relative;
  cursor: pointer;
  ${media.tablets`
  height: 180px;
           `}
`
