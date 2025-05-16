import Category from "../../assets/icons/Category.svg"
import CategoryActive from "../../assets/iconsActive/Category.svg"
import Images from "../../assets/icons/Images.svg"
import ImagesActive from "../../assets/iconsActive/Images.svg"
import Favourites from "../../assets/icons/Favourites.svg"
import FavouritesActive from "../../assets/iconsActive/Favourites.svg"

type HeaderBtnType = {
  id: number
  text: "Category" | "Images" | "Favourites"
  icon: string
  activeIcon: string
  link: string
}

export const headerBtns: HeaderBtnType[] = [
  {
    id: 1,
    text: "Category",
    icon: Category,
    activeIcon: CategoryActive,
    link: "/",
  },
  {
    id: 2,
    text: "Images",
    icon: Images,
    activeIcon: ImagesActive,
    link: "/images",
  },
  {
    id: 3,
    text: "Favourites",
    icon: Favourites,
    activeIcon: FavouritesActive,
    link: "/favourites",
  },
]
