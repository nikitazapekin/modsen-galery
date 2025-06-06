import styled from "styled-components"

import { media } from "@/styles/Breakpoints"

export const ImageListWrapper = styled.section`
  margin-top: 25px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 285px 285px 285px;

  justify-content: center;
  grid-row-gap: 23.85px;
  grid-column-gap: 26px;

  ${media.ipad`
        grid-template-columns: 285px 285px;
        `}

  ${media.tablets`
  
  grid-template-columns: minmax(346px, 500px)
         `}
`
