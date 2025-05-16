import { StyledButton } from "./Button.styles"
import type { ButtonProps } from "./Button.types"

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  isLoading = false,
  fullWidth = false,
  children,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $isLoading={isLoading}
      $fullWidth={fullWidth}
      disabled={disabled || isLoading}
      {...props}
    >
      {children}
    </StyledButton>
  )
}
