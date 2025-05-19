import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import NotFoundView from "@/components/NotFoundView/NotFoundView"
import { GlobalStyle, PageWrapper, WrapperContainer } from "@/styles/Containers"

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
