"use client";
import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import Tabs from "../NavigationTabs/Tabs";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

import SocialLinks from "../SocialLinks/SocialLinks";
import MobileNavMenu from "../MobileMenu/MobileNavMenu";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();
  const isHomeOrGallery =
    path === "/" || path === "/gallery" || path.endsWith("/gallery");

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {!menuOpen && (
        <div
          className={`absolute top-0 left-0 w-full h-[96px] flex items-center justify-center z-50 ${
            isHomeOrGallery ? "text-white" : "text-bg-clr-footer"
          }`}
        >
          <div className="w-[90%] max-w-[1300px] flex items-center">
            <div className="flex h-full basis-1/4 flex-grow">
              <Logo />
            </div>
            <div className="hidden lg:flex h-full basis-1/2 flex-grow justify-center">
              <Tabs
                mobile={false}
                onClose={handleMenuToggle}
                isHomeOrGallery={isHomeOrGallery}
              />
            </div>
            <div className="hidden lg:flex h-full basis-1/4 flex-grow justify-end">
              <SocialLinks isNavbar={true} />
            </div>
            <div className="flex lg:hidden h-full justify-end">
              <MenuToggleButton handleClick={handleMenuToggle} />
            </div>
          </div>
        </div>
      )}
      {menuOpen && <MobileNavMenu onClose={handleMenuToggle} />}
    </>
  );
};

interface MenuToggleButtonProps {
  handleClick: () => void;
}

const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({ handleClick }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleClick}
        className="cursor-pointer border-none text-xl bg-none"
      >
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
