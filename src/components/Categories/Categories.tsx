import { useEffect, useState } from "react"

import PhotosService from "@/services/PhotosService"
import { UnsplashTopic } from "@/services/types"

import ErrorMessage from "../ErrorMessage/ErrorMessage"
import Spinner from "../Spinner/Spinner"
import { Cards, CategoriesWrapper, Container } from "./Categories.style"
import CategoryCard from "./CategoryCard/CategoryCard"

const Categories = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [cards, setCards] = useState<UnsplashTopic[]>([])
  const getCategories = async () => {
    setIsLoading(true)
    try {
      const response = await PhotosService.getPhotoTopics()
      setCards(response.data)
    } catch {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getCategories()
  }, [])
  return (
    <CategoriesWrapper>
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <Cards>{cards && cards.map((item) => <CategoryCard card={item} key={item.id} />)}</Cards>
        )}
        {error && <ErrorMessage text={"Something went wrong..."} />}
      </Container>
    </CategoriesWrapper>
  )
}
export default Categories
