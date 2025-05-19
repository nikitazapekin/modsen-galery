import { UnsplashPhoto } from "@/services/types"
import { useCallback, useMemo } from "react"
import { useSyncExternalStore } from "react"
const LOCAL_STORAGE_KEY = "savedUnsplashCards"
const notifySubscribers = () => {
  window.dispatchEvent(new Event("local-storage-changed"))
}
const useLocalStorageCards = () => {
  const getSnapshot = useCallback(() => {
    return localStorage.getItem(LOCAL_STORAGE_KEY) || "[]"
  }, [])
  const subscribe = useCallback((callback: () => void) => {
    window.addEventListener("storage", callback)
    window.addEventListener("local-storage-changed", callback)
    return () => {
      window.removeEventListener("storage", callback)
      window.removeEventListener("local-storage-changed", callback)
    }
  }, [])
  const savedCardsJson = useSyncExternalStore(subscribe, getSnapshot)
  const savedCards = useMemo<UnsplashPhoto[]>(() => JSON.parse(savedCardsJson), [savedCardsJson])

  const addCard = useCallback((card: UnsplashPhoto) => {
    const currentCards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]")
    const cardExists = currentCards.some((c: UnsplashPhoto) => c.id === card.id)
    if (!cardExists) {
      const updatedCards = [...currentCards, card]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCards))
      notifySubscribers()
    }
  }, [])
  const removeCard = useCallback((cardId: string) => {
    const currentCards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]")
    const updatedCards = currentCards.filter((c: UnsplashPhoto) => c.id !== cardId)

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCards))
    notifySubscribers()
  }, [])
  const isCardSaved = useCallback(
    (cardId: string) => savedCards.some((c) => c.id === cardId),
    [savedCards],
  )
  const toggleCard = useCallback(
    (card: UnsplashPhoto) => {
      if (isCardSaved(card.id)) {
        removeCard(card.id)
      } else {
        addCard(card)
      }
    },
    [addCard, removeCard, isCardSaved],
  )
  return {
    savedCards,
    addCard,
    removeCard,
    isCardSaved,
    toggleCard,
  }
}
export default useLocalStorageCards
