import { Button } from "@/components/Button/Button"
import { theme } from "@/utils/theme"
import { ThemeProvider } from "styled-components"
import { WrapperContainer, PageWrapper, GlobalStyle } from "../Containers"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import LetsFindSection from "@/components/LetsFindSection/LetsFindSection"

const Category = () => {
  return (
    <PageWrapper>
      <Header />
      <GlobalStyle />
      <WrapperContainer>
        <LetsFindSection />
      </WrapperContainer>
      <Footer />
    </PageWrapper>
  )
}

export default Category
