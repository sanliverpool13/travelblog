"use client";
import React from "react";
import Link from "next/link";
// import { TabsUl } from "./tabs.style";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import DropDownTab from "./DropDownTab";

const tabTypes = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Blog", to: "/blog" },
  { name: "Gallery", to: "/gallery" },
  { name: "Plant Based", to: "/plant-based" },
  { name: "Contact", to: "/contact" },
];

interface Props {
  mobile: boolean;
  onClose: () => void;
  isHomeOrGallery: boolean;
}

const Tabs: React.FC<Props> = ({ mobile, onClose, isHomeOrGallery }) => {
  const pathname = usePathname();

  const tabElements = tabTypes.map((tab, index) => {
    if (tab.name === "Plant Based") {
      return (
        <DropDownTab
          key={`${tab.name}-${index}`}
          title={tab.name}
          to={tab.to}
          isActive={pathname === tab.to}
          mobile={mobile}
          onClose={onClose}
          isHomeOrGallery={isHomeOrGallery}
        />
      );
    }

    return (
      <Tab
        key={`${tab.name}-${index}`}
        title={tab.name}
        to={tab.to}
        isActive={pathname === tab.to}
        mobile={mobile}
        onClose={onClose}
        isHomeOrGallery={isHomeOrGallery}
      />
    );
  });
  return (
    <ul
      className={`flex ${
        mobile ? "flex-col" : "flex-row"
      } items-center list-none h-full ${mobile ? "block lg:hidden" : ""}`}
    >
      {tabElements}
    </ul>
  );
};

interface TabProps {
  title: string;
  to: string;
  isActive: boolean;
  mobile: boolean;
  onClose: () => void;
  isHomeOrGallery: boolean;
}

const Tab: React.FC<TabProps> = ({
  to,
  title,
  isActive,
  mobile,
  onClose,
  isHomeOrGallery,
}) => {
  const handleOnClose = () => {
    if (mobile) {
      onClose();
    }
    return;
  };

  return (
    <li
      className={`cursor-pointer p-2 ${mobile ? "mb-4" : "mr-4"} ${
        isActive ? "font-extrabold" : ""
      }`}
    >
      <Link href={to} passHref legacyBehavior>
        <a
          className={` text-sm md:text-base leading-none ${
            isActive
              ? isHomeOrGallery
                ? "font-extrabold text-bg-clr-footer"
                : "font-extrabold text-clr-trqse"
              : isHomeOrGallery
                ? "text-white"
                : "text-bg-clr-footer"
          }`}
          onClick={handleOnClose}
        >
          {title}
          {isActive && (
            <motion.div
              className="border-b-2 border-current"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
          )}
        </a>
      </Link>
    </li>
  );
};

export default Tabs;
