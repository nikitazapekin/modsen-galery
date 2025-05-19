import { UnsplashPhoto } from "@/services/types"

export interface ImagesListItemProps {
  card: UnsplashPhoto
  toggle: (card?: UnsplashPhoto) => void
}
