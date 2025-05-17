import { UnsplashPhoto } from "@/services/types"
import { useState, useCallback, useEffect } from "react"

const useToggleModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState)
  const [selectedCard, setSelectedCard] = useState<UnsplashPhoto | null>(null)
  const handleOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggle = useCallback((card?: UnsplashPhoto) => {
    setSelectedCard(card)
    setIsOpen((prev) => !prev)
  }, [])

  return {
    isOpen,
    handleOpen,
    handleClose,
    toggle,
    selectedCard,
  }
}

export default useToggleModal
