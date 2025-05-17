import { theme } from "@/utils/theme"
import { ThemeProvider } from "styled-components"
import { WrapperContainer, PageWrapper, GlobalStyle } from "../Containers"
import Header from "@/components/Header/Header"

const Favourites = () => {
  return (
    <PageWrapper>
      <Header />
      <GlobalStyle />
      <WrapperContainer>ыфсфыс</WrapperContainer>
      <Header />
    </PageWrapper>
  )
}

export default Favourites
