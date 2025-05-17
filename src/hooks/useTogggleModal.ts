import { useState, useCallback } from "react"

const useToggleModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState)

  const handleOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggle = useCallback((card, cardIndex) => {
    setIsOpen((prev) => !prev)
  }, [])
  return {
    isOpen,
    handleOpen,
    handleClose,
    toggle,
  }
}

export default useToggleModal
