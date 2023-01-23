import styled from "styled-components";

export const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  @media (max-width: 700px) {
    display: ${(props) =>
      props.isMobile || !props.isNavbar ? "flex" : "none"};
  }
`;

export const SocialLinkContainer = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLink = styled.a`
  color: ${(props) =>
    props.isNavbar || props.isMobile ? "var(--bg-clr-footer)" : "#f7f9fb"};
  text-decoration: none;
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
