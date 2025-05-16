import { CategoryCardImage, CategoryCardText, CategoryCardWrapper } from "./CategoryCard.style"
import { CategoryCardProps } from "./CategoryCard.types"

const CaregoryCard = ({ card }: CategoryCardProps) => {
  return (
    <CategoryCardWrapper>
      <CategoryCardImage src={card.image} alt={card.text} />
      <CategoryCardText>{card.text}</CategoryCardText>
    </CategoryCardWrapper>
  )
}

export default CaregoryCard
