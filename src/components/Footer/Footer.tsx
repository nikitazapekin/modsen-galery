import { Link } from "react-router-dom"
import { footerContent, networks } from "./consts"
import {
  Container,
  FooterContent,
  FooterCopyRight,
  FooterDescription,
  FooterDescriptionText,
  FooterNetwork,
  FooterNetworkImage,
  FooterNetworks,
  FooterWrapper,
  LogoImage,
} from "./Footer.styles"
import Logo from "@assets/logo/LogoFooter.svg"
import FooterItem from "./FooterItem/FooterItem"

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterDescription>
            <LogoImage src={Logo} icon="Logo" />
            <FooterDescriptionText>
              We have images that capture every mood and inspire every vision. From breathtaking
              landscapes to vibrant portraits.
            </FooterDescriptionText>
            <FooterNetworks>
              {networks.map((item) => (
                <Link to={"#"}>
                  <FooterNetwork background={item.background} border={item.border}>
                    <FooterNetworkImage src={item.icon} />
                  </FooterNetwork>
                </Link>
              ))}
            </FooterNetworks>
          </FooterDescription>
          {footerContent.map((item) => (
            <FooterItem key={item.id} item={item} />
          ))}
        </FooterContent>
        <FooterCopyRight>Modsen.gallery © 2000-2025, All Rights Reserved</FooterCopyRight>
      </Container>
    </FooterWrapper>
  )
}
export default Footer
