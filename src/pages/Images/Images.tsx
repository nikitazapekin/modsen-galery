import { theme } from "@/utils/theme"
import { ThemeProvider } from "styled-components"
import { WrapperContainer, PageWrapper, GlobalStyle } from "../Containers"
import Header from "@/components/Header/Header"
import LetsFindSection from "@/components/LetsFindSection/LetsFindSection"
import ImageGridWithControls from "@/components/ImageGridWithControls/ImageGridWithControls"
import { useState } from "react"
import Footer from "@/components/Footer/Footer"

const Images = () => {
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <PageWrapper>
      <Header />
      <GlobalStyle />
      <WrapperContainer>
        <LetsFindSection onSearch={setSearchQuery} />
        <ImageGridWithControls searchQuery={searchQuery} />
      </WrapperContainer>
      <Footer />
    </PageWrapper>
  )
}

export default Images
