import { useParams, useNavigate, useLocation } from "react-router-dom"
import { Container, ImageGridWrapper } from "./ImageGridWithControls.style"
import SortBar from "./SortBar/SortBar"
import useFetchImages from "@/hooks/useFetchImages"
import ImagesList from "./ImagesList/ImagesList"
import { useEffect, useState } from "react"
import Spinner from "../Spinner/Spinner"
import { ImageGridWithControlsProps } from "./ImageGridWithControls.types"
import PaginationBtns from "./PaginationBtns/PaginationBtns"
import NothingFound from "./NothingFound/NothingFound"
import ErrorMessage from "../ErrorMessage/ErrorMessage"

const ImageGridWithControls = ({ searchQuery }: ImageGridWithControlsProps) => {
  const { page, limit, type } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [orderBy, setOrderBy] = useState<"relevant" | "latest">("relevant")
  const [query, setQuery] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (searchQuery) {
      setQuery(searchQuery)
    } else if (location.pathname.includes("/search")) {
      const searchParams = new URLSearchParams(location.search)
      const urlQuery = searchParams.get("query")
      setQuery(urlQuery || undefined)
    } else {
      setQuery(undefined)
    }
  }, [location.search, location.pathname, searchQuery])

  const {
    images = [],
    loading,
    error,
    total,
    total_pages,
  } = useFetchImages(page, limit, type, query, orderBy)

  const handleSetOrderBy = (value: "relevant" | "latest") => {
    setOrderBy(value)
  }

  const currentPage = parseInt(page || "1", 10)
  const currentLimit = parseInt(limit || "10", 10)

  const handleSetPage = (newPage: number) => {
    if (location.pathname.includes("/search")) {
      navigate(`/images/${newPage}/${currentLimit}/search?query=${query}`)
    } else if (type) {
      navigate(`/images/${newPage}/${currentLimit}/${type}`)
    } else {
      navigate(`/images/${newPage}/${currentLimit}`)
    }
  }

  return (
    <ImageGridWrapper>
      <Container>
        {images.length > 0 && <SortBar handleSetOrderBy={handleSetOrderBy} />}
        {loading && <Spinner />}
        {error && <ErrorMessage text="Something went wrong..." />}
        {!loading && !error && <ImagesList cards={images} />}
        {!loading && images.length === 0 && <NothingFound />}
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
