import { Cards, CategoriesWrapper, Container } from "./Categories.style"
import { categories } from "./consts"
import CategoryCard from "./CategoryCard/CategoryCard"
import PhotosService from "@/services/PhotosService"
import { useEffect, useState } from "react"
import { UnsplashTopic } from "@/services/types"
const Categories = () => {
  const [cards, setCards] = useState<UnsplashTopic[]>([])
  const getCategories = async () => {
    try {
      const response = await PhotosService.getPhotoTopics()
      setCards(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])
  return (
    <CategoriesWrapper>
      <Container>
        <Cards>
          {cards.map((item) => (
            <CategoryCard card={item} key={item.id} />
          ))}
        </Cards>
      </Container>
    </CategoriesWrapper>
  )
}

export default Categories
