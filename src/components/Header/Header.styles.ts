import styled, { css } from "styled-components"
export const HeaderWrapper = styled.header`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.gradients.grayGradient};
  padding: 21px 0 22px 0;
`

export const Container = styled.div`
  max-width: ${({ theme }) => theme.container}px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoImage = styled.img`
  cursor: pointer;
`
export const HeaderNav = styled.nav`
  display: flex;
`
export const HeaderList = styled.ul`
  display: flex;
  column-gap: 44px;
`
