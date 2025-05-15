import styled, { css } from "styled-components"
export const HeaderItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  column-gap: 8px;
`

export const HeaderItemText = styled.p`
  max-width: ${({ theme }) => theme.container}px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: 400;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
`

export const HeaderItemIcon = styled.img``
