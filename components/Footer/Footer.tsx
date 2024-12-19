"use client";
import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
// import { FooterContainer } from "./style";

const Footer: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-2 pb-12 pt-10  h-[142px]">
      <SocialLinks isNavbar={false} />
      <span className="py-4">Designed & Built by Madison and Sanjar</span>
    </div>
  );
};

export default Footer;
