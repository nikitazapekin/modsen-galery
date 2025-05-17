import styled from "styled-components"
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  background: rgba(168, 168, 168, 0.4);
  z-index: 4;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 6;
  pointer-events: auto;
  display: flex;
  column-gap: 48px;
  align-items: center;
  width: 100%;
`
export const ModalBtn = styled.div`
  cursor: pointer;
  border: none;
  outline: none;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 33;
  background-color: ${({ theme }) => theme.colors.orangeExplicit};
`
export const ModalBtnImage = styled.img`
  &:nth-child(1) {
    transform: rotate(180deg);
  }
`
export const ModalPreview = styled.div`
  display: flex;
  max-width: 700px;
  width: 100%;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 11;
  pointer-events: auto;
`
export const ModalPreviewContent = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  column-gap: 48px;
`
export const ModalDescription = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 80px;
  padding: 26.46px 62.58px 26.37px 38.5px;
`

export const ModalDescriptionText = styled.div`
  font-weight: 500;
  font-size: 17px;
  line-height: 150%;
  letter-spacing: -0.03em;
  font-family: ${({ theme }) => theme.fonts.lexend};
  color: ${({ theme }) => theme.colors.darkGray};
`

export const ModalIconWrapper = styled.div`
  cursor: pointer;
  width: auto;
  height: auto;
`
export const ModalIcon = styled.img`
  width: 20.83px;
  height: 29.17px;
`
export const ModalPreviewImage = styled.img`
  height: 520px;
  width: 100%;
`
export const ImgClose = styled.img`
  position: absolute;
  left: 100%;
  bottom: 100%;
  z-index: 111;
  transform: translateY(-9.64px) translateX(10px);

  cursor: pointer;
`
