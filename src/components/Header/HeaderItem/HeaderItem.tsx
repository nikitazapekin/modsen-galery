import styled, { css } from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { HeaderItemIcon, HeaderItemText, HeaderItemWrapper } from "./HeaderItem.styles"
import { HeaderItemProps } from "./HeaderItem.types"
const HeaderItem = ({ item }: HeaderItemProps) => {
  const location = useLocation()
  const lastPathSegment = location.pathname.split("/").pop() || ""
  const isActive =
    (lastPathSegment === "" && item.text === "Category") ||
    (lastPathSegment === "images" && item.text === "Images") ||
    (lastPathSegment === "favourites" && item.text === "Favourites")
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
