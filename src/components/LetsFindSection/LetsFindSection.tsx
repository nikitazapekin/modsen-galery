import { useLocation } from "react-router-dom"
import {
  Container,
  LetsFindContent,
  LetsFindSectionWrapper,
  PreviewImage,
} from "./LetsFindSection.style"
import Background from "@assets/preview/PreviewImage.png"
import ImagesContent from "./ImagesContent/ImagesContent"
import CatalogContent from "./CatalogContent/CatalogContent"
const LetsFindSection = () => {
  const location = useLocation()
  const isImagesPage = location.pathname.startsWith("/images")

  return (
    <LetsFindSectionWrapper>
      <PreviewImage src={Background} />
      <Container>
        <LetsFindContent $hasSearchInput={isImagesPage}>
          {isImagesPage ? <ImagesContent /> : <CatalogContent />}
        </LetsFindContent>
      </Container>
    </LetsFindSectionWrapper>
  )
}

export default LetsFindSection
