import {
  Container,
  ContentText,
  ContentTextBlack,
  ContentTextOrange,
  LogoSubTitle,
  LogoTitle,
  LogoWrapper,
  NotFoundWrapper,
} from "./NotFoundViewstyle"

const NotFoundView = () => {
  return (
    <NotFoundWrapper>
      <Container>
        <LogoWrapper>
          <LogoTitle>404</LogoTitle>
          <LogoSubTitle>NOT FOUND</LogoSubTitle>
        </LogoWrapper>

        <ContentText>
          <ContentTextBlack>The page was </ContentTextBlack>
          <ContentTextOrange>not found </ContentTextOrange>
          <ContentTextBlack>, please return to the main page.</ContentTextBlack>
        </ContentText>
      </Container>
    </NotFoundWrapper>
  )
}

export default NotFoundView
