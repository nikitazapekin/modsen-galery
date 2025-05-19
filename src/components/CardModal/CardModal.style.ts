import styled from "styled-components"

import { media } from "@/styles/Breakpoints"

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
  pointer-events: none;
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
  pointer-events: auto;
  transform: translateY(-20px);
  ${media.ipad`
    display: none;
  `}
`
export const ModalBtnImage = styled.img``
export const ModalPreview = styled.div`
  display: flex;
  max-width: 700px;
  width: 100%;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 11;
  pointer-events: auto;

  ${media.mobiles`
      width: 346px;
      height: 346px;
      `}
`
export const ModalPreviewContent = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  column-gap: 48px;
  pointer-events: none;
  padding: 0 20px;

  ${media.ipad`
flex-direction: column;
   `}
`
export const ModalDescription = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 80px;
  padding: 26.46px 62.58px 26.37px 38.5px;

  ${media.mobiles`
min-height: 59px;
align-items: center;
padding: 5px 40px 5px 51.5px;
   `}
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
  pointer-events: auto;
`
export const ModalIcon = styled.img`
  width: 20.83px;
  height: 29.17px;
  ${media.mobiles`
width: 12px;
height: 16px;
   `}
`
export const ModalPreviewImage = styled.img`
  height: 520px;
  width: 100%;

  ${media.mobiles`
      width:100%;
      height:286px;
      `}
`
export const ImgClose = styled.img`
  position: absolute;
  left: 100%;
  bottom: 100%;
  z-index: 111;
  transform: translateY(-9.64px) translateX(10px);
  cursor: pointer;
  pointer-events: auto;
  ${media.ipad`
  transform: translateY(15px) translateX(-15px);
  right: 0;
  top: 0;
  left: auto;
  bottom: auto;
    `}
`
export const ClosePicture = styled.picture`
  cursor: pointer;
  position: absolute;
  left: 100%;
  bottom: 100%;
  z-index: 111;
  transform: translateY(-9.64px) translateX(10px);
  cursor: pointer;
  pointer-events: auto;
  ${media.ipad`
  transform: translateY(15px) translateX(-15px);
  right: 0;
  top: 0;
  left: auto;
  bottom: auto;
    `}
`
export const CloseSourse = styled.source``
export const CloseImg = styled.img``
export const BottomBtns = styled.div`
  display: none;
  margin-top: 20px;
  ${media.ipad`
  display: flex;
  column-gap: 77px
  `}
`
export const BottomBtn = styled.div`
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
  pointer-events: auto;
  ${media.tablets`
 width: 40px;
 height: 40px;
  `}
`
export const ArrowPicture = styled.picture`
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.tablets`
 width: 40px;
 height: 40px;
  `}
`

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`

export const ArrowSourse = styled.source``
export const ArrowImg = styled.img``
