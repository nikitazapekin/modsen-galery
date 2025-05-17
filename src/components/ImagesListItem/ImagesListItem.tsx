import {
  ImageItem,
  ImageItemIcon,
  ImageItemIconWrapper,
  ImageItemPhoto,
  ImageItemPreview,
  ImageItemText,
} from "./ImagesListItem.style"
import { ImagesListItemProps } from "./ImagesListItem.types"
import Notion from "@assets/icons/NotionActive.svg"
import NotionDisabled from "@assets/icons/NotionDisabled.svg"
import useLocalStorageCards from "@/hooks/useLocalStorage"

const ImagesListItem = ({ card, toggle }: ImagesListItemProps) => {
  const truncateText = (text: string, maxLength: number) => {
    if (!text) return "Title is missed"
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
  }

  const { isCardSaved, toggleCard } = useLocalStorageCards()

  const handleStore = () => {
    toggleCard(card)
  }

  return (
    <ImageItem onClick={() => toggle(card)}>
      <ImageItemPhoto src={card.urls.full} />

      <ImageItemPreview>
        <ImageItemText>{truncateText(card.description, 40)}</ImageItemText>
        <ImageItemIconWrapper onClick={handleStore}>
          <ImageItemIcon src={isCardSaved(card.id) ? Notion : NotionDisabled} alt={"Icon"} />
        </ImageItemIconWrapper>
      </ImageItemPreview>
    </ImageItem>
  )
}

export default ImagesListItem
