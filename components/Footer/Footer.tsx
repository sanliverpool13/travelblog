import React from "react";
import SocialLinks from "../Navbar/SocialLinks";
import { FooterContainer } from "./style";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Connect With Us!</p>
      <SocialLinks isNavbar={false} />
      <span>Copyright &copy; Thejeletsetters - All Rights Reserved.</span>
    </FooterContainer>
  );
};

export default Footer;
