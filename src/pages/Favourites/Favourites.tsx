import { WrapperContainer, PageWrapper, GlobalStyle } from "../Containers"
import Header from "@/components/Header/Header"
import SavedCards from "@/components/SavedCards/SavedCards"
import Footer from "@/components/Footer/Footer"
const Favourites = () => {
  return (
    <PageWrapper>
      <Header />
      <GlobalStyle />
      <WrapperContainer>
        <SavedCards />
      </WrapperContainer>
      <Footer />
    </PageWrapper>
  )
}

export default Favourites
