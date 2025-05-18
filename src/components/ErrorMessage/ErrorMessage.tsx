import { ErrorMessageText } from "./ErrorMessage.style"
import { ErrorMessageProps } from "./ErrorMessage.types"

const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return <ErrorMessageText>{text}</ErrorMessageText>
}

export default ErrorMessage
