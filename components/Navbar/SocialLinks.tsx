import React from "react";
import { SocialLinksContainer, SocialLink } from "./socialinks.style";

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

interface Props {
  mobile?: boolean;
}

const SocialLinks: React.FC<Props> = ({ mobile }) => {
  return (
    <SocialLinksContainer mobile={mobile}>
      <SocialLink
        href="https://www.instagram.com/thejeletsetters/"
        target="_blank"
        mobile={mobile}
      >
        <FaInstagram />
      </SocialLink>
      <SocialLink
        href="https://www.youtube.com/channel/UCn_pog_Wkk8CF-g9uDWVwXQ"
        target="_blank"
        mobile={mobile}
      >
        <FaYoutube />
      </SocialLink>
      <SocialLink
        href="https://www.tiktok.com/@thejeletsetters"
        target="_blank"
        mobile={mobile}
      >
        <FaTiktok />
      </SocialLink>
    </SocialLinksContainer>
  );
};

export default SocialLinks;
