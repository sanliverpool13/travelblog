import styled from "styled-components";

export const NavMenuContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavMenuHeader = styled.div`
  width: 100%;
  display: flex;
  height: var(--height-navbar);
`;

export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: 20px;
  background: none;
  margin-right: 1rem;
`;

export const MenuLinksOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const MenuLinksTabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const MenuSocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
