"use client";
import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
// import { FooterContainer } from "./style";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[var(--height-footer)] flex flex-col justify-center items-center p-2 bg-gray-800 text-gray-100">
      <p className="text-lg font-bold py-4">Connect With Us!</p>
      <SocialLinks isNavbar={false} />
      <span className="py-4">Designed & Built by Madison and Sanjar</span>
    </div>
  );
};

export default Footer;
