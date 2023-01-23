import React from "react";
import Logo from "../Logo/Logo";
import Tabs from "../NavigationTabs/Tabs";

import { FaBars } from "react-icons/fa";

import {
  LeftContainer,
  MiddleContainer,
  NavContainer,
  NavInnerContainer,
  NavMenuToggleButton,
  NavMenuToggleButtonContainer,
  RightContainer,
} from "./navbar.style";
import SocialLinks from "../SocialLinks/SocialLinks";

interface Props {
  handleMenuToggle: () => void;
}

const Navbar: React.FC<Props> = ({ handleMenuToggle }) => {
  return (
    <NavContainer>
      <NavInnerContainer>
        <LeftContainer>
          <Logo />
        </LeftContainer>
        <MiddleContainer>
          <Tabs mobile={false} />
        </MiddleContainer>
        <RightContainer>
          <SocialLinks isNavbar={true} />
          <MenuToggleButton handleClick={handleMenuToggle} />
        </RightContainer>
      </NavInnerContainer>
    </NavContainer>
  );
};

interface MenuToggleButtonProps {
  handleClick: () => void;
}

const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({ handleClick }) => {
  return (
    <NavMenuToggleButtonContainer>
      <NavMenuToggleButton onClick={handleClick}>
        <FaBars />
      </NavMenuToggleButton>
    </NavMenuToggleButtonContainer>
  );
};

export default Navbar;
