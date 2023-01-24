import React from "react";
import Image from "next/image";
import ViewFromCirquePeak from "../../public/images/HorViewCirquePeak.jpg";

import {
  BannerContainer,
  TextOverlayContainer,
  TextBlock,
  Count,
  Subject,
  TextOverlayInnerContainer,
} from "./style";

const Banner: React.FC = () => {
  return (
    <BannerContainer>
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
        <TextBlockComponent count="1" subject="NATIONAL PARKS" />
        <TextBlockComponent count="2" subject="PROVINCES VISITED" />
        <TextBlockComponent count="2" subject="COUNTRIES TRAVELED" />
        <TextBlockComponent count="2.5" subject="YEARS TOGETHER" />
      </TextOverlayInnerContainer>
    </TextOverlayContainer>
  );
};

interface BlockProps {
  count: string;
  subject: string;
}

const TextBlockComponent: React.FC<BlockProps> = ({ count, subject }) => {
  return (
    <TextBlock>
      <Count>{count}</Count>
      <Subject>{subject}</Subject>
    </TextBlock>
  );
};

export default Banner;
