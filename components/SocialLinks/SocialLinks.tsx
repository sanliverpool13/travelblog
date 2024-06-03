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
        href="https://www.instagram.com/madisonandsanjar/"
        isMobile={isMobile}
        isNavbar={isNavbar}
        Icon={FaInstagram}
      />
      <SocialLinkComponent
        href="https://www.youtube.com/@MadisonandSanjar"
        isMobile={isMobile}
        isNavbar={isNavbar}
        Icon={FaYoutube}
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
