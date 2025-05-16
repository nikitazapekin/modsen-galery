import { Container, HeaderList, HeaderNav, HeaderWrapper, LogoImage } from "./Header.styles"
import Logo from "@assets/logo/Logo.svg"
import { headerBtns } from "./consts"
import HeaderItem from "./HeaderItem/HeaderItem"
const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <LogoImage src={Logo} icon="Logo" />
        <HeaderNav>
          <HeaderList>
            {headerBtns.map((item) => (
              <HeaderItem key={item.id} item={item} />
            ))}
          </HeaderList>
        </HeaderNav>
      </Container>
    </HeaderWrapper>
  )
}
export default Header
