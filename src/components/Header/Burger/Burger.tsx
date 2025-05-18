import { Link, useLocation } from "react-router-dom"
import { headerBtns } from "../consts"
import {
  BurgerButton,
  BurgerList,
  BurgerNetwork,
  BurgerNetworkImage,
  BurgerNetworks,
  BurgerOverlay,
  BurgerPreview,
  BurgerPreviewImage,
  BurgerWrapper,
} from "./Burger.style"
import BurgerLogo from "@assets/logo/BurgerLogo.svg"
import BurgerIcon from "@assets/icons/Burger.svg"
import BurgerItem from "./BurgerItem/BurgerItem"
import { networks } from "./consts"
import { BurgerProps } from "./Burger.types"

const Burger = ({ toggle, isOpen }: BurgerProps) => {
  return (
    <>
      {isOpen && <BurgerOverlay onClick={toggle} />}
      <BurgerWrapper $isOpen={isOpen}>
        <BurgerPreview>
          <BurgerButton onClick={toggle} src={BurgerIcon} alt={"Icon"} />
          <BurgerPreviewImage src={BurgerLogo} alt={"Logo"} />
        </BurgerPreview>
        <BurgerList>
          {headerBtns.map((item) => (
            <Link to={item.link} key={item.id} style={{ textDecoration: "none" }}>
              <BurgerItem item={item} />
            </Link>
          ))}
        </BurgerList>
        <BurgerNetworks>
          {networks.map((item) => (
            <BurgerNetwork key={item.id}>
              <BurgerNetworkImage src={item.icon} alt={"Network"} />
            </BurgerNetwork>
          ))}
        </BurgerNetworks>
      </BurgerWrapper>
    </>
  )
}

export default Burger
