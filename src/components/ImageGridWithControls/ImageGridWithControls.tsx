// ImageGridWithControls.tsx
import { useParams } from "react-router-dom"
import { Container, ImageGridWrapper } from "./ImageGridWithControls.style"
import SortBar from "./SortBar/SortBar"
import useFetchImages from "@/hooks/useFetchImages"
import ImagesList from "./ImagesList/ImagesList"

interface ImageGridWithControlsProps {
  searchQuery?: string
}

const ImageGridWithControls = ({ searchQuery }: ImageGridWithControlsProps) => {
  const { page, limit, type } = useParams()
  const { images, loading, error } = useFetchImages(page, limit, type, searchQuery)

  return (
    <ImageGridWrapper>
      <Container>
        <SortBar />
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && <ImagesList cards={images} />}
      </Container>
    </ImageGridWrapper>
  )
}

export default ImageGridWithControls
/* import { useParams } from "react-router-dom"
import { Container, ImageGridWrapper } from "./ImageGridWithControls.style"
import SortBar from "./SortBar/SortBar"
import { useEffect, useState } from "react"
import PhotosService from "@/services/PhotosService"
import { UnsplashPhoto } from "@/services/types"
import ImagesList from "./ImagesList/ImagesList"
import useFetchImages from "@/hooks/useFetchImages"
const ImageGridWithControls = () => {
  const { page, limit, type } = useParams()
  const { images, loading, error } = useFetchImages(page, limit, type)

  return (
    <ImageGridWrapper>
      <Container>
        <SortBar />
        <ImagesList cards={images} />
      </Container>
    </ImageGridWrapper>
  )
}

export default ImageGridWithControls
 */
