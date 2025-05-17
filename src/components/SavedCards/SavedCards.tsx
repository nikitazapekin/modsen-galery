import {
  Container,
  SavedCardsPreview,
  SavedCardsSubtitle,
  SavedCardsTitle,
  SavedCardsWrapper,
} from "./SavedCards.style"

const SavedCards = () => {
  return (
    <SavedCardsWrapper>
      <Container>
        <SavedCardsPreview>
          <SavedCardsSubtitle>Saved by you</SavedCardsSubtitle>
          <SavedCardsTitle>Your favorites list</SavedCardsTitle>
        </SavedCardsPreview>
      </Container>
    </SavedCardsWrapper>
  )
}

export default SavedCards
