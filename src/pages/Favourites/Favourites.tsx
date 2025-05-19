import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import SavedCards from "@/components/SavedCards/SavedCards"
import { GlobalStyle, PageWrapper, WrapperContainer } from "@/styles/Containers"

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
