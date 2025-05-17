// ImageGridWithControls.tsx
import { useParams } from "react-router-dom"
import { Container, ImageGridWrapper } from "./ImageGridWithControls.style"
import SortBar from "./SortBar/SortBar"
import useFetchImages from "@/hooks/useFetchImages"
import ImagesList from "./ImagesList/ImagesList"
import { useState } from "react"

interface ImageGridWithControlsProps {
  searchQuery?: string
}

const ImageGridWithControls = ({ searchQuery }: ImageGridWithControlsProps) => {
  const { page, limit, type } = useParams()
  const [orderBy, setOrderBy] = useState<"relevant" | "latest">("relevant")

  const { images, loading, error } = useFetchImages(page, limit, type, searchQuery, orderBy)
  const handleSetOrderBy = (value: "relevant" | "latest") => {
    console.log("val", value)
    setOrderBy(value)
  }
  return (
    <ImageGridWrapper>
      <Container>
        <SortBar handleSetOrderBy={handleSetOrderBy} />
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && <ImagesList cards={images} />}
      </Container>
    </ImageGridWrapper>
  )
}

export default ImageGridWithControls
