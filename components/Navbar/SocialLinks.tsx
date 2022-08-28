import React from "react";
import { SocialLinksContainer, SocialLink } from "./socialinks.style";

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

interface Props {
  mobile?: boolean;
}

const SocialLinks: React.FC<Props> = ({ mobile }) => {
  return (
    <SocialLinksContainer mobile={mobile}>
      <SocialLink href="" mobile={mobile}>
        <FaInstagram />
      </SocialLink>
      <SocialLink href="" mobile={mobile}>
        <FaYoutube />
      </SocialLink>
      <SocialLink href="" mobile={mobile}>
        <FaTiktok />
      </SocialLink>
    </SocialLinksContainer>
  );
};

export default SocialLinks;
