import { useParams, useNavigate } from "react-router-dom"
import { Container, ImageGridWrapper } from "./ImageGridWithControls.style"
import SortBar from "./SortBar/SortBar"
import useFetchImages from "@/hooks/useFetchImages"
import ImagesList from "./ImagesList/ImagesList"
import { useState } from "react"
import Spinner from "../Spinner/Spinner"
import { ImageGridWithControlsProps } from "./ImageGridWithControls.types"
import PaginationBtns from "./PaginationBtns/PaginationBtns"
import NothingFound from "./NothingFound/NothingFound"
import useToggleModal from "@/hooks/useTogggleModal"
const ImageGridWithControls = ({ searchQuery }: ImageGridWithControlsProps) => {
  const { page, limit, type } = useParams()
  const navigate = useNavigate()
  const [orderBy, setOrderBy] = useState<"relevant" | "latest">("relevant")
  const { isOpen, toggle } = useToggleModal(false)
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
  /*   const handleSetPage = (newPage: number) => {
  //  navigate(`/images/${newPage}/${limit}/${type}`)  
  navigate(`/images/${newPage}/12/search?query=${searchQuery}`)
  } */

  const handleSetPage = (newPage: number) => {
    const searchParams = new URLSearchParams(location.search)
    const currentQuery = searchParams.get("query") || ""

    if (location.pathname.includes("/search")) {
      navigate(`/images/${newPage}/${limit}/search?query=${currentQuery}`)
    } else {
      navigate(`/images/${newPage}/${limit}/${type}`)
    }
  }

  return (
    <ImageGridWrapper>
      <Container>
        {images.length > 0 && <SortBar handleSetOrderBy={handleSetOrderBy} />}
        {loading && <Spinner />}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && <ImagesList cards={images} />}
        {!loading && images.length == 0 && <NothingFound />}
        {images.length > 0 && (
          <PaginationBtns
            total={total}
            total_pages={total_pages}
            currentPage={currentPage}
            handleSetPage={handleSetPage}
          />
        )}
      </Container>
    </ImageGridWrapper>
  )
}

export default ImageGridWithControls
