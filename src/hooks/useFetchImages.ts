import { useEffect, useState } from "react"
import PhotosService from "@/services/PhotosService"
import { UnsplashPhoto, UnsplashSearchResponse } from "@/services/types"
const useFetchImages = (
  page: string | undefined,
  limit: string | undefined,
  type: string | undefined,
  query?: string,
  orderBy: "relevant" | "latest" = "relevant",
) => {
  const [images, setImages] = useState<UnsplashPhoto[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [total, setTotal] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)

  useEffect(() => {
    const fetchImages = async () => {
      if (!page || !limit) return
      if (location.pathname.includes("/search") && query === undefined) {
        return
      }
      setLoading(true)
      try {
        let fetchedImages: UnsplashPhoto[]
        let searchResponse: UnsplashSearchResponse | null = null

        if (query) {
          searchResponse = (
            await PhotosService.searchPhotos(Number(page), Number(limit), query, orderBy)
          ).data
          fetchedImages = searchResponse.results
          setTotal(searchResponse.total)
          setTotalPages(searchResponse.total_pages)
        } else if (type === "random") {
          const randomResponse = await PhotosService.getRandom(Number(page), Number(limit))
          fetchedImages = randomResponse.data
          setTotal(0)
          setTotalPages(0)
        } else if (type) {
          searchResponse = (
            await PhotosService.searchPhotos(Number(page), Number(limit), type, orderBy)
          ).data
          fetchedImages = searchResponse.results
          console.log("RESP", searchResponse)
          setTotal(searchResponse.total)
          setTotalPages(searchResponse.total_pages)
        } else {
          const randomResponse = await PhotosService.getRandom(Number(page), Number(limit))
          fetchedImages = randomResponse.data
          setTotal(0)
          setTotalPages(0)
        }
        setImages(fetchedImages)
        setError(null)
      } catch (e) {
        setError(e as Error)
        console.error("Failed to fetch images:", e)
        setImages([])
        setTotal(0)
        setTotalPages(0)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [page, limit, type, query, orderBy])

  return { images, loading, error, total, total_pages: totalPages }
}

export default useFetchImages
