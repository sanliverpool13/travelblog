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
  MapContainer,
  MapDestinations,
  MapHeader,
} from "./style";

import LakeLouiseUs from "../../public/images/UsLouise.jpg";
import LakeLouisePortrait from "../../public/images/LakeLouisePortrait.jpg";
import Post from "../Blog/FeaturedPost";
import { useRecoilState } from "recoil";
import { blogPostsState } from "../../context/state";
import Link from "next/link";
import Map from "../Map/Map";
import ReactTooltip from "react-tooltip";

const Landing: React.FC = () => {
  const [blogPosts, setBlogPosts] = useRecoilState(blogPostsState);

  const blogPostElements = blogPosts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  const [markerTitle, setMarkerTitle] = useState("");

  const handleScroll = (e: Event) => {};

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LandingContainer>
      <LandingImageContainer onScroll={handleScroll}>
        <Image
          src={LakeLouiseUs.src}
          alt="us"
          layout="fill"
          objectFit="cover"
        />
      </LandingImageContainer>
      <LandingImageCaption>
        Lake Louise in the evening, after a long day of hiking &nbsp; (September
        2nd, 2022)
      </LandingImageCaption>
      <AboutUsGrid>
        <AboutUsTextSection>
          <AboutUsHeader>About Us</AboutUsHeader>
          <AboutUsSubHeader>We are Madison and Sanjar</AboutUsSubHeader>
          <p>
            We met while working at Starbucks in 2020. Our first trip together
            was Cancun, Mexico and we have acquired a passion for exploring new
            parts of the world together ever since. <br />
            <br />
            We are early risers, coffee drinkers, avid readers and love to run
            and hike.
          </p>
          <Link href="/about">
            <AboutUsMoreButton>Our Story</AboutUsMoreButton>
          </Link>
        </AboutUsTextSection>
        <AboutUsImageSection>
          <Image
            src={LakeLouisePortrait.src}
            alt="Us in Lake Louise Portrait"
            layout="fill"
            objectFit="cover"
          />
        </AboutUsImageSection>
      </AboutUsGrid>
      <MapContainer>
        <MapHeader>Where We Have Been So Far!</MapHeader>

        <Map setMarkerTitle={setMarkerTitle} />
        <ReactTooltip>{markerTitle}</ReactTooltip>
      </MapContainer>

      {/* Will Add After First Release and a first blog */}
      {/* <FeaturedPosts>
        <SectionTitle>Featured Posts</SectionTitle>
        <FeaturedPostsGrid>
          <PostsContainer landing={true}>{blogPostElements}</PostsContainer>
          <Aside />
        </FeaturedPostsGrid>
      </FeaturedPosts> */}
    </LandingContainer>
  );
};

export default Landing;
