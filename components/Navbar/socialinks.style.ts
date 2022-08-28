import styled from "styled-components";

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 30%;

  @media (max-width: 700px) {
    display: ${(props) => (props.mobile ? "flex" : "none")};
  }
`;

export const SocialLink = styled.a`
  color: grey;
  text-decoration: none;
  margin-right: 1rem;

  & svg {
    font-size: 1.5rem;
  }

  &:hover {
    color: black;
    transition: color 200ms ease-in;
  }

  @media (max-width: 700px) {
    display: ${(props) => (props.mobile ? "flex" : "none")};
  }
`;
