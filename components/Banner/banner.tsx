import React from "react";
import Image from "next/image";
import ViewFromCirquePeak from "../../public/images/HorViewCirquePeak.jpg";

// import {
//   BannerContainer,
//   TextOverlayContainer,
//   TextBlock,
//   Count,
//   Subject,
//   TextOverlayInnerContainer,
// } from "./style";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-48 md:h-96">
      <TextOverlay />
      <Image
        src={ViewFromCirquePeak.src}
        alt="us"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

const TextOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center z-10">
      <div className="w-4/5 max-w-[var(--navbar-max-width)] flex justify-between items-center md:flex-col md:h-full md:py-4">
        <TextBlockComponent count="1" subject="NATIONAL PARKS" />
        <TextBlockComponent count="8" subject="STATES VISITED" />
        <TextBlockComponent count="2" subject="PROVINCES VISITED" />
        <TextBlockComponent count="5" subject="COUNTRIES TRAVELED" />
        <TextBlockComponent count="4" subject="YEARS TOGETHER" />
      </div>
    </div>
  );
};

interface BlockProps {
  count: string;
  subject: string;
}

const TextBlockComponent: React.FC<BlockProps> = ({ count, subject }) => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-100">
      <p className="font-bold text-3xl mb-2 md:text-2xl">{count}</p>
      <p className="font-bold text-base">{subject}</p>
    </div>
  );
};

export default Banner;
