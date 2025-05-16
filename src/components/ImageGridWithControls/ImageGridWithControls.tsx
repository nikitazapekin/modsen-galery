import { useParams } from "react-router-dom"
import { Container, ImageGridWrapper } from "./ImageGridWithControls.style"
import SortBar from "./SortBar/SortBar"

const ImageGridWithControls = () => {
  const { page, limit, type } = useParams()

  console.log(page, limit, type)
  return (
    <ImageGridWrapper>
      <Container>
        <SortBar />
      </Container>
    </ImageGridWrapper>
  )
}

export default ImageGridWithControls
