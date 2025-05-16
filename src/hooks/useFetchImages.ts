// hooks/useFetchImages.ts
import { useEffect, useState } from "react"
import PhotosService from "@/services/PhotosService"
import { UnsplashPhoto } from "@/services/types"

const useFetchImages = (
  page: string | undefined,
  limit: string | undefined,
  type: string | undefined,
) => {
  const [images, setImages] = useState<UnsplashPhoto[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchImages = async () => {
      if (!page || !limit || !type) return

      setLoading(true)
      try {
        let response
        if (type === "random") {
          response = await PhotosService.getRandom(Number(page), Number(limit))
        } else {
          response = await PhotosService.getTopicsPhoto(Number(page), Number(limit), type)
        }
        setImages(response.data)
        setError(null)
      } catch (e) {
        setError(e as Error)
        console.error(e)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [page, limit, type])

  return { images, loading, error }
}

export default useFetchImages
