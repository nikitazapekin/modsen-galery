import styled, { css } from "styled-components"

export const CategoryCardWrapper = styled.div`
  width: 285px;
  height: 244px;
  position: relative;
  cursor: pointer;
`
export const CategoryCardImage = styled.img`
  width: 100%;
  height: 100%;
`

export const CategoryCardText = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};

  -webkit-text-stroke: ${({ theme }) => theme.borders.textBorder};
  text-stroke: ${({ theme }) => theme.borders.textBorder};
  paint-order: stroke fill;
`
