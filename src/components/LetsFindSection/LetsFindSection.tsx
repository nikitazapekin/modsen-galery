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
  const lastPathSegment = location.pathname.split("/").pop() || ""

  return (
    <LetsFindSectionWrapper>
      <PreviewImage src={Background} />
      <Container>
        <LetsFindContent $hasSearchInput={lastPathSegment == "images"}>
          {lastPathSegment == "images" ? <ImagesContent /> : <CatalogContent />}
        </LetsFindContent>
      </Container>
    </LetsFindSectionWrapper>
  )
}

export default LetsFindSection
