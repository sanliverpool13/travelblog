import styled from "styled-components";

export const LandingContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  & div {
    text-align: center;
    margin-bottom: 1rem;
  }

  & h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;
