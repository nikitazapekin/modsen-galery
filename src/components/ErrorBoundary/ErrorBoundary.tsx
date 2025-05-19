import { Component, ErrorInfo } from "react"

import ArrowNext from "@/assets/icons/Arrow.svg"

import {
  ErrorButton,
  ErrorButtonIcon,
  ErrorButtonText,
  ErrorContainer,
  ErrorDescription,
  ErrorDescriptionBlack,
  ErrorDescriptionOrange,
  ErrorTitle,
  ErrorTitleBlack,
  ErrorTitleOrange,
} from "./ErrorBoundary.style"
import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.types"

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error, errorInfo })
  }
  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
    window.location.href = "/"
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      return (
        <ErrorContainer>
          <ErrorTitle>
            <ErrorTitleBlack>Something went </ErrorTitleBlack>
            <ErrorTitleOrange>wrong</ErrorTitleOrange>
            <ErrorTitleBlack>.</ErrorTitleBlack>
          </ErrorTitle>
          <ErrorDescription>
            <ErrorDescriptionBlack>Error details: </ErrorDescriptionBlack>
            <ErrorDescriptionOrange>{this.state.error.message}.</ErrorDescriptionOrange>
          </ErrorDescription>
          <ErrorButton onClick={this.handleReset}>
            <ErrorButtonText>Try again</ErrorButtonText>
            <ErrorButtonIcon src={ArrowNext} alt="arrow" />
          </ErrorButton>
        </ErrorContainer>
      )
    }

    return this.props.children
  }
}
export default ErrorBoundary
