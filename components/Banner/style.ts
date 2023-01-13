import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  position: relative;
  height: 180px;
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
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Count = styled.p`
  font-weight: bold;
  color: white;
  font-size: 30px;
`;

export const Subject = styled.p`
  font-weight: bold;
  color: white;
  font-size: 24px;
`;
