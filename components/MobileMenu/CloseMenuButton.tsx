import React from "react";
import { FaTimes } from "react-icons/fa";
// import { CloseButton } from "./mobilenavmenu.style";

interface Props {
  onClose: () => void;
}

const CloseMenuButton: React.FC<Props> = ({ onClose }) => {
  return (
    // <CloseButton onClick={onClose}>
    //   <FaTimes />
    // </CloseButton>
    <button
      className="cursor-pointer border-none text-2xl bg-none flex-shrink-0"
      onClick={onClose}
    >
      <FaTimes />
    </button>
  );
};

export default CloseMenuButton;
