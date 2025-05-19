import { useState } from "react"

import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import ImageGridWithControls from "@/components/ImageGridWithControls/ImageGridWithControls"
import LetsFindSection from "@/components/LetsFindSection/LetsFindSection"
import { GlobalStyle, PageWrapper, WrapperContainer } from "@/styles/Containers"

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
