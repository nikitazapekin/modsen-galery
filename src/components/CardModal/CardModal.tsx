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
const CardModal = ({ toggle, card }: CardModalProps) => {
  const { isCardSaved, toggleCard } = useLocalStorageCards()
  useLockBodyScroll(true)
  const handleStore = () => {
    toggleCard(card)
  }
  const handleNext = () => {
    console.log(1)
  }
  return createPortal(
    <>
      <ModalOverlay />
      <Modal>
        <ModalPreviewContent>
          <ModalBtn onClick={handleNext}>
            <ModalBtnImage src={ArrowNext} />
          </ModalBtn>
          <ModalPreview onClick={(e) => e.stopPropagation()}>
            <ImgClose src={Close} onClick={toggle} alt={"Icon"} />
            <ModalPreviewImage src={card.urls.full} alt="Card" />
            <ModalDescription>
              <ModalDescriptionText>
                {card.description ? card.description : "Title is missed"}
              </ModalDescriptionText>
              <ModalIconWrapper onClick={handleStore}>
                <ModalIcon src={isCardSaved(card.id) ? Icon : IconDisabled} alt="Icon" />
              </ModalIconWrapper>
            </ModalDescription>
          </ModalPreview>
          <ModalBtn onClick={handleNext}>
            <ModalBtnImage src={ArrowPrev} />
          </ModalBtn>
        </ModalPreviewContent>
      </Modal>
    </>,
    document.body,
  )
}

export default CardModal
