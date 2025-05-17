import { theme } from "@/constants/theme"
import { ThemeProvider } from "styled-components"
import { WrapperContainer, PageWrapper, GlobalStyle } from "../Containers"
import Header from "@/components/Header/Header"
import SavedCards from "@/components/SavedCards/SavedCards"

const Favourites = () => {
  return (
    <PageWrapper>
      <Header />
      <GlobalStyle />
      <WrapperContainer>
        <SavedCards />
      </WrapperContainer>
      <Header />
    </PageWrapper>
  )
}

export default Favourites
