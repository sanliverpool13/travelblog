import React from "react";
import Logo from "../Logo/Logo";
import CloseMenuButton from "./CloseMenuButton";
import {
  MenuLinksTabsContainer,
  MenuLinksOuterContainer,
  MenuSocialLinksContainer,
  NavMenuContainer,
  NavMenuHeader,
} from "./navmenu.style";
import SocialLinks from "./SocialLinks";
import Tabs from "./Tabs";

interface Props {
  onClose: () => void;
}

const NavMenu: React.FC<Props> = ({ onClose }) => {
  return (
    <NavMenuContainer>
      <NavMenuHeader>
        <Logo mobile={true} />
        <CloseMenuButton onClose={onClose} />
      </NavMenuHeader>
      <MenuLinksOuterContainer>
        <MenuLinksTabsContainer>
          <Tabs mobile={true} onClose={onClose} />
        </MenuLinksTabsContainer>
        <MenuSocialLinksContainer>
          <SocialLinks mobile={true} />
        </MenuSocialLinksContainer>
      </MenuLinksOuterContainer>
    </NavMenuContainer>
  );
};

export default NavMenu;
