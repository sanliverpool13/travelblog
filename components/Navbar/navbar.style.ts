import styled from "styled-components";

export const NavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: var(--height-navbar);
  box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.14);
`;

export const NavInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const LeftContainer = styled.div`
  flex: 30%; // flex property sets how an item will grow or shrink to fit space available in its flex container
  display: flex;

  @media (max-width: 700px) {
    flex: 70%;
  }
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;

  @media (max-width: 700px) {
    flex: 30%;
    justify-content: flex-end;
  }
`;

//////////////////////////////////////////////////

export const NavMenuToggleButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavMenuToggleButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: 20px;
  background: none;
  /* width: 70px;
  height: 50px; */

  @media (min-width: 700px) {
    display: none;
  }
`;
