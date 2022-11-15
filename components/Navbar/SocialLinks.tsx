import React from "react";
import {
  SocialLinksContainer,
  SocialLink,
  SocialLinkContainer,
} from "./socialinks.style";

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface Props {
  isMobile?: boolean;
  isNavbar: boolean;
}

const SocialLinks: React.FC<Props> = ({ isMobile, isNavbar }) => {
  return (
    <SocialLinksContainer isMobile={isMobile} isNavbar={isNavbar}>
      <SocialLinkComponent
        href="https://www.instagram.com/beyondustwo/"
        isMobile={isMobile}
        isNavbar={isNavbar}
        Icon={FaInstagram}
      />
      <SocialLinkComponent
        href="https://www.youtube.com/channel/UCn_pog_Wkk8CF-g9uDWVwXQ"
        isMobile={isMobile}
        isNavbar={isNavbar}
        Icon={FaYoutube}
      />
      <SocialLinkComponent
        href="https://www.tiktok.com/@thejeletsetters"
        isMobile={isMobile}
        isNavbar={isNavbar}
        Icon={FaTiktok}
      />
    </SocialLinksContainer>
  );
};

interface LinkProps {
  href: string;
  isMobile?: boolean;
  isNavbar?: boolean;
  Icon: IconType;
}

const SocialLinkComponent: React.FC<LinkProps> = ({
  href,
  isMobile,
  isNavbar,
  Icon,
}) => {
  return (
    <SocialLinkContainer>
      <SocialLink
        href={href}
        target="_blank"
        isMobile={isMobile}
        isNavbar={isNavbar}
      >
        <Icon />
      </SocialLink>
    </SocialLinkContainer>
  );
};

export default SocialLinks;
