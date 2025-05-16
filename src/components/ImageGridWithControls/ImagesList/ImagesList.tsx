import { ImageListWrapper } from "./ImagesList.style"
import { ImagesListProps } from "./ImagesList.types"
import ImagesListItem from "./ImagesListItem/ImagesListItem"

const ImagesList = ({ cards }: ImagesListProps) => {
  console.log("card", cards)
  return (
    <ImageListWrapper>
      {cards && cards.map((card) => <ImagesListItem card={card} />)}
    </ImageListWrapper>
  )
}

export default ImagesList
