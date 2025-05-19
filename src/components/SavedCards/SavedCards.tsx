import useLocalStorageCards from "@/hooks/useLocalStorage"
import { Container, SavedCardsWrapper } from "./SavedCards.style"
import SavedCardsPreview from "./SavedCardsPreview/SavedCardsPreview"
import SavedCardsGrid from "./SavedCardsGrid/SavedCardsGrid"
import EmptyList from "./EmptyList/EmptyList"
const SavedCards = () => {
  const { savedCards } = useLocalStorageCards()
  return (
    <SavedCardsWrapper>
      <Container>
        {savedCards.length > 0 ? (
          <>
            <SavedCardsPreview />
            <SavedCardsGrid savedCards={savedCards} />
          </>
        ) : (
          <EmptyList />
        )}
      </Container>
    </SavedCardsWrapper>
  )
}

export default SavedCards
