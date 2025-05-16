import styled from "styled-components"
export const FooterWrapper = styled.footer`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.gradients.grayGradient};
  padding: 80px 18px 30px 18px;
`

export const Container = styled.div`
  max-width: ${({ theme }) => theme.largeContainer + 36}px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`
export const FooterContent = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  column-gap: 85.6px;
`

export const LogoImage = styled.img`
  cursor: pointer;
`
export const FooterDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 267px;
`
export const FooterDescriptionText = styled.span`
  font-weight: 400;
  max-width: 248px;
  font-size: 14px;
  line-height: 157%;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.roboto};
`

export const FooterNetworks = styled.ul`
  display: flex;
  column-gap: 12px;
  margin-top: 5px;
`

export const FooterNetwork = styled.li<{ border: string; background: string }>`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ background }) => background};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ border }) => border};
`
export const FooterNetworkImage = styled.img``
export const FooterCopyRight = styled.span`
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
`
