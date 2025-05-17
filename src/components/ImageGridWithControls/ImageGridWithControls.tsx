import { useParams, useNavigate } from "react-router-dom"
import { Container, ImageGridWrapper } from "./ImageGridWithControls.style"
import SortBar from "./SortBar/SortBar"
import useFetchImages from "@/hooks/useFetchImages"
import ImagesList from "./ImagesList/ImagesList"
import { useState } from "react"
import Spinner from "../Spinner/Spinner"
import { ImageGridWithControlsProps } from "./ImageGridWithControls.types"
import PaginationBtns from "./PaginationBtns/PaginationBtns"
const ImageGridWithControls = ({ searchQuery }: ImageGridWithControlsProps) => {
  const { page, limit, type } = useParams()
  const navigate = useNavigate()
  const [orderBy, setOrderBy] = useState<"relevant" | "latest">("relevant")

  const { images, loading, error, total, total_pages } = useFetchImages(
    page,
    limit,
    type,
    searchQuery,
    orderBy,
  )
  const handleSetOrderBy = (value: "relevant" | "latest") => {
    setOrderBy(value)
  }
  const currentPage = parseInt(page, 10) || 0

  const handleSetPage = (newPage: number) => {
    navigate(`/images/${newPage}/${limit}/${type}`)
  }
  return (
    <ImageGridWrapper>
      <Container>
        <SortBar handleSetOrderBy={handleSetOrderBy} />
        {loading && <Spinner />}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && <ImagesList cards={images} />}
        <PaginationBtns
          total={total}
          total_pages={total_pages}
          currentPage={currentPage}
          handleSetPage={handleSetPage}
        />
      </Container>
    </ImageGridWrapper>
  )
}

export default ImageGridWithControls
