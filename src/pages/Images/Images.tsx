import { Button } from "@/components/Button/Button"
import { theme } from "@/utils/theme"
import { ThemeProvider } from "styled-components"
import { WrapperContainer, PageWrapper, GlobalStyle } from "../Containers"
import Header from "@/components/Header/Header"
import LetsFindSection from "@/components/LetsFindSection/LetsFindSection"

const Images = () => {
  return (
    <PageWrapper>
      <Header />
      <GlobalStyle />
      <WrapperContainer>
        <LetsFindSection />
      </WrapperContainer>
      <Header />
    </PageWrapper>
  )
}

export default Images
