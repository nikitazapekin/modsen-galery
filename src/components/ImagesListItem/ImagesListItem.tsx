import {
  ImageItem,
  ImageItemIcon,
  ImageItemIconWrapper,
  ImageItemPhoto,
  ImageItemPreview,
  ImageItemText,
  ImageWrapper,
  LoadingWrapper,
} from "./ImagesListItem.style"
import { ImagesListItemProps } from "./ImagesListItem.types"
import Notion from "@assets/icons/NotionActive.svg"
import NotionDisabled from "@assets/icons/NotionDisabled.svg"
import useLocalStorageCards from "@/hooks/useLocalStorage"
import { useState } from "react"
import Spinner from "../Spinner/Spinner"

const ImagesListItem = ({ card, toggle }: ImagesListItemProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const truncateText = (text: string, maxLength: number) => {
    if (!text) return "Title is missed"
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
  }
  const { isCardSaved, toggleCard } = useLocalStorageCards()
  const handleStore = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    toggleCard(card)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <ImageItem onClick={() => toggle(card)}>
      <ImageWrapper>
        {isLoading && (
          <LoadingWrapper>
            <Spinner />
          </LoadingWrapper>
        )}
        <ImageItemPhoto
          src={card.urls.full}
          onLoad={handleImageLoad}
          style={{ display: isLoading ? "none" : "block" }}
          alt={card.description || "Image"}
        />
      </ImageWrapper>

      <ImageItemPreview>
        <ImageItemText>{truncateText(card.description, 40)}</ImageItemText>
        <ImageItemIconWrapper onClick={(e) => handleStore(e)}>
          <ImageItemIcon src={isCardSaved(card.id) ? Notion : NotionDisabled} alt={"Icon"} />
        </ImageItemIconWrapper>
      </ImageItemPreview>
    </ImageItem>
  )
}

export default ImagesListItem

/* import {
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
  const handleStore = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    toggleCard(card)
  }

  return (
    <ImageItem onClick={() => toggle(card)}>
      <ImageItemPhoto src={card.urls.full} />

      <ImageItemPreview>
        <ImageItemText>{truncateText(card.description, 40)}</ImageItemText>
        <ImageItemIconWrapper onClick={(e) => handleStore(e)}>
          <ImageItemIcon src={isCardSaved(card.id) ? Notion : NotionDisabled} alt={"Icon"} />
        </ImageItemIconWrapper>
      </ImageItemPreview>
    </ImageItem>
  )
}

export default ImagesListItem
 */
