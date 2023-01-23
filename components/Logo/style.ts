import styled from "styled-components";

export const LogoContainer = styled.div`
  text-align: center;
  font-size: 3.5rem;
  font-style: bold;
  font-family: var(--logo-style) !important;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 905px) {
    font-size: 2.1rem;
  }

  @media (max-width: 1100px) and (min-width: 905px) {
    font-size: 2.6rem;
  }
`;
