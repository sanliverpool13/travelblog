import React from "react";
import Image from "next/image";
import ViewFromCirquePeak from "../../public/images/HorViewCirquePeak.jpg";

import {
  BannerContainer,
  ColorOverlay,
  TextOverlayContainer,
  TextBlock,
  Count,
  Subject,
  TextOverlayInnerContainer,
} from "./style";

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <ColorOverlay />
      <TextOverlay />
      <Image
        src={ViewFromCirquePeak.src}
        alt="us"
        layout="fill"
        objectFit="cover"
        priority
      />
    </BannerContainer>
  );
};

const TextOverlay: React.FC = () => {
  return (
    <TextOverlayContainer>
      <TextOverlayInnerContainer>
        <TextBlock>
          <Count>23</Count>
          <Subject>NATIONAL PARKS</Subject>
        </TextBlock>
        <TextBlock>
          <Count>1</Count>
          <Subject>STATES VISITED</Subject>
        </TextBlock>
        <TextBlock>
          <Count>2</Count>
          <Subject>COUNTRIES TRAVELED</Subject>
        </TextBlock>
        <TextBlock>
          <Count>2</Count>
          <Subject>YEARS TOGETHER</Subject>
        </TextBlock>
      </TextOverlayInnerContainer>
    </TextOverlayContainer>
  );
};

export default Banner;
