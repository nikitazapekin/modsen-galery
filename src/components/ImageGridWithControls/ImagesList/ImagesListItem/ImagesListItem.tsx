import { ImageItem, ImageItemPhoto } from "./ImagesListItem.style"
import { ImagesListItemProps } from "./ImagesListItem.types"

const ImagesListItem = ({ card }: ImagesListItemProps) => {
  return (
    <ImageItem>
      <ImageItemPhoto src={card.urls.full} />
    </ImageItem>
  )
}

export default ImagesListItem
