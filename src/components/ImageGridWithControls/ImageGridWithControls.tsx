import { useParams } from "react-router-dom"
import { Container, ImageGridWrapper } from "./ImageGridWithControls.style"
import SortBar from "./SortBar/SortBar"
import { useEffect, useState } from "react"
import PhotosService from "@/services/PhotosService"
import { UnsplashPhoto } from "@/services/types"
import ImagesList from "./ImagesList/ImagesList"
const ImageGridWithControls = () => {
  const { page, limit, type } = useParams()
  const [images, setImages] = useState<UnsplashPhoto[]>([])
  const handleGetImages = async () => {
    try {
      let response
      if (type == "random") {
        response = await PhotosService.getRandom(Number(page), Number(limit))
      } else {
        response = await PhotosService.getTopicsPhoto(Number(page), Number(limit), type)
      }
      console.log("res", response.data)
      setImages(response.data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    handleGetImages()
  }, [page])

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
