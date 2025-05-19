import ImagesListItem from "@/components/ImagesListItem/ImagesListItem"

import { SavedCardsGridWrapper } from "./SavedCardsGrid.style"
import { SavedCardsGridProps } from "./SavedCardsGrid.types"

const SavedCardsGrid = ({ savedCards }: SavedCardsGridProps) => {
  return (
    <SavedCardsGridWrapper>
      {savedCards.map((item) => (
        <ImagesListItem key={item.id} card={item} toggle={() => {}} />
      ))}
    </SavedCardsGridWrapper>
  )
}

export default SavedCardsGrid
