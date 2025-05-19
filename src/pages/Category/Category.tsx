import Categories from "@/components/Categories/Categories"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import LetsFindSection from "@/components/LetsFindSection/LetsFindSection"
import { GlobalStyle, PageWrapper, WrapperContainer } from "@/styles/Containers"

const Category = () => {
  return (
    <PageWrapper>
      <Header />
      <GlobalStyle />
      <WrapperContainer>
        <LetsFindSection />
        <Categories />
      </WrapperContainer>
      <Footer />
    </PageWrapper>
  )
}
export default Category
