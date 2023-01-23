import styled from "styled-components";

export const NavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--height-navbar);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: #f7f9fb;
  color: var(--bg-clr-footer);
`;

export const NavInnerContainer = styled.div`
  width: var(--navbar-content-width);
  max-width: var(--navbar-max-width);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftContainer = styled.div`
  // flex property sets how an item will grow or shrink to fit space available in its flex container
  flex: 35%;
  display: flex;
  height: 100%;

  @media (max-width: 700px) {
    flex: 70%;
  }
`;

export const MiddleContainer = styled.div`
  flex: 30%;
  display: flex;
  height: 100%;
  justify-content: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  flex: 35%;
  display: flex;
  height: 100%;
  justify-content: flex-end;
`;

//////////////////////////////////////////////////

export const NavMenuToggleButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 1rem; */

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
