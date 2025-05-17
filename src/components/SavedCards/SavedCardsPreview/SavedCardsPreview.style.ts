import styled, { css } from "styled-components"

export const SavedCardsPreviewWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  align-items: center;
  margin-top: 57px;
`

export const SavedCardsTitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.roboto};
`
export const SavedCardsSubtitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  color: ${({ theme }) => theme.colors.orange};
`
