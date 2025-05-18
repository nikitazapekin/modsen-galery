import { Link, useLocation } from "react-router-dom"
import { HeaderItemIcon, HeaderItemText, HeaderItemWrapper } from "./HeaderItem.styles"
import { HeaderItemProps } from "./HeaderItem.types"

const HeaderItem = ({ item }: HeaderItemProps) => {
  const location = useLocation()
  const pathSegments = location.pathname.split("/")
  const firstPathSegment = pathSegments[1] || ""

  const isActive =
    (firstPathSegment === "" && item.text === "Category") ||
    (firstPathSegment === "images" && item.text === "Images") ||
    (firstPathSegment === "favourites" && item.text === "Favourites")

  return (
    <Link to={item.link} style={{ textDecoration: "none" }}>
      <HeaderItemWrapper>
        <HeaderItemIcon src={isActive ? item.activeIcon : item.icon} alt={item.text} />
        <HeaderItemText $isActive={isActive}>{item.text}</HeaderItemText>
      </HeaderItemWrapper>
    </Link>
  )
}

export default HeaderItem
