import { Cards, CategoriesWrapper, Container } from "./Categories.style"
import CategoryCard from "./CategoryCard/CategoryCard"
import PhotosService from "@/services/PhotosService"
import { useEffect, useState } from "react"
import { UnsplashTopic } from "@/services/types"
import Spinner from "../Spinner/Spinner"
const Categories = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [cards, setCards] = useState<UnsplashTopic[]>([])
  const getCategories = async () => {
    setIsLoading(true)
    try {
      const response = await PhotosService.getPhotoTopics()
      setCards(response.data)
    } catch (e) {
      console.log(e)
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
      </Container>
    </CategoriesWrapper>
  )
}

export default Categories
