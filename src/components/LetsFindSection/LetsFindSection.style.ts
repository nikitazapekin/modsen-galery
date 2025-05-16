import styled, { css } from "styled-components"

export const LetsFindSectionWrapper = styled.section<{ $isActive?: boolean }>`
  width: 100%;

  position: relative;
  height: 421px;
`

export const Container = styled.div`
  max-width: ${({ theme }) => theme.container}px;
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
export const LetsFindContent = styled.div<{ hasSearchInput: boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  height: 100%;
  padding: ${({ hasSearchInput }) => (hasSearchInput ? "65px 0px 65px 0px" : "98px 0px 97px 0px")};
  display: flex;
  flex-direction: column;
  align-items: center;
`
