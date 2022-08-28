import React from "react";
import Logo from "../Logo/Logo";
import Tabs from "./Tabs";

import { FaBars } from "react-icons/fa";

import {
  LeftContainer,
  NavContainer,
  NavInnerContainer,
  NavMenuToggleButton,
  NavMenuToggleButtonContainer,
  RightContainer,
} from "./navbar.style";
import SocialLinks from "./SocialLinks";

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
        <RightContainer>
          <Tabs mobile={false} />
          <SocialLinks />
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
