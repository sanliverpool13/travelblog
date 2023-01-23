import React from "react";
import { FaTimes } from "react-icons/fa";
import { CloseButton } from "./mobilenavmenu.style";

interface Props {
  onClose: () => void;
}

const CloseMenuButton: React.FC<Props> = ({ onClose }) => {
  return (
    <CloseButton onClick={onClose}>
      <FaTimes />
    </CloseButton>
  );
};

export default CloseMenuButton;
