import React from "react";
import Logo from "../Logo/Logo";
import CloseMenuButton from "./CloseMenuButton";
import {
  MenuLinksTabsContainer,
  MenuLinksOuterContainer,
  MenuSocialLinksContainer,
  MobileNavMenuContainer,
  MobileNavMenuHeader,
  MobileLogoContainer,
} from "./mobilenavmenu.style";
import SocialLinks from "../SocialLinks/SocialLinks";
import Tabs from "../NavigationTabs/Tabs";

interface Props {
  onClose: () => void;
}

const MobileNavMenu: React.FC<Props> = ({ onClose }) => {
  return (
    <MobileNavMenuContainer>
      <MobileNavMenuHeader>
        <MobileLogoContainer>
          <Logo mobile={true} />
        </MobileLogoContainer>
        <CloseMenuButton onClose={onClose} />
      </MobileNavMenuHeader>
      <MenuLinksOuterContainer>
        <MenuLinksTabsContainer>
          <Tabs mobile={true} onClose={onClose} />
        </MenuLinksTabsContainer>
        <MenuSocialLinksContainer>
          <SocialLinks isMobile={true} isNavbar={false} />
        </MenuSocialLinksContainer>
      </MenuLinksOuterContainer>
    </MobileNavMenuContainer>
  );
};

export default MobileNavMenu;
