import { useLocation } from "react-router-dom"
import { Item } from "./BurgerItem.style"
import { BurgerItemProps } from "./BurgerItem.types"

const BurgerItem = ({ item }: BurgerItemProps) => {
  const location = useLocation()
  const pathSegments = location.pathname.split("/")
  const firstPathSegment = pathSegments[1] || ""

  const isActive =
    (firstPathSegment === "" && item.text === "Category") ||
    (firstPathSegment === "images" && item.text === "Images") ||
    (firstPathSegment === "favourites" && item.text === "Favourites")

  return <Item $isActive={isActive}>{item.text}</Item>
}

export default BurgerItem
