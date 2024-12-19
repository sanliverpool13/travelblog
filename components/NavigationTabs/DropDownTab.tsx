"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface TabProps {
  title: string;
  to: string;
  isActive: boolean;
  mobile: boolean;
  onClose: () => void;
  isHomeOrGallery: boolean;
}

const DropDownTab: React.FC<TabProps> = ({
  to,
  title,
  isActive,
  mobile,
  onClose,
  isHomeOrGallery,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    setIsOpen((prev) => !prev); // Toggle dropdown
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close dropdown when link is clicked
  };

  return (
    <li
      className={`relative cursor-pointer ${mobile ? "mb-4" : "mr-4"} ${
        isActive ? "font-extrabold" : ""
      }`}
      ref={dropdownRef}
    >
      {/* Button - toggle dropdown */}
      <button
        onClick={handleToggle}
        className={`flex items-center gap-1.5 px-4 py-2 ${
          isActive
            ? isHomeOrGallery
              ? "font-extrabold text-bg-clr-footer"
              : "font-extrabold text-clr-trqse"
            : isHomeOrGallery
              ? "text-white"
              : "text-bg-clr-footer"
        } `}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Plant Based
        <FaChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 bg-white shadow-md rounded-md min-w-[160px] transition-opacity duration-200 opacity-100 visible top-full left-0">
          <div className="py-1 md:py-2">
            <Link
              href="/plant-based/recipes"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 "
              onClick={handleLinkClick}
            >
              Recipes
            </Link>
            <Link
              href="/plant-based/reviews"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 "
              onClick={handleLinkClick}
            >
              Reviews
            </Link>
          </div>
        </div>
      )}
    </li>
  );
};

export default DropDownTab;
