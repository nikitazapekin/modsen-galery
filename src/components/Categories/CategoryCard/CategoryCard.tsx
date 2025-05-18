import { Link } from "react-router-dom"
import { CategoryCardImage, CategoryCardText, CategoryCardWrapper } from "./CategoryCard.style"
import { CategoryCardProps } from "./CategoryCard.types"
const CaregoryCard = ({ card }: CategoryCardProps) => {
  return (
    <Link to={`/images/1/12/${card.slug}`}>
      <CategoryCardWrapper>
        <CategoryCardImage src={card.cover_photo.urls.full} alt={"Category"} />
        <CategoryCardText>{card.title}</CategoryCardText>
      </CategoryCardWrapper>
    </Link>
  )
}

export default CaregoryCard
