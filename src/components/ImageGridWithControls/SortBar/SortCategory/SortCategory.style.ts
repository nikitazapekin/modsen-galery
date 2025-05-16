import styled, { css } from "styled-components"
export const SortPanelDropDownItem = styled.div`
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
