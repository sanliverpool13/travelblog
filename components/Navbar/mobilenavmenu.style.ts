import styled from "styled-components";

export const MobileNavMenuContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  z-index: 1000;
  padding-top: 1rem;
`;

export const MobileNavMenuHeader = styled.div`
  width: 100%;
  display: flex;
  height: var(--height-navbar);
  padding: 0 2rem;
`;

export const MobileLogoContainer = styled.div`
  flex: 90%;
  height: 100%;
  display: flex;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: 2rem;
  background: none;
  flex: 10%;
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
