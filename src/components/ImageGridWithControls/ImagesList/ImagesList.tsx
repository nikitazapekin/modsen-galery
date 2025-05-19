import CardModal from "@/components/CardModal/CardModal"
import useToggleModal from "@/hooks/useTogggleModal"

import ImagesListItem from "../../ImagesListItem/ImagesListItem"
import { ImageListWrapper } from "./ImagesList.style"
import { ImagesListProps } from "./ImagesList.types"

const ImagesList = ({ cards }: ImagesListProps) => {
  const { isOpen, toggle, selectedCard } = useToggleModal()
  return (
    <ImageListWrapper>
      {cards && cards.map((card) => <ImagesListItem card={card} key={card.id} toggle={toggle} />)}
      {isOpen && <CardModal card={selectedCard} toggle={toggle} cards={cards} />}
    </ImageListWrapper>
  )
}
export default ImagesList
