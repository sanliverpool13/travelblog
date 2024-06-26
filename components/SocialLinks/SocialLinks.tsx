import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface Props {
  isMobile?: boolean;
  isNavbar: boolean;
}

const SocialLinks: React.FC<Props> = ({ isMobile, isNavbar }) => {
  return (
    <div
      className={`flex items-center justify-evenly h-full ${
        isMobile || !isNavbar ? "flex" : "hidden"
      } md:flex`}
    >
      <SocialLinkComponent
        href="https://www.instagram.com/jeletadventures/"
        isMobile={isMobile}
        isNavbar={isNavbar}
        Icon={FaInstagram}
      />
      <SocialLinkComponent
        href="https://www.youtube.com/@JeletAdventures"
        isMobile={isMobile}
        isNavbar={isNavbar}
        Icon={FaYoutube}
      />
    </div>
  );
};

interface LinkProps {
  href: string;
  isMobile?: boolean;
  isNavbar?: boolean;
  Icon: IconType;
}

const SocialLinkComponent: React.FC<LinkProps> = ({
  href,
  isMobile,
  isNavbar,
  Icon,
}) => {
  return (
    <div className="w-10 flex justify-center items-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex justify-center items-center hover:text-teal-400 transition-colors duration-100`}
      >
        <Icon className="text-2xl" />
      </a>
    </div>
  );
};

export default SocialLinks;
