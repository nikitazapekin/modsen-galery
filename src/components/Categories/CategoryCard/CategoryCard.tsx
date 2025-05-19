import { Link } from "react-router-dom"
import {
  CategoryCardImage,
  CategoryCardText,
  CategoryCardWrapper,
  ImageWrapper,
  LoadingWrapper,
} from "./CategoryCard.style"
import { CategoryCardProps } from "./CategoryCard.types"
import { useState } from "react"
import Spinner from "@/components/Spinner/Spinner"
const CaregoryCard = ({ card }: CategoryCardProps) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }
  return (
    <Link to={`/images/1/12/search?query=${card.slug}`}>
      <CategoryCardWrapper>
        <ImageWrapper>
          {isLoading && (
            <LoadingWrapper>
              <Spinner />
            </LoadingWrapper>
          )}
          <CategoryCardImage
            src={card.cover_photo.urls.full}
            alt={"Category"}
            onLoad={handleImageLoad}
          />
        </ImageWrapper>
        <CategoryCardText>{card.title}</CategoryCardText>
      </CategoryCardWrapper>
    </Link>
  )
}

export default CaregoryCard
