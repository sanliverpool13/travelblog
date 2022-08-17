import React from "react";
import { FaInstagram, FaYoutube, FaTiktok, FaMedium } from "react-icons/fa";
import { LinksContainer } from "./style";

const Links: React.FC = () => {
  return (
    <LinksContainer>
      <a href="">
        <FaInstagram />
      </a>
      <a href="">
        <FaYoutube />
      </a>
      <a href="">
        <FaTiktok />
      </a>
      <a href="">
        <FaMedium />
      </a>
    </LinksContainer>
  );
};

export default Links;
