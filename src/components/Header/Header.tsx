import {
  BurgerIconImage,
  Container,
  HeaderList,
  HeaderNav,
  HeaderWrapper,
  LogoImg,
  LogoPicture,
  LogoSourse,
} from "./Header.styles"
import Logo from "@assets/logo/Logo.svg"
import { headerBtns } from "./consts"
import HeaderItem from "./HeaderItem/HeaderItem"
import LogoHeaderSmall from "@assets/logo/LogoHeaderSmall.svg"
import Burger from "./Burger/Burger"
import BurgerIcon from "@assets/icons/Burger.svg"
import useBurger from "@/hooks/useBurger"
const Header = () => {
  const { isOpen, toggle } = useBurger(false)
  return (
    <>
      <HeaderWrapper>
        <Container>
          <LogoPicture>
            <LogoSourse srcSet={LogoHeaderSmall} media="(max-width: 768px)" />
            <LogoImg src={Logo} alt="Logo" />
          </LogoPicture>
          <HeaderNav>
            <HeaderList>
              {headerBtns.map((item) => (
                <HeaderItem key={item.id} item={item} />
              ))}
            </HeaderList>
            <BurgerIconImage onClick={toggle} src={BurgerIcon} alt={"Icon"} />
          </HeaderNav>
        </Container>
      </HeaderWrapper>
      <Burger toggle={toggle} isOpen={isOpen} />
    </>
  )
}
export default Header
