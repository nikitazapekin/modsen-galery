import { media } from "@/pages/Breakpoints"
import styled from "styled-components"

export const CategoriesWrapper = styled.section`
  width: 100%;
  height: 100%;
  margin: 40px 0px 95px 0px;
  ${media.tablets`
  margin: 20px 0px 20px 0px;
  `}
`
export const Container = styled.div`
  max-width: ${({ theme }) => theme.container + 40}px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`
export const Cards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 285px 285px 285px;

  grid-gap: 26px;
  justify-content: center;
  ${media.ipad`
        grid-template-columns: 285px 285px;
        `}

  ${media.tablets`
  
  grid-template-columns: minmax(346px, 500px)
         `}
`
