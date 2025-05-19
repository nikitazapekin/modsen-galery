import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  ul, ol {
list-style: none;
text-decoration: none;
  }
`
export const PageWrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 100%;
`
export const WrapperContainer = styled.main`
  flex: 1 1 auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
`
