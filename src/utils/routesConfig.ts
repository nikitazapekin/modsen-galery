import Category from "@/pages/Category/Category"
import Favourites from "@/pages/Favourites/Favourites"
import Images from "@/pages/Images/Images"
import NotFound from "@/pages/NotFound/NotFound"

import { FAVOURITES_PAGE, IMAGES_PAGE, MAIN_PAGE, NOTFOUND_PAGE, SEARCH_PAGE } from "./consts"

export const routes = [
  {
    path: MAIN_PAGE,
    Component: Category,
  },
  {
    path: IMAGES_PAGE,
    Component: Images,
  },
  {
    path: FAVOURITES_PAGE,
    Component: Favourites,
  },
  {
    path: SEARCH_PAGE,
    Component: Images,
  },
  {
    path: NOTFOUND_PAGE,
    Component: NotFound,
  },
]
