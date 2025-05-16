import styled, { css } from "styled-components"

export const ImageItem = styled.div`
  min-height: 232px;
  height: auto;
  width: 285px;
  border: 1px solid #f0f1f1;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #d9d9d9;
  }
`

export const ImageItemPhoto = styled.img`
  width: 100%;
  height: 173px;
`
export const ImageItemPreview = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 9.6px 9.5px;
  align-items: center;
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
  width: 39px;
  height: 39px;
  background-color: ${({ theme }) => theme.colors.grayCard};
`
export const ImageItemIcon = styled.img``
