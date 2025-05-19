import Background from "@assets/preview/PreviewImage.png"
import BackgroundSmall from "@assets/preview/PreviewSmallImage.png"
import { useLocation } from "react-router-dom"

import CatalogContent from "./CatalogContent/CatalogContent"
import ImagesContent from "./ImagesContent/ImagesContent"
import {
  Container,
  LetsFindContent,
  LetsFindSectionWrapper,
  PreviewImg,
  PreviewPicture,
  PreviewSourse,
} from "./LetsFindSection.style"
import { LetsFindSectionProps } from "./LetsFindSection.types"

const LetsFindSection = ({ onSearch }: LetsFindSectionProps) => {
  const location = useLocation()
  const isImagesPage = location.pathname.startsWith("/images")
  return (
    <LetsFindSectionWrapper>
      <PreviewPicture>
        <PreviewSourse srcSet={BackgroundSmall} media="(max-width: 480px)" />
        <PreviewImg src={Background} alt={"Background"} />
      </PreviewPicture>
      <Container>
        <LetsFindContent $hasSearchInput={isImagesPage}>
          {isImagesPage ? <ImagesContent onSearch={onSearch} /> : <CatalogContent />}
        </LetsFindContent>
      </Container>
    </LetsFindSectionWrapper>
  )
}
export default LetsFindSection
