import React, { useRef, useEffect } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  LandingContainer,
  ParallaxLandingContainer,
  ParallaxPageOneContainer,
  TextContaienr,
  TextPrgph,
} from "./style";
import together from "../../public/images/Together.jpg";
import forestinbg from "../../public/images/ForestInBg.jpg";
import bowlakepose from "../../public/images/BowLakemountainsPose.jpg";
import Navbar from "../Navbar/Navbar";
console.log(together);

const ParallaxLanding: React.FC = () => {
  const ref = useRef();

  const handleScroll = () => {
    console.log("scrolled");
    console.log(ref.current);
  };

  useEffect(() => {
    if (!ref.current) return;
    console.log(ref.current);
  });

  return (
    <ParallaxLandingContainer
      style={{ backgroundImage: `url(${together.src})` }}
    >
      <Parallax pages={2} ref={ref}>
        <ParallaxLayer
          speed={0}
          style={{ zIndex: -10 }}
          // factor={2}
        >
          <ParallaxPageOneContainer>
            <TextContaienr>
              <TextPrgph>
                Cirque Peak, Bow River Valley, Banff National Park.
              </TextPrgph>
            </TextContaienr>
          </ParallaxPageOneContainer>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            display: "flex",
            justifyContent: `center`,
            alignItems: "center",
            color: "black",
            zIndex: "100",
            backgroundColor: "white",
          }}
        >
          Second Page
        </ParallaxLayer>
      </Parallax>
    </ParallaxLandingContainer>
  );
};

export default ParallaxLanding;
