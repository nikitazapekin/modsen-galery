import styled from "styled-components"
export const Item = styled.li<{ $isActive: boolean }>`
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.orange : theme.colors.white)};
  font-family: ${({ theme }) => theme.colors.roboto};
`
