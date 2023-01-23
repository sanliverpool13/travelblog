import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import { FooterContainer } from "./style";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Connect With Us!</p>
      <SocialLinks isNavbar={false} />
      <span>Designed & Built by Madison and Sanjar</span>
    </FooterContainer>
  );
};

export default Footer;
