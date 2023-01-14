import styled from "styled-components";

export const LandingContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  & h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const LandingLogoContainer = styled.div`
  margin: 2rem 0;
`;

export const LandingImageContainer = styled.div`
  width: 100%;
  height: 45vw;
  display: block;
  position: relative;
  margin-bottom: 1rem;

  @media (max-width: 700px) {
    width: var(--landing-section-mobile-width);
  }
`;

export const LandingImageCaption = styled.p`
  font-size: 0.8rem;
  color: grey;
`;

// About Us Grid
export const AboutUsGrid = styled.section`
  margin: 6rem 0;
  display: grid;
  width: var(--landing-section-widths);
  max-width: var(--navbar-max-width);
  grid-template-columns: 60% 40%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--landing-section-mobile-width);
    margin: 3rem 0;
  }
`;

export const AboutUsTextSection = styled.section`
  /* top | right | bottom | left */
  padding: 0 2rem 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  color: var(--bg-clr-footer);

  & p {
    line-height: var(--about-line-height);
    font-size: var(--about-font-size);
    overflow-y: hidden;
    flex-grow: 3;
    margin-bottom: 1rem;
  }

  @media (max-width: 1024px) {
    margin-bottom: 2rem;
    align-items: center;
    padding: 0;

    p {
      flex-grow: 0;
    }

    & p {
      width: 90%;
      overflow-y: none;
    }
  }

  @media (max-width: 700px) {
    & p {
      width: 100%;
    }
  }
`;

export const AboutUsHeader = styled.h4`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 400;
  font-family: var(--logo-style) !important;

  @media (max-width: 1024px) {
    flex-grow: 0;
  }
`;

export const AboutUsSubHeader = styled.h4`
  font-size: 2.3rem;
  margin-bottom: 1rem;
  font-style: bold;
  flex-grow: 1;
`;

export const AboutUsMoreButton = styled.button`
  background-color: #9ed8db;
  color: var(--bg-clr-footer);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 150px;
  height: 3rem;
  padding: 0.3rem 0.1rem;
  font-size: 1rem;
  border: none;
  transition: all 200ms ease-in;

  &:hover {
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.14);
  }

  @media (max-width: 1024px) {
    width: 160px;
    flex-grow: 0;
  }
`;

export const AboutUsImageSection = styled.section`
  height: 30vw;
  width: 100%;
  display: block;
  position: relative;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: var(--landing-section-widths);
    height: 70vw;
  }

  @media (max-width: 700px) {
    height: 100vw;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
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

///// Map //////
export const MapContainer = styled.section`
  /* margin-top: 6rem; */
  width: var(--landing-section-widths);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--max-width-content);

  /* & svg:hover {
    box-shadow: 0 4px 4px 2px rgba(0, 0, 0, 0.14);
  } */

  @media (max-width: 700px) {
    width: var(--landing-section-mobile-width);
  }
`;

export const MapHeader = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  color: var(--bg-clr-footer);
  margin-bottom: 1rem;
`;

export const MapDestinations = styled.ul`
  & li {
    font-size: 1rem;
    color: var(--bg-clr-footer);
  }
`;
