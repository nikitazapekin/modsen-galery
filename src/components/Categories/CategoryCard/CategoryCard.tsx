import { Link } from "react-router-dom"
import { CategoryCardImage, CategoryCardText, CategoryCardWrapper } from "./CategoryCard.style"
import { CategoryCardProps } from "./CategoryCard.types"

const CaregoryCard = ({ card }: CategoryCardProps) => {
  return (
    <Link to={`/images/0/12/${card.slug}`}>
      <CategoryCardWrapper>
        <CategoryCardImage src={card.cover_photo.urls.thumb} alt={"Category"} />
        <CategoryCardText>{card.title}</CategoryCardText>
      </CategoryCardWrapper>
    </Link>
  )
}

export default CaregoryCard
