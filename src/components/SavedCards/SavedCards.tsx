import useLocalStorageCards from "@/hooks/useLocalStorage"
import { Container, SavedCardsWrapper } from "./SavedCards.style"
import SavedCardsPreview from "./SavedCardsPreview/SavedCardsPreview"
import SavedCardsGrid from "./SavedCardsGrid/SavedCardsGrid"

const SavedCards = () => {
  const { savedCards } = useLocalStorageCards()

  return (
    <SavedCardsWrapper>
      <Container>
        <SavedCardsPreview />
        <SavedCardsGrid savedCards={savedCards} />
      </Container>
    </SavedCardsWrapper>
  )
}

export default SavedCards
