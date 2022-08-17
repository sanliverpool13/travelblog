import styled from "styled-components";

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;

  & a {
    color: black;
    text-decoration: none;
    margin-right: 1rem;
  }

  & a:hover {
    color: grey;
    transition: color 2s ease-in;
  }

  & svg {
    font-size: 1.5rem;
  }
`;
