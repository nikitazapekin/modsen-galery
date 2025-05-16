import {
  FooterItemCategory,
  FooterItemList,
  FooterItemTitle,
  FooterItemWrapper,
} from "./FooterItem.style"
import { FooterItemProps } from "./FooterItem.types"

const FooterItem = ({ item }: FooterItemProps) => {
  return (
    <FooterItemWrapper maxWidth={item.maxWidth}>
      <FooterItemTitle>{item.title}</FooterItemTitle>

      <FooterItemList>
        {item.btns.map((btn, index) => (
          <FooterItemCategory key={index}>
            <FooterItemCategory>{btn}</FooterItemCategory>
          </FooterItemCategory>
        ))}
      </FooterItemList>
    </FooterItemWrapper>
  )
}

export default FooterItem
