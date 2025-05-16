import styled, { css } from "styled-components"

export const CategoriesWrapper = styled.section`
  width: 100%;
  height: 100%;
  margin: 40px 0px 95px 0px;
`
export const Container = styled.div`
  max-width: ${({ theme }) => theme.container}px;
  width: 100%;
  margin: 0 auto;
`
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 26px;
  justify-content: center;
`
