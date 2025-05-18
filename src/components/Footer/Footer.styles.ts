import { media } from "@/pages/Breakpoints"
import styled from "styled-components"

export const FooterWrapper = styled.footer`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.gradients.grayGradient};
  padding: 80px 18px 30px 18px;
  position: relative;
  z-index: 5;

  ${media.mobiles`
  padding: 33px 18px 11px 18px;
      `}
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
  ${media.macBook`
flex-direction: column;
align-items: center;
width: 100%;
row-gap: 34px;

`}
`
export const FooterItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 85.6px;

  ${media.tablets`
display: grid;
    grid-template-columns: repeat(2, auto);
    grid-row-gap: 34px

`}

  ${media.mobiles`
display: grid;
    grid-template-columns: repeat(1, auto);
    grid-row-gap: 34px;
    padding: 0 61px;

`}
`
export const LogoImage = styled.img`
  cursor: pointer;
`

export const FooterDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 267px;

  ${media.mobiles`
align-self: flex-start;
   margin-left: 47px;
 

`}
`

export const FooterDescriptionText = styled.span`
  font-weight: 400;
  max-width: 248px;
  font-size: 14px;
  line-height: 157%;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.roboto};

  ${media.ipad`
      max-width: 100%;  
    `}

  ${media.mobiles`
  max-width: 227px;

`}
`

export const FooterNetworks = styled.ul`
  display: flex;
  column-gap: 12px;
  margin-top: 5px;
`

export const FooterNetwork = styled.li`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  box-sizing: border-box;
  transition: 0.4s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    border: none;
  }
`

export const FooterNetworkImage = styled.img``

export const FooterCopyRight = styled.span`
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
`
