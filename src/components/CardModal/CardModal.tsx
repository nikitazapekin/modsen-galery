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

const CardModal = ({ toggle, card }: CardModalProps) => {
  return createPortal(
    <>
      <ModalOverlay onClick={toggle} />

      <Modal>
        <ModalContent>
          <ModalBtn>d</ModalBtn>
          <ModalPreview>
            <ModalPreviewImage src={card.urls.full} alt="Card" />
            <ModalDescription>
              <ModalDescriptionText>
                {card.description ? card.description : "Title is missed"}
              </ModalDescriptionText>
              <ModalIconWrapper>
                <ModalIcon src={Icon} alt="Icon" />
              </ModalIconWrapper>
            </ModalDescription>
          </ModalPreview>
          <ModalBtn>d</ModalBtn>
        </ModalContent>
      </Modal>
    </>,
    document.body,
  )
}

export default CardModal
/* import { createPortal } from "react-dom"
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

const CardModal = ( ) => {
  return createPortal(
    <>
      <ModalOverlay  // onClick={toggle}
       />
    <Modal>
      <ModalContent>
        <ModalBtn>d</ModalBtn>
        <ModalPreview>
   

          qeeffeq
        </ModalPreview>
        <ModalBtn>d</ModalBtn>
      </ModalContent>
    </Modal>
    </>
    ,
    document.body,
  )
}

export default CardModal
 */
