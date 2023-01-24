import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  position: relative;
  height: 180px;

  @media (max-width: 700px) {
    height: 400px;
  }
`;

export const ColorOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(158, 216, 219, 0.6);
  z-index: 100;
`;

export const TextOverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextOverlayInnerContainer = styled.div`
  width: 80%;
  max-width: var(--navbar-max-width);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    height: 100%;
    padding: 1rem 0;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fafafa;
`;

export const Count = styled.p`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 0.5rem;
  @media (max-width: 700px) {
    font-size: 24px;
  }
`;

export const Subject = styled.p`
  font-weight: bold;
  font-size: 16px;
`;
