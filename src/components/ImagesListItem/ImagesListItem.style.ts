import { media } from "@/styles/Breakpoints"
import styled from "styled-components"
export const ImageItem = styled.div`
  height: 232px;
  height: auto;
  border: 1px solid #f0f1f1;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #d9d9d9;
  }
  ${media.mobiles`
min-height: 170px;
         `}
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 173px;
  ${media.mobiles`
height: 135px;
         `}
`
export const ImageItemPhoto = styled.img<{ $isLoading: boolean }>`
  width: 100%;
  height: 100%;

  display: ${({ $isLoading }) => ($isLoading ? "none" : "block")};
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
export const ImageItemPreview = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 9.6px 9.5px 9.6px 21px;
  align-items: center;
  column-gap: 8px;
  ${media.mobiles`
 padding: 4.06px 34px 4.06px 35.5px;
         `}
`
export const ImageItemText = styled.h4`
  font-weight: 500;
  font-size: 17px;
  line-height: 150%;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.lexend};
`
export const ImageItemIconWrapper = styled.div`
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 39px;
  height: 39px;
  background-color: ${({ theme }) => theme.colors.grayCard};
  ${media.mobiles`
 min-width: 29px;
 height: 29px;
         `}
`
export const ImageItemIcon = styled.img``
export const ImagePicture = styled.picture`
  cursor: pointer;
  min-width: 39px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.mobiles`
 min-width: 29px;
 height: 29px;
 
         `}
`
export const ImageSourse = styled.source``
export const ImageImg = styled.img``
