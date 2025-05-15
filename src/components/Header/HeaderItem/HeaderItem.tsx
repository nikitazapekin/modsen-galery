import { HeaderItemIcon, HeaderItemText, HeaderItemWrapper } from "./HeaderItem.styles"
import { HeaderItemProps } from "./HeaderItem.types"

const HeaderItem = ({ item }: HeaderItemProps) => {
  return (
    <HeaderItemWrapper>
      <HeaderItemIcon src={item.icon} />
      <HeaderItemText>{item.text}</HeaderItemText>
    </HeaderItemWrapper>
  )
}

export default HeaderItem
