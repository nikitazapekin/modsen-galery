import Category from "@assets/icons/Category.svg"
import Favourites from "@assets/icons/Favourites.svg"
import Images from "@assets/icons/Images.svg"
import CategoryActive from "@assets/iconsActive/Category.svg"
import FavouritesActive from "@assets/iconsActive/Favourites.svg"
import ImagesActive from "@assets/iconsActive/Images.svg"

import { HeaderBtnType } from "./Header.types"

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
    link: "/images/1/12/random",
  },
  {
    id: 3,
    text: "Favourites",
    icon: Favourites,
    activeIcon: FavouritesActive,
    link: "/favourites",
  },
]
