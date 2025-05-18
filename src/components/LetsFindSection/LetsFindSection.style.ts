import { media } from "@/pages/Breakpoints"
import styled, { css } from "styled-components"

export const LetsFindSectionWrapper = styled.section<{ $isActive?: boolean }>`
  width: 100%;

  position: relative;
  height: 421px;

  ${media.mobiles`
 height: 202px;
       `}
`

export const Container = styled.div`
  max-width: ${({ theme }) => theme.container + 40}px;

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

export const PreviewPicture = styled.picture`
  cursor: pointer;
  width: 100%;
  object-fit: fill;
  height: 100%;
`
export const PreviewSourse = styled.source``
export const PreviewImg = styled.img`
  width: 100%;
  object-fit: fill;
  height: 100%;
`

export const LetsFindContent = styled.div<{ hasSearchInput: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  height: 100%;
  padding: ${({ hasSearchInput }) =>
    hasSearchInput ? "65px 20px 65px 20px" : "98px 20px 97px 20px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ hasSearchInput }) => media.mobiles`
    padding: ${hasSearchInput ? "30px 20px 20px 20px" : "45px 20px 45px 20px"};
  `}
`
