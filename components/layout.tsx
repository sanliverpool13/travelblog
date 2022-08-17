import React from "react";
import styled from "styled-components";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import PageLayout from "./pagelayout";

const Container = styled.div`
  padding-top: var(--height-navbar);
  min-height: 100vh;
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <PageLayout>{children}</PageLayout>
      <Footer />
    </Container>
  );
};

export default Layout;
