import styled from "styled-components"

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`
export const PaginationButton = styled.button<{ isActive?: boolean }>`
  cursor: pointer;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.orangeExplicit : "transparent"};
  width: ${({ isActive }) => (isActive ? "30" : "auto")}px;
  height: ${({ isActive }) => (isActive ? "30" : "24")}px;
  font-weight: 600;
  font-size: 18px;
  line-height: 128%;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.white : theme.colors.darkGray)};
  font-family: ${({ theme }) => theme.fonts.lexend};
  border: none;
  outline: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PaginationButtonArrowWrapper = styled.div`
  cursor: pointer;
  margin-top: 4px;
`
export const PaginationButtonArrow = styled.img<{ isReversed?: boolean }>`
  transform: ${({ isReversed }) => (!isReversed ? "rotate(180deg)" : "rotate(0deg)")};
`
