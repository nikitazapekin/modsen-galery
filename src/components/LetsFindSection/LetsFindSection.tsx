// LetsFindSection.tsx
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
import { LetsFindSectionProps } from "./LetsFindSection.types"
const LetsFindSection = ({ onSearch }: LetsFindSectionProps) => {
  const location = useLocation()
  const isImagesPage = location.pathname.startsWith("/images")
  return (
    <LetsFindSectionWrapper>
      <PreviewImage src={Background} />
      <Container>
        <LetsFindContent $hasSearchInput={isImagesPage}>
          {isImagesPage ? <ImagesContent onSearch={onSearch} /> : <CatalogContent />}
        </LetsFindContent>
      </Container>
    </LetsFindSectionWrapper>
  )
}

export default LetsFindSection
