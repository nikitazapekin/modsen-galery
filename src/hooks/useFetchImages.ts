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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [total, setTotal] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const getImages = async (
    page: string | undefined,
    limit: string | undefined,
    type: string | undefined,
    query: string | undefined,
    orderBy: "relevant" | "latest",
  ) => {
    try {
      setLoading(true)
      if ((type === "search" || location.pathname.includes("/search")) && query === undefined) {
        return
      }
      let fetchedImages: UnsplashPhoto[] = []
      let response: UnsplashSearchResponse | null = null

      if (query) {
        response = (await PhotosService.searchPhotos(Number(page), Number(limit), query, orderBy))
          .data
        fetchedImages = response.results
        setTotal(response.total)
        setTotalPages(response.total_pages)
      } else if (type && type !== "random") {
        response = (await PhotosService.searchPhotos(Number(page), Number(limit), type, orderBy))
          .data
        fetchedImages = response.results
        setTotal(response.total)
        setTotalPages(response.total_pages)
      } else {
        const randomResponse = await PhotosService.getRandom(Number(limit))
        fetchedImages = randomResponse.data
        setTotal(1200)
        setTotalPages(100)
      }

      setImages(fetchedImages)
      setError(null)
    } catch (e) {
      setError(e as Error)
      setImages([])
      setTotal(0)
      setTotalPages(0)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!(type === "search" || location.pathname.includes("/search")) || query !== undefined) {
      getImages(page, limit, type, query, orderBy)
    }
  }, [page, limit, type, query, orderBy])

  return { images, loading, error, total, total_pages: totalPages }
}

export default useFetchImages
