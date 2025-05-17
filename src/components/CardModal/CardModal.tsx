import { createPortal } from "react-dom"
import {
  Modal,
  ModalBtn,
  ModalContent,
  ModalDescription,
  ModalIcon,
  ModalDescriptionText,
  ModalIconWrapper,
  ModalOverlay,
  ModalPreview,
  ModalPreviewImage,
} from "./CardModal.style"
import { CardModalProps } from "./CardModal.types"
import Icon from "@assets/icons/NotionActive.svg"
import IconDisabled from "@assets/icons/NotionDisabled.svg"
import useLocalStorageCards from "@/hooks/useLocalStorage"
const CardModal = ({ toggle, card }: CardModalProps) => {
  const { isCardSaved, toggleCard } = useLocalStorageCards()
  const handleStore = () => {
    toggleCard(card)
  }
  return createPortal(
    <>
      <ModalOverlay onClick={toggle} />
      <Modal>
        {/*
        <ModalContent>
        <ModalBtn>d</ModalBtn>
        <ModalBtn>d</ModalBtn>
        </ModalContent>
        */}
        <ModalPreview onClick={(e) => e.stopPropagation()}>
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
      </Modal>
    </>,
    document.body,
  )
}

export default CardModal
