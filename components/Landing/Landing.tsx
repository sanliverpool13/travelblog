import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  AboutUsGrid,
  AboutUsHeader,
  AboutUsImageSection,
  AboutUsMoreButton,
  AboutUsSubHeader,
  AboutUsTextSection,
  LandingContainer,
  LandingImageCaption,
  LandingImageContainer,
  LandingSection,
} from "./style";

import LakeLouiseUs from "../../public/images/UsLouise.jpg";
import LakeLouiseUsBlue from "../../public/images/UsLakeLouiseBlue.jpg";

import Link from "next/link";
import Map from "../Map/Map";
import Banner from "../Banner/banner";

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <LandingSection>
        <LandingImageContainer>
          <Image
            src={LakeLouiseUs.src}
            alt="us"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </LandingImageContainer>
        <LandingImageCaption>
          Lake Louise in the evening, after a long day of hiking &nbsp;
          (September 2nd, 2022)
        </LandingImageCaption>
      </LandingSection>
      <LandingSection>
        <AboutUsGrid>
          <AboutUsTextSection>
            <AboutUsHeader>About Us</AboutUsHeader>
            <AboutUsSubHeader>We are Madison and Sanjar</AboutUsSubHeader>
            <p>
              We met while working at Starbucks in 2020. Our first trip together
              was Cancun, Mexico and we have acquired a passion for exploring
              new parts of the world together ever since. <br />
              <br />
              We are early risers, coffee drinkers, avid readers and love to run
              and hike.
            </p>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <AboutUsMoreButton>Our Story</AboutUsMoreButton>
            </Link>
          </AboutUsTextSection>
          <AboutUsImageSection>
            <Image
              src={LakeLouiseUsBlue.src}
              alt="Us in Lake Louise Portrait"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </AboutUsImageSection>
        </AboutUsGrid>
      </LandingSection>
      <LandingSection>
        <Banner />
        <Map />
      </LandingSection>
    </LandingContainer>
  );
};

export default Landing;
