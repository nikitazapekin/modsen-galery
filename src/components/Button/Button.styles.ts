import styled, { css } from "styled-components"
import type { ButtonVariant, ButtonSize } from "./Button.types"
const buttonSizes: Record<ButtonSize, ReturnType<typeof css>> = {
  small: css`
    padding: 8px 12px;
    font-size: 12px;
  `,
  medium: css`
    padding: 12px 16px;
    font-size: 14px;
  `,
  large: css`
    padding: 16px 24px;
    font-size: 16px;
  `,
}

const buttonVariants: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background-color: #3b82f6;
    color: white;
    border: none;

    &:hover {
      background-color: #2563eb;
    }
  `,
  secondary: css`
    background-color: #e2e8f0;
    color: #1e293b;
    border: none;

    &:hover {
      background-color: #cbd5e1;
    }
  `,
  danger: css`
    background-color: #ef4444;
    color: white;
    border: none;

    &:hover {
      background-color: #dc2626;
    }
  `,
  outline: css`
    background-color: transparent;
    color: #3b82f6;
    border: 1px solid #3b82f6;

    &:hover {
      background-color: #f8fafc;
    }
  `,
}

export const StyledButton = styled.button<{
  $variant: ButtonVariant
  $size: ButtonSize
  $fullWidth: boolean
  $isLoading: boolean
}>`
  cursor: pointer;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ $variant }) => buttonVariants[$variant]}
  ${({ $size }) => buttonSizes[$size]}
  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}
  ${({ $isLoading }) => $isLoading && "opacity: 0.7; cursor: wait;"}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
