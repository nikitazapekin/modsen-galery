import Category from "@/pages/Category/Category"
import { FAVOURITES_PAGE, IMAGES_PAGE, MAIN_PAGE, NOTFOUND_PAGE, SEARCH_PAGE } from "./consts"
import NotFound from "@/pages/NotFound/NotFound"
import Images from "@/pages/Images/Images"
import Favourites from "@/pages/Favourites/Favourites"
import { Component } from "react"

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
