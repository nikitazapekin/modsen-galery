import { media } from "@/pages/Breakpoints"
import styled, { css } from "styled-components"

export const SortBarWrapper = styled.div`
  max-width: 223px;
  display: flex;
  column-gap: 11px;
  align-self: flex-end;
  align-items: center;

  ${media.tablets`
    
  align-self: center
           `}
`

export const SortBarText = styled.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 150%;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.lexend};
`

export const SortPanelWrapper = styled.div`
  position: relative;
  height: auto;
`

export const SortPanel = styled.div`
  width: 146px;
  height: 41px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.tinyGray};
  border-radius: 16px;
  padding: 4.5px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`

export const SortPanelText = styled.span`
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
  text-align: center;
  color: ${({ theme }) => theme.colors.tinyGray};
  font-family: ${({ theme }) => theme.fonts.alumi};
`

export const SortPanelIcon = styled.img<{ $isOpenDropDown: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpenDropDown }) => ($isOpenDropDown ? "rotate(180deg)" : "rotate(0deg)")};
`

export const SortPanelDropDown = styled.div<{ $isOpenDropDown: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.tinyGray};
  overflow: hidden;
  z-index: 10;

  transition: all 0.3s ease-in-out;
  opacity: ${({ $isOpenDropDown }) => ($isOpenDropDown ? "1" : "0")};
  visibility: ${({ $isOpenDropDown }) => ($isOpenDropDown ? "visible" : "hidden")};
`

/* export const SortPanelDropDownItem = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.alumi};
  color: ${({ theme }) => theme.colors.tinyGray};
  padding: 10.5px 37px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.tinyGray};
  }
`
 */
