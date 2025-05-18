import { createPortal } from "react-dom"
import ArrowNext from "@assets/icons/next.svg"
import ArrowPrev from "@assets/icons/Prev.svg"
import Close from "@assets/icons/Close.svg"
import {
  Modal,
  ModalBtn,
  ModalDescription,
  ModalIcon,
  ModalDescriptionText,
  ModalIconWrapper,
  ModalOverlay,
  ModalPreview,
  ModalPreviewImage,
  ModalPreviewContent,
  ModalBtnImage,
  ImgClose,
} from "./CardModal.style"
import { CardModalProps } from "./CardModal.types"
import Icon from "@assets/icons/NotionActive.svg"
import IconDisabled from "@assets/icons/NotionDisabled.svg"
import useLocalStorageCards from "@/hooks/useLocalStorage"
import useLockBodyScroll from "@/hooks/useLockBodyScroll"
import { useEffect, useState } from "react"
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
  return createPortal(
    <>
      <ModalOverlay onClick={toggle} />
      <Modal>
        <ModalPreviewContent>
          <ModalBtn onClick={handlePrev}>
            <ModalBtnImage src={ArrowPrev} />
          </ModalBtn>
          <ModalPreview>
            <ImgClose src={Close} onClick={toggle} alt={"Icon"} />
            <ModalPreviewImage src={currentCard.urls.full} alt="Card" />
            <ModalDescription>
              <ModalDescriptionText>
                {currentCard.description ? currentCard.description : "Title is missed"}
              </ModalDescriptionText>
              <ModalIconWrapper onClick={handleStore}>
                <ModalIcon src={isCardSaved(currentCard.id) ? Icon : IconDisabled} alt="Icon" />
              </ModalIconWrapper>
            </ModalDescription>
          </ModalPreview>
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
