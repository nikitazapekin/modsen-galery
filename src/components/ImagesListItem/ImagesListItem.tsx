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

const ImagesListItem = ({ card }: ImagesListItemProps) => {
  const truncateText = (text: string, maxLength: number) => {
    if (!text) return "Title is missed"
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
  }

  const { isCardSaved, toggleCard } = useLocalStorageCards()

  const handleStore = () => {
    toggleCard(card)
  }

  return (
    <ImageItem>
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

/* import { useState } from "react"
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
const ImagesListItem = ({ card }: ImagesListItemProps) => {
  const truncateText = (text: string, maxLength: number) => {
    if (!text) return "Title is missed"
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
  }
  const [isStored, setIsStored] = useState<boolean>(false)
  const handleStore = () => {
    setIsStored((prev) => !prev)
  }
  return (
    <ImageItem>
      <ImageItemPhoto src={card.urls.full} />

      <ImageItemPreview>
        <ImageItemText>{truncateText(card.description, 20)}</ImageItemText>
        <ImageItemIconWrapper onClick={handleStore}>
          <ImageItemIcon src={isStored ? Notion : NotionDisabled} alt={"Icon"} />
        </ImageItemIconWrapper>
      </ImageItemPreview>
    </ImageItem>
  )
}

export default ImagesListItem
 */
