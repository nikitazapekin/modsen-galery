import { Button } from "@/components/Button/Button"
import { theme } from "@/utils/theme"
import { ThemeProvider } from "styled-components"
import { WrapperContainer, PageWrapper, GlobalStyle } from "../Containers"
import Header from "@/components/Header/Header"

const Category = () => {
  return (
    <PageWrapper>
      <Header />
      <GlobalStyle />
      <WrapperContainer></WrapperContainer>
      <Header />
    </PageWrapper>
  )
}

export default Category
