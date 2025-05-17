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

  useEffect(() => {
    const fetchImages = async () => {
      if (!page || !limit) return

      setLoading(true)
      try {
        let fetchedImages: UnsplashPhoto[]

        if (query) {
          const searchResponse = await PhotosService.searchPhotos(
            Number(page),
            Number(limit),
            query,
            orderBy,
          )
          fetchedImages = searchResponse.data.results
        } else if (type === "random") {
          const randomResponse = await PhotosService.getRandom(Number(page), Number(limit))
          fetchedImages = randomResponse.data
        } else if (type) {
          const topicsResponse = await PhotosService.getTopicsPhoto(
            Number(page),
            Number(limit),
            type,
            orderBy,
          )
          fetchedImages = topicsResponse.data
        } else {
          return
        }

        setImages(fetchedImages)
        setError(null)
      } catch (e) {
        setError(e as Error)
        console.error("Failed to fetch images:", e)
        setImages([])
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [page, limit, type, query, orderBy])

  return { images, loading, error }
}

export default useFetchImages
