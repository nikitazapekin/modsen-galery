import useLocalStorageCards from "@/hooks/useLocalStorage"

import EmptyList from "./EmptyList/EmptyList"
import { Container, SavedCardsWrapper } from "./SavedCards.style"
import SavedCardsGrid from "./SavedCardsGrid/SavedCardsGrid"
import SavedCardsPreview from "./SavedCardsPreview/SavedCardsPreview"

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
