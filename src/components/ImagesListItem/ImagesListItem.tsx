import {
  ImageImg,
  ImageItem,
  ImageItemIconWrapper,
  ImageItemPhoto,
  ImageItemPreview,
  ImageItemText,
  ImagePicture,
  ImageSourse,
  ImageWrapper,
  LoadingWrapper,
} from "./ImagesListItem.style"
import { ImagesListItemProps } from "./ImagesListItem.types"
import Notion from "@assets/icons/NotionActive.svg"
import NotionDisabled from "@assets/icons/NotionDisabled.svg"
import SmallNotion from "@assets/icons/SmallNotionActive.svg"
import SmallNotionDisabled from "@assets/icons/SmallNotionDisabled.svg"
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
          $isLoading={isLoading}
          src={card.urls.full}
          onLoad={handleImageLoad}
          alt={card.description || "Image"}
        />
      </ImageWrapper>
      <ImageItemPreview>
        <ImageItemText>{truncateText(card.description, 40)}</ImageItemText>
        <ImageItemIconWrapper onClick={(e) => handleStore(e)}>
          <ImagePicture>
            <ImageSourse
              srcSet={isCardSaved(card.id) ? SmallNotion : SmallNotionDisabled}
              media="(max-width: 480px)"
            />
            <ImageImg src={isCardSaved(card.id) ? Notion : NotionDisabled} alt="Icon" />
          </ImagePicture>
        </ImageItemIconWrapper>
      </ImageItemPreview>
    </ImageItem>
  )
}
export default ImagesListItem
