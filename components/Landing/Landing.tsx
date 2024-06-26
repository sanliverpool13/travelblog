"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

import LakeLouiseUs from "../../public/images/UsLouise.jpg";
import AboutSection from "./AboutSection";
const DynamicMap = dynamic(() => import("../Map/Map"), {
  ssr: false,
});

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-64 items-center w-full relative">
      <section className="w-full flex flex-col gap-y-4 justify-center items-center relative">
        <div className="relative w-full md:h-[70vw] lg:h-[60vw] h-[90vh]">
          <Image
            src={LakeLouiseUs.src}
            alt="us"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-sm text-gray-500 text-center w-[90%] max-w-[1300px]">
          Lake Louise in the evening, after a long day of hiking &nbsp;
          (September 2nd, 2022)
        </p>
      </section>
      <AboutSection />
      {/* <Banner /> */}
      <DynamicMap />
    </div>
  );
};

export default Landing;
