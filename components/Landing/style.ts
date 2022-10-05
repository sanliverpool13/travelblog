import styled from "styled-components";

export const LandingContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;

  & h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const LandingImageContainer = styled.div`
  width: var(--landing-section-widths);
  height: 36vw;
  display: block;
  position: relative;
`;

export const LandingImageCaption = styled.p`
  font-size: 0.8rem;
  color: grey;
`;

// About Us Grid
export const AboutUsGrid = styled.section`
  margin-top: 6rem;
  display: grid;
  width: var(--landing-section-widths);
  grid-template-columns: 50% 50%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AboutUsTextSection = styled.section`
  /* top | right | bottom | left */
  padding: 0 2rem 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) and (min-width: 1024px) {
    max-height: 35vw;
  }

  @media (max-width: 1024px) {
    margin-bottom: 2rem;
  }

  & h4 {
    font-size: 2rem;
    margin-bottom: 2rem;
    flex-grow: 1;
  }

  & p {
    overflow-y: hidden;
    flex-grow: 3;
    margin-bottom: 1rem;
  }
`;

export const AboutUsImageSection = styled.section`
  height: 30vw;
  width: 100%;
  display: block;
  position: relative;

  @media (max-width: 1300px) and (min-width: 1024px) {
    height: 35vw;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 70vw;
  }
`;

export const AboutUsMoreButton = styled.button`
  background-color: var(--bg-clr-navbar);
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 200px;
  width: 50%;
  height: 30px;
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
  border: none;
  flex-grow: 1;
`;

// Featured Posts Section

export const FeaturedPosts = styled.section`
  width: var(--landing-section-widths);
  margin-top: 6rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 6rem;
`;

export const FeaturedPostsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-areas: "posts posts posts aside";
  box-sizing: border-box;
`;

/////////////////////

export const ParallaxLandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
`;

export const ParallaxPageOneContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-areas: "text .";
  height: 100%;
  width: 100%;
`;

export const TextContaienr = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  color: white;
  z-index: -10;
`;

export const TextPrgph = styled.p`
  background-color: black;
  padding: 1rem;
`;
