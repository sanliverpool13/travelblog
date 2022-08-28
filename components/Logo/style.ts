import styled from "styled-components";

export const LogoContainer = styled.div`
  text-align: center;
  font-size: 3rem;
  font-style: bold;
  padding-left: 2rem;
  font-family: var(--logo-style) !important;
  display: flex;
  align-items: center;
  flex: ${(props) => (props.mobile ? "70%" : "none")};
  @media (max-width: 890px) {
    font-size: 2rem;
  }
`;
