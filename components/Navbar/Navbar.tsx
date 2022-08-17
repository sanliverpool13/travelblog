import React from "react";
import Logo from "../Logo/Logo";
import Links from "../SocialLinks/Links";
import Tabs from "../Tabs/Tabs";

import { NavContainer } from "./navbar.style";

const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <Logo />
      <Tabs />
      <Links />
    </NavContainer>
  );
};

export default Navbar;
