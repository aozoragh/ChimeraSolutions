import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/assets/logo.png";
import { Fade as Hamburger } from "hamburger-react";
import {
  HeaderContainer,
  MenuView,
  HeaderTxt,
  HeaderView,
  StyledHeader,
} from "./header.style";
const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Link href="/" passHref>
          <Image src={Logo.src} alt="logo" width={55} height={61} />
        </Link>
        <MenuView>
          <Hamburger />
        </MenuView>

        <HeaderView>
          <Link href="/about" passHref>
            <HeaderTxt>About</HeaderTxt>
          </Link>
          <Link href="/products" passHref>
            <HeaderTxt>Products</HeaderTxt>
          </Link>
          <Link href="/team" passHref>
            <HeaderTxt>Team</HeaderTxt>
          </Link>
          <Link href="/projects" passHref>
            <HeaderTxt>Projects</HeaderTxt>
          </Link>
          <Link href="/contact" passHref>
            <HeaderTxt>Contact</HeaderTxt>
          </Link>
        </HeaderView>
      </HeaderContainer>
    </StyledHeader>
  );
};
export default Header;
