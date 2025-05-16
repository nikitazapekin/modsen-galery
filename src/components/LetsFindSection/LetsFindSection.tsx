import {
  Container,
  LetsFindContent,
  LetsFindSectionWrapper,
  LetsFindTitle,
  LetsFindTitleOrange,
  LetsFindTitleWhite,
  PreviewImage,
} from "./LetsFindSection.style"
import Background from "@assets/preview/PreviewImage.png"
const LetsFindSection = () => {
  return (
    <LetsFindSectionWrapper>
      <PreviewImage src={Background} />
      <Container>
        <LetsFindContent>
          <LetsFindTitle>
            <LetsFindTitleWhite>let's find some {` `}</LetsFindTitleWhite>
            <LetsFindTitleOrange>Images {` `}</LetsFindTitleOrange>
            <LetsFindTitleWhite>here!</LetsFindTitleWhite>
          </LetsFindTitle>
        </LetsFindContent>
      </Container>
    </LetsFindSectionWrapper>
  )
}

export default LetsFindSection
