import Category from "@/pages/Category/Category"
import { MAIN_PAGE, NOTFOUND_PAGE } from "./consts"
import NotFound from "@/pages/NotFound/NotFound"

export const routes = [
  {
    path: MAIN_PAGE,
    Component: Category,
  },
  {
    path: NOTFOUND_PAGE,
    Component: NotFound,
  },
]
