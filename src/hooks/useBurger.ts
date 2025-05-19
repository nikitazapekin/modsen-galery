import { useState, useCallback } from "react"
const useBurger = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState)

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])
  return {
    isOpen,
    toggle,
  }
}

export default useBurger
