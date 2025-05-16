import { Cards, CategoriesWrapper, Container } from "./Categories.style"
import { categories } from "./consts"
import CategoryCard from "./CategoryCard/CategoryCard"
const Categories = () => {
  return (
    <CategoriesWrapper>
      <Container>
        <Cards>
          {categories.map((item) => (
            <CategoryCard card={item} />
          ))}
        </Cards>
      </Container>
    </CategoriesWrapper>
  )
}

export default Categories
