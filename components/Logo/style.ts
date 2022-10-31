import styled from "styled-components";

export const LogoContainer = styled.div`
  text-align: center;
  font-size: ${(props) => (props.isNavbar ? "3.5rem" : "4rem")};
  color: ${(props) => (props.isNavbar ? "inherit" : "#31708e")};
  font-style: bold;
  font-family: var(--logo-style) !important;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 905px) {
    font-size: 2rem;
  }
`;
