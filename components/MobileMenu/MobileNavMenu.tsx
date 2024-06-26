import React from "react";
import Logo from "../Logo/Logo";
import CloseMenuButton from "./CloseMenuButton";
import SocialLinks from "../SocialLinks/SocialLinks";
import Tabs from "../NavigationTabs/Tabs";

interface Props {
  onClose: () => void;
}

const MobileNavMenu: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="absolute top-0 w-full h-full flex flex-col items-center bg-white z-50 pt-4">
      <div className="w-full flex h-[var(--height-navbar)] px-8">
        <div className="flex-grow h-full flex">
          <Logo mobile={true} />
        </div>
        <CloseMenuButton onClose={onClose} />
      </div>
      <div className="flex flex-col justify-center items-center w-full flex-1">
        <div className="flex flex-col w-full justify-center items-center mb-8">
          <Tabs mobile={true} onClose={onClose} isHomeOrGallery={false} />
        </div>
        <div className="flex justify-center items-center">
          <SocialLinks isMobile={true} isNavbar={false} />
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
