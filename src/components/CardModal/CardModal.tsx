import Close from "@assets/icons/Close.svg"
import CloseSmall from "@assets/icons/CloseSmall.svg"
import ArrowNext from "@assets/icons/next.svg"
import ArrowNextSmall from "@assets/icons/NextSmall.svg"
import Icon from "@assets/icons/NotionActive.svg"
import IconDisabled from "@assets/icons/NotionDisabled.svg"
import ArrowPrev from "@assets/icons/Prev.svg"
import ArrowPrevSmall from "@assets/icons/PrevSmall.svg"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

import useLocalStorageCards from "@/hooks/useLocalStorage"
import useLockBodyScroll from "@/hooks/useLockBodyScroll"

import Spinner from "../Spinner/Spinner"
import {
  ArrowImg,
  ArrowPicture,
  ArrowSourse,
  BottomBtn,
  BottomBtns,
  CloseImg,
  ClosePicture,
  CloseSourse,
  LoadingWrapper,
  Modal,
  ModalBtn,
  ModalBtnImage,
  ModalDescription,
  ModalDescriptionText,
  ModalIcon,
  ModalIconWrapper,
  ModalOverlay,
  ModalPreview,
  ModalPreviewContent,
  ModalPreviewImage,
} from "./CardModal.style"
import { CardModalProps } from "./CardModal.types"

const CardModal = ({ toggle, card, cards }: CardModalProps) => {
  const { isCardSaved, toggleCard } = useLocalStorageCards()
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  useLockBodyScroll(true)
  useEffect(() => {
    const index = cards.findIndex((item) => item.id === card.id)
    setCurrentIndex(index >= 0 ? index : 0)
  }, [card.id, cards])
  const currentCard = cards[currentIndex] || card
  const handleStore = () => {
    toggleCard(currentCard)
  }
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }
  const substringTitle = (text) => {
    return text.length > 33 ? `${text.substring(0, 33)}...` : text
  }

  const [isLoading, setIsLoading] = useState(true)
  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return createPortal(
    <>
      <ModalOverlay onClick={toggle} />
      <Modal>
        <ModalPreviewContent>
          <ModalBtn onClick={handlePrev}>
            <ModalBtnImage src={ArrowPrev} />
          </ModalBtn>
          <ModalPreview>
            <ClosePicture>
              <CloseSourse srcSet={CloseSmall} media="(max-width: 768px)" onClick={toggle} />
              <CloseImg onClick={toggle} src={Close} alt="Logo" />
            </ClosePicture>

            {isLoading && (
              <LoadingWrapper>
                <Spinner />
              </LoadingWrapper>
            )}
            <ModalPreviewImage src={currentCard.urls.full} onLoad={handleImageLoad} alt="Card" />

            <ModalDescription>
              <ModalDescriptionText>
                {currentCard.description
                  ? substringTitle(currentCard.description)
                  : "Title is missed"}
              </ModalDescriptionText>
              <ModalIconWrapper onClick={handleStore}>
                <ModalIcon src={isCardSaved(currentCard.id) ? Icon : IconDisabled} alt="Icon" />
              </ModalIconWrapper>
            </ModalDescription>
          </ModalPreview>
          <BottomBtns>
            <BottomBtn onClick={handlePrev}>
              <ArrowPicture>
                <ArrowSourse srcSet={ArrowPrevSmall} media="(max-width: 768px)" />
                <ArrowImg src={ArrowPrev} alt="icon" />
              </ArrowPicture>
            </BottomBtn>
            <BottomBtn onClick={handleNext}>
              <ArrowPicture>
                <ArrowSourse srcSet={ArrowNextSmall} media="(max-width: 768px)" />
                <ArrowImg src={ArrowNext} alt="icon" />
              </ArrowPicture>
            </BottomBtn>
          </BottomBtns>
          <ModalBtn onClick={handleNext}>
            <ModalBtnImage src={ArrowNext} />
          </ModalBtn>
        </ModalPreviewContent>
      </Modal>
    </>,
    document.body,
  )
}
export default CardModal
