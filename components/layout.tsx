import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { NavMenuContainer } from "./Navbar/navmenu.style";
import NavMenu from "./Navbar/NavMenu";
import PageLayout from "./pagelayout";

const Container = styled.div`
  padding-top: var(--height-navbar);
  min-height: 100vh;
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <Container>
      <Navbar handleMenuToggle={handleMenuToggle} />
      {menuOpen && (
        <NavMenuContainer>
          <NavMenu onClose={handleMenuClose} />
        </NavMenuContainer>
      )}
      <PageLayout>{children}</PageLayout>
      <Footer />
    </Container>
  );
};

export default Layout;
