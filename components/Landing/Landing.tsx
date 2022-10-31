import Image from "next/image";
import React from "react";

import {
  AboutUsGrid,
  AboutUsHeader,
  AboutUsImageSection,
  AboutUsMoreButton,
  AboutUsSubHeader,
  AboutUsTextSection,
  FeaturedPosts,
  FeaturedPostsGrid,
  LandingContainer,
  LandingImageCaption,
  LandingImageContainer,
  LandingLogoContainer,
  SectionTitle,
} from "./style";

import LakeLouiseUs from "../../public/images/UsLouise.jpg";
import LakeLouisePortrait from "../../public/images/LakeLouisePortrait.jpg";
import BowLake from "../../public/images/HorViewCirquePeak.jpg";
import Logo from "../Logo/Logo";
import Post from "../Blog/FeaturedPost";
import { PostsContainer } from "../Blog/style";
import Aside from "../Aside/Aside";
import { useRecoilState } from "recoil";
import { blogPostsState } from "../../context/state";
import Link from "next/link";

const Landing: React.FC = () => {
  const [blogPosts, setBlogPosts] = useRecoilState(blogPostsState);

  const blogPostElements = blogPosts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  return (
    <LandingContainer>
      <LandingImageContainer>
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
            was Mexico Cancun and we have acquired a passion for exploring new
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
