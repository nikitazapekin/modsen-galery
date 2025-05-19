import styled from "styled-components"

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  row-gap: 10px;
`
export const ErrorTitle = styled.h1`
  width: 100%;
  height: auto;
  font-weight: 700;
  font-size: 64px;
  text-transform: capitalize;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.lexend};
  max-width: 684px;
  margin: 0 auto;
`
export const ErrorTitleBlack = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
`
export const ErrorTitleOrange = styled.span`
  color: ${({ theme }) => theme.colors.orangeExplicit};
`

export const ErrorDescription = styled.h1`
  width: 100%;
  height: auto;
  font-weight: 400;
  font-size: 24px;
  text-transform: capitalize;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.lexend};
  max-width: 908px;
  margin: 0 auto;
`
export const ErrorDescriptionBlack = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
`
export const ErrorDescriptionOrange = styled.span`
  color: ${({ theme }) => theme.colors.orangeExplicit};
`

export const ErrorButton = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`

export const ErrorButtonText = styled.p`
  font-size: 48px;
  text-transform: capitalize;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.roboto};
  transition: transform 0.3s ease;

  ${ErrorButton}:hover & {
    transform: translateX(-10px);
  }
`

export const ErrorButtonIcon = styled.img`
  position: absolute;
  right: -40px;
  opacity: 0;
  transition: all 0.3s ease;
  width: 30px;
  height: 30px;

  ${ErrorButton}:hover & {
    opacity: 1;
    right: -30px;
  }
`
