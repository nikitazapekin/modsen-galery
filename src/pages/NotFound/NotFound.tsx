import Header from "@/components/Header/Header"
import { WrapperContainer, PageWrapper, GlobalStyle } from "@/pages/Containers"
import Footer from "@/components/Footer/Footer"
import NotFoundView from "@/components/NotFoundView/NotFoundView"
const NotFound = () => {
  return (
    <PageWrapper>
      <Header />
      <GlobalStyle />
      <WrapperContainer>
        <NotFoundView />
      </WrapperContainer>
      <Footer />
    </PageWrapper>
  )
}

export default NotFound
