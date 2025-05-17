import styled, { css } from "styled-components"

export const SavedCardsWrapper = styled.section`
  padding: 65px 0 65px 0;
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
export const Container = styled.div`
  max-width: 908px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const SavedCardsPreview = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  align-items: center;
`

export const SavedCardsGrid = styled.div``
