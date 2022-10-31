import styled from "styled-components";

export const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 700px) {
    display: ${(props) => (props.mobile ? "flex" : "none")};
  }
`;

export const SocialLink = styled.a`
  color: ${(props) => (props.isNavbar ? "var(--bg-clr-footer)" : "#f7f9fb")};
  text-decoration: none;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    font-size: 1.5rem;
  }

  &:hover {
    color: #9ed8db;
    transition: color 100ms ease-in;
  }
`;
