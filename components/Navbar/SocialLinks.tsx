import React from "react";
import { SocialLinksContainer, SocialLink } from "./socialinks.style";

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

interface Props {
  mobile?: boolean;
  isNavbar: boolean;
}

const SocialLinks: React.FC<Props> = ({ mobile, isNavbar }) => {
  console.log(`is navbar ${isNavbar}`);
  return (
    <SocialLinksContainer mobile={mobile}>
      <SocialLink
        href="https://www.instagram.com/thejeletsetters/"
        target="_blank"
        mobile={mobile}
        isNavbar={isNavbar}
      >
        <FaInstagram />
      </SocialLink>
      <SocialLink
        href="https://www.youtube.com/channel/UCn_pog_Wkk8CF-g9uDWVwXQ"
        target="_blank"
        mobile={mobile}
        isNavbar={isNavbar}
      >
        <FaYoutube />
      </SocialLink>
      <SocialLink
        href="https://www.tiktok.com/@thejeletsetters"
        target="_blank"
        mobile={mobile}
        isNavbar={isNavbar}
      >
        <FaTiktok />
      </SocialLink>
    </SocialLinksContainer>
  );
};

export default SocialLinks;
