import Image from "next/image";
import React from "react";

import {
  AboutUsGrid,
  AboutUsImageSection,
  AboutUsMoreButton,
  AboutUsTextSection,
  FeaturedPosts,
  FeaturedPostsGrid,
  LandingContainer,
  LandingImageCaption,
  LandingImageContainer,
  SectionTitle,
} from "./style";

import LakeLouiseUs from "../../public/images/LakeLouiseSunny.jpg";
import LakeLouisePortrait from "../../public/images/LakeLouisePortrait.jpg";
import Logo from "../Logo/Logo";
import Post from "../Blog/FeaturedPost";
import { PostsContainer } from "../Blog/style";
import Aside from "../Aside/Aside";
import { useRecoilState } from "recoil";
import { blogPostsState } from "../../context/state";

const Landing: React.FC = () => {
  const [blogPosts, setBlogPosts] = useRecoilState(blogPostsState);

  const blogPostElements = blogPosts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  return (
    <LandingContainer>
      <Logo />
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
          <h4>About Us</h4>
          <p>
            We met while working at Starbucks together in 2020. We love
            exploring new places together. In the mornings you will find us in
            coffee shops or libraries, working away on our laptops. We enjoy
            long distance running and reading, and are always up for a hike or
            visiting a new library.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <AboutUsMoreButton>Read More ...</AboutUsMoreButton>
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

      <FeaturedPosts>
        <SectionTitle>Featured Posts</SectionTitle>
        <FeaturedPostsGrid>
          <PostsContainer landing={true}>{blogPostElements}</PostsContainer>
          <Aside />
        </FeaturedPostsGrid>
      </FeaturedPosts>
    </LandingContainer>
  );
};

export default Landing;
