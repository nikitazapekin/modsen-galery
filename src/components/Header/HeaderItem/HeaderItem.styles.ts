import styled from "styled-components"

export const HeaderItemWrapper = styled.div<{ $isActive?: boolean }>`
  cursor: pointer;
  display: flex;
  column-gap: 8px;
  position: relative;
  padding-bottom: 8px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.orange};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    `
      &:after {
        transform: scaleX(1);
        background: ${theme.colors.orange};
      }
    `}
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
