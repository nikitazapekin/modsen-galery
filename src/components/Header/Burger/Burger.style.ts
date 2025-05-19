import styled from "styled-components"

import { media } from "@/styles/Breakpoints"

export const BurgerOverlay = styled.div`
  position: absolute;
  z-index: 6;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`
export const BurgerWrapper = styled.div<{ $isOpen: boolean }>`
  z-index: 11;
  width: 100%;
  transition: 0.4s ease-in-out;
  height: auto;
  background: ${({ theme }) => theme.gradients.grayGradient};
  padding: 11px 20px 21px 20px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 6;
  display: none;
  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0%)" : "translateX(-100%)")};
  ${media.tablets`
 display: block;
   `}
`
export const BurgerButton = styled.img`
  cursor: pointer;
`
export const BurgerPreview = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
`

export const BurgerPreviewImage = styled.img`
  margin: 0 auto;
`
export const BurgerList = styled.ul`
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  row-gap: 11px;
`

export const BurgerNetworks = styled.ul`
  display: flex;
  column-gap: 12px;
  justify-content: center;
  margin-top: 16px;
`

export const BurgerNetwork = styled.li`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  box-sizing: border-box;
  transition: 0.4s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    border: none;
  }
`

export const BurgerNetworkImage = styled.img``
