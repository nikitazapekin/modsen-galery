import styled from "styled-components"
export const HeaderItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  column-gap: 8px;
`
export const HeaderItemText = styled.p<{ $isActive?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: 400;
  font-size: 24px;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.orange : theme.colors.white)};
`
export const HeaderItemIcon = styled.img<{ $isActive?: boolean }>`
  box-shadow: ${({ $isActive }) => ($isActive ? "0 4px 4px 0 rgba(0, 0, 0, 0.25)" : "none")};
`
