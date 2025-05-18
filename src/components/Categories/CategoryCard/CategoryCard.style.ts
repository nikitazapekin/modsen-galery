import { media } from "@/pages/Breakpoints"
import styled, { css } from "styled-components"

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
